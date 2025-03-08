# Hemanth Reddy Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, experience, and publications.

## Features

- **Responsive Design**: Fully responsive layout that looks great on all devices
- **Dark/Light Mode Toggle**: Switch between dark and light themes with a single click
- **Interactive Sections**: Animated sections with scroll reveal effects
- **Project Showcase**: Highlights of my key projects with technologies used and GitHub links
- **Skills Visualization**: Visual representation of technical skills with progress bars
- **Contact Form**: Integrated contact form that sends messages directly to my email
- **Publications Section**: Showcase of my research publications with links to the full papers

## Technologies Used

- **React**: For building the user interface components
- **Tailwind CSS**: For styling and responsive design
- **Lucide React**: For modern, customizable icons
- **Intersection Observer API**: For scroll animations
- **FormSubmit**: For handling form submissions without a backend

## Setup and Installation

1. Clone the repository
   ```
   git clone https://github.com/S-HEMANTH-REDDY/Hemanth_Reddy_Portfolio.git
   ```

2. Navigate to the project directory
   ```
   cd Hemanth_Reddy_Portfolio
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Start the development server
   ```
   npm run dev
   ```

5. Build for production
   ```
   npm run build
   ```

## Project Structure

```
/
├── public/
│   └── ink.jpg               # Profile image
├── src/
│   ├── components/           # Reusable components
│   ├── pages/                # Page components
│   │   └── Portfolio.jsx     # Main portfolio component
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Entry point
└── index.html               # HTML template
```

## Customization

The portfolio is built to be easily customizable:

- **Theme**: Modify the `themeClasses` object in `Portfolio.jsx` to change colors
- **Content**: Update the project data, skills, and experience arrays to reflect your own information
- **Styling**: Use Tailwind CSS classes to adjust the styling to your preferences

## Deployment

This portfolio is deployed using GitHub Pages. The live site can be viewed at [https://s-hemanth-reddy.github.io/Hemanth_Reddy_Portfolio/](https://s-hemanth-reddy.github.io/Hemanth_Reddy_Portfolio/)

To deploy your own version:

1. Update the `vite.config.js` to include your repository name:
   ```js
   export default defineConfig({
     base: '/Hemanth_Reddy_Portfolio/',
     // other config options...
   })
   ```

2. Run the build command:
   ```
   npm run build
   ```

3. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

## Contact

Feel free to contact me if you have any questions or would like to collaborate:

- Email: [hemanth1729hr@gmail.com](mailto:hemanth1729hr@gmail.com)
- LinkedIn: [https://www.linkedin.com/in/Hemanth-Reddy-UF](https://www.linkedin.com/in/Hemanth-Reddy-UF)
- GitHub: [https://github.com/S-HEMANTH-REDDY](https://github.com/S-HEMANTH-REDDY)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
