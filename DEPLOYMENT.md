# Deployment Guide for GitHub Pages

This guide explains how to deploy the HJFF website to GitHub Pages with a custom domain.

> **Note**: The GitHub Actions workflow will automatically deploy when you push to the master branch.

## Prerequisites

- Repository is set up on GitHub
- Custom domain is purchased and ready to configure

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Configure Custom Domain

#### Option A: Using GitHub Pages Subdomain (hjff-website.github.io)

If you want to use the default GitHub Pages URL, update `next.config.mjs`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/hjff-website' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/hjff-website' : '',
```

#### Option B: Using Custom Domain

1. Edit `CNAME` file and add your domain:
   ```
   yourdomain.com
   www.yourdomain.com
   ```

2. Update `next.config.mjs` to remove basePath:
   ```javascript
   basePath: '',
   assetPrefix: '',
   ```

3. Configure DNS records with your domain provider:
   - Add a **CNAME** record pointing to `gits5213.github.io` (or your GitHub username)
   - For apex domain (yourdomain.com), use an **A** record with GitHub IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

4. In GitHub repository Settings → Pages:
   - Add your custom domain
   - Enable "Enforce HTTPS" (available after DNS propagates)

### 3. Automatic Deployment

The GitHub Action workflow (`.github/workflows/deploy.yml`) automatically:
- Builds the site when you push to `master` branch
- Deploys to GitHub Pages
- Runs on every push or manual trigger

### 4. Manual Deployment

To trigger deployment manually:
1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Verifying Deployment

1. Wait for the GitHub Action to complete (check Actions tab)
2. Visit your site at:
   - `https://gits5213.github.io/hjff-website` (if using subdomain)
   - `https://yourdomain.com` (if using custom domain)

## Troubleshooting

### Issue: Assets not loading (404 errors)
- Check that `basePath` and `assetPrefix` match your repository name
- For custom domain, ensure both are set to empty strings

### Issue: Custom domain not working
- Verify DNS records are correct (may take 24-48 hours to propagate)
- Check that CNAME file contains your domain
- Ensure GitHub Pages shows your domain as verified

### Issue: Build fails
- Check Actions tab for error messages
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility

## Local Testing

To test the production build locally:

```bash
npm run build
npx serve out
```

This will build and serve the static site locally.
