# Changelog

## 2026-10-04

### Projects Carousel
- Menambahkan komponen reusable `CoverflowCarousel` yang menerima `children` atau `items`.
- Menambahkan efek coverflow 3D: card aktif berada di tengah, sedangkan card lain bergeser, miring, mengecil, dan memudar berdasarkan jaraknya dari card aktif.
- Menambahkan navigasi Prev/Next bergaya neobrutalism serta interaksi klik pada card samping untuk menjadikannya card aktif.
- Mengganti layout horizontal lama pada bagian Projects dengan `CoverflowCarousel` dan mempertahankan slideshow gambar di setiap project card.
- Membuat ukuran card responsif: card lebih ringkas pada ukuran medium, sementara pada mobile carousel menggunakan lebar viewport dan hanya menampilkan sedikit bagian card tetangga.
- Membatasi overflow carousel pada mobile agar card yang ditransformasi tidak memperlebar layout halaman.
- Membuat project card mengisi tinggi slide coverflow agar tidak menyisakan ruang kosong di bawah card yang lebih pendek.

### Add Project Card
- Mengembalikan card ajakan untuk menambahkan project sebagai slide terakhir carousel.
- Mengganti ikon plus dengan ilustrasi `/create.svg` dan menghapus frame ikon beserta CSS khususnya.
- Menambahkan teks card dalam bahasa Indonesia dan Inggris.

### Experience Cards
- Membuat tombol pada `HorizontalCard` bersifat opsional; tombol disembunyikan jika `buttonText` tidak diberikan.
- Menghapus tombol dari experience pertama.
- Menambahkan layout khusus untuk card tanpa tombol agar deskripsinya tetap dekat dengan judul.
