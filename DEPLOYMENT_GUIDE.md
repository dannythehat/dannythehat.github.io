# 🚀 DEPLOYMENT GUIDE - Vercel + Render Setup

**Purpose:** Deploy your frontend to Vercel and backend APIs to Render  
**Time Required:** 30-45 minutes

---

## 📋 OVERVIEW

### **Architecture:**
- **Frontend (React)** → Vercel (Free tier)
- **Backend APIs** → Render (Free tier)
- **Database** → Your choice (MongoDB Atlas, PostgreSQL, etc.)

---

## 🎯 PART 1: VERCEL DEPLOYMENT (Frontend)

### **Step 1: Prepare Your Repository**

First, let's create the necessary Vercel configuration files:

#### **Create `vercel.json`** (Root of project)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/assets/(.*)",
      "dest": "/assets/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "env": {
    "VITE_API_URL": "@api_url"
  }
}
```

#### **Update `package.json`** (Add build script if missing)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "vercel-build": "vite build"
  }
}
```

---

### **Step 2: Deploy to Vercel**

#### **Option A: Via Vercel Dashboard (Easiest)**

1. **Go to:** https://vercel.com
2. **Sign up/Login** with GitHub
3. **Click:** "Add New Project"
4. **Import** your GitHub repository
5. **Configure:**
   - Framework Preset: **Vite**
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **Environment Variables:**
   - Add: `VITE_API_URL` = `https://your-api.onrender.com`
7. **Click:** "Deploy"

**Done!** Your site will be live in 2-3 minutes at `your-project.vercel.app`

---

#### **Option B: Via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? beyond-ordinary-adventures
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

---

### **Step 3: Custom Domain (Optional)**

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain: `beyondordinary.travel`
   
2. **Update DNS (at your domain registrar):**
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.21.21`

3. **Wait for DNS propagation** (5-30 minutes)

---

## 🎯 PART 2: RENDER DEPLOYMENT (Backend APIs)

### **Step 1: Prepare Backend Repository**

Create a separate repository for your backend or use a monorepo structure.

#### **Backend Structure:**
```
backend/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── index.js
├── package.json
├── .env.example
└── render.yaml
```

---

### **Step 2: Create `render.yaml`**

```yaml
services:
  # Main API Service
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
      - key: JWT_SECRET
        generateValue: true
      - key: API_KEY
        sync: false
    healthCheckPath: /health

  # Background Worker (if needed)
  - type: worker
    name: beyond-ordinary-worker
    env: node
    region: oregon
    plan: free
    buildCommand: npm install
    startCommand: npm run worker
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        sync: false
```

---

### **Step 3: Create Health Check Endpoint**

```javascript
// src/routes/health.js
export const healthCheck = (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV
  });
};

// In your main app file
app.get('/health', healthCheck);
```

---

### **Step 4: Deploy to Render**

#### **Option A: Via Render Dashboard**

1. **Go to:** https://render.com
2. **Sign up/Login** with GitHub
3. **Click:** "New +" → "Web Service"
4. **Connect** your backend repository
5. **Configure:**
   - Name: `beyond-ordinary-api`
   - Region: `Oregon (US West)`
   - Branch: `main`
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: `Free`
6. **Environment Variables:**
   - Add all your API keys
   - Add database URLs
   - Add secrets
7. **Click:** "Create Web Service"

**Your API will be live at:** `https://beyond-ordinary-api.onrender.com`

---

#### **Option B: Via Render CLI**

```bash
# Install Render CLI
npm install -g @render/cli

# Login
render login

# Deploy
render deploy
```

---

### **Step 5: Configure CORS**

Update your backend to allow Vercel domain:

```javascript
// backend/src/index.js
import cors from 'cors';

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://your-project.vercel.app',
  'https://beyondordinary.travel',
  'https://www.beyondordinary.travel'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
```

---

## 🔧 PART 3: ENVIRONMENT VARIABLES

### **Frontend (.env for Vercel)**

Create `.env.production`:

