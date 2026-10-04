# Dokumentasi Fitur Bahasa Indonesia / Inggris

Dokumen ini mencatat perubahan fitur bilingual yang dibuat pada portfolio.

## Ringkasan Perilaku

- Bahasa default adalah Inggris (`en`).
- Pilihan bahasa disimpan di `localStorage` dengan key `portfolio-language`.
- Saat switch bahasa ditekan, bahasa baru disimpan lalu halaman melakukan `window.location.reload()`.
- Reload sengaja digunakan agar animasi GSAP pada Parallax dibuat ulang dengan headline bahasa baru. Tanpa reload, `useEffect` Parallax hanya berjalan sekali dan headline dapat hilang setelah teks berubah.
- Nilai bahasa yang digunakan hanya:
	- `en` = English
	- `id` = Bahasa Indonesia

## Alur State Utama

### `src/App.js`

Perubahan:

```jsx
const [language, setLanguage] = useState(
	() => localStorage.getItem('portfolio-language') || 'en'
);
```

State bahasa dimiliki oleh `App`, sehingga semua section menerima bahasa yang sama.

Pilihan bahasa disimpan setiap kali state berubah:

```jsx
useEffect(() => {
	localStorage.setItem('portfolio-language', language);
}, [language]);
```

Handler switch menyimpan bahasa baru dan reload halaman:

```jsx
const handleLanguageChange = (nextLanguage) => {
	localStorage.setItem('portfolio-language', nextLanguage);
	window.location.reload();
};
```

Props yang diteruskan dari `App`:

```jsx
<Navigation language={language} onLanguageChange={handleLanguageChange} />
<Home language={language} />
<Parallax language={language} />
<Biodata language={language} />
<Rubic language={language} />
<Projects language={language} />
<Experience language={language} />
```

## Navigasi dan Switch

### `src/sections/Navigation.jsx`

Komponen `Navigation` sekarang menerima:

```jsx
const Navigation = ({ language, onLanguageChange }) => {
```

Label menu berubah sesuai bahasa:

| English | Indonesia |
| --- | --- |
| Home | Beranda |
| About | Tentang |
| Projects | Proyek |
| Experience | Pengalaman |

### Desktop

Switch desktop adalah child terakhir di dalam `.list-menu`, setelah menu Experience.
Switch menggunakan:

- class `language-toggle`
- class `language-switch-track`
- class `language-switch-thumb`
- gambar bendera Indonesia atau Inggris di dalam knob

Ketika bahasa aktif adalah Inggris, knob menampilkan bendera Indonesia. Ketika bahasa aktif adalah Indonesia, knob menampilkan bendera Inggris. Dengan begitu bendera pada knob menunjukkan bahasa yang bisa dipilih.

### Mobile

Switch mobile adalah tombol terpisah di luar `.mobile-menu`, diletakkan di area nav sebelum `MenuBtn` hamburger.

Tujuannya:

- switch tetap terlihat tanpa membuka dropdown mobile
- switch hanya terlihat pada viewport mobile
- dropdown `.mobile-menu` hanya berisi link navigasi

Switch mobile menggunakan markup bendera yang sama dengan switch desktop, bukan tombol teks `Bahasa Indonesia` / `English`.

## Styling Switch

### `src/index.css`

Selector utama:

- `.language-toggle`
- `.language-toggle:hover`
- `.language-toggle:focus-visible`
- `.language-switch-track`
- `.language-switch-thumb`
- `.language-switch-thumb img`
- `.language-toggle[aria-pressed='true'] .language-switch-thumb`
- `.mobile-language-toggle`

Perilaku CSS:

- `.language-toggle` default tidak memakai margin khusus mobile.
- `.mobile-language-toggle` default `display: none`, sehingga switch khusus mobile tersembunyi pada desktop.
- Di `@media screen and (max-width: 576px)`, `.mobile-language-toggle` menjadi `display: inline-flex` dan diletakkan di sebelah tombol hamburger.
- Switch desktop berada di dalam `.list-menu`, sehingga mengikuti layout menu desktop.
- Knob bergerak dengan `transform: translateX(12px)` ketika `aria-pressed="true"`.
- Gambar bendera memenuhi knob dengan `object-fit: cover`.

Catatan: editor mungkin menampilkan warning lama pada file ini untuk `@tailwind utilities` dan vendor property `-webkit-line-clamp`. Warning tersebut bukan bagian dari fitur bilingual.

## Section yang Sudah Diterjemahkan

### `src/sections/Home.jsx`

Komponen sekarang menerima `language`.

Yang berubah:

