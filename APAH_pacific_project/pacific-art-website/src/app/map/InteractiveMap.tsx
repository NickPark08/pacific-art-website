"use client";

import React, { useEffect, useState, useRef } from 'react';
// Don't import react-leaflet at module scope to avoid server-side evaluation.
// We'll dynamically import it on the client at runtime.
import objectDetails, { objects, themeDetails } from '@/lib/objectData';
import Link from 'next/link';

// We'll import Leaflet dynamically inside the effect to avoid SSR issues.

// We'll fit bounds imperatively when the map instance is created.

export default function InteractiveMap() {
  const [mounted, setMounted] = useState(false);
  const [mapKey, setMapKey] = useState<string | null>(null);
  useEffect(() => {
    // Delay one tick and create a unique key so Leaflet doesn't try to initialize
    // the same container twice during React StrictMode mount/unmount cycles.
    const id = setTimeout(() => {
      setMapKey(String(Date.now()) + '-' + Math.random().toString(36).slice(2));
      setMounted(true);
    }, 0);
    return () => clearTimeout(id);
  }, []);

  const markers = objects
    .filter((o) => (o as any).coords)
    .map((o) => ({
      id: o.id,
      title: o.title,
      culture: o.culture,
      coords: (o as any).coords,
      overview: (o as any).overview,
      image: (o as any).images?.[0] ?? null,
      themeId: (o as any).themeId ?? null,
      icon: (o as any).icon ?? null,
    }));

  const markerCoords = markers.map((m) => [m.coords.lat, m.coords.lng] as [number, number]);

  // default center if no markers
  const center: [number, number] = markerCoords.length ? markerCoords[0] : [0, 0];

  const themeColors: Record<string, { color: string; fill: string }> = {
    '1': { color: '#dc2626', fill: '#ef4444' }, // red
    '2': { color: '#0284c7', fill: '#06b6d4' }, // blue
    '3': { color: '#b45309', fill: '#f59e0b' }, // amber
    '4': { color: '#6d28d9', fill: '#7c3aed' }, // purple
  };

  const containerId = mapKey ? `pacific-map-${mapKey}` : undefined;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any | null>(null);

  // Imperatively create a Leaflet map to avoid react-leaflet lifecycle double-init issues
  useEffect(() => {
    let cancelled = false;
    if (!mapKey || typeof window === 'undefined') return;

    (async () => {
      const leaflet = await import('leaflet');
      const Llib = leaflet as any;
      try {
        // remove any existing container with this id
        if (containerId) {
          const existing = document.getElementById(containerId);
          if (existing) existing.remove();
        }

        if (cancelled) return;
        const container = document.createElement('div');
        container.id = containerId as string;
        container.style.width = '100%';
        container.style.height = '100%';
        // ensure wrapper is available
        if (!wrapperRef.current) return;
        // clear wrapper then append
        wrapperRef.current.innerHTML = '';
        wrapperRef.current.appendChild(container);

        const map = Llib.map(container.id, { scrollWheelZoom: true });
        mapRef.current = map;

        Llib.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Map theme ids to small marker icons (emoji or simple SVG). You can replace these strings
        // with data-URI SVGs if you want sharper icons.
        const iconForTheme: Record<string, string> = {
          '1': '🏺', // Ceremonial (vase)
          '2': '🧭', // Navigation (compass)
          '3': '🧶', // Textiles (yarn)
          '4': '🗿', // Sculpting (moai)
        };

        const markerLayers: any[] = [];
        const latlngs: any[] = [];
        markers.forEach((m) => {
          try {
            const latlng = [m.coords.lat, m.coords.lng];
            latlngs.push(latlng as any);

            const emoji = m.icon ?? ((m.themeId && iconForTheme[m.themeId]) ? iconForTheme[m.themeId] : '📍');
            const html = `<div style="display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:16px;background:white;border:1px solid rgba(0,0,0,0.08);font-size:18px;">${emoji}</div>`;
            const icon = Llib.divIcon({ html, className: '', iconSize: [28, 28], iconAnchor: [14, 14] });

            const marker = Llib.marker(latlng, { icon }).addTo(map as any);

            let popupHtml = `<div style="max-width:220px">`;
            if (m.image) popupHtml += `<img src='${m.image}' alt='${m.title}' style='width:100%;height:96px;object-fit:cover;margin-bottom:8px;border-radius:6px'/>`;
            popupHtml += `<h3 style='font-weight:600;margin:0 0 4px'>${m.title}</h3>`;
            popupHtml += `<div style='font-size:12px;color:#555;margin-bottom:6px'>${m.culture}</div>`;
            popupHtml += `<div style='font-size:13px;color:#333;margin-bottom:6px'>${m.overview}</div>`;
            popupHtml += `<a href="/objects/${m.id}" style='color:#0066cc;text-decoration:underline;font-size:13px'>View object</a>`;
            popupHtml += `</div>`;

            marker.bindPopup(popupHtml);
            marker.bindTooltip(m.title, { permanent: false, direction: 'top', offset: [0, -10] });
            markerLayers.push(marker);
          } catch (e) {
            // ignore marker errors
          }
        });

        // Show tooltips only when zoomed in beyond a threshold
        const zoomThreshold = 5;
        const updateTooltips = () => {
          try {
            const z = map.getZoom();
            markerLayers.forEach((c) => {
              if (!c) return;
              if (z >= zoomThreshold) {
                try { c.openTooltip(); } catch (e) {}
              } else {
                try { c.closeTooltip(); } catch (e) {}
              }
            });
          } catch (e) {
            // ignore
          }
        };

        // initial tooltip state
        updateTooltips();
        map.on('zoomend', updateTooltips);

        if (latlngs.length) {
          const bounds = Llib.latLngBounds(latlngs as any);
          map.fitBounds(bounds, { padding: [50, 50] });
        } else {
          map.setView([0,0], 2);
        }

        // ensure we remove the zoom handler when map is removed
        // (map removal is handled in the effect cleanup)
      } catch (e) {
        // swallow
        console.error('[InteractiveMap] leaflet init error', e);
      }
    })();

    return () => {
      cancelled = true;
      try {
        if (mapRef.current && typeof mapRef.current.remove === 'function') {
          mapRef.current.remove();
        }
      } catch (e) {
        // ignore
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapKey]);

  if (!mounted || !mapKey) {
    return <div className="w-full h-96 rounded-lg overflow-hidden" ref={wrapperRef} />;
  }

  return <div ref={wrapperRef} className="w-full h-96 rounded-lg overflow-hidden" />;

}
