# ICETTI-2027

## International Conference on Emerging Trends in Technologies for Industry

- **Date:** 4th & 5th June 2027  
- **Venue:** SIES Graduate School of Technology, Nerul, Navi Mumbai  
- **Official Website:** [https://icetti.siesgst.edu.in/](https://icetti.siesgst.edu.in/)  
- **Official Email:** [icetti@sies.edu.in](mailto:icetti@sies.edu.in)  
- **Conference ID:** `71644`  

This is the official web application for the ICETTI-2027 conference, built with React 19, Vite 6, Tailwind CSS v4, and Framer Motion.

---

### Features
- Modern, responsive cyber-industrial aesthetic
- Interactive conference tracks and committee profiles
- Detailed registration fees, bank account details, and paper submission guidelines
- **Conference ID 71644** and official **Microsoft CMT attribution statement** directly embedded in both dynamic UI and static raw source HTML for IEEE verification compliance
- SPA routing support with Netlify `_redirects` and Apache `.htaccess`

---

### Development
To run the project locally:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

### Production Build & Deployment
The build output is optimized for production hosting on Netlify, Vercel, or custom servers.

```bash
npm run build
```

- **Output directory:** `out`
- **Routing:** Handled via `public/_redirects` (`/* /index.html 200`) and `public/.htaccess`.
- **Preview:** Run `npm run preview` to test the production bundle locally.

