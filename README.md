# Portfolio Website - MERN Stack

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)

A modern, responsive portfolio website built with the MERN stack featuring a contact form with email notifications, dark/light theme toggle, and showcase sections for projects, skills, certifications, and coding platform profiles.

## 🚀 Features

- **Responsive Design** - Mobile-first, works on all devices
- **Dark/Light Theme** - Persistent theme toggle with localStorage
- **Contact Form** - Email notifications via Nodemailer (Gmail)
- **Project Showcase** - Display your best work with links
- **Skills Section** - Categorized technical skills
- **Certifications** - Display your achievements with images
- **Coding Platforms** - Link to LeetCode, HackerRank, GeeksforGeeks
- **Smooth Animations** - CSS transitions and scroll effects
- **Production Ready** - Clean, optimized code for deployment

## 🛠️ Tech Stack

### Frontend
- React.js 18.2.0
- Axios for API calls
- CSS3 with custom properties
- Font Awesome icons
- Context API for theme management

### Backend
- Node.js with Express.js
- Nodemailer for email service
- CORS enabled
- Environment-based configuration

## 📁 Project Structure

```
portfolio-mern/
├── client/                 # React frontend
│   ├── public/
│   │   ├── images/        # Static images
│   │   └── index.html
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # Theme context
│   │   ├── styles/        # CSS files
│   │   ├── utils/         # API utilities
│   │   ├── App.js
│   │   └── index.js
│   ├── .env.development   # Dev environment vars
│   ├── .env.production    # Prod environment vars
│   └── package.json
├── server/                # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── routes/           # API routes
│   ├── config/           # Database config (optional)
│   ├── .env              # Environment variables
│   ├── .env.production   # Production template
│   ├── server.js         # Entry point
│   └── package.json
├── netlify.toml          # Netlify configuration
├── DEPLOYMENT.md         # Deployment guide
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Gmail account with App Password (for contact form)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Aman1879/portfolio-mern.git
cd portfolio-mern
```

2. **Install backend dependencies**
```bash
cd server
npm install
```

3. **Install frontend dependencies**
```bash
cd ../client
npm install
```

### Configuration

1. **Backend Environment Variables**
   
   Create `server/.env`:
   ```env
   PORT=5000
   NODE_ENV=development
   CLIENT_URL=http://localhost:3000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ADMIN_EMAIL=your-email@gmail.com
   ```

2. **Frontend Environment Variables**
   
   Create `client/.env.development`:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

### Running Locally

1. **Start the backend server**
```bash
cd server
npm start
```
Backend runs on http://localhost:5000

2. **Start the frontend** (in a new terminal)
```bash
cd client
npm start
```
Frontend runs on http://localhost:3000

## 📤 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:
- **Frontend**: Netlify
- **Backend**: Render

### Quick Deployment Checklist

**Backend (Render):**
- [ ] Create Web Service on Render
- [ ] Set root directory to `server`
- [ ] Add all environment variables
- [ ] Copy your backend URL

**Frontend (Netlify):**
- [ ] Connect GitHub repository
- [ ] Set base directory to `client`
- [ ] Set build command: `npm install && npm run build`
- [ ] Set publish directory: `client/build`
- [ ] Add `REACT_APP_API_URL` environment variable
- [ ] Update backend `CLIENT_URL` with Netlify URL

## 🧪 Build Verification

**Test frontend build:**
```bash
cd client
npm run build
```
Should complete without errors or warnings.

**Test backend:**
```bash
cd server
npm start
```
Visit http://localhost:5000/api/health - should return JSON response.

## 📧 Email Setup

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use this 16-character password in `EMAIL_PASSWORD`

## 🎨 Customization

### Update Personal Information

1. **Home Section**: Edit `client/src/components/Home.js`
2. **About Section**: Edit `client/src/components/About.js`
3. **Projects**: Edit `client/src/components/Projects.js`
4. **Skills**: Edit `client/src/components/Services.js`
5. **Certifications**: Edit `client/src/components/Certificates.js`
6. **Coding Platforms**: Edit `client/src/components/CodingPlatforms.js`

### Add Images

Place images in `client/public/images/` and reference as `/images/your-image.jpg`

## 🐛 Troubleshooting

### Build Failures
- Check for console.log statements (removed in production)
- Verify all imports match file names (case-sensitive on Linux)
- Run `npm run build` locally first

### Contact Form Not Working
- Verify backend is running and accessible
- Check CORS settings match your frontend URL
- Confirm Gmail App Password is correct (16 characters, no spaces)
- Check browser console and server logs

### Environment Variables Not Loading
- Ensure `.env` files are in correct directories
- Restart development servers after changing env vars
- For React, env vars must start with `REACT_APP_`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aman Kumar Singh**
- GitHub: [@Aman1879](https://github.com/Aman1879)
- LinkedIn: [Aman Kumar Singh](https://www.linkedin.com/in/aman-kumar-singh-827631283/)
- Portfolio: [Your Live URL]

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts (Playfair Display, Montserrat)
- React community for excellent documentation

---

Built with ❤️ by Aman Kumar Singh
