# 📦 Package Replacement Plan

## Overview

This document maps each placeholder package in `holidays.json` to real affiliate partners and outlines how we'll replace them tomorrow once you have affiliate links.

---

## 🗺️ Current Placeholder Packages Analysis

### ✅ KEEP AS-IS (Already Good):
These packages have realistic descriptions and just need affiliate link updates:

1. **Arctic Unnamed Slopes (Svalbard)** - Keep concept, update with G Adventures/Intrepid Arctic skiing tours
2. **Bolivia Death Road** - Keep concept, update with Viator/GetYourGuide/Gravity Bolivia links
3. **Congo Gorilla Trek** - Keep concept, update with Intrepid/Safari.com/Virunga links

### ⚠️ VERIFY AVAILABILITY:
These destinations may have limited tour operator access:

4. **Mauritania Iron Train** - Check G Adventures/Intrepid for Sahara alternatives
5. **Yemen Socotra** - May need to mark as "Currently Unavailable" due to travel restrictions
6. **Turkmenistan Gates of Hell** - Check G Adventures/Intrepid Central Asia tours

---

## 🔄 Tomorrow's Replacement Strategy

### Phase 1: Update Existing Packages (Priority)

#### Package: Arctic Unnamed Slopes
**Current Status:** Placeholder affiliate links  
**Action Tomorrow:**
- Search G Adventures for "Svalbard" or "Arctic skiing"
- Search Intrepid for "Arctic expeditions"
- Update `affiliateLinks` object with your real links
- Keep the amazing description (it's perfect!)

**Example Update:**
```json
"affiliateLinks": {
  "gAdventures": "YOUR_G_ADVENTURES_LINK_HERE",
  "intrepid": "YOUR_INTREPID_LINK_HERE",
  "viator": "YOUR_VIATOR_LINK_HERE"
}
```

---

#### Package: Bolivia Death Road
**Current Status:** Placeholder affiliate links  
**Action Tomorrow:**
- Search Viator for "Death Road Bolivia"
- Search GetYourGuide for "Death Road cycling"
- Add Gravity Bolivia direct link (if partnership confirmed)
- Update affiliate links

**Example Update:**
```json
"affiliateLinks": {
  "viator": "YOUR_VIATOR_DEATH_ROAD_LINK",
  "getYourGuide": "YOUR_GETYOURGUIDE_LINK",
  "gravityBolivia": "DIRECT_PARTNER_LINK_IF_AVAILABLE"
}
```

---

#### Package: Congo Gorilla Trek
**Current Status:** Placeholder affiliate links  
**Action Tomorrow:**
- Search Intrepid for "Gorilla trekking Congo" or "Virunga"
- Search Safari.com for "Congo gorilla"
- Search G Adventures for "Gorilla trekking"
- Add Virunga direct link (if partnership confirmed)

**Example Update:**
```json
"affiliateLinks": {
  "intrepid": "YOUR_INTREPID_GORILLA_LINK",
  "safari": "YOUR_SAFARI_COM_LINK",
  "gAdventures": "YOUR_G_ADVENTURES_LINK",
  "virunga": "DIRECT_PARTNER_LINK_IF_AVAILABLE"
}
```

---

### Phase 2: Add NEW Real Packages

Based on your approved affiliate programs, we'll add these NEW packages:

#### NEW Package Ideas from G Adventures:
1. **Everest Base Camp Trek** (Nepal)
2. **Patagonia Ice Trekking** (Argentina/Chile)
3. **Amazon Jungle Expedition** (Peru/Ecuador)
4. **Iceland Northern Lights & Glacier Hiking**
5. **Morocco Sahara Desert Trek**

#### NEW Package Ideas from Intrepid:
1. **Kilimanjaro Summit** (Tanzania)
2. **Trans-Siberian Railway** (Russia)
3. **Vietnam Motorbike Adventure**
4. **Jordan Petra & Wadi Rum**
5. **Antarctica Expedition Cruise**

#### NEW Package Ideas from Viator/GetYourGuide:
1. **Skydiving Dubai** (UAE)
2. **Bungee Jumping Queenstown** (New Zealand)
3. **Cage Diving with Great Whites** (South Africa)
4. **Volcano Boarding Nicaragua**
5. **Canyoning Swiss Alps**

---

### Phase 3: Event Calendar Integration

Link each month's festivals to real packages:

#### January: Harbin Ice Festival
- Add G Adventures "China Winter" package
- Link to Booking.com Harbin hotels

#### February: Rio Carnival
- Add Intrepid "Rio Carnival Experience"
- Link to Booking.com Rio hotels
- Add Viator "Carnival VIP packages"

#### March: Holi Festival
- Add G Adventures "India Holi Festival" tour
- Add Intrepid "Rajasthan Holi Experience"
- Link to Booking.com India hotels

#### April: Songkran Water Festival
- Add Intrepid "Thailand Songkran" package
- Link to Booking.com Bangkok/Chiang Mai hotels

#### May: Vesak (Buddha Day)
- Add G Adventures "Sri Lanka Cultural" tour
- Link to Booking.com Sri Lanka hotels

#### June: Midnight Sun
- Add G Adventures "Norway Midnight Sun"
- Add Intrepid "Iceland Summer Solstice"

#### July: Running of the Bulls
- Add Viator "Pamplona Running of Bulls" packages
- Link to Booking.com Pamplona hotels

#### August: Burning Man
- Add Viator "Burning Man transport" packages
- Link to Booking.com Reno/Nevada hotels

#### September: Oktoberfest
- Add GetYourGuide "Oktoberfest packages"
- Link to Booking.com Munich hotels

#### October: Day of the Dead
- Add G Adventures "Mexico Day of Dead" tour
- Add Intrepid "Oaxaca Day of Dead"

#### November: Diwali
- Add G Adventures "India Diwali" tour
- Link to Booking.com India hotels

#### December: Christmas Markets
- Add GetYourGuide "European Christmas Markets"
- Link to Booking.com European city hotels

---

## 📊 Package Structure Template

When adding new packages tomorrow, use this structure:

```json
{
  "id": "unique-slug-here",
  "slug": "unique-slug-here",
  "title": "Package Title",
  "subtitle": "Catchy Subtitle",
  "location": "Country/Region",
  "description": "Short 2-3 sentence description",
  "longDescription": "Detailed 3-4 paragraph description that sells the experience",
  "price": 0000,
  "currency": "USD",
  "duration": "X days",
  "difficulty": "Easy/Moderate/Challenging/Advanced/Expert/Extreme",
  "imageUrl": "https://images.unsplash.com/photo-XXXXX?w=1200&q=80",
  "thumbnailUrl": "https://images.unsplash.com/photo-XXXXX?w=600&q=80",
  "highlights": [
    "Highlight 1",
    "Highlight 2",
    "Highlight 3",
    "Highlight 4",
    "Highlight 5"
  ],
  "itinerary": [
    { "day": 1, "title": "Day 1 Title", "description": "What happens" },
    { "day": 2, "title": "Day 2 Title", "description": "What happens" }
  ],
  "affiliateLinks": {
    "gAdventures": "YOUR_LINK_HERE",
    "intrepid": "YOUR_LINK_HERE",
    "viator": "YOUR_LINK_HERE",
    "booking": "YOUR_LINK_HERE"
  },
  "tags": ["tag1", "tag2", "tag3"],
  "featured": true
}
```

---

## 🇬🇧 UK Stays Update Plan

### Current Status:
- ✅ Real packages with great descriptions
- ⚠️ Placeholder affiliate links

### Action Tomorrow:
Update ALL UK stays with your Booking.com affiliate links:

1. **Pinwheel Treehouse** → Search Booking.com, add your affiliate link
2. **Belle Tout Lighthouse** → Search Booking.com, add your affiliate link
3. **AirShip 002** → Search Booking.com or Cool Stays, add link
4. **West Usk Lighthouse** → Search Booking.com, add your affiliate link
5. **Fingal Floating Hotel** → Search Booking.com, add your affiliate link
6. **Malmaison Oxford Prison** → Search Booking.com, add your affiliate link
7. [All other UK stays] → Update with Booking.com affiliate links

**Process:**
1. Go to Booking.com
2. Search for property name
3. Copy property URL
4. Convert to affiliate link using your Booking.com affiliate dashboard
5. Update `ukStays.json`

---

## 🎯 Success Metrics

After tomorrow's update, we should have:

- ✅ **15-20 real international packages** with working affiliate links
- ✅ **All UK stays** updated with Booking.com affiliate links
- ✅ **12 months of events** linked to relevant packages
- ✅ **Multiple affiliate partners** per package (backup options)
- ✅ **Verified availability** for all packages
- ✅ **Accurate pricing** from affiliate partner sites

---

## 🚨 Important Notes

### Pricing Strategy:
- Use the ACTUAL price from the affiliate partner's website
- If price varies by season, use "From $XXX" format
- Always specify currency (USD, GBP, EUR)

### Image Strategy:
- Keep current Unsplash images (they're great!)
- Ensure images match the destination/activity
- Use high-quality images (1200px width minimum)

### Description Strategy:
- Keep the evocative, adventure-focused writing style
- Add specific details from real tour operators
- Include actual itinerary details from affiliate partners
- Mention real tour operator names in descriptions

### Affiliate Link Strategy:
- Always include 2-3 affiliate options per package
- Primary: Specialist tour operator (G Adventures, Intrepid)
- Secondary: Activity platform (Viator, GetYourGuide)
- Tertiary: Accommodation (Booking.com)

---

## ✅ Tomorrow's Checklist

- [ ] Review your completed affiliate applications
- [ ] Copy all approved affiliate links to tracking document
- [ ] Provide me with the tracking document
- [ ] I'll update `holidays.json` with real packages
- [ ] I'll update `ukStays.json` with Booking.com links
- [ ] I'll create event-to-package mappings
- [ ] I'll add 10-15 new real packages from approved partners
- [ ] We'll test all affiliate links
- [ ] We'll verify package availability
- [ ] Site will be ready to launch! 🚀

---

**Questions?** Add them here and we'll address tomorrow:

[Your questions]
