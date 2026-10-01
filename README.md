# Robopearl

Australian restaurant robotics website for **Robopearl** — supplying the commercial delivery robots that actually sell into Australian restaurants.

## Catalogue (top 10 AU-market restaurant robots)

Based on Australian retailer listings (AGC Equipment, RoboBuddy, PC Market, KW Commercial, Automiq, Robots Australia, Servbotics and related channels):

| # | Brand | Model | Indicative AU shelf |
|---|-------|-------|---------------------|
| 1 | Pudu | BellaBot | A$19,900 – A$21,452 |
| 2 | Pudu | BellaBot Pro | A$23,100 |
| 3 | Pudu | KettyBot | A$11,900 – A$16,062 |
| 4 | Pudu | KettyBot Pro | A$16,500 |
| 5 | Pudu | PuduBot 2 | A$14,990 – A$16,159 |
| 6 | Pudu | HolaBot | A$22,638 – A$30,000 |
| 7 | Pudu | SwiftBot | A$23,000 – A$28,000 |
| 8 | Keenon | DINERBOT T9 | A$15,913 – A$16,093 |
| 9 | Keenon | DINERBOT T10 | A$20,147 – A$20,375 |
| 10 | Keenon | DINERBOT T8 | A$15,913 – A$16,093 |

Prices are public shelf ranges and must be re-confirmed on quote (GST, config, warranty).

## Live site

**https://aprvz.github.io/Robopearl/**

Enable hosting once:

1. Open https://github.com/aprvz/Robopearl/settings/pages  
2. Under **Build and deployment → Source**, choose **GitHub Actions**  
   (or **Deploy from a branch** → `main` → `/ (root)` → Save)  
3. Wait 1–2 minutes, then open the URL above.

## Pages

- `index.html` — Home
- `catalog.html` — Top 10 Australian-market robots
- `robots/*.html` — Product detail pages with specs & AU price notes
- `contact.html` — Enquiry form
- `js/robots-data.js` — Structured product data

## Local preview

```bash
python3 -m http.server 8080
```