- daftar role pada typing animation
- welcome text
- judul perkenalan
- deskripsi profile
- tombol `Contact Me` / `Hubungi Saya`
- tombol `Get Started` / `Mulai`

Role Indonesia:

```jsx
['Programmer', 'Desainer', 'Operator Sekolah', 'Bendahara']
```

Role Inggris:

```jsx
['Programmer', 'Designer', 'School Ops', 'Treasurer']
```

### `src/sections/Parallax.jsx`

Komponen menerima `language` dan membuat `localizedSlides`.

Versi Indonesia menggunakan headline:

- Kreatif / Sistem
- Bangun / Berani
- Desain / Dampak
- Kirim / Cerita

Beserta side tag Indonesia seperti `Merek`, `Gerak`, `Kode`, `Rilis`, `Cerita`, `Suara`, `Ide`, dan `Masa Depan`.

GSAP tetap menggunakan selector dan struktur DOM yang sama. Reload pada pergantian bahasa diperlukan karena timeline Parallax dibuat di `useEffect` dengan dependency kosong.

### `src/sections/Biodata.jsx`

Komponen menerima `language`.

Judul kartu memiliki pasangan `titleId`, antara lain:

- `Languages` / `Bahasa`
- `Domisili` / `Domisili`
- `Education` / `Pendidikan`
- `Services` / `Layanan`
- `Interests` / `Minat`

Kartu profile juga memiliki beberapa pasangan deskripsi:

- `descriptionEn`
- `descriptionId`

Bagian profile summary dan judul tech stack juga berubah berdasarkan bahasa.

Catatan penting: nama teknologi seperti HTML, CSS, React, dan Laravel tidak diterjemahkan. Detail teknologi pada modal masih berasal dari object `techDetails` dan sebagian besar ditulis dalam Bahasa Indonesia.

### `src/sections/Projects.jsx`

Data proyek mendapat field tambahan:

- `categoryId`
- `blurbId`

`ProjectCard` menerima prop `language` dan memilih category, blurb, label Featured, serta link case study berdasarkan bahasa.

Heading section juga memiliki versi Indonesia:

- `Selected Projects` / `Proyek Pilihan`
- `Stories shaped through real work.` / `Cerita yang dibentuk dari karya nyata.`

### `src/sections/Experience.jsx`

Data pengalaman mendapat field tambahan:

- `titleId`
- `descriptionId`

Button diterjemahkan secara kondisional:

- `View App` / `Lihat Aplikasi`
- `Contact` / `Hubungi`
- `Learn More` / `Pelajari`

Heading dan deskripsi section juga berubah berdasarkan bahasa.

### `src/sections/Rubic.jsx`

Komponen menerima `language`.

Yang berubah:

- label `PLAY WITH RUBIC` / `MAIN DENGAN RUBIK`
- heading `TWIST THE ORDINARY.` / `PUTAR YANG TAK BIASA.`
- instruksi interaksi Rubik

## Cara Mengubah atau Menambah Terjemahan

1. Tambahkan prop `language = 'en'` pada komponen section.
2. Gunakan conditional sederhana:

```jsx
{language === 'id' ? 'Teks Indonesia' : 'English text'}
```

3. Untuk data card, gunakan field pasangan seperti `title` dan `titleId`, atau `description` dan `descriptionId`.
4. Pastikan komponen baru menerima `language` dari `App.js`.
5. Jangan menghapus reload pada `handleLanguageChange` kecuali lifecycle Parallax sudah diubah agar aman terhadap perubahan bahasa tanpa reload.

## File yang Terlibat

- `src/App.js` - state bahasa, localStorage, dan reload.
- `src/index.css` - styling desktop/mobile switch.
- `src/sections/Navigation.jsx` - markup switch dan label navigasi.
- `src/sections/Home.jsx` - teks Home dan role animation.
- `src/sections/Parallax.jsx` - headline Parallax bilingual.
- `src/sections/Biodata.jsx` - profile dan kartu informasi bilingual.
- `src/sections/Projects.jsx` - data dan UI project bilingual.
- `src/sections/Experience.jsx` - data dan UI experience bilingual.
- `src/sections/Rubic.jsx` - teks section Rubik bilingual.

## Validasi Terakhir

- `Navigation.jsx`: tidak ada error JSX.
- File-file yang diedit sudah diperiksa dengan error checker.
- `index.css`: masih ada warning editor lama untuk `@tailwind utilities` dan `-webkit-line-clamp`.
- Build penuh belum dijalankan dalam sesi ini karena perintah build sebelumnya dilewati.
