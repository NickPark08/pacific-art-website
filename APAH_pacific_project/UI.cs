using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using System.Collections.Generic;
using System.Linq;

namespace APAH_Pacific_Artworks
{
    public class UI
    {
        private SpriteFont _font;
        private SpriteFont _titleFont;
        private GraphicsDevice _graphicsDevice;
        private Texture2D _whitePixel;
        private SimpleFont _fallbackFont;
        private SimpleFont _fallbackTitleFont;
        private const int Padding = 40;
        private const int SidebarWidth = 300;
        private const int LineSpacing = 25;
        private const int TitleSpacing = 35;

        public UI(SpriteFont font, SpriteFont titleFont, GraphicsDevice graphicsDevice)
        {
            _font = font;
            _titleFont = titleFont;
            _graphicsDevice = graphicsDevice;
            
            // Create fallback fonts if SpriteFonts aren't available
            if (_font == null)
                _fallbackFont = new SimpleFont(graphicsDevice, 14);
            if (_titleFont == null)
                _fallbackTitleFont = new SimpleFont(graphicsDevice, 24);
            
            // Create a white pixel texture for drawing rectangles
            _whitePixel = new Texture2D(graphicsDevice, 1, 1);
            _whitePixel.SetData(new[] { Color.White });
        }
        
        private void DrawString(SpriteBatch spriteBatch, SpriteFont font, SimpleFont fallbackFont, string text, Vector2 position, Color color)
        {
            if (font != null)
            {
                spriteBatch.DrawString(font, text, position, color);
            }
            else if (fallbackFont != null)
            {
                fallbackFont.DrawString(spriteBatch, text, position, color);
            }
        }
        
        private Vector2 MeasureString(SpriteFont font, SimpleFont fallbackFont, string text)
        {
            if (font != null)
            {
                return font.MeasureString(text);
            }
            else if (fallbackFont != null)
            {
                return fallbackFont.MeasureString(text);
            }
            return Vector2.Zero;
        }

        public void Draw(SpriteBatch spriteBatch, Artwork artwork, int currentIndex, int totalCount, float scrollOffset)
        {
            int windowWidth = _graphicsDevice.Viewport.Width;
            int windowHeight = _graphicsDevice.Viewport.Height;
            
            // Draw sidebar with artwork list
            DrawSidebar(spriteBatch, currentIndex, totalCount, windowHeight);
            
            // Draw main content area
            int contentX = SidebarWidth + Padding;
            int contentY = Padding - (int)scrollOffset;
            int contentWidth = windowWidth - SidebarWidth - (Padding * 2);
            
            DrawArtworkDetails(spriteBatch, artwork, contentX, contentY, contentWidth);
        }

        private void DrawSidebar(SpriteBatch spriteBatch, int currentIndex, int totalCount, int windowHeight)
        {
            // Draw sidebar background
            DrawRectangle(spriteBatch, new Rectangle(0, 0, SidebarWidth, windowHeight), new Color(50, 50, 60));
            
            // Draw sidebar title
            string sidebarTitle = "Pacific Artworks";
            Vector2 titleSize = MeasureString(_titleFont, _fallbackTitleFont, sidebarTitle);
            DrawString(spriteBatch, _titleFont, _fallbackTitleFont, sidebarTitle, 
                new Vector2((SidebarWidth - titleSize.X) / 2, 30), Color.White);
            
            // Draw navigation info
            string navInfo = $"Artwork {currentIndex + 1} of {totalCount}";
            Vector2 navSize = MeasureString(_font, _fallbackFont, navInfo);
            DrawString(spriteBatch, _font, _fallbackFont, navInfo, 
                new Vector2((SidebarWidth - navSize.X) / 2, 80), new Color(200, 200, 200));
            
            // Draw instructions
            string instructions = "Controls:\n\n↑/↓ Navigate\nPage Up/Down\nScroll\nESC Exit";
            Vector2 instructionsPos = new Vector2(20, 150);
            DrawWrappedText(spriteBatch, instructions, instructionsPos, SidebarWidth - 40, Color.LightGray);
        }

