# Buku Menu Happy Puppy Antasari

Buku menu digital Happy Puppy Antasari berbasis Vue/Vite. Repository ini disiapkan untuk deploy otomatis ke GitHub Pages.

## Website

- Local: `http://192.168.29.6/`
- GitHub Pages: `https://wawazrc.github.io/`

## Struktur Penting

- `resources/js/components/MenuHappup.vue`: data menu, gambar, harga, dan tampilan utama.
- `public/images`: asset gambar untuk aplikasi.
- `.github/workflows/static.yml`: workflow deploy otomatis ke GitHub Pages.
- `scripts/build-pages.mjs`: membuat folder statis `dist` untuk Pages dari hasil build Vite.

## Deploy

Setiap push ke branch `main` akan menjalankan GitHub Actions dan publish halaman ke GitHub Pages.

Jangan upload file `.env`, `.env.backup`, `vendor/`, `node_modules/`, atau `dist/` ke GitHub.
