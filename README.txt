P&P Desserts & Coffee — React Website (Vite)

How to preview it (the “preview button” is built into the site as a big CTA, but to view the site you run it locally):

1) Install Node.js (LTS).
2) Open Terminal in this folder.
3) Run:
   npm install
   npm run dev

4) It will print a local URL like:
   http://localhost:5173
   Open it in your browser to preview the site.

If you want a production preview:
   npm run build
   npm run preview

To deploy:
- Netlify/Vercel: import the repo/folder.
- Build command: npm run build
- Publish directory: dist
