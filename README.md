<div align="center">

# 🌿 NusaStay

### *Temukan Ritme Alam Anda*

**Platform wisata domestik Indonesia yang menghubungkan para pelancong dengan keindahan nusantara — dari pegunungan berkabut hingga pantai tersembunyi.**

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://gsap.com/)

</div>

---

## 📖 Tentang Proyek

**NusaStay** adalah landing page modern untuk platform perjalanan wisata domestik Indonesia. Dibangun dengan pendekatan *award-winning design*, website ini menampilkan pengalaman browsing yang imersif dengan animasi scroll yang halus, transisi sinematik, dan estetika visual premium.

Website ini dirancang untuk memperkenalkan NusaStay kepada calon pelancong, menampilkan destinasi terbaik Indonesia, paket perjalanan, fitur unggulan layanan, serta testimoni pelanggan — semuanya dalam satu halaman yang elegan.

---

## ✨ Fitur Utama

- **🎬 Hero Section** — Background parallax dengan animasi karakter per-huruf (*staggered text reveal*) dan search bar interaktif
- **🗺️ Destinations Section** — Bento grid layout menampilkan 6 destinasi ikonik Indonesia (Ubud, Raja Ampat, Labuan Bajo, Bromo, Tana Toraja, Nusa Penida) dengan hover effect sinematik
- **⭐ Features Section** — Presentasi keunggulan layanan dengan animasi scroll-triggered
- **📦 Packages Section** — Kartu paket perjalanan (Backpacker & Family) dengan desain interaktif
- **💬 Testimonials Section** — Ulasan pelanggan dengan animasi masuk yang smooth
- **📣 CTA Section** — Call-to-action dengan desain eye-catching
- **🔗 Navbar** — Navigasi responsif dengan efek glassmorphism saat di-scroll
- **🦶 Footer** — Footer lengkap dengan link navigasi, social media, dan info kontak
- **🖱️ Smooth Scrolling** — Implementasi Lenis untuk pengalaman scroll yang premium

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
|---|---|
| **Framework UI** | React 19 |
| **Bahasa** | TypeScript 5.7 |
| **Build Tool** | Vite 6.2 |
| **Styling** | TailwindCSS v4 |
| **Animasi** | GSAP 3.12 + ScrollTrigger, Framer Motion 12 |
| **Smooth Scroll** | Lenis 1.2 |
| **Ikon** | Lucide React |
| **Tipografi** | Fraunces Variable (heading), Plus Jakarta Sans Variable (body) |
| **Package Manager** | pnpm |

---

## 📁 Struktur Proyek

```
nusastay/
├── public/                     # Static assets
├── src/
│   ├── components/             # Komponen React per-section
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── DestinationsSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── PackagesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useLenis.ts         # Custom hook untuk smooth scrolling
│   ├── lib/
│   │   └── animations.ts       # Helper animasi (GSAP variants, magnetic hover)
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles & design tokens
├── index.html                  # HTML template
├── vite.config.ts              # Konfigurasi Vite + path alias
├── tsconfig.json               # Konfigurasi TypeScript
└── package.json
```

---

## 🚀 Panduan Menjalankan Proyek Secara Lokal

### Prasyarat

Pastikan perangkat Anda sudah terinstal:

- **[Node.js](https://nodejs.org/)** — versi 18 atau lebih baru (disarankan v20 LTS)
- **[pnpm](https://pnpm.io/)** — package manager yang digunakan proyek ini

Untuk menginstal `pnpm`, jalankan perintah berikut di terminal:
```bash
npm install -g pnpm
```

Verifikasi instalasi:
```bash
node --version   # v18+ atau v20+
pnpm --version   # 8+ atau 9+
```

---

### Langkah-langkah

**1. Clone Repository**
```bash
git clone https://github.com/username/nusastay.git
cd nusastay
```

> Ganti `username` dengan username GitHub pemilik repositori ini.

**2. Install Dependencies**
```bash
pnpm install
```

> Perintah ini akan menginstal semua dependensi yang tercantum di `package.json` secara otomatis.

**3. Jalankan Development Server**
```bash
pnpm dev
```

**4. Buka di Browser**

Setelah server berjalan, buka browser dan akses:
```
http://localhost:5173
```

Website NusaStay siap digunakan! 🎉

---

### Perintah Lainnya

| Perintah | Deskripsi |
|---|---|
| `pnpm dev` | Menjalankan development server dengan hot-reload |
| `pnpm build` | Membuat production build ke folder `dist/` |
| `pnpm preview` | Menjalankan preview dari production build |

---

## 🔧 Konfigurasi

### Path Alias

Proyek ini menggunakan path alias `@` yang mengarah ke folder `src/`. Ini memungkinkan import yang lebih bersih:

```ts
// Tanpa alias
import { staggerContainer } from '../../lib/animations';

// Dengan alias
import { staggerContainer } from '@/lib/animations';
```

Alias ini dikonfigurasi di `vite.config.ts` dan `tsconfig.app.json`.

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan edukasi dan portofolio.

---

<div align="center">

Dibuat dengan ❤️ menggunakan **React** + **Vite** + **GSAP**

*"Dari sabang sampai merauke, setiap sudut nusantara menyimpan cerita yang menunggu untuk ditemukan."*

</div>
