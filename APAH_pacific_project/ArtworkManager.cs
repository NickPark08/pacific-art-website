using System.Collections.Generic;

namespace APAH_Pacific_Artworks
{
    public class ArtworkManager
    {
        public List<Artwork> Artworks { get; private set; }

        public ArtworkManager()
        {
            Artworks = new List<Artwork>();
        }

        public void LoadSampleData()
        {
            // Sample Pacific artwork data
            Artworks.Add(new Artwork
            {
                Title = "Moai (Easter Island Statues)",
                Artist = "Unknown Rapa Nui Artists",
                Culture = "Rapa Nui (Easter Island)",
                Date = "c. 1100-1600 CE",
                Medium = "Volcanic tuff, basalt, red scoria",
                Location = "Easter Island (Rapa Nui), Chile",
                Description = "The moai are monolithic human figures carved by the Rapa Nui people on Easter Island. These massive stone statues, some weighing over 80 tons, were carved from volcanic tuff and transported across the island to ceremonial platforms called ahu. The moai are believed to represent deified ancestors and were placed to watch over the community.",
                HistoricalContext = "The moai were created during a period of significant cultural development on Easter Island. The construction of these statues required sophisticated engineering skills and a highly organized society. The production of moai declined in the 17th century, likely due to environmental degradation and social upheaval.",
                Significance = "The moai represent one of the most remarkable achievements in Pacific art and engineering. They demonstrate the Rapa Nui people's deep spiritual connection to their ancestors and their sophisticated understanding of stone carving and transportation. Today, they are a UNESCO World Heritage site and a symbol of Pacific Island cultural heritage.",
                Tags = new List<string> { "Sculpture", "Stone", "Ancestral", "Monumental", "Rapa Nui" }
            });

            Artworks.Add(new Artwork
            {
                Title = "Tapa Cloth (Ngatu)",
                Artist = "Tongan Women Artists",
                Culture = "Tonga",
                Date = "19th-20th Century",
                Medium = "Bark cloth (tapa), natural dyes",
                Location = "Tonga, Polynesia",
                Description = "Tapa cloth, known as ngatu in Tonga, is a traditional bark cloth made from the inner bark of the paper mulberry tree. The bark is beaten into thin sheets, then decorated with intricate geometric patterns using natural dyes. Tapa cloth serves both practical and ceremonial purposes.",
                HistoricalContext = "Tapa making has been a central part of Pacific Island cultures for centuries. In Tonga, ngatu is particularly important for ceremonies, gifts, and as a form of currency. The patterns often carry symbolic meanings related to social status, family lineage, and cultural identity.",
                Significance = "Tapa cloth represents the continuity of traditional Pacific Island craftsmanship and the important role of women in preserving cultural knowledge. The intricate patterns and techniques passed down through generations demonstrate the sophisticated artistic traditions of Polynesian cultures.",
                Tags = new List<string> { "Textile", "Bark Cloth", "Ceremonial", "Women's Art", "Polynesian" }
            });

            Artworks.Add(new Artwork
            {
                Title = "Hawaiian Feather Cloak ('Ahu'ula)",
                Artist = "Hawaiian Royal Artisans",
                Culture = "Hawaii",
                Date = "18th-19th Century",
                Medium = "Feathers (primarily red and yellow), olona fiber netting",
                Location = "Hawaiian Islands",
                Description = "The 'ahu'ula, or feather cloak, was a prestigious garment worn by Hawaiian ali'i (chiefs) and royalty. Made from thousands of small feathers meticulously attached to a netting base, these cloaks were symbols of power, status, and divine authority. The most valued cloaks used rare yellow and red feathers from specific bird species.",
                HistoricalContext = "Feather cloaks were among the most valuable possessions in pre-contact Hawaii. The creation of an 'ahu'ula required extensive resources, as birds had to be caught, specific feathers plucked, and the garment carefully constructed. Only high-ranking chiefs could wear these cloaks, which were also used in diplomatic exchanges.",
                Significance = "The 'ahu'ula represents the pinnacle of Hawaiian artistic achievement and the sophisticated social hierarchy of pre-contact Hawaiian society. These cloaks demonstrate the Hawaiian people's deep understanding of their natural environment and their ability to transform natural materials into objects of great cultural and spiritual significance.",
                Tags = new List<string> { "Textile", "Featherwork", "Royal", "Status Symbol", "Hawaiian" }
            });

            Artworks.Add(new Artwork
            {
                Title = "Aboriginal Rock Art - Wandjina Figures",
                Artist = "Worrorra, Ngarinyin, and Wunambal Peoples",
                Culture = "Kimberley Region, Australia",
                Date = "c. 4000 BCE - Present",
                Medium = "Ochre pigments on rock",
                Location = "Kimberley Region, Western Australia",
                Description = "Wandjina figures are distinctive rock art images found in the Kimberley region of Western Australia. These large, powerful figures are characterized by their large eyes, halo-like headdresses, and lack of mouths. Wandjina are cloud and rain spirits who control the weather and are central to the spiritual beliefs of the Worrorra, Ngarinyin, and Wunambal peoples.",
                HistoricalContext = "Rock art in the Kimberley region dates back thousands of years, with Wandjina paintings being among the most recent and culturally significant. These images are periodically repainted by traditional owners to maintain their spiritual power. The art represents one of the longest continuous artistic traditions in the world.",
                Significance = "Wandjina rock art demonstrates the deep spiritual connection between Aboriginal peoples and their land. The ongoing practice of repainting these images maintains cultural continuity and demonstrates the living nature of Aboriginal artistic traditions. These artworks are crucial for understanding Indigenous Australian cosmology and environmental knowledge.",
                Tags = new List<string> { "Rock Art", "Spiritual", "Indigenous", "Ochre", "Kimberley" }
            });

            Artworks.Add(new Artwork
            {
                Title = "Maori Meeting House (Wharenui)",
                Artist = "Maori Master Carvers",
                Culture = "Maori (Aotearoa/New Zealand)",
                Date = "19th Century - Present",
                Medium = "Wood (totara, kauri), flax, shell",
                Location = "Aotearoa (New Zealand)",
                Description = "The wharenui, or meeting house, is the center of Maori community life. These elaborately carved and decorated buildings represent an ancestor, with the ridgepole as the spine, the bargeboards as arms, and the interior posts as ribs. The carvings (whakairo) tell stories of ancestors, creation myths, and tribal history.",
                HistoricalContext = "Meeting houses became increasingly elaborate in the 19th century as Maori communities adapted to new materials and tools introduced by European settlers. Despite colonization, Maori maintained and evolved their carving traditions, creating some of the most sophisticated wooden architecture in the Pacific.",
                Significance = "The wharenui represents the living heart of Maori culture, serving as both a physical and spiritual gathering place. The intricate carvings preserve oral histories and genealogies, making the building itself a repository of cultural knowledge. These structures demonstrate the Maori concept of whakapapa (genealogy) and the interconnectedness of past, present, and future generations.",
                Tags = new List<string> { "Architecture", "Wood Carving", "Community", "Ancestral", "Maori" }
            });

            Artworks.Add(new Artwork
            {
                Title = "Sepik River Ancestor Figure",
                Artist = "Sepik River Artists",
                Culture = "Sepik River Region, Papua New Guinea",
                Date = "19th-20th Century",
                Medium = "Wood, clay, shell, fiber",
                Location = "Sepik River, Papua New Guinea",
                Description = "Ancestor figures from the Sepik River region are powerful spiritual objects carved from wood and decorated with intricate designs. These figures often feature elongated forms, elaborate headdresses, and symbolic patterns that represent clan ancestors and spiritual beings. They are used in initiation ceremonies and as guardians of sacred spaces.",
                HistoricalContext = "The Sepik River region is one of the most artistically rich areas in Melanesia, with over 200 distinct cultural groups. Each group has developed unique artistic styles while sharing common themes of ancestor veneration and spiritual power. These figures are central to the complex ritual life of Sepik communities.",
                Significance = "Sepik ancestor figures represent the sophisticated spiritual and artistic traditions of Melanesian cultures. The intricate carvings encode complex cosmological knowledge and social relationships. These artworks demonstrate the importance of ancestral connections in Pacific Island cultures and the role of art in maintaining spiritual and social order.",
                Tags = new List<string> { "Sculpture", "Wood", "Ancestral", "Ritual", "Melanesian" }
            });
        }
    }
}

