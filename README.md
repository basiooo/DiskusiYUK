# [Menjadi React Web Developer Expert](https://www.dicoding.com/academies/418/) | Submission 2

## Kriteria

- [x] Kriteria Utama 1: Automation Testing
  - [x] Buat minimal dua pengujian fungsi Reducer.
  - [x] Buat minimal dua pengujian Thunk Function.
  - [x] Buat minimal dua pengujian React Components.
  - [x] Buat minimal satu pengujian End-to-End untuk alur login aplikasi.
  - [x] Wajib menulis skenario pengujian pada masing-masing berkas pengujian.
  - [x] Pengujian dapat dijalankan dengan perintah npm test dan npm run e2e.
- [x] Kriteria Utama 2: Deployment Aplikasi
  - [x] Deploy aplikasi dengan menggunakan teknik CI/CD.
  - [x] Continuous Integration diterapkan dengan GitHub Actions.
  - [x] Continuous Deployment diterapkan dengan Vercel.
  - [x] Memproteksi branch master.
  - [x] Melampirkan URL Vercel aplikasi Anda pada catatan submission.
  - [x] Melampirkan screenshot sebagai bukti telah menerapkan konfigurasi CI/CD dan branch protection dengan benar. Screenshot yang perlu dilampirkan:
- [x] Kriteria Utama 3: Memanfaatkan Salah Satu Ecosystem React
- [x] Kriteria Utama 4: Mempertahankan Kriteria Submission Sebelumnya

## Saran

- [x] Terdapat lebih dari tiga pengujian fungsi reducer.
- [x] Terdapat lebih dari tiga pengujian fungsi thunks.
- [x] Terdapat lebih dari tiga pengujian pada React Component.
- [x] Memiliki minimal 2 stories komponen.
- [x] Menerapkan saran pada submission sebelumnya seperti:
  - [x] fitur votes pada thread dan komentar;
  - [x] menampilkan leaderboard;
  - [x] filter daftar thread berdasarkan kategori
- [x] Saran lainnya.:
  - [x] Aplikasi yang Anda bangun mudah untuk digunakan. Contohnya, tidak membuat pengguna bingung dan menggunakan warna yang mudah dalam membaca teks.
  - [x] menampilkan leaderboard;
  - [x] Aplikasi yang Anda bangun memiliki tampilkan yang menarik.

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

## Tests

- Dengan `run_assist.sh` (docker)

  ```bash
  ./run_assist.sh --run-ci-test
  ```

- Tanpa docker

  ```bash
  npm install
  npm run ci:test
  ```
