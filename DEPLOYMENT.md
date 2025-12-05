# Deployment Guide - VandhGlobal Commodity Trading Website

## Quick Deploy to Vercel (Recommended - 5 Minutes)

### Option 1: Automatic GitHub Integration (Easiest)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login with GitHub

2. **Click "Add New Project"**

3. **Import your GitHub repository**
   - Select your `vandhglobal` repository
   - Select branch: `claude/commodity-trading-website-01Bf5CiWuxrqiMxZditrRhHh`

4. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

5. **Click "Deploy"**

That's it! Your website will be live in 2-3 minutes at a URL like:
`https://vandhglobal-xyz.vercel.app`

### Automatic CI/CD

Once connected, Vercel will automatically:
- ✅ Deploy every push to your branch
- ✅ Run builds and tests
- ✅ Generate preview URLs for each commit
- ✅ Promote successful builds to production
- ✅ Provide deployment logs and analytics

Every time you push code:
```bash
git add .
git commit -m "update: feature description"
git push origin claude/commodity-trading-website-01Bf5CiWuxrqiMxZditrRhHh
```

Vercel will automatically build and deploy within 2-3 minutes!

---

## Option 2: Vercel CLI (For Manual Control)

### Setup

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy from this directory**
```bash
cd /home/user/vandhglobal
vercel --prod
```

Follow the prompts:
- Set up and deploy? `Y`
- Which scope? Select your account
- Link to existing project? `N`
- Project name? `vandhglobal`
- Directory? `./`
- Override settings? `N`

Your site will be deployed instantly!

### Subsequent Deployments

After initial setup, just run:
```bash
vercel --prod
```

---

## Option 3: Netlify Deployment

### Using Netlify CLI

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login**
```bash
netlify login
```

3. **Initialize and Deploy**
```bash
cd /home/user/vandhglobal
netlify init
```

Follow prompts:
- Create & configure new site? `Y`
- Build command: `npm run build`
- Publish directory: `.next`

4. **Deploy**
```bash
netlify deploy --prod
```

### Using Netlify Web Interface

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Configure:
   - Branch: `claude/commodity-trading-website-01Bf5CiWuxrqiMxZditrRhHh`
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

---

## Option 4: GitHub Actions CI/CD (Already Configured!)

I've created a GitHub Actions workflow that will:
- Run on every push to your branch
- Install dependencies
- Run linting
- Build the application
- Deploy to Vercel automatically

### Setup GitHub Secrets

To enable GitHub Actions deployment, add these secrets to your GitHub repository:

1. Go to your GitHub repo → Settings → Secrets and variables → Actions

2. Add the following secrets:

**Get Vercel Token:**
```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Login and get token
vercel login
# Then go to: https://vercel.com/account/tokens
# Create a new token and copy it
```

Add to GitHub Secrets:
- `VERCEL_TOKEN`: Your Vercel token
- `VERCEL_ORG_ID`: From `.vercel/project.json` after first deploy
- `VERCEL_PROJECT_ID`: From `.vercel/project.json` after first deploy

3. **Push your code** and watch it auto-deploy!

```bash
git add .
git commit -m "feat: add CI/CD pipeline"
git push origin claude/commodity-trading-website-01Bf5CiWuxrqiMxZditrRhHh
```

Check deployment status:
- GitHub Actions: `https://github.com/YOUR_USERNAME/vandhglobal/actions`
- Vercel Dashboard: `https://vercel.com/dashboard`

---

## Environment Variables (If Needed)

If you want to add API keys for automatic price updates later:

### In Vercel:
1. Go to Project Settings → Environment Variables
2. Add:
   - `MINERALS_API_KEY`
   - `AGRI_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`

### In Netlify:
1. Go to Site settings → Environment variables
2. Add the same variables

---

## Custom Domain Setup

### On Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `vandhglobal.com`)
3. Update DNS records as instructed:
   - Add A record pointing to Vercel IP
   - Or add CNAME record

### On Netlify:
1. Go to Domain settings → Custom domains
2. Add your domain
3. Update DNS records as instructed

---

## Monitoring Your Deployments

### Vercel Dashboard
- Live URL: Check your project dashboard
- Deployment logs: View build logs for each deployment
- Analytics: Track visitor stats
- Performance: Monitor Core Web Vitals

### GitHub Actions
- Go to Actions tab in your repository
- See build status for each push
- View detailed logs if build fails

---

## Quick Start Summary

**Fastest Method (Recommended):**

1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import `vandhglobal` repository
4. Click Deploy
5. Done! 🚀

**Your website will be live at:**
`https://vandhglobal-[random].vercel.app`

**Every future push will auto-deploy!**

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel/Netlify dashboard
- Ensure all dependencies are in package.json
- Verify Node version (18.x recommended)

### Environment Issues
- Make sure environment variables are set
- Check variable names match exactly
- Restart deployment after adding variables

### Domain Issues
- Allow 24-48 hours for DNS propagation
- Verify DNS records are correct
- Use Vercel/Netlify DNS for easier setup

---

## Next Steps After Deployment

1. ✅ Test all pages on live URL
2. ✅ Test all calculators functionality
3. ✅ Verify mobile responsiveness
4. ✅ Set up custom domain
5. ✅ Enable analytics
6. ✅ Set up automatic price update APIs
7. ✅ Add contact form backend integration

---

Need help? Check:
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
