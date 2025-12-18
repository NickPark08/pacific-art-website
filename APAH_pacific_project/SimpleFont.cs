using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using System;

namespace APAH_Pacific_Artworks
{
    /// <summary>
    /// A simple font implementation that renders text using basic shapes.
    /// This is a fallback for when SpriteFont content files aren't available.
    /// </summary>
    public class SimpleFont
    {
        private GraphicsDevice _graphicsDevice;
        private Texture2D _pixel;
        private int _charWidth;
        private int _charHeight;
        private int _lineHeight;

        public SimpleFont(GraphicsDevice graphicsDevice, int fontSize)
        {
            _graphicsDevice = graphicsDevice;
            _charWidth = fontSize / 2;
            _charHeight = fontSize;
            _lineHeight = fontSize + 4;
            
            _pixel = new Texture2D(graphicsDevice, 1, 1);
            _pixel.SetData(new[] { Color.White });
        }

        public Vector2 MeasureString(string text)
        {
            if (string.IsNullOrEmpty(text))
                return Vector2.Zero;
            
            string[] lines = text.Split('\n');
            float maxWidth = 0;
            foreach (var line in lines)
            {
                float width = line.Length * _charWidth;
                if (width > maxWidth)
                    maxWidth = width;
            }
            
            return new Vector2(maxWidth, lines.Length * _lineHeight);
        }

        public void DrawString(SpriteBatch spriteBatch, string text, Vector2 position, Color color)
        {
            if (string.IsNullOrEmpty(text))
                return;
            
            string[] lines = text.Split('\n');
            float y = position.Y;
            
            foreach (var line in lines)
            {
                DrawLine(spriteBatch, line, new Vector2(position.X, y), color);
                y += _lineHeight;
            }
        }

        private void DrawLine(SpriteBatch spriteBatch, string line, Vector2 position, Color color)
        {
            float x = position.X;
            foreach (char c in line)
            {
                if (c != ' ')
                {
                    // Draw a simple rectangle for each character
                    Rectangle destRect = new Rectangle((int)x, (int)position.Y, _charWidth - 2, _charHeight);
                    spriteBatch.Draw(_pixel, destRect, color);
                }
                x += _charWidth;
            }
        }
    }
}

