// KALĀ — India State & Art Data

export const statesData = {
  "Rajasthan": {
    region: "North India",
    capital: "Jaipur",
    intro: "The Land of Kings — where desert sands meet royal splendor. Rajasthan is a living canvas of Mughal-Rajput art, chivalry, and vibrant folk traditions.",
    artForms: [
      { name: "Phad Painting", desc: "Narrative scroll paintings depicting folk deities like Pabuji and Devnarayan, traditionally used by Bhopa bards as portable shrines." },
      { name: "Miniature Painting", desc: "Intricate Rajput-Mughal style court paintings on paper, ivory, and cloth with brilliant mineral pigments and gold leaf." },
      { name: "Blue Pottery", desc: "A Central Asian craft form unique to Jaipur, using quartz powder to create striking turquoise-blue glazed ceramics." }
    ],
    heritage: ["Amber Fort, Jaipur", "Mehrangarh Fort, Jodhpur", "Jaisalmer Fort"],
    fact: "Rajasthan's Ranthambore region was historically a royal hunting ground; today it is India's most photographed tiger reserve.",
    color: "#B89A62",
    image: "/images/hero_bg.jpg"
  },
  "Madhya Pradesh": {
    region: "Central India",
    capital: "Bhopal",
    intro: "The Heart of India holds the world's oldest rock art and the vibrant living tradition of Gond tribal painting, spanning thousands of years of human expression.",
    artForms: [
      { name: "Gond Art", desc: "Colorful tribal art from the Gondi community, featuring intricate dots and dashes forming animals, trees, and mythological scenes." },
      { name: "Bagh Print", desc: "Ancient block-printing tradition from Bagh village using natural dyes on cotton, with geometric and floral motifs." },
      { name: "Chanderi Weave", desc: "Gossamer-light silk and cotton sarees woven at Chanderi since the 11th century, featuring coin motifs and floral zari." }
    ],
    heritage: ["Bhimbetka Rock Shelters (UNESCO)", "Khajuraho Temple Complex (UNESCO)", "Sanchi Stupa (UNESCO)"],
    fact: "The Bhimbetka rock shelters contain paintings dating back 30,000 years — among the oldest human artwork ever found.",
    color: "#A96046",
    image: "/images/art_gallery.jpg"
  },
  "Odisha": {
    region: "East India",
    capital: "Bhubaneswar",
    intro: "Odisha's coastline and ancient temples gave birth to some of India's most sophisticated art traditions — from narrative scroll paintings to intricately carved sun temples.",
    artForms: [
      { name: "Pattachitra", desc: "Palm-leaf and cloth scroll paintings narrating stories of Lord Jagannath and Hindu epics, with bold outlines and natural pigments." },
      { name: "Appliqué Craft", desc: "Geometric fabric cutwork used to create temple canopies and decorative pieces at Pipli village, with vivid colors." },
      { name: "Stone Carving", desc: "Master sculptors at Konark and Puri continue the living tradition of carving intricate temple iconography from sandstone." }
    ],
    heritage: ["Konark Sun Temple (UNESCO)", "Puri Jagannath Temple", "Udayagiri & Khandagiri Caves"],
    fact: "Odisha's Rath Yatra at Puri is the world's largest chariot festival, drawing over a million pilgrims annually — the word 'juggernaut' derives from 'Jagannath'.",
    color: "#8B6914",
    image: "/images/storytelling.jpg"
  },
  "Bihar": {
    region: "East India",
    capital: "Patna",
    intro: "Bihar was the cradle of Indian civilization — birthplace of Buddhism, seat of the Mauryan Empire, and home to the ancient university of Nalanda.",
    artForms: [
      { name: "Madhubani Painting", desc: "Geometric and nature-inspired paintings from the Mithila region, traditionally drawn by women on mud walls and now on paper and cloth." },
      { name: "Sikki Craft", desc: "Intricate baskets and figurines woven from golden sikki grass — a craft practiced almost exclusively by Mithila women." },
      { name: "Sujini Embroidery", desc: "A recycling craft tradition where old cloth is stitched together with running stitch patterns forming narrative scenes." }
    ],
    heritage: ["Mahabodhi Temple, Bodh Gaya (UNESCO)", "Nalanda University Ruins (UNESCO)", "Vikramshila"],
    fact: "The Nalanda university complex, founded in 5th century CE, was one of the world's first residential universities, attracting scholars from China, Korea, and Central Asia.",
    color: "#6B8E3E",
    image: "/images/art_gallery.jpg"
  },
  "Tamil Nadu": {
    region: "South India",
    capital: "Chennai",
    intro: "Tamil civilization is one of the world's oldest continuous cultures. Its Dravidian temples, classical dance, and Tanjore painting tradition have been refined over two millennia.",
    artForms: [
      { name: "Tanjore Painting", desc: "Characterized by rich surface texture using gold foil and semi-precious stones, depicting Hindu deities in compact, brilliant compositions." },
      { name: "Kolam", desc: "Daily floor drawings in rice flour made by Tamil women at dawn — ephemeral, intricate, and deeply meditative." },
      { name: "Bronze Casting", desc: "Chola-era Nataraja bronzes remain the pinnacle of Indian metalwork, cast using the lost-wax process perfected over 1,000 years." }
    ],
    heritage: ["Brihadeeswara Temple, Thanjavur (UNESCO)", "Shore Temple, Mahabalipuram (UNESCO)", "Meenakshi Amman Temple"],
    fact: "Tamil is the world's only classical language still widely spoken as a living mother tongue, with an unbroken literary tradition of over 2,000 years.",
    color: "#C4744F",
    image: "/images/hero_bg.jpg"
  },
  "West Bengal": {
    region: "East India",
    capital: "Kolkata",
    intro: "Bengal was the center of the Indian Renaissance — its Kalighat art, terracotta temples, and intellectual tradition shaped modern India's cultural identity.",
    artForms: [
      { name: "Kalighat Painting", desc: "Bold, fluid 19th-century paintings from Kalighat market, satirizing colonial society with expressive single-figure compositions." },
      { name: "Dokra Metal Craft", desc: "Lost-wax cast figurines of tribal deities and animals from Bankura — one of India's oldest metalcasting traditions." },
      { name: "Terracotta Temple Art", desc: "Intricately decorated terracotta temples of Bishnupur with panels depicting the Mahabharata and Ramayana in fired clay." }
    ],
    heritage: ["Sundarbans National Park (UNESCO)", "Bishnupur Temples", "Victoria Memorial, Kolkata"],
    fact: "Rabindranath Tagore — poet, philosopher, and artist — was Bengal's greatest son, and the first non-European to win the Nobel Prize for Literature (1913).",
    color: "#7B5EA7",
    image: "/images/storytelling.jpg"
  },
  "Gujarat": {
    region: "West India",
    capital: "Gandhinagar",
    intro: "Gujarat's artisans have practiced extraordinary textile, embroidery, and craft traditions for centuries, generating one of the most vibrant regional craft economies in Asia.",
    artForms: [
      { name: "Rogan Art", desc: "A 400-year-old craft of painting with castor oil-based paint on cloth, practiced exclusively by one family in Nirona village." },
      { name: "Patola Weaving", desc: "Double ikat silk sarees from Patan where every thread is tie-dyed before weaving — one saree takes six months to complete." },
      { name: "Kutch Embroidery", desc: "Richly embroidered textiles from Kutch communities featuring mirror work, geometric patterns, and vibrant thread colours." }
    ],
    heritage: ["Rani ki Vav Stepwell (UNESCO)", "Champaner-Pavagadh (UNESCO)", "Modhera Sun Temple"],
    fact: "Rani ki Vav is a 1,000-year-old stepwell with 500+ principal sculptures — it was rediscovered from silt only in the 1960s and featured on India's 100-rupee note.",
    color: "#B89A62",
    image: "/images/art_gallery.jpg"
  },
  "Kerala": {
    region: "South India",
    capital: "Thiruvananthapuram",
    intro: "Kerala's spice-trade wealth and maritime connections gave rise to extraordinary mural traditions, elaborate ritual art forms, and one of India's most distinctive classical dance forms.",
    artForms: [
      { name: "Kathakali", desc: "Elaborate dance-drama with 8 hours of preparation — layered vegetable-pigment makeup transforms performers into mythological characters." },
      { name: "Kerala Murals", desc: "Temple murals in a six-color palette using natural minerals, depicting mythological scenes with extraordinary figurative grace." },
      { name: "Theyyam", desc: "Ritual possession dance in which performers become living deities — elaborate costumes reaching 20+ feet in height." }
    ],
    heritage: ["Padmanabhapuram Palace", "Mattancherry Palace", "Thrissur Pooram Festival"],
    fact: "Kerala achieved 100% literacy in 1991 — the only Indian state to do so — and consistently ranks first in India's Human Development Index.",
    color: "#3A8C5C",
    image: "/images/hero_bg.jpg"
  },
  "Maharashtra": {
    region: "West India",
    capital: "Mumbai",
    intro: "Maharashtra's artistic heritage spans prehistoric rock-cut caves to living tribal traditions — from the meditative silence of Ajanta to the vibrant geometric language of Warli.",
    artForms: [
      { name: "Warli Painting", desc: "Minimalist tribal art from North Maharashtra using geometric shapes — circles, triangles, squares — to depict village life and ritual." },
      { name: "Paithani Weaving", desc: "Silk sarees with intricate tapestry-woven borders and peacock motifs — a royal tradition dating to the Satavahana period." },
      { name: "Pune Petha", desc: "Traditional sweetmeat sculpted in elaborate shapes, a craft institution within Maharashtrian cultural festivals." }
    ],
    heritage: ["Ajanta Caves (UNESCO)", "Ellora Caves (UNESCO)", "Chhatrapati Shivaji Terminus (UNESCO)"],
    fact: "Ajanta's paintings, executed between 2nd century BCE and 6th century CE, are among the finest surviving examples of ancient world art — their rediscovery in 1819 was accidental.",
    color: "#D4892A",
    image: "/images/storytelling.jpg"
  },
  "Assam": {
    region: "Northeast India",
    capital: "Dispur",
    intro: "Assam's vast river plains and ancient kingdom history gave rise to Sattriya dance, extraordinary silk weaving, and a bamboo craft tradition rooted in the rhythms of the Brahmaputra.",
    artForms: [
      { name: "Sattriya Dance", desc: "Classical dance form created in the 15th century by saint-scholar Sankaradeva within the Vaishnavite monastery tradition." },
      { name: "Muga Silk Weaving", desc: "The golden-hued muga silk of Assam is the world's only naturally golden silk, produced by silkworms unique to the Brahmaputra valley." },
      { name: "Bamboo Craft", desc: "An extraordinary range of utilitarian and decorative objects — baskets, instruments, furniture — woven from Assam's abundant bamboo." }
    ],
    heritage: ["Kaziranga National Park (UNESCO)", "Manas Wildlife Sanctuary (UNESCO)", "Kamakhya Temple"],
    fact: "Assam's muga silk is naturally gold-colored and never fades — Queen Elizabeth II's coronation robe contained Assam muga silk.",
    color: "#5B8A3C",
    image: "/images/art_gallery.jpg"
  },
  "Punjab": {
    region: "North India",
    capital: "Chandigarh",
    intro: "The land of five rivers has nourished warrior traditions, Sikh spirituality, and a folk culture of extraordinary energy — expressed in Bhangra, Phulkari embroidery, and golden temple architecture.",
    artForms: [
      { name: "Phulkari Embroidery", desc: "Vibrant silk-thread embroidery on coarse cloth, traditionally made by mothers for daughters' dowries with geometric flowering patterns." },
      { name: "Punjabi Pottery", desc: "Blue-glazed Multani pottery and terracotta craft with bold geometric patterns in cobalt, turquoise, and white." },
      { name: "Nankana Woodwork", desc: "Intricate carved wooden screens, doors, and furniture with geometric and floral patterns in the Mughal-Punjab tradition." }
    ],
    heritage: ["Golden Temple (Harmandir Sahib), Amritsar", "Jallianwala Bagh", "Anandpur Sahib"],
    fact: "The Golden Temple's kitchen — the Langar — serves free meals to over 100,000 people every day regardless of religion, caste, or background.",
    color: "#D4921C",
    image: "/images/hero_bg.jpg"
  },
  "Uttar Pradesh": {
    region: "North India",
    capital: "Lucknow",
    intro: "India's most populous state is the spiritual heartland of Hinduism and the seat of the Mughal Empire — home to the Taj Mahal, Varanasi's ghats, and the exquisite Chikankari tradition.",
    artForms: [
      { name: "Chikankari", desc: "Delicate hand-embroidery on fine muslin using 32 distinct stitches, developed in Lucknow's Nawabi courts." },
      { name: "Zardozi Work", desc: "Gold and silver thread embroidery used on royal garments and temple decoration — a craft patronized by Mughal emperors." },
      { name: "Brass & Brassware of Moradabad", desc: "Intricate engraved and inlaid brassware — Moradabad is known as 'Pital Nagri' (Brass City) and exports globally." }
    ],
    heritage: ["Taj Mahal, Agra (UNESCO)", "Agra Fort (UNESCO)", "Fatehpur Sikri (UNESCO)"],
    fact: "It took 22 years and 20,000 artisans to build the Taj Mahal. The inlay work contains over 28 varieties of precious and semi-precious stones from across Asia.",
    color: "#A96046",
    image: "/images/storytelling.jpg"
  },
  "Jammu & Kashmir": {
    region: "North India",
    capital: "Srinagar",
    intro: "The Kashmir Valley's extraordinary natural beauty inspired centuries of refined craft — Pashmina weaving, Kani shawls, walnut wood carving, and carpet weaving of global renown.",
    artForms: [
      { name: "Pashmina Weaving", desc: "Luxury shawls woven from the undercoat of Changthangi goats — so fine a six-yard shawl passes through a ring." },
      { name: "Kani Shawl", desc: "Woven with hundreds of wooden spools (kanis) producing intricate multi-color tapestry patterns — one shawl takes 2-3 years." },
      { name: "Walnut Wood Carving", desc: "Intricate pierced and relief carving on Kashmiri walnut wood, with floral and paisley motifs refined over centuries." }
    ],
    heritage: ["Dal Lake & Srinagar Gardens", "Shankaracharya Temple", "Amarnath Cave Shrine"],
    fact: "A genuine Pashmina shawl is woven by hand from thread spun by hand — the complete process from fiber to finished shawl involves over 700 hours of skilled labor.",
    color: "#5B8FA8",
    image: "/images/art_gallery.jpg"
  },
  "Himachal Pradesh": {
    region: "North India",
    capital: "Shimla",
    intro: "Himalayan valleys shaped a distinctive highland aesthetic — from Kangra miniature paintings to Chamba Rumal embroidery — set against one of the world's most dramatic landscapes.",
    artForms: [
      { name: "Kangra Miniature", desc: "Lyrical miniature paintings from the Kangra Valley depicting Krishna-Radha themes with delicate brushwork and soft, jewel-like colors." },
      { name: "Chamba Rumal", desc: "Embroidered handkerchiefs depicting mythological scenes — stitched identically on both sides, a remarkable technical achievement." },
      { name: "Kullu Shawls", desc: "Hand-woven woollen shawls with geometric patterns in vivid natural colors, a distinctive Himalayan craft tradition." }
    ],
    heritage: ["Great Himalayan National Park (UNESCO)", "Spiti Valley Monasteries", "Bhimakali Temple"],
    fact: "The Chamba Rumal is embroidered so precisely that both sides of the cloth are identical — the craft requires years of training.",
    color: "#6B8FA8",
    image: "/images/hero_bg.jpg"
  },
  "Karnataka": {
    region: "South India",
    capital: "Bengaluru",
    intro: "Karnataka's Vijayanagara Empire left a legacy of extraordinary temple architecture, while its living craft traditions of Mysore silk, Bidriware, and Yakshagana continue to flourish.",
    artForms: [
      { name: "Mysore Painting", desc: "Refined classical paintings with thin gold foil on raised gesso surface — distinct from Tanjore in its more delicate, linear quality." },
      { name: "Bidriware", desc: "Silver inlay on blackened zinc-copper alloy — a 14th-century craft from Bidar with striking visual contrast." },
      { name: "Channapatna Toys", desc: "Brightly lacquered wooden toys from Channapatna town, with a craft tradition established by Tipu Sultan's invitation of Persian artisans." }
    ],
    heritage: ["Hampi (UNESCO)", "Pattadakal (UNESCO)", "Mysore Palace"],
    fact: "The Mysore Palace is illuminated by 97,000 bulbs on special occasions — a sight visible from 20 km away.",
    color: "#D4761A",
    image: "/images/storytelling.jpg"
  },
  "Andhra Pradesh": {
    region: "South India",
    capital: "Amaravati",
    intro: "Andhra Pradesh's artistic heritage spans the great Buddhist stupa of Amaravati to Kalamkari cloth painting and the extraordinary weaving traditions of Pochampally and Uppada.",
    artForms: [
      { name: "Kalamkari", desc: "Hand-painted or block-printed cloth using natural dyes and a pen (kalam) depicting Hindu mythological scenes — a 3,000-year tradition." },
      { name: "Kondapalli Toys", desc: "Softwood toys painted in bright colors depicting characters from Hindu mythology and everyday rural life." },
      { name: "Pochampally Ikat", desc: "Double ikat silk weaving where warp and weft threads are tie-dyed before weaving to create geometric patterns." }
    ],
    heritage: ["Amaravati Buddhist Stupa", "Tirupati Balaji Temple", "Araku Valley Tribal Heritage"],
    fact: "Tirupati Balaji temple is the world's richest and most-visited religious site, receiving over 50,000 pilgrims daily and managing over $1 billion in annual donations.",
    color: "#A84C6A",
    image: "/images/art_gallery.jpg"
  },
  "Telangana": {
    region: "South India",
    capital: "Hyderabad",
    intro: "The Nizam's court at Hyderabad created a unique fusion aesthetic — Deccani painting, Bidriware, and the exquisite pearl and jewelry traditions that made Hyderabad the 'City of Pearls.'",
    artForms: [
      { name: "Nirmal Paintings", desc: "Golden-hued lacquer paintings from Nirmal town on seasoned wood, depicting mythological and natural themes." },
      { name: "Pochampally Weaving", desc: "UNESCO-recognized craft village producing geometric ikat textiles — Pochampally is known as the 'Silk City of India'." },
      { name: "Hyderabadi Jewelry", desc: "Intricate jadau, Kundan, and pearl jewelry traditions developed under Nizam patronage — among India's finest goldsmithing traditions." }
    ],
    heritage: ["Golconda Fort", "Charminar", "Qutb Shahi Tombs"],
    fact: "The Golconda mines near Hyderabad produced some of the world's most famous diamonds — the Hope Diamond, Koh-i-Noor, and Regent Diamond all originated here.",
    color: "#8C6A3A",
    image: "/images/hero_bg.jpg"
  },
  "Goa": {
    region: "West India",
    capital: "Panaji",
    intro: "Goa's four centuries of Portuguese rule created a unique Indo-Portuguese cultural synthesis — distinctive in its Konkani music, azulejo tile art, and lacquerware traditions.",
    artForms: [
      { name: "Azulejo Tile Art", desc: "Blue-painted decorative Portuguese ceramic tiles adorning church facades and colonial mansions — a distinctive Goan visual identity." },
      { name: "Dhrupad Music", desc: "Ancient Hindustani classical vocal tradition brought to Goa by Dhrupadiya musicians patronized by local chieftains." },
      { name: "Folk Theater (Khell-Tiatr)", desc: "Konkani language musical theater blending Western musical forms with local storytelling traditions." }
    ],
    heritage: ["Churches and Convents of Goa (UNESCO)", "Basilica of Bom Jesus", "Se Cathedral"],
    fact: "The body of St. Francis Xavier in the Basilica of Bom Jesus has remained incorrupt for over 450 years and is exposed for public veneration every decade.",
    color: "#2B8C78",
    image: "/images/storytelling.jpg"
  },
  "Sikkim": {
    region: "Northeast India",
    capital: "Gangtok",
    intro: "Tiny Sikkim, nestled between the Himalayas, has preserved extraordinary Tibetan Buddhist monasteries, thangka painting traditions, and a biodiversity unmatched in the subcontinent.",
    artForms: [
      { name: "Thangka Painting", desc: "Meticulous Buddhist scroll paintings on cotton or silk depicting mandalas and deities — each color has ritual significance." },
      { name: "Wood Carving", desc: "Monastery furniture, masks, and ritual objects carved from local wood with Buddhist iconographic precision." },
      { name: "Carpet Weaving", desc: "Hand-knotted woolen carpets with Buddhist motifs — a monastery craft tradition maintained at Pemayangtse." }
    ],
    heritage: ["Kangchenjunga National Park (UNESCO)", "Rumtek Monastery", "Pemayangtse Monastery"],
    fact: "Sikkim is India's first fully organic state — it converted all 75,000+ farms to certified organic agriculture by 2016.",
    color: "#5B7FA6",
    image: "/images/art_gallery.jpg"
  },
  "Meghalaya": {
    region: "Northeast India",
    capital: "Shillong",
    intro: "The 'Abode of Clouds' has preserved extraordinary matrilineal social structures, living root bridge engineering, and vibrant Khasi, Garo, and Jaintia tribal textile traditions.",
    artForms: [
      { name: "Cane & Bamboo Craft", desc: "Extraordinary weaving of utilitarian baskets, ceremonial objects, and furniture from the forests' abundant cane and bamboo." },
      { name: "Dhara Weaving", desc: "Traditional hand-woven textiles of the Khasi people with geometric patterns in wool and silk on backstrap looms." },
      { name: "Living Root Bridges", desc: "The Khasi people train aerial roots of rubber fig trees over decades to form natural suspension bridges — a form of bio-engineering." }
    ],
    heritage: ["Dawki River & Umngot", "Living Root Bridges, Cherrapunji", "Mawlynnong (Asia's Cleanest Village)"],
    fact: "Cherrapunji held the world record for most rainfall in a single year (26,461mm in 1861) and a single month — the living root bridges were built to withstand these monsoons.",
    color: "#4A8A5C",
    image: "/images/hero_bg.jpg"
  },
  "Arunachal Pradesh": {
    region: "Northeast India",
    capital: "Itanagar",
    intro: "The Land of Dawn-lit Mountains is home to over 26 indigenous tribes, renowned for Apatani woven cane, Monpa wood carving, and ancient Buddhist gompas like Tawang.",
    artForms: [
      { name: "Monpa Wood Carving & Mask Making", desc: "Vibrant wooden ceremonial masks representing deities and spirits, carved from single blocks of wood." },
      { name: "Apatani Cane & Bamboo Weaving", desc: "Geometric bamboo and cane architecture, baskets, and headgear woven with generational mastery." },
      { name: "Wancho Woodcraft & Beads", desc: "Intricate wood statues and colorful glass bead necklaces recording clan history and folklore." }
    ],
    heritage: ["Tawang Monastery (India's Largest)", "Ziro Valley Pine Groves", "Namdapha National Park"],
    fact: "Tawang Monastery was founded in 1680-1681 and is the second largest Buddhist monastery in the world after the Potala Palace in Lhasa.",
    color: "#7E9A4D",
    image: "/images/storytelling.jpg"
  },
  "Chandigarh": {
    region: "North India",
    capital: "Chandigarh",
    intro: "A modernist architectural wonder designed by Le Corbusier, Chandigarh harmonizes urban grid architecture with Nek Chand's world-famous Rock Garden.",
    artForms: [
      { name: "Rock Garden Mosaic Sculptures", desc: "Visionary sculptures created from broken porcelain, bangles, and industrial scrap — a monument of recycled creativity." },
      { name: "Modernist Concrete Murals", desc: "Brutalist bas-reliefs and tapestries designed by Le Corbusier for the Capitol Complex." },
      { name: "Phulkari & Punjabi Craft", desc: "Vibrant geometric silk thread embroidery celebrating harvest and family celebrations." }
    ],
    heritage: ["Le Corbusier Capitol Complex (UNESCO)", "Nek Chand Rock Garden", "Sukhna Lake"],
    fact: "Nek Chand spent nearly two decades secretly building the Rock Garden in a forest clearing using discarded ceramic, bangles, and urban debris.",
    color: "#8DA399",
    image: "/images/art_gallery.jpg"
  },
  "Chhattisgarh": {
    region: "Central India",
    capital: "Raipur",
    intro: "A forested heartland boasting an unbroken 4,000-year metallurgy tradition — Dokra bell-metal lost-wax casting — alongside sacred tribal ritual arts.",
    artForms: [
      { name: "Dokra Bell Metal Craft", desc: "Ancient non-ferrous metal casting using the lost-wax technique to create tribal figurines, horses, and lamps." },
      { name: "Bastar Wrought Iron (Loha Shilp)", desc: "Blacksmiths forge discarded iron into slender, evocative animal and human figurines using ancestral charcoal forges." },
      { name: "Kosa Silk Weaving", desc: "Sturdy golden wild silk harvested from nature and spun into shimmering textiles with natural luster." }
    ],
    heritage: ["Sirpur Ancient Monuments", "Bastar Royal Palace & Tribal Villages", "Chitrakote Waterfalls"],
    fact: "Bastar Dokra lost-wax metal casting uses the exact same metallurgical techniques discovered in the 4,500-year-old Dancing Girl bronze of Mohenjo-daro.",
    color: "#C27A4E",
    image: "/images/hero_bg.jpg"
  },
  "Dadra and Nagar Haveli": {
    region: "West India",
    capital: "Silvassa",
    intro: "Lush green forests and tribal hamlets celebrated for Warli painting, musical folklore, and bamboo craftsmanship.",
    artForms: [
      { name: "Warli Tribal Art", desc: "Ritual wall paintings of weddings and nature using rice paste and chewing twig brushes." },
      { name: "Tarpa Wind Instruments", desc: "Carved gourd and bamboo wind instruments played during harvest festival dances." },
      { name: "Bamboo & Mat Weaving", desc: "Folk mats and fishing traps woven from wild bamboo strips." }
    ],
    heritage: ["Silvassa Tribal Cultural Museum", "Dudhni Lake", "Vanganga Lake Garden"],
    fact: "Warli art here is considered ritualistic and protective, traditionally painted on freshly plastered mud walls before major harvest rites.",
    color: "#8C9E5B",
    image: "/images/storytelling.jpg"
  },
  "Daman and Diu": {
    region: "West India",
    capital: "Daman",
    intro: "Historic Portuguese coastal fortresses meeting Arabian Sea maritime craft, shell artistry, and colonial architectural elegance.",
    artForms: [
      { name: "Portuguese-Indo Woodcraft", desc: "Carved wooden altars, balustrades, and colonial furniture." },
      { name: "Sea Shell & Coral Craft", desc: "Intricate jewelry and decorative boxes fashioned from Arabian sea conch shells." },
      { name: "Mat Weaving", desc: "Hand-plaited palm leaf mats with vibrant geometric border accents." }
    ],
    heritage: ["Diu Fortress & St. Paul's Church", "Moti Daman Fort", "Ghoghla Beach"],
    fact: "Diu Fort, built in 1535 on the sea cliff, withstood major maritime sieges and remains one of Asia's best-preserved ocean stone fortresses.",
    color: "#4A8296",
    image: "/images/hero_bg.jpg"
  },
  "Delhi": {
    region: "North India",
    capital: "New Delhi",
    intro: "The historic cradle of seven imperial dynasties, Delhi unites Mughal courtly miniature painting, Urdu calligraphy, and master goldsmithing.",
    artForms: [
      { name: "Zardozi Gold Embroidery", desc: "Opulent metallic thread embroidery using gold, silver, and pearls, patronized by Mughal courts." },
      { name: "Mughal Calligraphy & Miniature", desc: "Illuminated Quranic and court manuscripts painted with microscopic precision and gemstone pigments." },
      { name: "Meenakari Enamel Art", desc: "Vibrant glass enamel fused onto gold and silver jewelry in Chandni Chowk's ancient ateliers." }
    ],
    heritage: ["Red Fort (UNESCO)", "Qutub Minar (UNESCO)", "Humayun's Tomb (UNESCO)"],
    fact: "Humayun's Tomb, built in 1570, was the first garden-tomb on the Indian subcontinent and provided the direct architectural blueprint for the Taj Mahal.",
    color: "#C25D42",
    image: "/images/art_gallery.jpg"
  },
  "Haryana": {
    region: "North India",
    capital: "Chandigarh",
    intro: "The historic land of the Bhagavad Gita at Kurukshetra, famed for Panipat handlooms, brass casting, and colourful folk pottery.",
    artForms: [
      { name: "Panipat Durrie & Handloom", desc: "Sturdy geometric cotton and wool flat-woven rugs and tapestries." },
      { name: "Rewari Brass & Metal Castings", desc: "Handcrafted traditional brass cookware, lamps, and ornamental water vessels." },
      { name: "Clay & Terracotta Pottery", desc: "Painted earthen pots with ochre and white slip motifs for village festivals." }
    ],
    heritage: ["Brahma Sarovar, Kurukshetra", "Rakhigarhi Indus Valley Site", "Pinjore Mughal Gardens"],
    fact: "Rakhigarhi in Haryana is the largest recognized urban metropolis of the ancient Indus Valley Civilization, dating back over 7,000 years.",
    color: "#D4A054",
    image: "/images/storytelling.jpg"
  },
  "Jharkhand": {
    region: "East India",
    capital: "Ranchi",
    intro: "The 'Forest Region' is home to luminous indigenous mural arts — Sohrai and Khovar — rendered on village mud walls with wild mineral pigments.",
    artForms: [
      { name: "Sohrai & Khovar Painting (GI)", desc: "Sacred tribal mural paintings using comb-scraping and natural red, black, and white clay." },
      { name: "Pyatkar Scroll Painting", desc: "One of India's oldest folk scroll traditions, narrating life after death and tribal epics." },
      { name: "Chhau Dance Masks", desc: "Clay and paper-mache masks with exaggerated heroic expressions worn during martial dance rituals." }
    ],
    heritage: ["Baidyanath Dham, Deoghar", "Maluti Terracotta Temples", "Parasnath Hill (Shikharji)"],
    fact: "Sohrai and Khovar wall art is created by women using simple broken combs, chewed twigs, and natural ochre to bless marriages and harvests.",
    color: "#A87042",
    image: "/images/art_gallery.jpg"
  },
  "Lakshadweep": {
    region: "Island Territory",
    capital: "Kavaratti",
    intro: "An idyllic string of 36 coral atolls renowned for coconut coir tapestries, coral stone mosques, and oceanic maritime music.",
    artForms: [
      { name: "Coir & Coconut Fiber Weaving", desc: "Hand-braided golden coir ropes, mats, and maritime nets woven from seasoned coconut husks." },
      { name: "Coral Stone Woodcarving", desc: "Intricate mosque timber ceilings carved from native timber and driftwood." },
      { name: "Kolkali Folk Dance", desc: "Rhythmic stick dance accompanied by traditional ocean-faring ballads and drums." }
    ],
    heritage: ["Ujra Mosque, Kavaratti", "Minicoy Island Lighthouse", "Agatti Coral Lagoons"],
    fact: "Kavaratti's 17th-century Ujra Mosque features an intricately carved wooden ceiling fashioned from driftwood without a single metal nail.",
    color: "#2E999E",
    image: "/images/hero_bg.jpg"
  },
  "Manipur": {
    region: "Northeast India",
    capital: "Imphal",
    intro: "The 'Jeweled Land' is globally celebrated for classical Manipuri Raas Leela dance, wheel-less black stone pottery, and regal silk weaving.",
    artForms: [
      { name: "Longpi Black Stone Pottery", desc: "Ancient craft of molding pottery from crushed serpentinite rock and black clay by hand without a wheel." },
      { name: "Manipuri Raas Leela Dance", desc: "Gentle, lyrical classical dance featuring bell-shaped Kumil skirts adorned with mirrors." },
      { name: "Shaphee Lanphee Textile", desc: "Embroidered black and red ceremonial shawl displaying cosmic and celestial motifs." }
    ],
    heritage: ["Kangla Palace", "Loktak Lake (Floating Phumdis)", "Govindaji Temple"],
    fact: "Longpi black pottery is burnished to a mirror sheen with leaves from local trees instead of synthetic glaze, and can be used directly on flame.",
    color: "#9A4B7A",
    image: "/images/storytelling.jpg"
  },
  "Mizoram": {
    region: "Northeast India",
    capital: "Aizawl",
    intro: "Perched amidst mist-shrouded ridges, Mizoram is celebrated for dazzling geometric Puan handloom textiles, Cheraw bamboo dancing, and cane mastery.",
    artForms: [
      { name: "Puan Handloom Weaving", desc: "Intricate horizontal woven skirts and wraps featuring bold red, black, and white diamond motifs." },
      { name: "Cheraw Bamboo Dance", desc: "A breathtaking dance where performers step gracefully in and out of clapping horizontal bamboo poles." },
      { name: "Khang Cane Baskets", desc: "Fine woven bamboo carrying baskets engineered with waterproof rain-covers." }
    ],
    heritage: ["Reiek Heritage Village", "Vantawng Falls", "Dampa Sanctuary"],
    fact: "The Cheraw bamboo dance was originally performed to ensure a safe passage for the soul of a mother who passed away during childbirth.",
    color: "#4C8A6B",
    image: "/images/hero_bg.jpg"
  },
  "Nagaland": {
    region: "Northeast India",
    capital: "Kohima",
    intro: "Home to 16 proud indigenous tribes, Nagaland is renowned for its symbolic warrior textiles, glass beadwork, wood carvings, and the Hornbill Festival.",
    artForms: [
      { name: "Naga Tribal Shawls", desc: "Hand-woven backstrap loom shawls where each color, stripe, and symbol identifies the wearer's clan and status." },
      { name: "Naga Wood Carving", desc: "Massive morung (bachelor dormitory) pillars and gates carved with hornbill birds, tigers, and human figures." },
      { name: "Tribal Bead & Metal Jewelry", desc: "Carnelian beads, brass mini-masks, and cowrie shell necklaces worn in ceremonial dances." }
    ],
    heritage: ["Hornbill Festival Ground (Kisama)", "Kohima War Memorial", "Dzukou Valley"],
    fact: "Each Naga shawl pattern is a visual coat of arms — designs like the Tsungkotepsu were traditionally earned through extraordinary communal valor.",
    color: "#B8483B",
    image: "/images/art_gallery.jpg"
  },
  "Puducherry": {
    region: "South India",
    capital: "Puducherry",
    intro: "The French Riviera of the East, blending French colonial boulevards with Tamil architecture, handmade rag paper, and artistic ceramics.",
    artForms: [
      { name: "Auroville Ceramics & Stoneware", desc: "Contemporary glazed studio pottery and stoneware using local clays and wood-firing kilns." },
      { name: "Handmade Cotton Rag Paper", desc: "High-grade tactile paper made at Sri Aurobindo Ashram mills from recycled 100% cotton scraps." },
      { name: "Tiruvannamalai Bronze Casting", desc: "Chola-style cire perdue bronze sculptures of Hindu deities." }
    ],
    heritage: ["Auroville Matrimandir", "French Quarter (White Town)", "Sri Aurobindo Ashram"],
    fact: "Auroville's Matrimandir sphere is coated in 1,414 concave gold-leaf tiles and houses the world's largest optically pure glass crystal.",
    color: "#DE8E43",
    image: "/images/storytelling.jpg"
  },
  "Tripura": {
    region: "Northeast India",
    capital: "Agartala",
    intro: "An ancient royal kingdom showcasing the colossal rock-carvings of Unakoti, royal lake palaces, and exquisite bamboo craftsmanship.",
    artForms: [
      { name: "Bamboo Craft & Sculptures", desc: "Extraordinarily delicate woven mats, lampshades, and carved figures made from native muli bamboo." },
      { name: "Risa Hand-Woven Textile", desc: "A colourful, hand-woven tribal chest cloth adorned with elaborate geometric thread motifs." },
      { name: "Unakoti Rock-Cut Reliefs", desc: "Ancient 8th-9th century gigantic stone reliefs of Lord Shiva carved into living rock cliffs." }
    ],
    heritage: ["Unakoti Rock Carvings", "Neermahal Water Palace", "Ujjayanta Palace"],
    fact: "Unakoti means 'one less than a crore' (9,999,999) in Bengali, referring to the legendary countless stone deities carved into its green hills.",
    color: "#856696",
    image: "/images/hero_bg.jpg"
  },
  "Uttarakhand": {
    region: "North India",
    capital: "Dehradun",
    intro: "The Land of the Gods cradling the sacred Ganges source, famed for sacred Aipan floor painting, Ringal bamboo craft, and wooden temple architecture.",
    artForms: [
      { name: "Aipan Ritual Art", desc: "Geometric folk patterns painted with rice paste (Biswar) over a terracotta-red clay background to invite prosperity." },
      { name: "Kumaoni Wood Carving", desc: "Intricately carved ornamental wooden doorways (Kholi) and window casements on traditional hill homes." },
      { name: "Ringal Bamboo Weaving", desc: "Sturdy baskets and storage vessels hand-woven by artisan communities using high-altitude dwarf bamboo." }
    ],
    heritage: ["Valley of Flowers (UNESCO)", "Kedarnath & Badrinath Temples", "Nanda Devi Biosphere"],
    fact: "Aipan floor drawings are made with the ring finger of the right hand without any stencils or rulers, handed down across generations of women.",
    color: "#4C8A96",
    image: "/images/art_gallery.jpg"
  },
  "Andaman and Nicobar Islands": {
    region: "Island Territory",
    capital: "Port Blair",
    intro: "Pristine tropical islands holding Indigenous heritage, padauk timber craftsmanship, and the national freedom memorial of Cellular Jail.",
    artForms: [
      { name: "Padauk Woodcraft", desc: "Hand-carved trays, furniture, and sculptures crafted from rich red Andaman Padauk timber." },
      { name: "Shell & Mother-of-Pearl Art", desc: "Carved mother-of-pearl lamps and ornamental tabletop artifacts from local sea shells." },
      { name: "Nicobari Cane Weaving", desc: "Traditional ceremonial hats and mats woven from wild jungle cane." }
    ],
    heritage: ["Cellular Jail National Memorial", "Ross Island British Ruins", "Radhanagar Beach, Havelock"],
    fact: "Andaman Padauk timber is renowned for its natural crimson shade and musical resonance; it was used to craft the furniture of Buckingham Palace.",
    color: "#2C7D73",
    image: "/images/storytelling.jpg"
  }
};

