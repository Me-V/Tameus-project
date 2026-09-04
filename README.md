# TransferNow Clone (Tameus Project)

A modern, highly responsive, and pixel-perfect landing page clone of TransferNow. Built with a focus on premium aesthetics, smooth animations, and top-tier performance.

## 🚀 Features

- **Responsive Design**: Flawless layout scaling from ultra-wide desktop monitors down to mobile screens.
- **Glassmorphism UI**: Beautiful, translucent mobile menus and elements using Tailwind's backdrop-blur filters.
- **Smooth Animations**: Buttery-smooth, scroll-based reveal animations powered by Framer Motion.
- **Video Background**: High-performance local video background optimized for instant perceived load times.
- **Modern Typography & Styling**: Utilizing Inter fonts, precise spacing, and custom color palettes.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & React Icons

## ⚙️ Getting Started

First, ensure you have Node.js installed on your machine.

1. **Clone the repository** (if applicable) and navigate to the project directory:

   ```bash
   cd Tameus-project
   ```

2. **Install the dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. Open [https://tameus-project.vercel.app](https://tameus-project.vercel.app) with your browser to see the result.

## 📁 Project Structure

- `app/page.tsx`: The main orchestrator and layout container.
- `app/components/`: Modular, reusable UI components (Hero, Navbar, Pricing, FAQ, etc.).
- `app/components/animations/`: Custom Framer Motion wrappers (e.g., `FadeIn`).
- `public/`: Static assets including images and the local `hero-video.mp4`.

## 📝 Notes

This project was generated using `create-next-app` and uses Next.js version 16.3.4.
