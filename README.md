# 🌾 TenTwenty Farms

<div align="center">

![TenTwenty Farms Banner](https://img.shields.io/badge/TenTwenty-Farms-2E7D32?style=for-the-badge&logo=leaflet&logoColor=white&labelColor=1B5E20)

### 🚜 From Our Farms To Your Hands

A stunning, pixel-perfect frontend implementation of the **TenTwenty Farms** website — built as a technical assessment showcasing modern web development skills with smooth animations, responsive design, and premium aesthetics.

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-FF6B35?style=for-the-badge&logoColor=white)](https://theikram.github.io/TenTwenty-Farms)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-FF0050?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎠 **Hero Slider** | Full-screen image carousel with clip-path transitions, auto-play timer, and animated progress border |
| 🖼️ **3D Carousel** | Swipeable image gallery with circular fan rotation effect and smooth spring animations |
| 📱 **Fully Responsive** | Pixel-perfect layouts for Desktop, Tablet, and Mobile viewports |
| 🎨 **Premium Design** | Work Sans typography, precise Figma-spec spacing, and #EEF4F9 branded color palette |
| ⚡ **Smooth Animations** | Text reveals, slide transitions, and micro-interactions powered by Framer Motion |
| 🍔 **Mobile Navigation** | Responsive navbar with hamburger menu on mobile, full nav links on desktop |
| ♻️ **Infinite Loop** | Both hero slider and product carousel loop infinitely through all images |
| 🖱️ **Drag/Swipe** | Touch-friendly swipe gestures on the product carousel for mobile & desktop |

---

## 🎬 Live Demo

<div align="center">

### 🖥️ Desktop Version
![Desktop Demo](Live%20Demo/Desktop.mp4)

---

### 📱 Mobile Version
![Mobile Demo](Live%20Demo/Mobile.mp4)

</div>

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
|:---:|:---:|
| ⚛️ **React 19** | UI Component Library |
| 📘 **TypeScript** | Type Safety & DX |
| 🎨 **Tailwind CSS 4** | Utility-First Styling |
| 🎭 **Framer Motion** | Animation Engine |
| ⚡ **Vite 6** | Build Tool & Dev Server |
| 🔷 **Lucide React** | Icon Library |

</div>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/theikram/TenTwenty-Farms.git

# 2️⃣ Navigate to the project
cd TenTwenty-Farms

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev
```

The app will be running at `http://localhost:5173` 🎉

### Build for Production

```bash
# Build optimized bundle
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
tentwenty-farms/
├── 📂 public/
│   └── 📂 images/
│       ├── 🖼️ Hero Image.jpg          # Hero section background
│       └── 📂 carousel/               # Product carousel images (9 total)
├── 📂 src/
│   ├── 📄 App.tsx                     # Main application component
│   ├── 📄 main.tsx                    # React entry point
│   └── 📄 index.css                   # Global styles & Tailwind imports
├── 📂 Live Demo/
│   ├── 🎬 Desktop.gif                # Desktop walkthrough
│   └── 🎬 Mobile.gif                 # Mobile walkthrough
├── 📄 index.html                      # HTML template
├── 📄 tailwind.config.js             # Tailwind configuration
├── 📄 tsconfig.json                   # TypeScript configuration
├── 📄 vite.config.ts                  # Vite configuration
└── 📄 package.json                    # Dependencies & scripts
```

---

## 🎨 Design Specifications

### Typography
- **Font Family:** Work Sans (Google Fonts)
- **Hero Title:** 64px / 36px (mobile)
- **Section Heading:** 56px / 32px (mobile)
- **Body Text:** 24px / 15px (mobile)
- **Client Name:** 36px / 24px (mobile)

### Colors
| Color | Hex | Usage |
|-------|-----|-------|
| 🟤 Primary | `#1A1A1A` | Text, borders |
| ⚪ Background | `#EEF4F9` | Navbar background |
| 🟠 Section BG | `#F9F7F3` | Quality Products section |
| 🔘 Secondary | `#666666` | Body text, descriptions |

### Navbar Dimensions
- **Width:** 100% (max content)
- **Height:** 101px (desktop) / 70px (mobile)
- **Padding:** 32px outer spacing

---

## 📐 Responsive Breakpoints

| Breakpoint | Layout |
|:---:|:---:|
| 📱 **< 768px** | Mobile — Hamburger nav, stacked content, 230px carousel cards |
| 🖥️ **≥ 768px** | Desktop — Full navbar, side-by-side layout, 550px carousel cards |

---

## 👨‍💻 Developer

<div align="center">

**Muhammad Ikram Ul Haq**

[![GitHub](https://img.shields.io/badge/GitHub-theikram-181717?style=for-the-badge&logo=github)](https://github.com/theikram)

</div>

---

## 📝 Assessment Context

> This project was built as a **Frontend Developer Technical Assessment** for [TenTwenty](https://tentwenty.me/). The implementation follows the provided Figma designs and video references with pixel-perfect accuracy, demonstrating proficiency in:
>
> - ⚛️ Modern React with Hooks
> - 📘 TypeScript integration
> - 🎨 CSS-in-JS with Tailwind CSS
> - 🎭 Complex animations with Framer Motion
> - 📱 Responsive web design
> - 🧩 Component architecture

---

<div align="center">

Made with ❤️ by **Ikram** | © 2025 TenTwenty Farms

⭐ Star this repo if you found it impressive!

</div>
