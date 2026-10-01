# Robopearl

Australian restaurant robotics website for **Robopearl** — supplying commercial delivery, greeting and dish-collection robots to restaurant owners.

## Live site (permanent public URL)

**https://aprvz.github.io/Robopearl/**

Enable hosting once (required):

1. Open https://github.com/aprvz/Robopearl/settings/pages  
2. Under **Build and deployment → Source**, choose **GitHub Actions**  
   (or **Deploy from a branch** → `main` → `/ (root)` → Save)  
3. Wait 1–2 minutes, then open the URL above and share it.

## Pages

- `index.html` — Home
- `catalog.html` — Robot catalogue
- `robots/*.html` — Product detail pages
- `contact.html` — Enquiry form for restaurant buyers

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```