// Aliases mapping to handle variations in state naming
const STATE_ALIASES = {
  "jammu and kashmir": "Jammu & Kashmir",
  "andaman and nicobar": "Andaman and Nicobar Islands",
  "andaman & nicobar": "Andaman and Nicobar Islands",
  "dadra and nagar haveli and daman and diu": "Dadra and Nagar Haveli",
  "daman & diu": "Daman and Diu",
  "dadra & nagar haveli": "Dadra and Nagar Haveli",
  "orissa": "Odisha",
  "uttaranchal": "Uttarakhand",
  "pondicherry": "Puducherry"
};

export function getStateData(name) {
  if (!name) return null;
  if (statesData[name]) return statesData[name];

  const lower = name.trim().toLowerCase();
  if (STATE_ALIASES[lower] && statesData[STATE_ALIASES[lower]]) {
    return statesData[STATE_ALIASES[lower]];
  }

  const clean = lower.replace(/&/g, 'and').replace(/\s+/g, ' ');
  for (const [key, val] of Object.entries(statesData)) {
    const kClean = key.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, ' ');
    if (kClean === clean || clean.includes(kClean) || kClean.includes(clean)) {
      return val;
    }
  }

  return null;
}

export function getStateExploreUrl(stateName, stateData) {
  if (stateData?.exploreUrl) return stateData.exploreUrl;

  const overrides = {
    "Dadra and Nagar Haveli": "https://en.wikipedia.org/wiki/Dadra_and_Nagar_Haveli_and_Daman_and_Diu",
    "Daman and Diu": "https://en.wikipedia.org/wiki/Dadra_and_Nagar_Haveli_and_Daman_and_Diu",
    "Lakshadweep": "https://en.wikipedia.org/wiki/Lakshadweep",
    "Puducherry": "https://en.wikipedia.org/wiki/Puducherry",
    "Andaman and Nicobar Islands": "https://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands",
    "Andaman & Nicobar Islands": "https://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands",
    "Chandigarh": "https://en.wikipedia.org/wiki/Chandigarh"
  };

  if (stateName && overrides[stateName]) {
    return overrides[stateName];
  }

  const canonical = (stateName || '').replace(/&/g, 'and').trim().replace(/\s+/g, '_');
  return `https://en.wikipedia.org/wiki/Culture_of_${encodeURIComponent(canonical)}`;
}


