# Hammad Malik - Portfolio Website

A modern, interactive portfolio website built with React and Vite, showcasing my skills, projects, and professional journey as a Software Developer and Computer Science student.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **3D Background Effects**: Dynamic visual effects using Vanta.js with Three.js
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Interactive Contact Form**: Functional contact form with EmailJS integration
- **Interactive Map**: Real-time map integration with React Leaflet
- **Project Showcase**: Detailed project displays with filtering capabilities
- **Skills Visualization**: Dynamic skills display with proficiency indicators
- **Education Timeline**: Interactive education journey presentation

## 🚀 Live Demo

Visit the live portfolio: [hammadmalik.vercel.app](https://hammadmalik.vercel.app)

## 🛠️ Built With

### Frontend
- **React 19** - UI library for building user interfaces
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Three.js** - 3D graphics library
- **Vanta.js** - Animated background effects

### Libraries & Tools
- **React Leaflet** - Interactive maps
- **EmailJS** - Contact form functionality
- **React Icons** - Icon library
- **Heroicons** - Additional icons
- **ESLint** - Code linting

### Deployment
- **Vercel** - Hosting and deployment platform

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── ham.png              # Profile icon
│   ├── hammad.png           # Profile picture
│   ├── mycv.pdf            # Resume/CV
│   └── vite.svg            # Vite logo
├── .env                     # Environment variables (not in git)
├── .env.example             # Environment variables template
├── src/
│   ├── assets/             # Images and static assets
│   │   ├── picture.jpg     # Main profile picture
│   │   ├── ResumeAI.jpg    # Project screenshots
│   │   ├── sched.png
│   │   └── ...
│   ├── components/         # React components
│   │   ├── AboutSection.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Homesection.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Skills.jsx
│   │   ├── VantaBackground.jsx
│   │   └── sidebar.jsx
│   ├── App.jsx            # Main App component
│   ├── App.css            # App styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Sections

### 1. Home
- Hero section with animated text
- Profile picture with interactive effects
- Call-to-action buttons (Contact, Download CV)

### 2. About
- Interactive tabs showcasing different aspects:
  - Personal story and background
  - Future aspirations and goals
  - Learning journey and growth
  - Interests and passions

### 3. Services
- Web Application Development
- Mobile Application Development
- API Development & Integration
- Development process overview

### 4. Skills
- Filterable skill categories:
  - Frontend (HTML, CSS, React, Tailwind CSS)
  - Backend (Node.js, Express, React Native)
  - Databases (MongoDB, SQL Server, Firebase)
  - Languages (JavaScript, Python, C/C++)
  - Frameworks & DevOps tools
- Proficiency indicators and statistics

### 5. Education
- Interactive timeline of educational journey
- Detailed information about:
  - Habib University (Computer Science)
  - Aga Khan Higher Secondary School
  - Bai Virbaiji Soparivala Parsi High School
- Certifications and additional learning

### 6. Projects
- Featured projects with detailed descriptions:
  - **ResumeAI**: AI-powered resume builder
  - **ShedUTrack**: University scheduling assistant
  - **Pacman Pursuit**: OOP game development
  - **HU Gym Portal**: Database systems project
  - **RISC V Processor**: Computer architecture project
- Filterable by category (Web, Desktop, Games, Hardware)

### 7. Contact
- Functional contact form with EmailJS
- Interactive map showing location (Karachi, Pakistan)
- Social media links and professional contacts
- FAQ section

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HammadMal/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with your EmailJS credentials (see setup instructions below)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 📧 Contact Form Setup

To set up the contact form functionality:

1. **Create an account on [EmailJS](https://www.emailjs.com/)**
   - Sign up for a free account

2. **Create a service**
   - Go to Email Services and add a new service
   - Connect your email provider (Gmail, Outlook, etc.)
   - Copy the Service ID

3. **Create an email template**
   - Go to Email Templates and create a new template
   - Use these variables in your template:
     - `{{from_name}}` - Sender's name
     - `{{reply_to}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Message content
   - Copy the Template ID

4. **Get your Public Key**
   - Go to Account → General
   - Copy your Public Key

5. **Update your `.env` file**
   ```env
   VITE_SERVICE_ID=your_service_id_here
   VITE_TEMPLATE_ID=your_template_id_here
   VITE_PUBLIC_KEY=your_public_key_here
   ```

**Note**: Never commit your `.env` file to version control. It's already included in `.gitignore`.

## 🎨 Customization

### Colors and Styling
- Primary colors are defined in Tailwind CSS configuration
- Main theme uses blue color scheme with gradients
- Modify `tailwind.config.js` to change the color palette

### Content Updates
- Update personal information in respective component files
- Replace project images in `src/assets/`
- Modify project data in `src/components/Projects.jsx`
- Update skills in `src/components/Skills.jsx`

### Background Effects
- Vanta.js effects can be customized in `src/components/VantaBackground.jsx`
- Available effects: FOG, HALO, NET
- Adjust parameters like colors, speed, and scale

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Collapsible sidebar navigation on mobile
- Optimized layouts for different screen sizes
- Touch-friendly interactions

## ⚡ Performance

- **Lazy Loading**: Components load efficiently
- **Optimized Images**: Compressed and properly sized assets
- **Code Splitting**: Vite's built-in code splitting
- **Minimal Bundle Size**: Optimized for fast loading

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:
- Open an issue for bugs or suggestions
- Fork the repository for your own portfolio (give credit where due)
- Share feedback on design or functionality

## 📬 Contact

- **Email**: Hammadmalik40a@gmail.com
- **LinkedIn**: [Hammad Malik](https://www.linkedin.com/in/hammad-malik-a4883a212/)
- **GitHub**: [HammadMal](https://github.com/HammadMal)
- **Portfolio**: [hammadmalik.vercel.app](https://hammadmalik.vercel.app)

## 🙏 Acknowledgments

- **Vanta.js** for amazing background effects
- **Framer Motion** for smooth animations
- **React Leaflet** for map integration
- **EmailJS** for contact form functionality
- **Vercel** for seamless deployment
- **Tailwind CSS** for utility-first styling

---

**Built with ❤️ by Hammad Malik**
