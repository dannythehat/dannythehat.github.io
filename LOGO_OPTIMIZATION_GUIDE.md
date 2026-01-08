# Logo Optimization Guide

## Current Issue
Your logo.png is **1.4MB** which is too large and will slow down page load times. We need to compress it to ~100-150KB without losing quality.

## Quick Fix Options

### Option 1: Online Tools (Easiest - 2 minutes)
1. Download your logo from: `src/assets/logo.png`
2. Go to **TinyPNG** (https://tinypng.com)
3. Upload your logo
4. Download the compressed version
5. Replace the file in `src/assets/logo.png`

**Expected result:** 70-80% size reduction (1.4MB → ~200-300KB)

### Option 2: Squoosh (Best Quality - 3 minutes)
1. Download your logo from: `src/assets/logo.png`
2. Go to **Squoosh** (https://squoosh.app)
3. Upload your logo
4. Choose settings:
   - Format: **WebP** (best) or **PNG** (compatible)
   - Quality: **85-90%**
   - Resize if needed (max width: 800px is plenty for a logo)
5. Download and replace in `src/assets/logo.png`

**Expected result:** 80-90% size reduction (1.4MB → ~100-200KB)

### Option 3: ImageOptim (Mac Only - Best Results)
1. Download **ImageOptim** (free): https://imageoptim.com
2. Drag your logo.png into the app
3. It will automatically compress it
4. Replace the file in your repo

**Expected result:** 60-80% size reduction with zero quality loss

### Option 4: Command Line (For Developers)
If you have Node.js installed locally:

```bash
# Install sharp (image processing library)
npm install -g sharp-cli

# Compress the logo
sharp -i src/assets/logo.png -o src/assets/logo-optimized.png --webp quality=85

# Or keep as PNG
sharp -i src/assets/logo.png -o src/assets/logo-optimized.png --png compressionLevel=9
```

## Recommended Settings

### For PNG:
- **Compression Level:** 9 (maximum)
- **Color Depth:** 24-bit (if no transparency) or 32-bit (with transparency)
- **Max Width:** 800px (logos don't need to be huge)

### For WebP (Recommended):
- **Quality:** 85-90%
- **Max Width:** 800px
- **Format:** WebP with fallback

## After Optimization

### Update Logo Component (if using WebP):
If you convert to WebP, update `src/components/Logo.tsx`:

```typescript
import logoWebP from '@/assets/logo.webp';
import logoPNG from '@/assets/logo.png'; // Keep as fallback

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  // ... existing code ...
  
  return (
    <motion.div className={`${className}`}>
      <picture>
        <source srcSet={logoWebP} type="image/webp" />
        <img 
          src={logoPNG} 
          alt="Beyond Ordinary - Where Wander Meets Wonder" 
          className={`${sizes[size]} w-auto object-contain`}
        />
      </picture>
    </motion.div>
  );
};
```

## Verification

After optimization, check:
- ✅ File size is under 200KB
- ✅ Logo looks crisp on desktop
- ✅ Logo looks crisp on mobile
- ✅ Transparency is preserved (if applicable)
- ✅ Page loads faster

## Performance Impact

**Before:** 1.4MB logo = ~1-2 seconds load time on 3G
**After:** 150KB logo = ~0.1-0.2 seconds load time on 3G

**That's a 10x improvement!**

## Need Help?

If you're having trouble, you can:
1. Share the logo file and I can provide specific compression settings
2. Use the automated script below
3. Hire someone on Fiverr to optimize all your images ($5-10)

---

## Bonus: Optimize All Images

While you're at it, optimize these too:
- `src/assets/hero-tropical.jpg` (190KB - good!)
- `src/assets/destinations/*.jpg` (50-120KB each - good!)
- `src/assets/uk-stays/*.jpg` (50-160KB each - good!)
- `src/assets/calendar/*.jpg` (140-580KB - some need optimization!)

**Priority:** Optimize calendar images over 300KB using the same methods above.