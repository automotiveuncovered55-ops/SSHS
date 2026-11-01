# SSHS website
Static site: index.html, styles.css, script.js, assets/.
Run locally: `python3 -m http.server 8000` then open http://localhost:8000
Deploy: drag this folder onto Netlify Drop, or push to GitHub and enable Pages (root), or `vercel` in this folder.
Confirm before launch: real photographs/logo, exact model designations (1200 SXJ vs SJP), production domain (add canonical + og:url), whether to add a form backend.
Admin: open admin.html, edit text/contact details, press "Download content.json", upload it next to index.html. No login is built in: protect admin.html with host-level password/access rules (e.g. Netlify, Cloudflare Access).
