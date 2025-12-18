using System.Collections.Generic;

namespace APAH_Pacific_Artworks
{
    public class Artwork
    {
        public string Title { get; set; }
        public string Artist { get; set; }
        public string Culture { get; set; }
        public string Date { get; set; }
        public string Medium { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
        public string HistoricalContext { get; set; }
        public string Significance { get; set; }
        public List<string> Tags { get; set; }

        public Artwork()
        {
            Tags = new List<string>();
        }
    }
}

