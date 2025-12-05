# Deploy to Netlify - Step by Step Guide

## ✅ Netlify Free Tier Includes:
- ✅ 100 GB bandwidth per month
- ✅ Automatic HTTPS
- ✅ Continuous deployment from Git
- ✅ Instant rollbacks
- ✅ Deploy previews
- ✅ Custom domain support
- ✅ Completely FREE for this project!

---

## Quick Deploy (5 Minutes)

### Step 1: Go to Netlify
Visit your Netlify dashboard:
👉 **https://app.netlify.com/teams/vvk/projects**

### Step 2: Create New Site
1. Click **"Add new site"** or **"Import an existing project"**
2. Choose **"Import from Git"**

### Step 3: Connect to GitHub
1. Click **"GitHub"**
2. Authorize Netlify to access your GitHub repositories (if not already done)
3. Search for and select your **`vandhglobal`** repository

### Step 4: Configure Build Settings
Netlify will show configuration options. Use these settings:

**Branch to deploy:**
```
claude/commodity-trading-website-01Bf5CiWuxrqiMxZditrRhHh
```

**Build command:**
```
npm run build
```

**Publish directory:**
```
.next
```

**Build settings (Advanced):**
- Node version: `18`
- Package manager: `npm`

### Step 5: Deploy!
1. Click **"Deploy site"**
2. Wait 2-3 minutes for the build to complete ⏱️
3. Your site will be live! 🎉

---

## Your Live URL

After deployment, you'll get a URL like:
```
https://vandhglobal-abc123.netlify.app
```

You can customize this:
1. Go to **Site settings** → **Domain management**
2. Click **"Edit site name"**
3. Change to: `vandhglobal` → URL becomes: `https://vandhglobal.netlify.app`

---

## Automatic CI/CD is Active!

Every time you push code to your branch:

```bash
git add .
git commit -m "your changes"
git push origin claude/commodity-trading-website-01Bf5CiWuxrqiMxZditrRhHh
```

✅ Netlify automatically detects the push
✅ Runs the build
✅ Deploys to production
✅ Updates your live website
✅ Sends you deployment notifications via email

**Deployment time:** 2-4 minutes per push

---

## Monitor Your Deployments

After deploying, you can:

### View Build Logs
1. Go to **Deploys** tab
2. Click on any deployment
3. See detailed build logs

### View Site Analytics
1. Go to **Analytics** tab (if enabled)
2. See visitor stats, page views, bandwidth usage

### Enable Deploy Notifications
1. Go to **Site settings** → **Build & deploy** → **Deploy notifications**
2. Add notifications for:
   - Deploy started
   - Deploy succeeded
   - Deploy failed

---

## Add Custom Domain (Optional)

### Using Your Own Domain:

1. Go to **Domain settings** → **Custom domains**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `www.vandhglobal.com`)
4. Update your domain's DNS records:

**Option A: Using Netlify DNS (Easiest)**
- Point your domain's nameservers to Netlify
- Netlify handles everything automatically

**Option B: Using External DNS**
Add these DNS records at your domain registrar:
```
A Record:    @ → 75.2.60.5
CNAME:       www → vandhglobal.netlify.app
```

5. Wait for DNS propagation (can take up to 48 hours)
6. Enable HTTPS (automatic via Let's Encrypt)

---

## Environment Variables (For Future API Integration)

If you need to add API keys later:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add your keys:
   - `MINERALS_API_KEY`
   - `AGRI_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`

---

## Troubleshooting

### Build Fails?
**Check these:**
1. Go to **Deploys** → Click failed deployment → View logs
2. Common issues:
   - Missing dependencies: Run `npm install` locally first
   - Node version mismatch: Ensure Node 18.x in settings
   - Build command errors: Check build logs for specific errors

### Site Not Loading?
1. Check **Deploys** tab - is latest deploy successful?
2. Verify publish directory is `.next`
3. Check **Functions** tab for any errors
4. Clear browser cache and try again

### Need to Rollback?
1. Go to **Deploys** tab
2. Find a previous successful deployment
3. Click **"Publish deploy"**
4. Site instantly rolls back!

---

## Advanced Features (All Free!)

### Deploy Previews
- Every pull request gets its own preview URL
- Test changes before merging
- Share preview links with team

### Branch Deploys
- Deploy different branches to different URLs
- Test features in isolation
- Enable in **Site settings** → **Build & deploy** → **Branches**

### Forms (If you add contact form backend)
- Built-in form handling (100 submissions/month free)
- No backend code needed
- Just add `netlify` attribute to forms

### Split Testing
- Test different versions of pages
- A/B testing built-in
- Available in free tier with limitations

---

## Performance Tips

### Enable Asset Optimization
1. Go to **Site settings** → **Build & deploy** → **Post processing**
2. Enable:
   - ✅ Bundle CSS
   - ✅ Minify CSS
   - ✅ Minify JS
   - ✅ Compress images

### Enable Caching
- Netlify automatically caches static assets
- CDN distribution included free
- Global edge network for fast loading

---

## Cost Breakdown (It's FREE! 🎉)

**Netlify Free Tier:**
- ✅ **100 GB bandwidth/month** - More than enough for your site
- ✅ **300 build minutes/month** - Each build takes ~2-3 minutes
- ✅ **Unlimited sites**
- ✅ **Automatic HTTPS**
- ✅ **Deploy previews**
- ✅ **Rollbacks**
- ✅ **CDN**

**Your website traffic estimate:**
- 1,000 visitors/month = ~2-3 GB bandwidth
- **You're well within free limits!**

**Only pay if you need:**
- More than 100 GB bandwidth (unlikely)
- More than 300 build minutes (very unlikely)
- Advanced features (not needed for this project)

---

## Quick Checklist

Before deploying:
- ✅ Code pushed to GitHub
- ✅ Branch name correct
- ✅ package.json has all dependencies
- ✅ Build succeeds locally (`npm run build`)

After deploying:
- ✅ Test homepage
- ✅ Test all product pages (minerals, rice, spices)
- ✅ Test pricing calculators
- ✅ Test on mobile device
- ✅ Verify all links work
- ✅ Check page loading speed

---

## Get Help

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Support:** https://answers.netlify.com
- **Next.js on Netlify:** https://docs.netlify.com/integrations/frameworks/next-js/

---

## Ready to Deploy? 🚀

**Just follow these 5 steps:**

1. Visit: https://app.netlify.com/teams/vvk/projects
2. Click: "Add new site" → "Import from Git"
3. Select: Your `vandhglobal` repository
4. Branch: `claude/commodity-trading-website-01Bf5CiWuxrqiMxZditrRhHh`
5. Click: "Deploy site"

**Your website will be live in 3 minutes!** 🎉
