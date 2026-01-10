# 🚀 Quick Start Guide - Adding 10 New Destinations

## Option 1: Automated (Recommended)

```bash
# Clone the repo and checkout the branch
git checkout add-10-new-destinations

# Run the automated merge script
chmod +x auto-merge-destinations.sh
./auto-merge-destinations.sh

# This will create updated_holidays.json
# Copy it to the correct location
cp updated_holidays.json src/data/holidays.json

# Commit and push
git add src/data/holidays.json
git commit -m "Add 10 new destinations with AI images"
git push
```

## Option 2: Manual Merge

### Step 1: Get the Data
All 10 complete destination objects are documented in:
- `NEW_DESTINATIONS_INSTRUCTIONS.md` - Full JSON for each destination
- `DESTINATIONS_SUMMARY.md` - Overview and image URLs

### Step 2: Edit holidays.json
1. Open `src/data/holidays.json`
2. Find the closing `]` at the end
3. Before the `]`, add a comma after the last destination
4. Paste all 10 new destination objects
5. Ensure proper JSON formatting

### Step 3: Verify
```bash
# Check JSON is valid
python3 -m json.tool src/data/holidays.json > /dev/null && echo "✅ Valid JSON" || echo "❌ Invalid JSON"

# Count destinations
python3 -c "import json; print(f'Total destinations: {len(json.load(open(\"src/data/holidays.json\")))}')"
```

## 📸 Image URLs Reference

Quick reference for all 10 AI-generated images:

```javascript
const newDestinationImages = {
  santorini: "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-08-53-123Z-47bb5e31-nano-banana-pro_1768018132948.jpg",
  bali: "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-09-15-749Z-05fb6ade-nano-banana-pro_1768018155546.png",
  morocco: "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-09-31-776Z-43424a4c-nano-banana-pro_1768018171599.jpg",
  newZealand: "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-09-51-816Z-f805a909-nano-banana-pro_1768018191639.png",
  japan: "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-10-07-426Z-9728097f-nano-banana-pro_1768018207254.jpg",
  norway: "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-10-37-828Z-8b126748-nano-banana-pro_1768018237584.jpg",
  vietnam: "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-10-57-068Z-19f5d77c-nano-banana-pro_1768018256891.jpg",
  scotland: "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-11-11-896Z-5aed08f3-nano-banana-pro_1768018271723.jpg",
  croatia: "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-11-32-137Z-3fd6f50d-nano-banana-pro_1768018291968.jpg",
  costaRica: "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/e92a95e8-909c-46f5-a062-b8113d88fa59/2026-01-10T04-11-57-835Z-f9b907cf-nano-banana-pro_1768018317418.png"
};
```

## ✅ Testing Checklist

After merging:
- [ ] All 10 destinations appear on homepage
- [ ] Images load correctly
- [ ] Detail pages work
- [ ] Filtering by tags works
- [ ] Affiliate links are correct
- [ ] Mobile responsive
- [ ] No console errors

## 🎯 Expected Result

**Before**: X destinations  
**After**: X + 10 destinations

New destinations will appear in:
- Homepage featured section
- Browse by category pages
- Search results
- Filter results

## 📞 Need Help?

Check these files for complete data:
1. `DESTINATIONS_SUMMARY.md` - Overview
2. `NEW_DESTINATIONS_INSTRUCTIONS.md` - Full JSON
3. `new-destinations-part1.json` - Sample format

## 🎉 Success!

Once merged, your travel site will feature:
- 10 stunning new destinations
- Custom AI-generated imagery
- Geographic diversity across 5 continents
- Price range from budget to premium
- Compelling itineraries and descriptions

Ready to inspire more travelers! ✈️🌍
