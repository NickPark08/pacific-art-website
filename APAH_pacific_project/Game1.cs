using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using System.Collections.Generic;

namespace APAH_Pacific_Artworks
{
    public class Game1 : Game
    {
        private GraphicsDeviceManager _graphics;
        private SpriteBatch _spriteBatch;
        private SpriteFont _font;
        private SpriteFont _titleFont;
        
        private ArtworkManager _artworkManager;
        private UI _ui;
        private int _selectedIndex = 0;
        private float _scrollOffset = 0;
        private const float ScrollSpeed = 30f;

        public Game1()
        {
            _graphics = new GraphicsDeviceManager(this);
            Content.RootDirectory = "Content";
            IsMouseVisible = true;
            
            // Set window size
            _graphics.PreferredBackBufferWidth = 1200;
            _graphics.PreferredBackBufferHeight = 800;
        }

        protected override void Initialize()
        {
            base.Initialize();
        }

        protected override void LoadContent()
        {
            _spriteBatch = new SpriteBatch(GraphicsDevice);
            
            // Try to load fonts from content pipeline
            // If they don't exist, we'll create simple fallback fonts
            try
            {
                _font = Content.Load<SpriteFont>("DefaultFont");
                _titleFont = Content.Load<SpriteFont>("TitleFont");
            }
            catch
            {
                // Fonts not built yet - create simple programmatic fonts
                // For Mac users: You'll need to build content files first
                // Run: mgcb-editor Content/Content.mgcb and click Build
                System.Console.WriteLine("Warning: Font content files not found. Using fallback rendering.");
                System.Console.WriteLine("To fix: Run 'mgcb-editor Content/Content.mgcb' and build the content.");
                
                // Create minimal fonts - we'll handle this in UI class
                _font = null;
                _titleFont = null;
            }
            
            _artworkManager = new ArtworkManager();
            _artworkManager.LoadSampleData();
            
            _ui = new UI(_font, _titleFont, GraphicsDevice);
        }

        protected override void Update(GameTime gameTime)
        {
            var keyboardState = Keyboard.GetState();
            var mouseState = Mouse.GetState();
            
            // Handle keyboard navigation
            if (keyboardState.IsKeyDown(Keys.Down) && _selectedIndex < _artworkManager.Artworks.Count - 1)
            {
                _selectedIndex++;
                _scrollOffset = 0;
            }
            if (keyboardState.IsKeyDown(Keys.Up) && _selectedIndex > 0)
            {
                _selectedIndex--;
                _scrollOffset = 0;
            }
            
            // Handle scrolling
            if (keyboardState.IsKeyDown(Keys.PageDown))
            {
                _scrollOffset += ScrollSpeed;
            }
            if (keyboardState.IsKeyDown(Keys.PageUp))
            {
                _scrollOffset -= ScrollSpeed;
            }
            
            // Reset scroll when changing artwork
            if (keyboardState.IsKeyDown(Keys.Left) || keyboardState.IsKeyDown(Keys.Right))
            {
                _scrollOffset = 0;
            }
            
            // Clamp scroll offset
            _scrollOffset = MathHelper.Clamp(_scrollOffset, 0, float.MaxValue);

            if (GamePad.GetState(PlayerIndex.One).Buttons.Back == ButtonState.Pressed || 
                keyboardState.IsKeyDown(Keys.Escape))
                Exit();

            base.Update(gameTime);
        }

        protected override void Draw(GameTime gameTime)
        {
            GraphicsDevice.Clear(new Color(240, 240, 245));

            _spriteBatch.Begin();
            
            var selectedArtwork = _artworkManager.Artworks[_selectedIndex];
            _ui.Draw(_spriteBatch, selectedArtwork, _selectedIndex, _artworkManager.Artworks.Count, _scrollOffset);
            
            _spriteBatch.End();

            base.Draw(gameTime);
        }
    }
}

