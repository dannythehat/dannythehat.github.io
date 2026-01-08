# 🚀 QUICK START - Deploy in 15 Minutes

**Get your site live on Vercel + Render in 3 simple steps!**

---

## ⚡ FASTEST DEPLOYMENT (Vercel Only - Frontend)

### **Step 1: Push to GitHub** (if not already done)
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### **Step 2: Deploy to Vercel**
1. Go to **https://vercel.com**
2. Click **"Add New Project"**
3. Import your GitHub repo
4. Click **"Deploy"**

**Done!** Your site is live in 2 minutes! 🎉

---

## 🔧 FULL DEPLOYMENT (Vercel + Render - Frontend + Backend)

### **Prerequisites:**
- GitHub account
- Vercel account (free)
- Render account (free)
- Your backend code ready

---

## 📦 PART 1: FRONTEND DEPLOYMENT (Vercel)

### **Option A: Via Vercel Dashboard (Easiest)**

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Sign up/Login with GitHub

2. **Import Project:**
   - Click "Add New Project"
   - Select your repository
   - Click "Import"

3. **Configure:**
   - Framework: **Vite** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Environment Variables:**
   Click "Environment Variables" and add:
   ```
   VITE_API_URL = https://your-api.onrender.com
   VITE_GA_TRACKING_ID = G-XXXXXXXXXX
   ```

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🚀

**Your URL:** `https://your-project.vercel.app`

---

### **Option B: Via Vercel CLI (For Developers)**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

### **Option C: Via Deployment Script**

```bash
# Make script executable
chmod +x deploy.sh

# Run deployment script
./deploy.sh

# Choose option 5 (Full deployment)
```

---

## 🔌 PART 2: BACKEND DEPLOYMENT (Render)

### **Step 1: Prepare Backend**

Create a `render.yaml` in your backend repo:

```yaml
services:
  - type: web
    name: beyond-ordinary-api
    env: node
    region: oregon
    plan: free
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        sync: false
```

---

### **Step 2: Deploy to Render**

1. **Go to Render:**
   - Visit: https://render.com
   - Sign up/Login with GitHub

2. **Create Web Service:**
   - Click "New +" → "Web Service"
   - Connect your backend repository
   - Click "Connect"

3. **Configure:**
   - Name: `beyond-ordinary-api`
   - Region: `Oregon (US West)`
   - Branch: `main`
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: `Free`

4. **Environment Variables:**
   Add all variables from `.env.backend.example`:
   ```
   NODE_ENV = production
   DATABASE_URL = your-mongodb-url
   JWT_SECRET = your-secret-key
   ```

5. **Create Service:**
   - Click "Create Web Service"
   - Wait 5-10 minutes for first deploy

**Your API URL:** `https://beyond-ordinary-api.onrender.com`

---

## 🗄️ PART 3: DATABASE SETUP

### **MongoDB Atlas (Recommended)**

1. **Create Account:**
   - Go to: https://www.mongodb.com/cloud/atlas
   - Sign up for free

2. **Create Cluster:**
   - Click "Build a Database"
   - Choose "Free" tier
   - Select region (closest to Oregon)
   - Click "Create"

3. **Create User:**
   - Go to "Database Access"
   - Add new user
   - Save username & password

4. **Whitelist IP:**
   - Go to "Network Access"
   - Add IP: `0.0.0.0/0` (allow all)

5. **Get Connection String:**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password

6. **Add to Render:**
   - Go to your Render service
   - Environment → Add variable
   - `DATABASE_URL` = your connection string

---

## 🔗 PART 4: CONNECT FRONTEND TO BACKEND

### **Update Vercel Environment:**

1. Go to Vercel Dashboard
2. Select your project
3. Settings → Environment Variables
4. Update `VITE_API_URL`:
   ```
   VITE_API_URL = https://beyond-ordinary-api.onrender.com
   ```
5. Redeploy (automatic)

---

## ✅ PART 5: VERIFY DEPLOYMENT

### **Test Frontend:**
```bash
# Visit your Vercel URL
https://your-project.vercel.app

# Check if site loads
# Test navigation
# Verify images load
```

### **Test Backend:**
```bash
# Test health endpoint
curl https://beyond-ordinary-api.onrender.com/health

# Should return:
# {"status":"healthy","timestamp":"..."}
```

### **Test Connection:**
```bash
# Open browser console on your site
# Check for API errors
# Verify data loads from backend
```

---

## 🌐 PART 6: CUSTOM DOMAIN (Optional)

### **Add Domain to Vercel:**

1. **In Vercel Dashboard:**
   - Go to your project
   - Settings → Domains
   - Add domain: `beyondordinary.travel`

