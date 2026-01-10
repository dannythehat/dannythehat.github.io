import json

# New destinations to add
new_destinations = [
    {
        "id": "santorini-greece-island-hopping",
        "slug": "santorini-greece-island-hopping",
        "title": "Santorini & Greek Islands",
        "subtitle": "Sunset Views & Aegean Dreams",
        "location": "Cyclades Islands, Greece",
        "description": "Island-hop through the Cyclades, watching legendary sunsets from Santorini's clifftops, exploring ancient ruins, and swimming in crystal-clear Aegean waters.",
        "longDescription": "The Greek Islands are where mythology meets reality. This 10-day journey takes you through the heart of the Cyclades, starting in Athens before sailing to Santorini, Mykonos, and Naxos. Watch the sun set over Santorini's caldera from Oia, turning white-washed buildings golden and the sea into liquid fire. Explore the ancient ruins of Delos, birthplace of Apollo. Dance until dawn in Mykonos, then escape to quiet beaches on Naxos. Taste fresh seafood, local wine, and the famous Greek hospitality. Every island has its own character, but all share that intoxicating Mediterranean magic that makes you never want to leave.",
        "price": 2199,
        "currency": "USD",
        "duration": "10 days",
        "difficulty": "Easy",
        "imageUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-08-53-123Z-47bb5e31-nano-banana-pro_1768018132948.jpg",
        "thumbnailUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-08-53-123Z-47bb5e31-nano-banana-pro_1768018132948.jpg",
        "highlights": [
            "Iconic Santorini sunset views from Oia",
            "Island hopping by ferry",
            "Ancient ruins of Delos",
            "Beach time on Mykonos and Naxos",
            "Traditional Greek taverna dinners"
        ],
        "itinerary": [
            {"day": 1, "title": "Athens Arrival", "description": "Arrive in Greece's capital. Evening Acropolis visit."},
            {"day": 2, "title": "Athens Exploration", "description": "Ancient Agora, Plaka neighborhood, local food tour."},
            {"day": 3, "title": "Ferry to Santorini", "description": "Sail to Santorini. Settle into Oia. First sunset."},
            {"day": 4, "title": "Santorini Discovery", "description": "Volcanic beaches, Akrotiri ruins, wine tasting."},
            {"day": 5, "title": "Santorini at Leisure", "description": "Free day for hiking, beaches, or relaxation."},
            {"day": 6, "title": "Mykonos", "description": "Ferry to Mykonos. Explore Little Venice and windmills."},
            {"day": 7, "title": "Delos Day Trip", "description": "Ancient ruins of Apollo's birthplace. Afternoon beach time."},
            {"day": 8, "title": "Naxos", "description": "Ferry to Naxos. Quieter island vibes. Portara sunset."},
            {"day": 9, "title": "Naxos Exploration", "description": "Mountain villages, marble quarries, pristine beaches."},
            {"day": 10, "title": "Return to Athens", "description": "Ferry back. Farewell dinner in Plaka."}
        ],
        "affiliateLinks": {
            "gadventures": "https://www.gadventures.com/trips/sailing-greece-santorini-to-mykonos/AVGSM/"
        },
        "tags": ["islands", "beaches", "cultural", "relaxation", "photography"],
        "featured": true
    },
    {
        "id": "bali-cultural-adventure",
        "slug": "bali-cultural-adventure",
        "title": "Bali: Temples, Rice Terraces & Beaches",
        "subtitle": "Island of the Gods",
        "location": "Bali, Indonesia",
        "description": "Discover Bali's spiritual heart—ancient temples, emerald rice terraces, traditional ceremonies, and pristine beaches where time moves differently.",
        "longDescription": "Bali isn't just an island—it's a state of mind. This 12-day journey takes you beyond the tourist trail to experience authentic Balinese culture. Trek through the stunning Tegallalang rice terraces, witness sunrise from the summit of Mount Batur, and participate in a traditional purification ceremony at Tirta Empul temple. Learn to cook Balinese cuisine, watch traditional dance performances, and stay in a family compound to understand daily island life. From the artistic heart of Ubud to the surf beaches of Canggu and the peaceful shores of Amed, you'll discover why Bali is called the Island of the Gods.",
        "price": 1899,
        "currency": "USD",
        "duration": "12 days",
        "difficulty": "Moderate",
        "imageUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-09-15-749Z-05fb6ade-nano-banana-pro_1768018155546.png",
        "thumbnailUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-09-15-749Z-05fb6ade-nano-banana-pro_1768018155546.png",
        "highlights": [
            "Sunrise trek up Mount Batur volcano",
            "Tegallalang rice terrace walks",
            "Traditional purification ceremony",
            "Balinese cooking class",
            "Temple visits and cultural immersion"
        ],
        "itinerary": [
            {"day": 1, "title": "Denpasar Arrival", "description": "Arrive in Bali. Transfer to Ubud. Evening orientation."},
            {"day": 2, "title": "Ubud Cultural Day", "description": "Monkey Forest, Tegallalang rice terraces, traditional dance."},
            {"day": 3, "title": "Mount Batur Sunrise", "description": "Pre-dawn volcano trek. Hot springs relaxation."},
            {"day": 4, "title": "Cooking Class", "description": "Market visit and traditional Balinese cooking lesson."},
            {"day": 5, "title": "Tirta Empul Temple", "description": "Purification ceremony. Afternoon at leisure."},
            {"day": 6, "title": "East Bali", "description": "Drive to Amed. Snorkeling at Japanese shipwreck."},
            {"day": 7, "title": "Lempuyang Temple", "description": "Gates of Heaven photo. Traditional village visit."},
            {"day": 8, "title": "Beach Day", "description": "Relaxation on Amed's black sand beaches."},
            {"day": 9, "title": "Canggu", "description": "Transfer to surf town. Sunset at Tanah Lot temple."},
            {"day": 10, "title": "Surf & Relax", "description": "Optional surf lesson. Beach clubs and cafes."},
            {"day": 11, "title": "Uluwatu", "description": "Clifftop temple. Kecak fire dance at sunset."},
            {"day": 12, "title": "Departure", "description": "Morning at leisure. Transfer to airport."}
        ],
        "affiliateLinks": {
            "gadventures": "https://www.gadventures.com/trips/bali-to-lombok-adventure/AHBL/"
        },
        "tags": ["cultural", "temples", "beaches", "trekking", "spiritual"],
        "featured": true
    },
    {
        "id": "morocco-sahara-desert-adventure",
        "slug": "morocco-sahara-desert-adventure",
        "title": "Morocco: Sahara Desert & Imperial Cities",
        "subtitle": "From Marrakech to the Dunes",
        "location": "Morocco, North Africa",
        "description": "Journey through Morocco's imperial cities, over the Atlas Mountains, and deep into the Sahara Desert for a night under infinite stars.",
        "longDescription": "Morocco is a feast for the senses. This 10-day adventure takes you from the chaotic souks of Marrakech through the snow-capped Atlas Mountains to the golden dunes of the Sahara. Ride camels into Erg Chebbi at sunset, sleep in a traditional Berber camp, and wake to the desert sunrise. Explore the blue-painted streets of Chefchaouen, wander through ancient medinas in Fes, and haggle in spice markets. Stay in traditional riads, taste tagines and mint tea, and experience the legendary Moroccan hospitality. This is North Africa at its most enchanting—where every corner reveals a new color, scent, or story.",
        "price": 1699,
        "currency": "USD",
        "duration": "10 days",
        "difficulty": "Moderate",
        "imageUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-09-31-776Z-43424a4c-nano-banana-pro_1768018171599.jpg",
        "thumbnailUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-09-31-776Z-43424a4c-nano-banana-pro_1768018171599.jpg",
        "highlights": [
            "Camel trek into Sahara Desert",
            "Night in Berber desert camp",
            "Marrakech medina and souks",
            "Blue city of Chefchaouen",
            "Atlas Mountains crossing"
        ],
        "itinerary": [
            {"day": 1, "title": "Marrakech Arrival", "description": "Arrive in the Red City. Evening in Jemaa el-Fnaa square."},
            {"day": 2, "title": "Marrakech Exploration", "description": "Bahia Palace, souks, Majorelle Garden. Cooking class."},
            {"day": 3, "title": "Atlas Mountains", "description": "Drive over Tizi n'Tichka pass. Ait Benhaddou kasbah."},
            {"day": 4, "title": "Dades Valley", "description": "Through Todra Gorge. Overnight in valley guesthouse."},
            {"day": 5, "title": "Sahara Desert", "description": "Camel trek into Erg Chebbi. Sunset over dunes. Berber camp."},
            {"day": 6, "title": "Desert Sunrise", "description": "Wake to desert dawn. Drive to Fes via Ziz Valley."},
            {"day": 7, "title": "Fes Medina", "description": "Explore the world's largest car-free urban area. Tanneries visit."},
            {"day": 8, "title": "Chefchaouen", "description": "Drive to the blue city. Afternoon wandering painted streets."},
            {"day": 9, "title": "Chefchaouen to Casablanca", "description": "Coastal drive. Evening in Morocco's largest city."},
            {"day": 10, "title": "Departure", "description": "Hassan II Mosque visit. Transfer to airport."}
        ],
        "affiliateLinks": {
            "gadventures": "https://www.gadventures.com/trips/morocco-kasbahs-and-desert/DCMK/"
        },
        "tags": ["desert", "cultural", "adventure", "photography", "markets"],
        "featured": true
    },
    {
        "id": "new-zealand-south-island-adventure",
        "slug": "new-zealand-south-island-adventure",
        "title": "New Zealand: South Island Epic",
        "subtitle": "Fjords, Mountains & Adventure Capital",
        "location": "South Island, New Zealand",
        "description": "Experience Middle Earth—cruise through Milford Sound's fjords, hike glaciers, bungee jump in Queenstown, and witness landscapes that defy belief.",
        "longDescription": "New Zealand's South Island is adventure incarnate. This 14-day journey takes you through some of the most spectacular scenery on Earth. Cruise through Milford Sound's towering fjords, hike on Franz Josef Glacier, and explore the turquoise lakes of Mount Cook National Park. In Queenstown, the adventure capital of the world, try bungee jumping, jet boating, or simply soak in the alpine views. Drive the scenic route to Wanaka, kayak in Abel Tasman National Park, and taste world-class wines in Marlborough. From the Southern Alps to the Pacific coast, every day brings new wonders. This is the New Zealand that inspired Lord of the Rings—and it will inspire you too.",
        "price": 3499,
        "currency": "USD",
        "duration": "14 days",
        "difficulty": "Moderate",
        "imageUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-09-51-816Z-f805a909-nano-banana-pro_1768018191639.png",
        "thumbnailUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-09-51-816Z-f805a909-nano-banana-pro_1768018191639.png",
        "highlights": [
            "Milford Sound cruise",
            "Franz Josef Glacier hike",
            "Queenstown adventure activities",
            "Abel Tasman kayaking",
            "Mount Cook National Park"
        ],
        "itinerary": [
            {"day": 1, "title": "Christchurch Arrival", "description": "Arrive in the Garden City. Evening orientation."},
            {"day": 2, "title": "Mount Cook", "description": "Drive to Aoraki/Mount Cook. Hooker Valley hike."},
            {"day": 3, "title": "Queenstown", "description": "Scenic drive. Settle into adventure capital."},
            {"day": 4, "title": "Milford Sound", "description": "Full day trip. Cruise through dramatic fjords."},
            {"day": 5, "title": "Queenstown Adventure", "description": "Bungee, jet boat, or gondola. Your choice of adrenaline."},
            {"day": 6, "title": "Wanaka", "description": "Drive to Wanaka. Roy's Peak hike or lake activities."},
            {"day": 7, "title": "West Coast", "description": "Drive to Franz Josef. Evening hot pools."},
            {"day": 8, "title": "Glacier Hike", "description": "Guided hike on Franz Josef Glacier."},
            {"day": 9, "title": "Pancake Rocks", "description": "Coastal drive. Punakaiki blowholes. Hokitika Gorge."},
            {"day": 10, "title": "Abel Tasman", "description": "Drive to Nelson. Prepare for coastal paradise."},
            {"day": 11, "title": "Abel Tasman Kayaking", "description": "Full day sea kayaking. Golden beaches."},
            {"day": 12, "title": "Marlborough Sounds", "description": "Wine tasting in Marlborough region."},
            {"day": 13, "title": "Kaikoura", "description": "Whale watching. Coastal scenery."},
            {"day": 14, "title": "Return to Christchurch", "description": "Final drive. Departure."}
        ],
        "affiliateLinks": {
            "gadventures": "https://www.gadventures.com/trips/new-zealand-south-island-encompassed/AVNZS/"
        },
        "tags": ["adventure", "hiking", "fjords", "glaciers", "wildlife"],
        "featured": true
    },
    {
        "id": "japan-cherry-blossom-season",
        "slug": "japan-cherry-blossom-season",
        "title": "Japan: Cherry Blossom Season",
        "subtitle": "Sakura, Temples & Tradition",
        "location": "Tokyo to Kyoto, Japan",
        "description": "Experience Japan during cherry blossom season—ancient temples framed by pink petals, traditional tea ceremonies, and the perfect blend of old and new.",
        "longDescription": "Japan during sakura season is pure magic. This 12-day journey times your visit perfectly with cherry blossom season (late March to early April), taking you from Tokyo's neon-lit streets to Kyoto's zen gardens. Watch cherry blossoms fall like snow in Ueno Park, participate in a traditional tea ceremony, and sleep in a ryokan with views of Mount Fuji. Explore ancient temples in Kyoto, walk through thousands of red torii gates at Fushimi Inari, and experience the deer park in Nara. Ride the bullet train, taste authentic sushi and ramen, and witness how Japan honors its past while embracing the future. The cherry blossoms bloom for only two weeks—this is your chance to see them.",
        "price": 3899,
        "currency": "USD",
        "duration": "12 days",
        "difficulty": "Easy",
        "imageUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-10-07-426Z-9728097f-nano-banana-pro_1768018207254.jpg",
        "thumbnailUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-10-07-426Z-9728097f-nano-banana-pro_1768018207254.jpg",
        "highlights": [
            "Cherry blossom viewing in peak season",
            "Traditional tea ceremony",
            "Mount Fuji views",
            "Bullet train experience",
            "Kyoto temple circuit"
        ],
        "itinerary": [
            {"day": 1, "title": "Tokyo Arrival", "description": "Arrive in Japan's capital. Evening in Shibuya."},
            {"day": 2, "title": "Tokyo Exploration", "description": "Senso-ji Temple, Meiji Shrine, Harajuku. Cherry blossom viewing."},
            {"day": 3, "title": "Mount Fuji Day Trip", "description": "Lake Kawaguchi. Fuji views with cherry blossoms."},
            {"day": 4, "title": "Tokyo Markets", "description": "Tsukiji Outer Market, teamLab Borderless, Akihabara."},
            {"day": 5, "title": "Hakone", "description": "Hot springs town. Ryokan stay with kaiseki dinner."},
            {"day": 6, "title": "Bullet Train to Kyoto", "description": "Shinkansen experience. Arrive in ancient capital."},
            {"day": 7, "title": "Kyoto Temples", "description": "Kinkaku-ji, Ryoan-ji zen garden, Arashiyama bamboo forest."},
            {"day": 8, "title": "Fushimi Inari", "description": "10,000 torii gates. Gion geisha district evening."},
            {"day": 9, "title": "Tea Ceremony", "description": "Traditional tea ceremony. Philosopher's Path cherry blossoms."},
            {"day": 10, "title": "Nara Day Trip", "description": "Todai-ji Temple, friendly deer park, Kasuga Taisha."},
            {"day": 11, "title": "Osaka", "description": "Day trip to Osaka. Street food tour in Dotonbori."},
            {"day": 12, "title": "Departure", "description": "Morning at leisure. Transfer to Kansai Airport."}
        ],
        "affiliateLinks": {
            "gadventures": "https://www.gadventures.com/trips/japan-express/AHJX/"
        },
        "tags": ["cultural", "cherry-blossoms", "temples", "food", "photography"],
        "featured": true
    },
    {
        "id": "norway-fjords-northern-lights",
        "slug": "norway-fjords-northern-lights",
        "title": "Norway: Fjords & Northern Lights",
        "subtitle": "Arctic Magic & Dramatic Landscapes",
        "location": "Western Norway & Arctic Circle",
        "description": "Cruise through Norway's legendary fjords, chase the Northern Lights in the Arctic, and experience the raw beauty of Scandinavia's wilderness.",
        "longDescription": "Norway is where nature shows off. This 10-day winter journey takes you through the country's most spectacular landscapes. Cruise through the UNESCO-listed Geirangerfjord and Nærøyfjord, surrounded by towering cliffs and cascading waterfalls. Take the scenic Bergen Railway, one of the world's most beautiful train journeys. Then head north of the Arctic Circle to Tromsø for Northern Lights hunting—watching the aurora borealis dance across the polar sky is a bucket-list moment. Try dog sledding, visit a Sami reindeer camp, and warm up in cozy Norwegian cabins. From fjords to the Arctic, Norway in winter is pure magic.",
        "price": 3299,
        "currency": "USD",
        "duration": "10 days",
        "difficulty": "Moderate",
        "imageUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-10-37-828Z-8b126748-nano-banana-pro_1768018237584.jpg",
        "thumbnailUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-10-37-828Z-8b126748-nano-banana-pro_1768018237584.jpg",
        "highlights": [
            "Northern Lights hunting in Tromsø",
            "Geirangerfjord cruise",
            "Bergen Railway scenic journey",
            "Dog sledding experience",
            "Sami cultural visit"
        ],
        "itinerary": [
            {"day": 1, "title": "Oslo Arrival", "description": "Arrive in Norway's capital. Viking Ship Museum."},
            {"day": 2, "title": "Bergen Railway", "description": "Scenic train to Bergen. Settle into fjord city."},
            {"day": 3, "title": "Bergen Exploration", "description": "Bryggen wharf, fish market, Fløyen funicular."},
            {"day": 4, "title": "Sognefjord", "description": "Norway's longest fjord. Flåm Railway."},
            {"day": 5, "title": "Geirangerfjord", "description": "UNESCO fjord cruise. Seven Sisters waterfall."},
            {"day": 6, "title": "Fly to Tromsø", "description": "Enter the Arctic. Evening Northern Lights hunt."},
            {"day": 7, "title": "Dog Sledding", "description": "Husky sledding adventure. Afternoon aurora preparation."},
            {"day": 8, "title": "Sami Culture", "description": "Reindeer camp visit. Traditional Sami lunch. Evening lights."},
            {"day": 9, "title": "Arctic Cathedral", "description": "Tromsø sightseeing. Final Northern Lights chase."},
            {"day": 10, "title": "Departure", "description": "Fly to Oslo and onward."}
        ],
        "affiliateLinks": {
            "gadventures": "https://www.gadventures.com/trips/northern-lights-of-scandinavia/AVNLS/"
        },
        "tags": ["northern-lights", "fjords", "winter", "arctic", "photography"],
        "featured": true
    },
    {
        "id": "vietnam-halong-bay-adventure",
        "slug": "vietnam-halong-bay-adventure",
        "title": "Vietnam: Halong Bay to Mekong Delta",
        "subtitle": "Limestone Karsts & River Life",
        "location": "Vietnam, Southeast Asia",
        "description": "Cruise through Halong Bay's limestone islands, explore ancient Hoi An, and discover the floating markets of the Mekong Delta.",
        "longDescription": "Vietnam is a country of contrasts and beauty. This 14-day journey takes you from north to south, experiencing the full spectrum of Vietnamese culture. Cruise overnight through Halong Bay's emerald waters, kayaking between limestone karsts. Explore Hanoi's Old Quarter, learn to cook pho, and visit the ancient imperial city of Hue. Wander the lantern-lit streets of Hoi An and get custom clothes tailored. Experience the energy of Ho Chi Minh City, then slow down in the Mekong Delta, visiting floating markets and staying with local families. From street food to stunning landscapes, Vietnam will capture your heart.",
        "price": 1999,
        "currency": "USD",
        "duration": "14 days",
        "difficulty": "Easy",
        "imageUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-10-57-068Z-19f5d77c-nano-banana-pro_1768018256891.jpg",
        "thumbnailUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-10-57-068Z-19f5d77c-nano-banana-pro_1768018256891.jpg",
        "highlights": [
            "Halong Bay overnight cruise",
            "Hoi An ancient town",
            "Mekong Delta homestay",
            "Vietnamese cooking classes",
            "Motorbike street food tour"
        ],
        "itinerary": [
            {"day": 1, "title": "Hanoi Arrival", "description": "Arrive in Vietnam's capital. Old Quarter exploration."},
            {"day": 2, "title": "Hanoi Discovery", "description": "Ho Chi Minh Mausoleum, Temple of Literature, water puppet show."},
            {"day": 3, "title": "Halong Bay Cruise", "description": "Drive to Halong. Board junk boat. Kayaking and swimming."},
            {"day": 4, "title": "Halong to Hue", "description": "Morning cruise. Fly to Hue. Imperial city."},
            {"day": 5, "title": "Hue Exploration", "description": "Citadel, royal tombs, Perfume River boat trip."},
            {"day": 6, "title": "Hai Van Pass to Hoi An", "description": "Scenic coastal drive. Arrive in ancient town."},
            {"day": 7, "title": "Hoi An", "description": "Old town walking tour. Tailor visits. Lantern evening."},
            {"day": 8, "title": "Cooking Class", "description": "Market visit and Vietnamese cooking lesson."},
            {"day": 9, "title": "My Son Temples", "description": "Ancient Cham ruins. Afternoon at leisure."},
            {"day": 10, "title": "Fly to Ho Chi Minh City", "description": "Arrive in Saigon. War Remnants Museum."},
            {"day": 11, "title": "Cu Chi Tunnels", "description": "Underground tunnel network. City street food tour."},
            {"day": 12, "title": "Mekong Delta", "description": "Drive to delta. Homestay with local family."},
            {"day": 13, "title": "Floating Markets", "description": "Early morning market visit. Boat through canals."},
            {"day": 14, "title": "Return to Saigon", "description": "Drive back. Farewell dinner. Departure."}
        ],
        "affiliateLinks": {
            "gadventures": "https://www.gadventures.com/trips/vietnam-express/AVVX/"
        },
        "tags": ["cultural", "cruising", "food", "unesco", "adventure"],
        "featured": true
    },
    {
        "id": "scotland-highlands-islands",
        "slug": "scotland-highlands-islands",
        "title": "Scotland: Highlands & Islands",
        "subtitle": "Castles, Lochs & Whisky",
        "location": "Scottish Highlands & Islands",
        "description": "Journey through misty highlands, visit ancient castles, taste single malt whisky, and discover the wild beauty of Scotland's islands.",
        "longDescription": "Scotland is romance and ruggedness combined. This 10-day journey takes you deep into the Highlands and out to the mystical Isle of Skye. Drive through Glen Coe's dramatic valleys, search for Nessie at Loch Ness, and explore fairy pools and ancient castles. Visit whisky distilleries to taste Scotland's liquid gold, stay in historic inns, and hear tales of clans and battles. Hike to viewpoints that inspired Outlander, photograph Highland cows, and experience traditional ceilidh dancing. From Edinburgh's cobbled streets to Skye's otherworldly landscapes, Scotland will enchant you with its wild beauty and warm hospitality.",
        "price": 2499,
        "currency": "USD",
        "duration": "10 days",
        "difficulty": "Moderate",
        "imageUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-11-11-896Z-5aed08f3-nano-banana-pro_1768018271723.jpg",
        "thumbnailUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-11-11-896Z-5aed08f3-nano-banana-pro_1768018271723.jpg",
        "highlights": [
            "Isle of Skye exploration",
            "Whisky distillery tours",
            "Loch Ness visit",
            "Glen Coe hiking",
            "Edinburgh Castle"
        ],
        "itinerary": [
            {"day": 1, "title": "Edinburgh Arrival", "description": "Arrive in Scotland's capital. Royal Mile walk."},
            {"day": 2, "title": "Edinburgh Exploration", "description": "Edinburgh Castle, Arthur's Seat hike, whisky tasting."},
            {"day": 3, "title": "Stirling & Loch Lomond", "description": "Stirling Castle. Drive to Loch Lomond."},
            {"day": 4, "title": "Glen Coe", "description": "Through dramatic glen. Fort William. Ben Nevis views."},
            {"day": 5, "title": "Isle of Skye", "description": "Drive to Skye. Portree harbor. Evening at leisure."},
            {"day": 6, "title": "Skye Exploration", "description": "Fairy Pools, Old Man of Storr, Quiraing. Dramatic landscapes."},
            {"day": 7, "title": "Eilean Donan Castle", "description": "Scotland's most photographed castle. Drive to Inverness."},
            {"day": 8, "title": "Loch Ness", "description": "Cruise on the loch. Urquhart Castle. Nessie hunting."},
            {"day": 9, "title": "Speyside Whisky Trail", "description": "Visit two distilleries. Taste single malts."},
            {"day": 10, "title": "Return to Edinburgh", "description": "Drive south. Farewell dinner. Departure."}
        ],
        "affiliateLinks": {
            "gadventures": "https://www.gadventures.com/trips/scotland-highland-experience/AVSH/"
        },
        "tags": ["highlands", "castles", "whisky", "hiking", "cultural"],
        "featured": true
    },
    {
        "id": "croatia-dalmatian-coast",
        "slug": "croatia-dalmatian-coast",
        "title": "Croatia: Dalmatian Coast & Islands",
        "subtitle": "Adriatic Paradise",
        "location": "Croatian Coast, Adriatic Sea",
        "description": "Sail the Adriatic, explore medieval walled cities, swim in crystal-clear waters, and discover why Croatia is Europe's hottest destination.",
        "longDescription": "Croatia's Dalmatian Coast is where history meets paradise. This 12-day journey takes you from the ancient walls of Dubrovnik to the Roman ruins of Split, with island-hopping in between. Walk Dubrovnik's marble streets (yes, the King's Landing from Game of Thrones), sail to the lavender fields of Hvar, and party in Zrće Beach. Explore Diocletian's Palace in Split, kayak to hidden beaches, and taste fresh seafood and local wines. Visit Plitvice Lakes National Park with its cascading turquoise pools, and discover why Croatia has become the Mediterranean's must-visit destination. The Adriatic has never looked so good.",
        "price": 2299,
        "currency": "USD",
        "duration": "12 days",
        "difficulty": "Easy",
        "imageUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-11-32-137Z-3fd6f50d-nano-banana-pro_1768018291968.jpg",
        "thumbnailUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-11-32-137Z-3fd6f50d-nano-banana-pro_1768018291968.jpg",
        "highlights": [
            "Dubrovnik old town walking tour",
            "Island hopping by ferry",
            "Plitvice Lakes National Park",
            "Split's Diocletian Palace",
            "Adriatic sailing experience"
        ],
        "itinerary": [
            {"day": 1, "title": "Dubrovnik Arrival", "description": "Arrive in the Pearl of the Adriatic. City walls walk."},
            {"day": 2, "title": "Dubrovnik Exploration", "description": "Old town, cable car, Game of Thrones locations."},
            {"day": 3, "title": "Elaphiti Islands", "description": "Day trip island hopping. Swimming and beaches."},
            {"day": 4, "title": "Ferry to Korčula", "description": "Sail to Marco Polo's birthplace. Medieval town."},
            {"day": 5, "title": "Korčula", "description": "Wine tasting, beaches, optional water sports."},
            {"day": 6, "title": "Hvar Island", "description": "Ferry to glamorous Hvar. Lavender fields and nightlife."},
            {"day": 7, "title": "Hvar Exploration", "description": "Pakleni Islands boat trip. Beach clubs."},
            {"day": 8, "title": "Split", "description": "Ferry to Split. Diocletian's Palace tour."},
            {"day": 9, "title": "Plitvice Lakes", "description": "Day trip to UNESCO park. Cascading waterfalls."},
            {"day": 10, "title": "Zadar", "description": "Drive to Zadar. Sea Organ and Sun Salutation."},
            {"day": 11, "title": "Krka National Park", "description": "Waterfall swimming. Return to Split."},
            {"day": 12, "title": "Departure", "description": "Morning at leisure. Transfer to airport."}
        ],
        "affiliateLinks": {
            "gadventures": "https://www.gadventures.com/trips/croatia-sailing-adventure-split-to-dubrovnik/AVCS/"
        },
        "tags": ["islands", "beaches", "sailing", "cultural", "unesco"],
        "featured": true
    },
    {
        "id": "costa-rica-rainforest-adventure",
        "slug": "costa-rica-rainforest-adventure",
        "title": "Costa Rica: Rainforests & Beaches",
        "subtitle": "Pura Vida Paradise",
        "location": "Costa Rica, Central America",
        "description": "Zip-line through cloud forests, spot sloths and toucans, surf Pacific waves, and discover why Costa Rica is the happiest country on Earth.",
        "longDescription": "Costa Rica lives up to its name—the Rich Coast. This 12-day adventure takes you through rainforests, cloud forests, and pristine beaches. Zip-line through the Monteverde canopy, hike to waterfalls in Arenal, and soak in natural hot springs beneath an active volcano. Spot sloths, toucans, and howler monkeys in Manuel Antonio National Park, learn to surf in Tamarindo, and kayak through mangroves. Experience the 'Pura Vida' lifestyle—pure life—that makes Costa Rica one of the world's happiest countries. With 5% of the world's biodiversity packed into a country the size of West Virginia, every day brings new wildlife encounters and natural wonders.",
        "price": 2199,
        "currency": "USD",
        "duration": "12 days",
        "difficulty": "Moderate",
        "imageUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-11-57-835Z-f9b907cf-nano-banana-pro_1768018317418.png",
        "thumbnailUrl": "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-11-57-835Z-f9b907cf-nano-banana-pro_1768018317418.png",
        "highlights": [
            "Monteverde cloud forest zip-lining",
            "Arenal volcano hot springs",
            "Manuel Antonio wildlife spotting",
            "Pacific coast surfing",
            "Rainforest night walks"
        ],
        "itinerary": [
            {"day": 1, "title": "San José Arrival", "description": "Arrive in Costa Rica's capital. Evening orientation."},
            {"day": 2, "title": "Tortuguero", "description": "Drive and boat to Caribbean coast. Turtle nesting season."},
            {"day": 3, "title": "Tortuguero Canals", "description": "Canoe through jungle waterways. Wildlife spotting."},
            {"day": 4, "title": "Arenal Volcano", "description": "Drive to Arenal. Afternoon hot springs."},
            {"day": 5, "title": "Arenal Activities", "description": "Hanging bridges, waterfall hike, or zip-lining."},
            {"day": 6, "title": "Monteverde", "description": "Drive to cloud forest. Evening night walk."},
            {"day": 7, "title": "Monteverde Canopy", "description": "Zip-line adventure. Suspension bridges."},
            {"day": 8, "title": "Manuel Antonio", "description": "Drive to Pacific coast. Beach time."},
            {"day": 9, "title": "Manuel Antonio National Park", "description": "Guided wildlife hike. Sloths, monkeys, and beaches."},
            {"day": 10, "title": "Beach Day", "description": "Surfing lessons or relaxation. Optional kayaking."},
            {"day": 11, "title": "Return to San José", "description": "Scenic drive back. Farewell dinner."},
            {"day": 12, "title": "Departure", "description": "Morning at leisure. Transfer to airport."}
        ],
        "affiliateLinks": {
            "gadventures": "https://www.gadventures.com/trips/costa-rica-quest/AVCR/"
        },
        "tags": ["rainforest", "wildlife", "adventure", "beaches", "nature"],
        "featured": true
    }
]

print(json.dumps(new_destinations, indent=2))
