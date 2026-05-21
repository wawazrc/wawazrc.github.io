# Buku Menu Happy Puppy Antasari

Halaman ini adalah buku menu statis yang siap diupload ke GitHub. Isi menu dapat dilihat langsung di `index.html`.

## Fitur halaman

- Tampilan buku menu sederhana dan responsif
- Pencarian menu cepat di bagian atas
- Filter kategori menu
- Daftar makanan dan minuman lengkap

## Cara melihat halaman

1. Buka file `index.html` di browser.
2. Jika ingin melihat dari server lokal, cukup jalankan server lokal atau gunakan Live Server.

## Upload ke GitHub

1. Buat repository baru di GitHub.
2. Pastikan Anda berada di folder proyek:
   ```powershell
   cd c:\xampp\htdocs\buku-menu
   ```
3. Tambahkan file dan commit:
   ```powershell
   git add .
   git commit -m "Tambah buku menu Happy Puppy Antasari"
   ```
4. Tambahkan remote GitHub (ganti URL dengan alamat repo Anda):
   ```powershell
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   ```
5. Push ke GitHub:
   ```powershell
   git push -u origin main
   ```

## GitHub Pages

Jika Anda ingin menampilkan laman ini sebagai website publik, aktifkan GitHub Pages di repository Anda dengan sumber `main` dan root folder `/`.

## Catatan

Halaman menu berada di file `index.html`. Jika ingin menambahkan menu baru, tinggal edit bagian `<div class="menu-list-container">` di dalam `index.html`.
