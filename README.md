# Coding Collective Clone

Proyek ini adalah *clone* (replika) dengan tingkat kemiripan tinggi (*high-fidelity*) dari situs web Coding Collective. Tujuannya adalah untuk mereplikasi antarmuka pengguna (UI), pengalaman pengguna (UX), dan tata letak (*layout*) semirip mungkin dengan referensi aslinya.

## 🚀 Tujuan Utama

Tujuan utama dari proyek ini adalah membangun replika situs web yang *pixel-perfect*, sangat responsif, dan interaktif sesuai dengan desain situs referensi.

## ✨ Fitur Utama & Persyaratan yang Terpenuhi

*   **Navigasi Header**: Menu header berfungsi penuh dan dapat mengarahkan pengguna ke setiap bagian atau halaman aplikasi dengan benar. Dilengkapi juga dengan menu sidebar (*drawer*) yang responsif untuk tampilan mobile.
*   **Responsivitas Mobile**: Seluruh aplikasi sepenuhnya responsif dan dioptimalkan agar tampil dengan baik di berbagai ukuran layar, memastikan pengalaman pengguna yang lancar di perangkat mobile maupun desktop.
*   **Aset & Konten**: Menggunakan aset *placeholder* (gambar, video, ikon) dan konten alternatif yang dipilih dengan cermat untuk menyamai estetika desain aslinya.
*   **Animasi & Transisi**: Mengimplementasikan efek *scroll* yang halus, transisi halaman, dan animasi interaktif yang kompleks (seperti *card deck* industri yang bisa digeser dan elemen *marquee*) untuk memberikan kesan premium dan dinamis.

## 🛠️ Teknologi yang Digunakan (Tech Stack)

Proyek ini dibangun menggunakan teknologi *frontend* modern yang sangat direkomendasikan. Berikut adalah daftar teknologi yang digunakan beserta peranannya dalam sistem:

*   **React.js**: Bertindak sebagai pustaka (*library*) inti untuk membangun antarmuka pengguna (UI). React digunakan untuk memecah UI menjadi komponen-komponen yang dapat digunakan kembali (*reusable components*) dan mengelola *state* aplikasi.
*   **Vite**: Digunakan sebagai alat pembuat (*build tool*) dan *development server*. Vite dipilih karena kemampuannya melakukan *Hot Module Replacement* (HMR) yang sangat cepat, sehingga proses pengembangan jauh lebih efisien dibandingkan alat tradisional seperti Webpack.
*   **Tailwind CSS**: *Framework* CSS berbasis utilitas (*utility-first*) yang digunakan untuk mengatur gaya (*styling*) aplikasi secara keseluruhan. Tailwind memungkinkan penulisan *style* langsung di dalam class HTML, mempercepat proses desain tanpa perlu menulis file CSS terpisah yang panjang.
*   **Framer Motion**: Pustaka animasi tingkat produksi untuk React. Framer Motion digunakan untuk menangani transisi halaman yang kompleks, efek munculnya elemen saat di-*scroll*, dan animasi interaktif (seperti kartu yang bisa di-*drag* pada halaman *Industries*).
*   **React Router DOM**: Digunakan untuk *routing* di sisi klien (*client-side routing*). Memungkinkan perpindahan antar halaman (Home, About, Services, Industries, Community, Contact) tanpa perlu memuat ulang (*reload*) seluruh halaman web, menjaga pengalaman *Single Page Application* (SPA) yang cepat dan mulus.
*   **Lucide React**: Kumpulan ikon SVG modern dan bersih yang diintegrasikan langsung sebagai komponen React. Digunakan untuk menampilkan ikon-ikon pada menu, tombol, dan kartu informasi di seluruh aplikasi.
*   **Shadcn UI & Radix UI**: Digunakan sebagai fondasi untuk komponen UI yang aksesibel dan dapat dikustomisasi penuh (seperti Accordion untuk FAQ). Memanfaatkan `clsx`, `class-variance-authority`, dan `tailwind-merge` untuk penggabungan kelas Tailwind yang dinamis dengan aman.
*   **GSAP (GreenSock)**: Pustaka animasi standar industri yang kuat. Turut tersedia dalam sistem untuk menangani kebutuhan animasi kustom berbasis *timeline* yang sangat spesifik dan kompleks.
*   **React Fast Marquee**: Pustaka khusus yang digunakan untuk menciptakan efek *scrolling banner* otomatis dan tanpa henti (misalnya pada barisan logo klien dan mitra bisnis).
*   **React CountUp**: Digunakan untuk memberikan efek animasi angka bergulir dinamis (seperti yang terlihat pada bagian Statistik angka pertumbuhan perusahaan).
*   **Oxlint**: Digunakan sebagai alat analisis statis (*linter*) berbasis Rust yang super cepat. Berfungsi untuk mendeteksi error, menjaga kualitas kode, dan memastikan penulisan kode sesuai standar praktik terbaik (best practices).

## 📦 Panduan Instalasi & Menjalankan Proyek Lokal

Ikuti langkah-langkah berikut untuk menginstal dependensi dan menjalankan proyek ini di komputer Anda.

### Persyaratan Awal (Prerequisites)

*   Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) di komputer Anda (disarankan versi 16 ke atas).

### Langkah-langkah Menjalankan Proyek

1.  **Clone Repositori**
    Buka terminal atau *command prompt* Anda dan jalankan perintah berikut untuk mengunduh kode proyek:
    ```bash
    git clone https://github.com/Ndraa-44/coding-collective-clone.git
    cd coding-collective-clone
    ```

2.  **Instal Dependensi (Dependencies)**
    Jalankan perintah ini untuk mengunduh dan menginstal semua paket atau pustaka yang dibutuhkan oleh proyek:
    ```bash
    npm install
    ```

3.  **Mulai Development Server**
    Jalankan server pengembangan lokal (Vite) dengan perintah:
    ```bash
    npm run dev
    ```

4.  **Lihat Aplikasi di Browser**
    Setelah server berjalan, terminal akan menampilkan URL lokal (biasanya `http://localhost:5173/` atau `http://localhost:5174/`). Buka URL tersebut di browser web Anda untuk melihat aplikasi.

### Membangun untuk Produksi (Build for Production)

Untuk membuat versi aplikasi yang sudah dioptimalkan dan siap di-deploy (*production-ready*), jalankan perintah:
```bash
npm run build
```
File hasil kompilasi akan otomatis dibuat di dalam folder `dist`. Anda dapat men-deploy folder ini ke layanan *hosting* statis pilihan Anda (seperti Vercel, Netlify, atau GitHub Pages).

## 📄 Catatan
Proyek ini dikembangkan untuk memenuhi persyaratan penugasan, menunjukkan kemampuan dalam pengembangan web *frontend* modern, pembuatan desain responsif, dan penerapan antarmuka pengguna yang interaktif.
