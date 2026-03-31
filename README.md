# Caitlin's Photography Portfolio

A modern, responsive photography portfolio built with **React** and **Bootstrap**. Showcasing curated collections of Ireland and natural landscape photography.

## Overview

This is a sleek web application featuring a curated collection of landscape and nature photography from Ireland and New York. The portfolio provides a seamless user experience with client-side routing, smooth navigation, and a modern Bootstrap-styled interface.

### Tech Stack

- **Frontend**: React 18, React Router, React Bootstrap
- **Styling**: Bootstrap 5, Custom CSS3
- **Data**: JSON file (`photos.json`)

## Project Structure

```
Photography-Portfolio/
├── README.md
├── client/                          # Frontend (React)
│   ├── public/
│   │   ├── index.html               # HTML template
│   │   ├── photos.json              # Photo data (editable)
│   │   ├── image/                   # Background images
│   │   └── photos/                  # Photography gallery images
│   │
│   ├── src/
│   │   ├── App.js                   # Main App component
│   │   ├── App.css                  # Styling
│   │   ├── index.js                 # React entry point
│   │   ├── index.css                # Global styles
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.js              # Landing page
│   │   │   ├── IrelandGallery.js    # Ireland photos gallery
│   │   │   └── NaturalGallery.js    # Natural photos gallery
│   │   │
│   │   └── components/
│   │       ├── Navigation.js        # Navbar component
│   │       ├── Footer.js            # Footer component
│   │       └── Gallery.js           # Reusable gallery component
│   │
│   └── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Quick Start

```bash
cd client
npm install
npm start
```

Open your browser to **http://localhost:3000**

All photo data is loaded from `public/photos.json` - no server needed!

## Features

✨ **Modern Stack**
- React 18 with hooks
- Client-side routing with React Router
- Component-based architecture

🎨 **Beautiful Design**
- Bootstrap 5 for responsive layout
- Custom CSS with modern styling
- Smooth transitions and hover effects
- Gradient hero section

📸 **Photo Management**
- Easy JSON-based photo editing (no restart needed!)
- Organized collections (Ireland, Natural)
- Image lazy loading support
- Descriptive captions

🚀 **Performance**
- Fast load times
- Optimized React build
- Static file serving
- Lightweight (no database required)

## Photo Data

Photos are loaded from `/client/public/photos.json`. To add or edit photos:

1. **Add images** to `/client/public/photos/` folder
2. **Edit** `/client/public/photos.json` to add metadata:
   ```json
   {
     "ireland": [
       {
         "id": 1,
         "title": "Photo Title",
         "src": "/photos/filename.jpg",
         "alt": "Description",
         "width": 600,
         "height": 300,
         "description": "Photo description"
       }
     ]
   }
   ```
3. **Save** and refresh browser - no server restart needed!

That's it! Changes are instant.

## Navigation

- **Home** - Landing page with gallery overview
- **Ireland Gallery** - Collection of Irish coastal photography
- **Natural Gallery** - Landscape and nature photography from New York

## Development Workflow

### Making Changes

**Edit Components:**
- React components auto-reload with hot module replacement
- Edit any file in `client/src/` and see changes instantly

**Add Photos:**
1. Place images in `client/public/photos/`
2. Add entries to `client/public/photos.json`
3. Refresh browser - done!

**Update Styling:**
- Edit `client/src/App.css` for global styles
- Changes apply instantly

## Building for Production

### Build React App
```bash
cd client
npm run build
```

Creates optimized production build in `client/build/`

### Deploy

**Easy hosting options:**
- **Netlify**: Drag & drop `build` folder
- **Vercel**: Connect GitHub repo  
- **GitHub Pages**: Run `npm run build` and push `build` folder
- **Any web server**: Copy `build` contents to web root

That's it! No server configuration needed.

## File Descriptions

### Key Files
- **public/photos.json** - Photo data and metadata (edit this!)
- **src/App.js** - Main app with routing
- **src/App.css** - All styling
- **src/pages/** - Page components (Home, Galleries)
- **src/components/** - Reusable components (Navigation, Footer, Gallery)

## Future Enhancements

- Photo upload functionality
- Admin panel for content management
- Backend database integration (if needed)
- Comment/rating system
- Contact form
- Social media integration
- Image optimization and CDN integration
- Dark mode toggle

## Troubleshooting

**Port 3000 already in use:**
```bash
# Kill the process using port 3000
# Or use a different port:
PORT=3001 npm start
```

**Photos not showing:**
- Check image files are in `client/public/photos/`
- Verify paths in `photos.json` are correct
- Ensure JSON syntax is valid (use a JSON validator)

**Build fails:**
```bash
rm -r node_modules package-lock.json
npm install
npm run build
```

**Slow performance:**
- Check image sizes (compress large photos)
- Clear browser cache
- Run `npm run build` for production version

## License

### Code - MIT License
The React application code in this repository is released under the **MIT License**. You are free to:
- ✅ Use the code for personal or commercial projects
- ✅ Modify and customize it
- ✅ Distribute and redistribute it
- ✅ Use it as a template for your own portfolio

See [LICENSE](LICENSE) file for details.

### Photographs - All Rights Reserved
The photographs in `/client/public/photos/` directory are the exclusive intellectual property of **Caitlin Sisilli** and are protected by copyright law.

You may NOT:
- ❌ Use photographs commercially
- ❌ Reproduce or distribute photographs
- ❌ Modify or alter photographs
- ❌ Use photographs for any purpose without permission

**© 2026 Caitlin Sisilli. All Rights Reserved.**

### Summary
- **Code**: Use freely (MIT License)
- **Photos**: Copyright protected - viewed in portfolio only