        private void DrawArtworkDetails(SpriteBatch spriteBatch, Artwork artwork, int x, int y, int maxWidth)
        {
            int currentY = y;
            
            // Draw title
            string title = artwork.Title;
            Vector2 titleSize = MeasureString(_titleFont, _fallbackTitleFont, title);
            DrawString(spriteBatch, _titleFont, _fallbackTitleFont, title, new Vector2(x, currentY), new Color(30, 30, 40));
            currentY += (int)titleSize.Y + TitleSpacing;
            
            // Draw divider line
            DrawLine(spriteBatch, new Vector2(x, currentY), new Vector2(x + maxWidth, currentY), 2, new Color(200, 200, 200));
            currentY += 20;
            
            // Draw metadata section
            currentY = DrawSection(spriteBatch, "Basic Information", new List<string>
            {
                $"Artist: {artwork.Artist}",
                $"Culture: {artwork.Culture}",
                $"Date: {artwork.Date}",
                $"Medium: {artwork.Medium}",
                $"Location: {artwork.Location}"
            }, x, currentY, maxWidth);
            
            currentY += 20;
            
            // Draw description
            currentY = DrawWrappedTextSection(spriteBatch, "Description", artwork.Description, x, currentY, maxWidth);
            
            currentY += 20;
            
            // Draw historical context
            currentY = DrawWrappedTextSection(spriteBatch, "Historical Context", artwork.HistoricalContext, x, currentY, maxWidth);
            
            currentY += 20;
            
            // Draw significance
            currentY = DrawWrappedTextSection(spriteBatch, "Significance", artwork.Significance, x, currentY, maxWidth);
            
            currentY += 20;
            
            // Draw tags
            if (artwork.Tags != null && artwork.Tags.Count > 0)
            {
                string tagsText = "Tags: " + string.Join(", ", artwork.Tags);
                currentY = DrawWrappedTextSection(spriteBatch, "", tagsText, x, currentY, maxWidth);
            }
        }

        private int DrawSection(SpriteBatch spriteBatch, string sectionTitle, List<string> items, int x, int y, int maxWidth)
        {
            int currentY = y;
            
            if (!string.IsNullOrEmpty(sectionTitle))
            {
                Vector2 sectionTitleSize = MeasureString(_font, _fallbackFont, sectionTitle);
                DrawString(spriteBatch, _font, _fallbackFont, sectionTitle, new Vector2(x, currentY), new Color(60, 100, 150));
                currentY += (int)sectionTitleSize.Y + 10;
            }
            
            foreach (var item in items)
            {
                DrawString(spriteBatch, _font, _fallbackFont, item, new Vector2(x + 20, currentY), Color.Black);
                currentY += LineSpacing;
            }
            
            return currentY;
        }

        private int DrawWrappedTextSection(SpriteBatch spriteBatch, string sectionTitle, string text, int x, int y, int maxWidth)
        {
            int currentY = y;
            
            if (!string.IsNullOrEmpty(sectionTitle))
            {
                Vector2 sectionTitleSize = MeasureString(_font, _fallbackFont, sectionTitle);
                DrawString(spriteBatch, _font, _fallbackFont, sectionTitle, new Vector2(x, currentY), new Color(60, 100, 150));
                currentY += (int)sectionTitleSize.Y + 10;
            }
            
            currentY = DrawWrappedText(spriteBatch, text, new Vector2(x, currentY), maxWidth, Color.Black);
            
            return currentY;
        }

        private int DrawWrappedText(SpriteBatch spriteBatch, string text, Vector2 position, int maxWidth, Color color)
        {
            string[] words = text.Split(' ');
            string line = "";
            int currentY = (int)position.Y;
            float lineHeight = MeasureString(_font, _fallbackFont, "A").Y;
            
            foreach (string word in words)
            {
                string testLine = line + (line == "" ? "" : " ") + word;
                Vector2 size = MeasureString(_font, _fallbackFont, testLine);
                
                if (size.X > maxWidth && line != "")
                {
                    DrawString(spriteBatch, _font, _fallbackFont, line, new Vector2(position.X, currentY), color);
                    line = word;
                    currentY += (int)lineHeight + 5;
                }
                else
                {
                    line = testLine;
                }
            }
            
            if (line != "")
            {
                DrawString(spriteBatch, _font, _fallbackFont, line, new Vector2(position.X, currentY), color);
                currentY += (int)lineHeight + 5;
            }
            
            return currentY;
        }

        private void DrawRectangle(SpriteBatch spriteBatch, Rectangle rectangle, Color color)
        {
            spriteBatch.Draw(_whitePixel, rectangle, color);
        }

        private void DrawLine(SpriteBatch spriteBatch, Vector2 start, Vector2 end, int thickness, Color color)
        {
            Vector2 edge = end - start;
            float angle = (float)System.Math.Atan2(edge.Y, edge.X);
            
            Rectangle destRect = new Rectangle(
                (int)start.X,
                (int)start.Y,
                (int)edge.Length(),
                thickness);
            
            spriteBatch.Draw(_whitePixel, destRect, null, color, angle, new Vector2(0, 0.5f), SpriteEffects.None, 0);
        }
    }
}