export const artFormsGallery = [
  {
    id: "madhubani",
    name: "Madhubani",
    region: "Bihar, Mithila",
    tradition: "Painting",
    desc: "Geometric nature-inspired paintings by Mithila women, passed mother to daughter for 2,500+ years. Each motif carries symbolic meaning — fish for fertility, lotus for purity, peacock for beauty.",
    era: "Ancient, continuous",
    image: "/images/art_gallery.jpg"
  },
  {
    id: "warli",
    name: "Warli",
    region: "Maharashtra",
    tradition: "Tribal Painting",
    desc: "Stark white geometric forms on earth-toned backgrounds — the circle, triangle, and square form the entire visual language of the Warli tribe's narrative art.",
    era: "Prehistoric, c. 2500 BCE",
    image: "/images/storytelling.jpg"
  },
  {
    id: "pattachitra",
    name: "Pattachitra",
    region: "Odisha",
    tradition: "Scroll Painting",
    desc: "Narrative paintings on cloth treated with chalk and gum, with bold outlines and natural pigments from stones, conch shells, and lamp black. Each depicts stories of Lord Jagannath.",
    era: "12th century CE",
    image: "/images/art_gallery.jpg"
  },
  {
    id: "tanjore",
    name: "Tanjore",
    region: "Tamil Nadu",
    tradition: "Classical Painting",
    desc: "Rich surface texture, gold foil detailing, and semi-precious stones set into devotional images of Hindu deities — the supreme expression of South Indian court aesthetics.",
    era: "16th–17th century CE",
    image: "/images/hero_bg.jpg"
  },
  {
    id: "gond",
    name: "Gond Art",
    region: "Madhya Pradesh",
    tradition: "Tribal Art",
    desc: "Dotted and dashed lines forming vibrant animals, trees, and mythological beings — the Gondi belief that viewing a good image brings good fortune drives this prolific art form.",
    era: "Continuous, living tradition",
    image: "/images/storytelling.jpg"
  },
  {
    id: "kalamkari",
    name: "Kalamkari",
    region: "Andhra Pradesh",
    tradition: "Cloth Painting",
    desc: "Hand-drawn and block-printed narrative cloth paintings using a pen (kalam) and natural dyes — temple hangings depicting Ramayana and Mahabharata stories.",
    era: "Ancient, 3,000+ years",
    image: "/images/art_gallery.jpg"
  },
  {
    id: "phad",
    name: "Phad Painting",
    region: "Rajasthan",
    tradition: "Scroll Painting",
    desc: "Long narrative cloth scrolls depicting the heroic deeds of Rajasthani folk deities, displayed and performed by Bhopa priests — a portable temple tradition.",
    era: "700+ years",
    image: "/images/hero_bg.jpg"
  },
  {
    id: "thangka",
    name: "Thangka",
    region: "Sikkim, Ladakh",
    tradition: "Buddhist Scroll Art",
    desc: "Meticulous Buddhist paintings on cotton or silk, depicting mandalas, deities, and cosmic diagrams. Each color has ritual significance; a single thangka may take years to complete.",
    era: "7th century CE",
    image: "/images/storytelling.jpg"
  }
];
