# APAH Pacific Artworks Viewer

A MonoGame-based desktop application for viewing and exploring information about Pacific artworks. This application provides a clean, website-like interface for browsing detailed information about various Pacific Island artworks, including their historical context, cultural significance, and artistic details.

## Features

- **Interactive Artwork Browser**: Navigate through a collection of Pacific artworks
- **Detailed Information Display**: View comprehensive details about each artwork including:
  - Basic information (artist, culture, date, medium, location)
  - Detailed descriptions
  - Historical context
  - Cultural significance
  - Tags and categories
- **Clean UI**: Website-like interface with sidebar navigation and scrollable content
- **Keyboard Navigation**: Easy navigation using arrow keys

## Sample Artworks Included

The application includes information about:
- Moai (Easter Island Statues)
- Tapa Cloth (Ngatu) from Tonga
- Hawaiian Feather Cloak ('Ahu'ula)
- Aboriginal Rock Art - Wandjina Figures
- Maori Meeting House (Wharenui)
- Sepik River Ancestor Figure

## Requirements

- .NET 6.0 SDK or later
- MonoGame 3.8.1 or later
- MonoGame Content Pipeline Builder (included via NuGet)

## Setup Instructions

### Step 1: Install .NET SDK

**On macOS:**
1. Download the .NET SDK installer from: https://dotnet.microsoft.com/download/dotnet/8.0
2. Choose the macOS installer (either Intel or Apple Silicon depending on your Mac)
3. Run the installer and follow the prompts
4. **Important for Mac:** After installation, you may need to add dotnet to your PATH. Add this to your `~/.zprofile`:
   ```bash
   export PATH="/usr/local/share/dotnet:$PATH"
   ```
   Then restart your terminal or run: `source ~/.zprofile`
5. Verify installation by opening Terminal and running:
   ```bash
   dotnet --version
   ```
   You should see a version number like `8.0.x` or higher.

**Alternative (if you have Homebrew):**
```bash
brew install --cask dotnet-sdk
```

### Step 2: Install MonoGame Content Pipeline Builder

The MonoGame Content Pipeline Builder is needed to build the font files:

**On macOS - Install via dotnet tools:**
```bash
# Add dotnet tools to PATH (add to ~/.zprofile if not already there)
export PATH="$PATH:$HOME/.dotnet/tools"

# Install the MonoGame Content Pipeline tools
dotnet tool install --global dotnet-mgcb
dotnet tool install --global dotnet-mgcb-editor
```

**Note for Mac users:** The command-line `mgcb` tool has known issues with spritefont files on Mac. The GUI tool (`mgcb-editor`) is recommended instead.

### Step 3: Restore and Build

Once .NET SDK is installed:

```bash
cd APAH_pacific_project
dotnet restore
dotnet build
```

### Step 4: Build Content (Optional but Recommended!)

**For best results, build the content files:**
- On Mac, use the GUI tool:
  ```bash
  export PATH="$PATH:$HOME/.dotnet/tools"
  mgcb-editor Content/Content.mgcb
  ```
  Then in the GUI, click **Build** → **Build** (or press F6)
  Make sure the output directory is set to: `bin/Debug/net8.0/Content`

**Note:** The application will run without built content files using a simple fallback font renderer, but the fonts won't look as nice. For the best experience, build the content files using the GUI tool.

### Step 5: Run the Application

```bash
dotnet run
```

## Troubleshooting

**"dotnet: command not found" (Mac)**
- .NET SDK is not installed or not in PATH. 
- Add to `~/.zprofile`: `export PATH="/usr/local/share/dotnet:$PATH"`
- Restart terminal or run: `source ~/.zprofile`

**"Could not find Content/DefaultFont.xnb"**
- Content files haven't been built. The app will use fallback fonts, but for better fonts:
  - Run: `mgcb-editor Content/Content.mgcb`
  - Click Build → Build in the GUI

**"mgcb-editor: command not found" (Mac)**
- Add dotnet tools to PATH: `export PATH="$PATH:$HOME/.dotnet/tools"`
- Install the tool: `dotnet tool install --global dotnet-mgcb-editor`

**Application runs but fonts look basic:**
- This is normal if content files aren't built. Use `mgcb-editor` to build proper fonts (see Step 4).

**Content build fails with "Could not resolve type 'Graphics:FontDescription'"**
- This is a known issue with the command-line `mgcb` tool on Mac
- Use the GUI tool (`mgcb-editor`) instead - it handles this correctly

## Controls

- **↑/↓ Arrow Keys**: Navigate between artworks
- **Page Up/Page Down**: Scroll through long content
- **ESC**: Exit the application

## Project Structure

```
APAH_pacific_project/
├── Game1.cs              # Main game class
├── Program.cs             # Entry point
├── Artwork.cs             # Artwork data model
├── ArtworkManager.cs      # Manages artwork collection
├── UI.cs                  # User interface rendering
├── Content/               # Game content (fonts, etc.)
│   ├── Content.mgcb      # Content pipeline configuration
│   ├── DefaultFont.spritefont
│   └── TitleFont.spritefont
└── APAH_Pacific_Artworks.csproj
```

## Customization

### Adding New Artworks

Edit `ArtworkManager.cs` and add new `Artwork` objects to the `LoadSampleData()` method:

```csharp
Artworks.Add(new Artwork
{
    Title = "Your Artwork Title",
    Artist = "Artist Name",
    Culture = "Culture Name",
    // ... other properties
});
```

### Modifying UI

The UI rendering logic is in `UI.cs`. You can modify colors, layouts, and styling by editing this file.

### Loading External Data

To load artworks from a JSON file or database, modify `ArtworkManager.cs` to read from your data source instead of using `LoadSampleData()`.

## Notes

- The application uses MonoGame's DesktopGL platform, which works on Windows, macOS, and Linux
- Fonts are configured to use Arial; you can change this in the `.spritefont` files
- The window size is set to 1200x800 pixels but can be modified in `Game1.cs`

## License

This project is provided as-is for educational purposes.

