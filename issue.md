# Project Setup: Absensi SLA with Bun, ElysiaJS, Drizzle, and MySQL

## Objective
Membangun fondasi awal project untuk aplikasi absensi menggunakan tech stack berbasis Bun.

## Tech Stack
- **Runtime:** Bun
- **Framework:** ElysiaJS
- **ORM:** Drizzle ORM
- **Database:** MySQL

## High-Level Implementation Steps

1. **Inisialisasi Project**
   - Lakukan inisialisasi project Bun di folder ini.
   - Setup `package.json` dan struktur folder dasar (misalnya `src/`).

2. **Instalasi Dependencies**
   - Install ElysiaJS sebagai web framework utama.
   - Install Drizzle ORM dan driver MySQL (misal: `mysql2` atau driver yang kompatibel) untuk interaksi database.
   - Install tool tambahan Drizzle seperti `drizzle-kit` jika diperlukan untuk migrasi.

3. **Konfigurasi Database (Drizzle & MySQL)**
   - Buat file koneksi database menggunakan Drizzle dan driver MySQL.
   - Konfigurasikan environment variables (menggunakan file `.env`) untuk menyimpan kredensial database MySQL (Host, User, Password, DB Name).
   - Setup struktur skema database awal (Drizzle Schema).

4. **Setup ElysiaJS Server**
   - Buat entry point aplikasi (misal `src/index.ts`).
   - Inisialisasi server ElysiaJS dasar.
   - Integrasikan koneksi database (Drizzle) sehingga dapat dipanggil saat request masuk.
   - Buat endpoint dasar (contoh `GET /`) untuk memastikan server dapat berjalan dengan baik (Hello World).

5. **Testing & Validation**
   - Pastikan perintah untuk menjalankan development server (`bun run dev`) sudah dikonfigurasi dan berfungsi.
   - Validasi bahwa endpoint utama berjalan dan tidak ada masalah pada koneksi MySQL.

## Catatan Tambahan
- Fokus pada menghubungkan semua komponen dasar (Elysia + Drizzle + MySQL) terlebih dahulu.
- Jangan mengimplementasikan business logic yang rumit pada tahap ini, cukup pastikan arsitektur dasar dan konektivitas sudah terhubung dengan benar.
