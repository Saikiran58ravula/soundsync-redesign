SoundSync — Landing Page & Feed Redesign
A proposed UI/UX redesign of the SoundSync landing page and feed section, built as a fully interactive prototype using vanilla HTML, CSS, and JavaScript.

Live Demo: https://saikiran58ravula.github.io/soundsync-redesign/

What I Changed & Why
Landing Page
Interactive Particle Hero: Replaced the static banner with a mouse-reactive canvas animation. It sets a strong audio-visual tone before the user even clicks play.
Scroll-Triggered Stats: Animated counters for "Artists Onboard" and "Hours of Music" act as subtle trust signals as the user scrolls.
Drag-Scrollable Features: Horizontal feature cards save vertical space and feel more native to modern web apps.
Feed Section
Persistent "Now Playing" Strip: The biggest UX gap I noticed was losing context of the current track when scrolling through the feed. I added a sticky mini-player with a live waveform progress bar.
Contextual Hover States: Play buttons, waveform previews, and action buttons (like, add, share) only appear on hover. This keeps the grid scannable by default but instantly interactive when needed.
Mood-Based Exploration: Instead of standard text categories, I added interactive mood cards with ambient particle effects. Clicking a mood auto-scrolls to a tailored feed, reducing clicks to find the right vibe.
Technical Approach
No Frameworks: Built with vanilla HTML, CSS, and JavaScript. For an audio platform, load times and DOM performance are critical. Removing framework overhead keeps the prototype instant.
Canvas API: Used for the hero particle system to achieve smooth 60fps mouse-reactive animations without heavy libraries.
Intersection Observer: Used for scroll-triggered animations and stat counters instead of heavy scroll-event listeners, keeping the main thread unblocked.
CSS Variables: Centralized the dark theme color palette for easy maintainability and consistency.
Project Structure
soundsync-redesign/│├── index.html    # Main HTML structure├── style.css     # All styling, animations, and responsive design└── script.js     # Particle engine, feed logic, and interactions
Setup & Run Locally
Since this is a static site, no build tools or Node.js are required.

Clone the repository:
bash

git clone https://github.com/Saikiran58ravula/soundsync-redesign.git
Open the folder.
Double-click index.html or use the VS Code Live Server extension.
Author
Ravula Saikiran

Portfolio: https://saikiran58ravula.github.io/portfolio-website/
LinkedIn: https://www.linkedin.com/in/saikiran-ravula1/
GitHub: https://github.com/Saikiran58ravula
Email: saikiransunny58@gmail.com
text




