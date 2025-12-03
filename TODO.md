# TODO List for Portfolio Enhancements

## Completed Tasks
- [x] Add glassmorphism effect to navbar and hero section in both dark and light modes.
  - Updated src/index.css for dark mode: Added backdrop-filter, background rgba, and border to .navbar and .hero.
  - Updated src/light-theme.css for light mode: Ensured matching backdrop-filter, background rgba, and added border to .hero (navbar already had it).
  - Fixed JSX syntax error in src/pages/Projects.jsx to resolve 500 errors and allow site to load.
  - Verified via browser: Launched at http://localhost:5176/, confirmed glassmorphism on navbar/hero in dark mode, switched to light mode, confirmed effect persists with theme-appropriate colors.
- [x] Add background drop shadow to skills page.
  - Edited src/index.css: Added drop shadow styles to .skills-grid for dark theme (background: var(--section-bg), border: 1px solid rgba(100, 255, 218, 0.1), border-radius: 12px, padding: 2rem, box-shadow: 0 4px 15px rgba(100, 255, 218, 0.1), transition, and hover effects).
  - Edited src/light-theme.css: Added light theme overrides for .skills-grid (background: #ffffff, border: 1px solid rgba(0, 0, 0, 0.1), box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), and hover).
  - Tested changes: Launched browser at http://localhost:5176/, navigated to Skills page, verified drop shadow on skills grid in dark mode (cyan-tinted shadow), switched to light mode, confirmed gray shadow and white background, no new console errors.
- [x] Align project cards with experience cards (use same colors and styling for consistency).
  - Compared: Both use identical colors (dark: #112240 background, cyan border/shadow; light: white with gray border/shadow). Differences were padding (1.5rem vs. 2rem) and margin on project cards.
  - Edited src/index.css: Updated .project-card to padding: 2rem and removed margin-bottom: 1rem for exact match.
  - No changes to src/light-theme.css (overrides already consistent).
  - Verified: Launched browser at http://localhost:5176/, navigated to Projects and Experience pages in dark mode, confirmed uniform card appearance (same padding, no extra gaps, consistent colors/hovers). Switched to light mode, verified same consistency. No console errors.

## Pending Tasks
- None (all steps for current task completed).

Next steps: If additional features are needed, provide further instructions.
