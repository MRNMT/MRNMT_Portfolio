# TODO List for Portfolio Enhancements

## Completed Tasks
- [x] Add glassmorphism effect to navbar and hero section in both dark and light modes.
  - Updated src/index.css for dark mode: Added backdrop-filter, background rgba, and border to .navbar and .hero.
  - Updated src/light-theme.css for light mode: Ensured matching backdrop-filter, background rgba, and added border to .hero (navbar already had it).
  - Fixed JSX syntax error in src/pages/Projects.jsx to resolve 500 errors and allow site to load.
  - Verified via browser: Launched at http://localhost:5176/, confirmed glassmorphism on navbar/hero in dark mode, switched to light mode, confirmed effect persists with theme-appropriate colors.

## Current Task: Add background drop shadow to skills page
- [ ] Edit src/index.css: Add drop shadow styles to .skills-grid for dark theme (background, border, box-shadow, padding, border-radius, transition, and hover effects).
- [ ] Edit src/light-theme.css: Add light theme overrides for .skills-grid (background, border, box-shadow, and hover).
- [ ] Test changes: Use browser_action to launch site, navigate to Skills page, verify drop shadow on skills grid in dark mode, switch themes, confirm light mode appearance, check console for errors.
- [ ] Update TODO.md: Mark steps as completed and summarize the task.

## Pending Tasks
- None (focus on current task).
