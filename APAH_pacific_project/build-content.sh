#!/bin/bash
# Build script for MonoGame content

export PATH="$PATH:/Users/nicholaspark/.dotnet/tools"

echo "Building MonoGame content..."
echo ""
echo "If this fails, please use the MonoGame Pipeline Tool GUI:"
echo "  mgcb-editor Content/Content.mgcb"
echo ""

mgcb Content/Content.mgcb /platform:DesktopGL \
  /reference:bin/Debug/net8.0/MonoGame.Framework.dll \
  /reference:/Users/nicholaspark/.dotnet/tools/.store/dotnet-mgcb/3.8.4.1/dotnet-mgcb/3.8.4.1/tools/net8.0/any/MonoGame.Framework.Content.Pipeline.dll \
  /outputDir:bin/Debug/net8.0/Content

if [ $? -eq 0 ]; then
    echo ""
    echo "Content built successfully!"
    echo "You can now run: dotnet run"
else
    echo ""
    echo "Build failed. Please use the GUI tool instead:"
    echo "  mgcb-editor Content/Content.mgcb"
fi

