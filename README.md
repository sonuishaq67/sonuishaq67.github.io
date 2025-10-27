# Portfolio Website - Palantir Inspired Design

A modern, minimalist portfolio website inspired by Palantir's sleek design aesthetic. Features a dark theme, clean typography, and professional presentation.

## Features

- **Dark Theme**: Sleek black background with minimal design
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Subtle fade-in and hover effects
- **Modern Typography**: Clean, professional fonts (Inter & JetBrains Mono)
- **Contact Integration**: Multiple ways to get in touch
- **Project Showcase**: Highlight your best work
- **Skills Display**: Showcase your technical expertise
- **Experience Timeline**: Professional timeline view

## Getting Started

1. Open `index.html` in your web browser
2. Customize the content in `index.html` with your information:
   - Update personal details in the Hero section
   - Modify skills, projects, and experience sections
   - Update contact information
   - Add your social media links

3. Update the resume link:
   - Place your resume PDF in the root directory
   - Ensure the filename matches the link in the navigation

## Customization

### Colors

Edit `styles.css` to customize the color scheme:

```css
:root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #111111;
    --accent-primary: #00ff88;
    --accent-secondary: #0088ff;
}
```

### Content Sections

All content is in `index.html`. Key sections to update:

1. **Hero Section**: Personal introduction and tagline
2. **About Section**: Your background and stats
3. **Skills Section**: Technologies you work with
4. **Experience**: Your work history
5. **Projects**: Your portfolio projects
6. **Contact**: Ways to reach you

### Adding Projects

Add new project cards in the projects section:

```html
<div class="project-card">
    <div class="project-header">
        <h3 class="project-title">Your Project</h3>
        <div class="project-links">
            <a href="#" class="project-link">↗</a>
        </div>
    </div>
    <p class="project-description">Description here</p>
    <div class="project-tech">
        <span>Tech 1</span>
        <span>Tech 2</span>
    </div>
</div>
```

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive features
├── README.md           # This file
└── resume.pdf          # Your resume (add this)
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lightweight and fast loading
- Optimized animations
- Minimal dependencies
- No external libraries required

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select the main branch
4. Your site will be live at `username.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly

### Vercel

1. Import your repository
2. Deploy with one click

## Features in Detail

### Navigation
- Fixed header with smooth scroll
- Active section highlighting
- Responsive mobile menu

### Hero Section
- Large title with gradient text
- Call-to-action buttons
- Code block with mock data

### About Section
- Personal introduction
- Statistics counter animation
- Skills grid with categories

### Experience Section
- Timeline layout
- Work history with dates
- Key achievements listed

### Projects Section
- Card-based layout
- Hover effects
- Tech stack tags

### Contact Section
- Multiple contact methods
- Clickable contact cards
- Download resume link

## Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #your-color;
    --gradient-start: #your-color;
    --gradient-end: #your-color;
}
```

### Adding Skills

Add skill categories and tags:

```html
<div class="skill-category">
    <h3 class="skill-title">Category</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

### Modifying Projects

Each project card has:
- Title
- Description
- Tech stack tags
- Links (update href attributes)

## Animations

The website includes smooth animations:
- Fade-in on scroll
- Hover effects on interactive elements
- Counter animations for statistics
- Smooth scrolling navigation

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please open an issue on GitHub.

## Acknowledgments

- Inspired by Palantir's design aesthetic
- Typography: Inter and JetBrains Mono
- Color scheme: Dark theme with cyan accent

