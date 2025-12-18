#!/bin/bash
# Mac-specific content build script for MonoGame

set -e

export PATH="$PATH:/Users/nicholaspark/.dotnet/tools:/usr/local/share/dotnet"

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo "Building MonoGame content for Mac..."
echo ""

# Find MonoGame assemblies
MONOGAME_FRAMEWORK=$(find ~/.nuget/packages -name "MonoGame.Framework.dll" -path "*/monogame.framework.desktopgl/*" | head -1)
MGCB_TOOL_DIR="/Users/nicholaspark/.dotnet/tools/.store/dotnet-mgcb/3.8.4.1/dotnet-mgcb/3.8.4.1/tools/net8.0/any"
CONTENT_PIPELINE="$MGCB_TOOL_DIR/MonoGame.Framework.Content.Pipeline.dll"

if [ ! -f "$MONOGAME_FRAMEWORK" ]; then
    echo "Error: Could not find MonoGame.Framework.dll"
    echo "Please run: dotnet restore"
    exit 1
fi

if [ ! -f "$CONTENT_PIPELINE" ]; then
    echo "Error: Could not find MonoGame Content Pipeline DLL"
    echo "Please install: dotnet tool install --global dotnet-mgcb"
    exit 1
fi

# Create output directory
mkdir -p bin/Debug/net8.0/Content

echo "Using MonoGame Framework: $MONOGAME_FRAMEWORK"
echo "Using Content Pipeline: $CONTENT_PIPELINE"
echo ""

# Try building with mgcb
echo "Attempting to build content..."
mgcb Content/Content.mgcb \
    /platform:DesktopGL \
    /reference:"$MONOGAME_FRAMEWORK" \
    /reference:"$CONTENT_PIPELINE" \
    /outputDir:bin/Debug/net8.0/Content \
    /workingDir:Content || {
    
    echo ""
    echo "Command-line build failed. Trying GUI approach..."
    echo ""
    echo "Please use the MonoGame Pipeline Tool GUI:"
    echo "  1. Run: mgcb-editor Content/Content.mgcb"
    echo "  2. In the GUI, click Build -> Build (or press F6)"
    echo "  3. Make sure output directory is set to: bin/Debug/net8.0/Content"
    echo ""
    echo "Alternatively, you can try building manually with:"
    echo "  mgcb-editor Content/Content.mgcb"
    exit 1
}

echo ""
echo "Content built successfully!"
echo "Output directory: bin/Debug/net8.0/Content"