```env
# API Configuration
VITE_API_URL=https://beyond-ordinary-api.onrender.com
VITE_API_TIMEOUT=30000

# Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_NEWSLETTER=true

# Social Media
VITE_INSTAGRAM_URL=https://instagram.com/beyondordinary
VITE_YOUTUBE_URL=https://youtube.com/@beyondordinary
VITE_TIKTOK_URL=https://tiktok.com/@beyondordinary
```

**Add to Vercel:**
1. Go to Project Settings → Environment Variables
2. Add each variable
3. Select "Production" environment
4. Save

---

### **Backend (.env for Render)**

Create `.env.example`:

```env
# Server Configuration
NODE_ENV=production
PORT=10000
API_VERSION=v1

# Database
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/dbname
REDIS_URL=redis://user:pass@host:port

# Authentication
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=your-refresh-token-secret

# Email Service
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
EMAIL_FROM=hello@beyondordinary.travel

# Affiliate APIs
VIATOR_API_KEY=xxxxxxxxxxxxx
BOOKING_API_KEY=xxxxxxxxxxxxx
GETYOURGUIDE_API_KEY=xxxxxxxxxxxxx

# Payment Processing
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx

# External Services
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=xxxxxxxxxxxxx
CLOUDINARY_API_SECRET=xxxxxxxxxxxxx

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS
ALLOWED_ORIGINS=https://beyondordinary.travel,https://www.beyondordinary.travel
```

**Add to Render:**
1. Go to your service → Environment
2. Add each variable
3. Save changes
4. Service will auto-redeploy

---

## 🗄️ PART 4: DATABASE SETUP

### **Option A: MongoDB Atlas (Recommended)**

1. **Go to:** https://www.mongodb.com/cloud/atlas
2. **Create free cluster**
3. **Create database user**
4. **Whitelist IP:** `0.0.0.0/0` (for Render)
5. **Get connection string**
6. **Add to Render env:** `DATABASE_URL`

---

### **Option B: PostgreSQL on Render**

1. **In Render Dashboard:**
   - Click "New +" → "PostgreSQL"
   - Name: `beyond-ordinary-db`
   - Plan: Free
   - Create Database
2. **Copy connection strings:**
   - Internal: For Render services
   - External: For local development
3. **Add to service env variables**

---

## 🔐 PART 5: SECRETS MANAGEMENT

### **Generate Secure Secrets:**

```bash
# Generate JWT secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Generate API key
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### **Store Secrets:**

**Vercel:**
- Dashboard → Settings → Environment Variables
- Mark as "Secret" (encrypted)

**Render:**
- Service → Environment
- Automatically encrypted

---

## 📊 PART 6: MONITORING & LOGGING

### **Vercel Analytics**

```bash
# Install Vercel Analytics
npm install @vercel/analytics
```

```typescript
// src/main.tsx
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
```

---

### **Render Logging**

```javascript
// backend/src/utils/logger.js
import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

export default logger;
```

---

## 🚀 PART 7: DEPLOYMENT WORKFLOW

### **Automatic Deployments:**

**Vercel:**
- Push to `main` → Auto-deploy to production
- Push to other branches → Preview deployments
- Pull requests → Preview URLs

**Render:**
- Push to `main` → Auto-deploy
- Manual deploys available
- Rollback to previous versions

---

### **CI/CD Pipeline (Optional):**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run build

  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'

  deploy-backend:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Render
        run: |
          curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK }}
```

---

## 🔍 PART 8: TESTING DEPLOYMENT

### **Frontend Tests:**

```bash
# Test build locally
npm run build
npm run preview

# Test production URL
curl https://your-project.vercel.app
curl https://your-project.vercel.app/api/health
```

---

### **Backend Tests:**

```bash
# Test health endpoint
curl https://beyond-ordinary-api.onrender.com/health

# Test API endpoint
curl https://beyond-ordinary-api.onrender.com/api/v1/destinations

# Test with authentication
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://beyond-ordinary-api.onrender.com/api/v1/protected
```

---

## 📱 PART 9: MOBILE APP DEPLOYMENT (Future)

### **Expo/React Native:**

```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Configure
eas build:configure

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Submit to stores
eas submit --platform ios
eas submit --platform android
```

---

## 🎯 PART 10: POST-DEPLOYMENT CHECKLIST

