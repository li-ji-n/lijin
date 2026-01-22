# Senior Developer Portfolio

A high-performance, statically generated portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. Designed for a Senior React Native Developer to showcase mobile engineering expertise.

## 🚀 Key Features

- **Static Site Generation (SSG)**: Zero client-side data fetching for maximum performance.
- **Premium Aesthetics**: Glassmorphism, glow effects, and smooth animations using Tailwind CSS v4.
- **Type-Safe Data Layer**: All content managed via strictly typed TypeScript files in `data/`.
- **SEO Optimized**: Dynamic sitemap, metadata, and semantic HTML.
- **Responsive**: Mobile-first design.

## 📂 Project Structure

```
/
├── app/                  # App Router pages and layout
│   ├── projects/         # Projects list and dynamic [slug] pages
│   ├── globals.css       # Tailwind v4 and global animations
│   └── ...
├── components/           # Reusable UI components (Header, ProjectCard, etc.)
├── data/                 # Static content (Edit these files!)
│   ├── profile.ts        # Personal info and social links
│   ├── projects.ts       # Detailed case studies
│   ├── experience.ts     # Career timeline
│   └── skills.ts         # Technical skills
└── public/               # Static assets (images, pdfs)
```

## 🛠️ Customization

1.  **Update Profile**: Edit `data/profile.ts` with your name, role, and links.
2.  **Add Projects**: Add new project objects to `data/projects.ts` to automatically generate case studies.
3.  **Update Experience**: Modify `data/experience.ts`.
4.  **Resume**: Replace `public/resume.pdf` with your actual PDF file.
5.  **Images**: Place images in `public/images/` and reference them in your content if needed.

## 🏃‍♂️ Running Locally

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📦 Deployment

This project is optimized for **Vercel**.

1.  Push to GitHub.
2.  Import project in Vercel.
3.  Deploy (Build settings are standard Next.js defaults).

## 📄 License

MIT
