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
  }
};

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