2. **Update DNS (at your registrar):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com

   Type: A
   Name: @
   Value: 76.76.21.21
   ```

3. **Wait for DNS propagation** (5-30 minutes)

4. **SSL Certificate:** Automatic (Vercel handles this)

---

## 📊 PART 7: ANALYTICS SETUP

### **Google Analytics:**

1. **Create GA4 Property:**
   - Go to: https://analytics.google.com
   - Create account & property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to Vercel:**
   - Environment Variables
   - `VITE_GA_TRACKING_ID` = G-XXXXXXXXXX
   - Redeploy

3. **Verify:**
   - Visit your site
   - Check GA4 Realtime report
   - Should see your visit

---

## 🔍 PART 8: MONITORING

### **Vercel Analytics:**
```bash
# Install
npm install @vercel/analytics

# Add to src/main.tsx
import { Analytics } from '@vercel/analytics/react';

<Analytics />
```

### **Render Logs:**
- Dashboard → Your Service → Logs
- Monitor for errors
- Check performance

---

## 🚨 TROUBLESHOOTING

### **Build Fails:**
```bash
# Check Vercel logs
# Common fixes:
1. Clear cache: Settings → General → Clear Cache
2. Check package.json dependencies
3. Verify environment variables
4. Check TypeScript errors
```

### **API Not Responding:**
```bash
# Check Render logs
# Common fixes:
1. Verify environment variables
2. Check database connection
3. Ensure start command is correct
4. Check CORS configuration
```

### **CORS Errors:**
```javascript
// Update backend CORS
app.use(cors({
  origin: [
    'https://your-project.vercel.app',
    'https://beyondordinary.travel'
  ],
  credentials: true
}));
```

---

## 💰 COST BREAKDOWN

### **Free Tier (Perfect for Starting):**

**Vercel:**
- ✅ 100GB bandwidth/month
- ✅ Unlimited deployments
- ✅ Automatic SSL
- ✅ Preview deployments
- **Cost: $0/month**

**Render:**
- ✅ 750 hours/month
- ✅ 512MB RAM
- ✅ Automatic SSL
- ⚠️ Spins down after 15 min inactivity
- **Cost: $0/month**

**MongoDB Atlas:**
- ✅ 512MB storage
- ✅ Shared cluster
- **Cost: $0/month**

**Total: $0/month** 🎉

---

### **Paid Upgrades (When You Grow):**

**Vercel Pro ($20/month):**
- 1TB bandwidth
- Advanced analytics
- Team collaboration

**Render Starter ($7/month):**
- Always-on (no spin-down)
- 512MB RAM
- Better performance

**MongoDB Atlas ($9/month):**
- 2GB storage
- Dedicated cluster
- Better performance

---

## 📝 DEPLOYMENT CHECKLIST

### **Before Deployment:**
- [ ] Code pushed to GitHub
- [ ] Environment variables ready
- [ ] Database created
- [ ] API keys obtained

### **During Deployment:**
- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Render
- [ ] Database connected
- [ ] Environment variables set
- [ ] CORS configured

### **After Deployment:**
- [ ] Site loads correctly
- [ ] API responds
- [ ] Database connected
- [ ] Analytics tracking
- [ ] Custom domain (optional)
- [ ] SSL certificate active

---

## 🎯 QUICK COMMANDS

### **Vercel:**
```bash
# Deploy to production
vercel --prod

# View logs
vercel logs

# List deployments
vercel ls

# Pull environment variables
vercel env pull
```

### **Render:**
```bash
# View logs (in dashboard)
Dashboard → Service → Logs

# Restart service
Dashboard → Service → Manual Deploy → Deploy
```

---

## 📞 SUPPORT RESOURCES

### **Documentation:**
- Vercel: https://vercel.com/docs
- Render: https://render.com/docs
- MongoDB: https://docs.mongodb.com

### **Community:**
- Vercel Discord: https://vercel.com/discord
- Render Community: https://community.render.com

---

## 🎊 SUCCESS!

Once deployed, you'll have:

```
User → Vercel (Frontend) → Render (Backend) → MongoDB (Database)
```

**Benefits:**
- ✅ Global CDN (fast worldwide)
- ✅ Automatic SSL
- ✅ Auto-scaling
- ✅ Zero-downtime deploys
- ✅ Free tier available
- ✅ Easy rollbacks

---

## 🚀 NEXT STEPS

1. **Deploy frontend** (15 min)
2. **Deploy backend** (15 min)
3. **Set up database** (10 min)
4. **Test everything** (10 min)
5. **Add custom domain** (optional)
6. **Set up analytics** (10 min)

**Total Time: ~1 hour** ⏱️

---

## 💡 PRO TIPS

1. **Use preview deployments** - Test before production
2. **Monitor logs** - Catch errors early
3. **Set up alerts** - Get notified of issues
4. **Backup database** - Regular backups
5. **Use environment variables** - Never commit secrets
6. **Enable caching** - Faster performance
7. **Optimize images** - Better loading times
8. **Use CDN** - Global distribution

---

**Ready to deploy? Follow the steps above and you'll be live in 15 minutes!** 🚀

**Questions? Check `DEPLOYMENT_GUIDE.md` for detailed instructions!**