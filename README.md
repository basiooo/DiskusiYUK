# [Menjadi React Web Developer Expert](https://www.dicoding.com/academies/418/) | Submission 1

## Kriteria

- [x] Kriteria Utama 1: Fungsionalitas Aplikasi
  - [x] Terdapat cara untuk mendaftar akun.
  - [x] Terdapat cara untuk login akun.
  - [x] Menampilkan daftar thread.
  - [x] Ketika item thread dipilih, menampilkan detail thread beserta komentar di dalamnya.
  - [x] Pengguna dapat membuat thread.
  - [x] Pengguna dapat membuat komentar di dalam sebuah thread.
  - [x] Menampilkan Loading bar ketika memuat data dari API.
- [x] Kriteria Utama 2: Bugs Highlighting
  - [x] Menggunakan ESLint pada source code aplikasi. Indikasinya adalah terdapat berkas konfigurasi ESLint pada proyek.
  - [x] Menerapkan salah satu Code Convention berikut.
    - AirBnB JavaScript Style Guide.
    - Google JavaScript Style Guide.
    - StandardJS Style Guide.
  - [x] Tidak ada indikasi error yang ditampilkan ESLint.
  - [x] Menggunakan React Strict Mode.
- [x] Kriteria Utama 3: Arsitektur Aplikasi
  - [x] Hampir seluruh state aplikasi (terutama yang bersumber dari API) disimpan pada Redux Store. Form input atau controlled component diperbolehkan untuk mengelola state-nya sendiri.
  - [x] Tidak ada pemanggilan REST API yang dilakukan di dalam lifecycle atau efek pada komponen.
  - [x] Memisahkan kode UI dengan State di folder yang terpisah.
  - [x] React component bersifat modular dan reusable.

## Saran

- [x] Saran 1: Fitur Votes pada Thread dan Komentar
  - [x] Menyediakan tombol yang dapat digunakan untuk votes pada thread dan komentar.
  - [x] Menampilkan indikasi pada tombol bila pengguna sudah mem-vote thread dan komentar. Contohnya, mengubah warna tombol dari abu-abu menjadi merah bila pengguna sudah up-vote/down-vote.
  - [x] Mengedepankan User Experience dengan menerapkan Optimistically Apply Actions.
  - [x] Menampilkan jumlah votes pada thread dan komentar.
- [x] Saran 2: Menampilkan Leaderboard
  - [x] Terdapat halaman untuk menampilkan leaderboard.
  - [x] Setiap item leaderboard, harus menampilkan informasi berikut ini.
  - [x] Nama pengguna.
  - [x] Avatar pengguna.
  - [x] Score.
- [x] Saran 3: Filter Daftar Thread Berdasarkan Kategori
  - [x] Terdapat fitur untuk mem-filter item thread yang ditampilkan pada halaman daftar threads.

## Menjalankan Aplikasi

- Dengan `run_assist.sh` (docker)

  ```bash
  ./run_assist.sh --run-dev
  ```

- Tanpa docker

  ```bash
  npm install
  npm run dev
  ```

## Build Aplikasi

- Dengan `run_assist.sh` (docker)

  ```bash
  ./run_assist.sh --run-build
  ```

- Tanpa docker

  ```bash
  npm install
  npm run build
  ```
