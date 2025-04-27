# Anuradha Minerals and Metals Website

This is the static website for Anuradha Minerals and Metals (AMM).

## Hosting Instructions with Password Protection

The website is configured to be password protected so only you can access it. The credentials are:
- **Username:** amm
- **Password:** ammindia2023

### Option 1: Hosting on Netlify (Recommended)

1. Create a Netlify account at [netlify.com](https://www.netlify.com/)
2. Click on "Add new site" > "Import an existing project" or simply drag and drop this folder
3. The site will be deployed with password protection automatically (using the netlify.toml configuration)
4. Once deployed, go to "Domain settings" to set up your custom domain (www.ammindia.in)
5. The site will be accessible only with the username and password above

### Option 2: Hosting on a Traditional Web Server (cPanel/Apache)

1. Upload all files to your web hosting server using FTP or the hosting control panel
2. Make sure the files are in the public_html or www directory
3. **Important:** Ensure that both `.htaccess` and `.htpasswd` files are uploaded (they may be hidden)
4. Edit the `.htaccess` file and change this line:
   ```
   AuthUserFile /path/to/.htpasswd
   ```
   to point to the actual path of your `.htpasswd` file on the server (ask your hosting provider for the correct path)
5. Set up your domain (www.ammindia.in) to point to the server
6. The site will be accessible only with the username and password above

### Option 3: Hosting on Any Other Service

If using a hosting service that doesn't support `.htaccess` or Netlify's password protection:

1. Upload all files to your hosting
2. Check if your hosting provider offers a way to password protect directories through their control panel
3. Set up password protection using their tools with the credentials above

## Files Included

- `index.html` - Home page
- `about.html` - About page
- `products.html` - Products page
- `contact.html` - Contact page
- `styles.css` - Main stylesheet
- `script.js` - JavaScript functionality
- Images and other assets

## Domain Configuration

To set up the domain www.ammindia.in:

1. Purchase the domain from a domain registrar if you haven't already
2. Point the domain's DNS records to your hosting provider
3. For Netlify or GitHub Pages, follow their specific instructions for custom domains
4. Wait for DNS propagation (can take up to 48 hours)

## Support

For any questions or issues with the website, please contact the developer.
