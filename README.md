# Ceylon Crave website (React + Tailwind CSS)

Brand website for Ceylon Crave, IT4050 Group 29 (SLIIT).

## Run it

```bash
npm install
npm run dev       # live preview at http://localhost:5173
npm run build     # builds dist/index.html (one file) + dist/img/
```

After `npm run build` you can double-click `dist/index.html` to open the site, or upload the `dist` folder to any static host (GitHub Pages, Netlify, Vercel).

## Where things are

| File | What it holds |
|---|---|
| `src/data.js` | All content: menu and prices, ingredients, steps, values, team, FAQs, contact details |
| `src/index.css` | Brand colours (light and dark), fonts and a few shared styles |
| `src/components/Header.jsx` | Sticky top bar with the mobile menu |
| `src/components/Hero.jsx` | Opening section with the rotating ingredient ring |
| `src/components/Desserts.jsx` | Signature desserts and the filterable full menu |
| `src/components/Ingredients.jsx` | Ingredient swaps and the pantry |
| `src/components/Order.jsx` | How-to-order steps and the interactive order slip |
| `src/components/Story.jsx` | Mission, values and founders |
| `src/components/Faq.jsx` | Questions and answers |
| `src/components/Footer.jsx` | Contact details with copy buttons |
| `public/img/` | Product and team photos |

To change a price or add a dessert, edit `MENU` in `src/data.js`. The menu, order slip and totals all update from it.