### **Immediate (After Deploy):**
- [ ] Verify site loads at Vercel URL
- [ ] Test all pages work
- [ ] Check API endpoints respond
- [ ] Verify database connection
- [ ] Test authentication flow
- [ ] Check CORS is working
- [ ] Verify environment variables loaded
- [ ] Test mobile responsiveness

### **Within 24 Hours:**
- [ ] Set up custom domain
- [ ] Configure SSL certificate
- [ ] Add to Google Search Console
- [ ] Set up monitoring alerts
- [ ] Test email functionality
- [ ] Verify analytics tracking
- [ ] Check error logging
- [ ] Test payment processing (if applicable)

### **Within 1 Week:**
- [ ] Monitor performance metrics
- [ ] Check for errors in logs
- [ ] Optimize slow endpoints
- [ ] Set up backup strategy
- [ ] Configure CDN (if needed)
- [ ] Test under load
- [ ] Document API endpoints
- [ ] Create status page

---

## 💰 COST BREAKDOWN

### **Free Tier Limits:**

**Vercel (Free):**
- ✅ 100GB bandwidth/month
- ✅ Unlimited deployments
- ✅ Automatic SSL
- ✅ Preview deployments
- ✅ Analytics (basic)

**Render (Free):**
- ✅ 750 hours/month (1 service)
- ✅ 512MB RAM
- ✅ Automatic SSL
- ✅ Auto-deploy from Git
- ⚠️ Spins down after 15 min inactivity

**MongoDB Atlas (Free):**
- ✅ 512MB storage
- ✅ Shared cluster
- ✅ Automatic backups

**Total Cost: $0/month** 🎉

---

### **Paid Upgrades (When Needed):**

**Vercel Pro ($20/month):**
- 1TB bandwidth
- Advanced analytics
- Password protection
- Team collaboration

**Render Starter ($7/month):**
- Always-on service
- 512MB RAM
- No spin-down

**MongoDB Atlas ($9/month):**
- 2GB storage
- Dedicated cluster
- Better performance

---

## 🚨 TROUBLESHOOTING

### **Common Issues:**

#### **1. Build Fails on Vercel**
```bash
# Check build logs
# Common fixes:
- Ensure all dependencies in package.json
- Check TypeScript errors
- Verify environment variables
- Clear cache and rebuild
```

#### **2. API Not Responding**
```bash
# Check Render logs
# Common fixes:
- Verify environment variables
- Check database connection
- Ensure correct start command
- Check CORS configuration
```

#### **3. CORS Errors**
```javascript
// Update backend CORS config
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS.split(','),
  credentials: true
}));
```

#### **4. Database Connection Issues**
```javascript
// Add connection retry logic
const connectDB = async (retries = 5) => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Database connected');
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... (${retries} attempts left)`);
      setTimeout(() => connectDB(retries - 1), 5000);
    } else {
      console.error('Database connection failed');
      process.exit(1);
    }
  }
};
```

---

## 📚 USEFUL COMMANDS

### **Vercel:**
```bash
# Deploy to production
vercel --prod

# List deployments
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm [deployment-url]

# Link local project
vercel link

# Pull environment variables
vercel env pull
```

### **Render:**
```bash
# View logs
render logs [service-name]

# Restart service
render restart [service-name]

# List services
render services

# Deploy manually
render deploy [service-name]
```

---

## 🎊 SUCCESS!

Once deployed, your architecture will be:

```
User Browser
    ↓
Vercel CDN (Frontend)
    ↓
Render API (Backend)
    ↓
MongoDB Atlas (Database)
```

**Benefits:**
- ✅ Global CDN (fast worldwide)
- ✅ Automatic SSL
- ✅ Auto-scaling
- ✅ Zero-downtime deploys
- ✅ Free tier available
- ✅ Easy rollbacks

---

## 📞 NEXT STEPS

1. **Deploy frontend to Vercel** (15 min)
2. **Deploy backend to Render** (15 min)
3. **Set up database** (10 min)
4. **Configure environment variables** (10 min)
5. **Test everything** (10 min)
6. **Add custom domain** (optional)

**Total Time: ~1 hour** ⏱️

---

**Ready to deploy? Let me know if you need help with any step!** 🚀