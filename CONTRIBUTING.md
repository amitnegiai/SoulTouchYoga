# 🤝 Contributing to SoulTouchYoga

Thank you for your interest in contributing to SoulTouchYoga! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Getting Started](#-getting-started)
- [Development Setup](#-development-setup)
- [Code Style Guidelines](#-code-style-guidelines)
- [Feature Requests](#-feature-requests)
- [Bug Reports](#-bug-reports)
- [Pull Request Process](#-pull-request-process)
- [Code of Conduct](#-code-of-conduct)

## 🚀 Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A code editor (VS Code recommended)
- Git installed on your machine
- A GitHub account

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   # Then clone your forked repository
   git clone https://github.com/yourusername/soultouchyoga.git
   cd soultouchyoga
   ```

2. **Set up the development environment**
   ```bash
   # Install dependencies (if any)
   npm install
   
   # Start development server
   npm run dev
   # or
   python -m http.server 8000
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ Development Setup

### Local Development

1. **Open the project**
   ```bash
   # Using VS Code
   code .
   
   # Or open index.html directly in your browser
   ```

2. **Live Server (Recommended)**
   - Install Live Server extension in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server"

3. **File Structure**
   ```
   soultouchyoga/
   ├── index.html          # Main HTML file
   ├── styles.css          # All CSS styles
   ├── script.js           # JavaScript functionality
   ├── README.md           # Documentation
   └── assets/             # Images and other assets
   ```

## 📝 Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Include alt attributes for images
- Use descriptive class names

```html
<!-- Good -->
<section class="hero-section">
  <h1>Transform Your Life</h1>
  <img src="yoga.jpg" alt="Yoga meditation session">
</section>

<!-- Avoid -->
<div class="section">
  <div class="title">Transform Your Life</div>
  <img src="yoga.jpg">
</div>
```

### CSS
- Use BEM methodology for class naming
- Maintain consistent indentation (2 spaces)
- Group related properties together
- Use meaningful variable names

```css
/* Good */
.hero-section {
  background: linear-gradient(135deg, #f8f9fa, #e3f2fd);
  padding: 5rem 0;
}

.hero-section__title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

/* Avoid */
.hero {
  background: #f8f9fa;
  padding: 5rem 0;
  font-size: 2.5rem;
  color: #2c3e50;
}
```

### JavaScript
- Use ES6+ features
- Add comments for complex logic
- Use meaningful variable and function names
- Handle errors gracefully

```javascript
// Good
function bookDemoClass() {
  const message = `Hello! I'm interested in booking a demo class.`;
  const whatsappUrl = `https://wa.me/919634016536?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Avoid
function book() {
  const m = "Hello! I'm interested in booking a demo class.";
  const url = `https://wa.me/919634016536?text=${encodeURIComponent(m)}`;
  window.open(url, '_blank');
}
```

## 🎯 Feature Requests

### Before Submitting a Feature Request

1. **Check existing issues** - Your feature might already be requested
2. **Search the repository** - The feature might already exist
3. **Consider the scope** - Is this feature appropriate for a yoga website?

### Submitting a Feature Request

1. **Use the feature request template**
2. **Provide detailed description**
3. **Include mockups or examples**
4. **Explain the benefit to users**

Example feature request:
```
Title: Add meditation music background

Description:
Add ambient meditation music that plays during the breathing exercise tool.

Benefits:
- Enhanced user experience
- More immersive meditation practice
- Better relaxation effects

Implementation:
- Add audio files to assets/
- Create audio controls in breathing exercise
- Allow users to toggle music on/off
```

## 🐛 Bug Reports

### Before Submitting a Bug Report

1. **Check existing issues** - The bug might already be reported
2. **Test on different browsers** - Is it browser-specific?
3. **Test on different devices** - Is it device-specific?

### Submitting a Bug Report

1. **Use the bug report template**
2. **Provide detailed steps to reproduce**
3. **Include browser and device information**
4. **Add screenshots if applicable**

Example bug report:
```
Title: Calendar booking not working on mobile

Description:
The booking calendar doesn't respond to touch events on mobile devices.

Steps to reproduce:
1. Open website on mobile device
2. Navigate to booking calendar section
3. Try to select a date
4. Observe no response

Expected behavior:
Date should be selected and highlighted

Actual behavior:
No visual feedback or selection

Environment:
- Device: iPhone 12
- Browser: Safari 15
- OS: iOS 15.0
```

## 🔄 Pull Request Process

### Before Submitting a PR

1. **Test your changes thoroughly**
2. **Ensure mobile responsiveness**
3. **Check browser compatibility**
4. **Update documentation if needed**

### PR Guidelines

1. **Use descriptive PR titles**
2. **Provide detailed description**
3. **Include screenshots for UI changes**
4. **Link related issues**

Example PR:
```
Title: Add meditation timer with sound notifications

Description:
Added a meditation timer with customizable durations and sound notifications.

Changes:
- Added timer functionality in script.js
- Added timer UI in index.html
- Added timer styles in styles.css
- Added sound notification feature

Testing:
- Tested on Chrome, Firefox, Safari
- Tested on mobile devices
- Verified all timer functions work correctly

Closes #123
```

### PR Review Process

1. **Automated checks** - Code style, linting
2. **Manual review** - Functionality, design, accessibility
3. **Testing** - Cross-browser, mobile, performance
4. **Approval** - At least one maintainer approval required

## 📋 Code of Conduct

### Our Standards

- **Be respectful** - Treat everyone with respect
- **Be inclusive** - Welcome contributors from all backgrounds
- **Be constructive** - Provide helpful, constructive feedback
- **Be patient** - Understand that contributors have different skill levels

### Unacceptable Behavior

- **Harassment** - Any form of harassment or discrimination
- **Trolling** - Deliberately disruptive behavior
- **Spam** - Unwanted promotional content
- **Inappropriate content** - Content not suitable for a yoga website

## 🎉 Recognition

### Contributors

All contributors will be recognized in:
- README.md contributors section
- GitHub contributors page
- Release notes

### Types of Contributions

- **Code** - Bug fixes, new features, improvements
- **Documentation** - README updates, code comments
- **Design** - UI/UX improvements, graphics
- **Testing** - Bug reports, testing on different devices
- **Ideas** - Feature suggestions, feedback

## 📞 Getting Help

### Questions?

- **GitHub Issues** - For bugs and feature requests
- **GitHub Discussions** - For questions and general discussion
- **Email** - pinkynegi19996@gmail.com

### Resources

- [HTML5 Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3 Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)

## 🙏 Thank You

Thank you for contributing to SoulTouchYoga! Your contributions help make yoga and meditation more accessible to everyone.

---

**Remember**: Every contribution, no matter how small, makes a difference! 🌟 