const kbData = [
    // --- KATEGORI: DISPENSER GALON BAWAH ---
    {
        title: "Spesifikasi Daya & Tegangan (DB-3301C)",
        content: "Tegangan 220V/50Hz. Daya Pemanas 500 Watt. Daya Total 580 Watt. Arus Pendingin 0.74 A. Menggunakan sistem Kompresor.",
        category: "Spesifikasi/Kelistrikan",
        model: "DB-3301C",
        tags: "technical, power"
    },
    {
        title: "Spesifikasi Suhu & Kapasitas (DB-3301C)",
        content: "Suhu Panas mencapai 94°C. Suhu Dingin mencapai 6°C. Kapasitas Tangki Panas 0.8 Liter, Tangki Dingin 2.8 Liter.",
        category: "Spesifikasi/Kinerja",
        model: "DB-3301C",
        tags: "technical, temperature, capacity"
    },
    {
        title: "Fitur: Sterilisasi UV-C (DB-3301C/3104C)",
        content: "Indikator UV-C akan berkedip otomatis selama 30 menit setiap kali tangki air terisi penuh. Ini menandakan proses sterilisasi bakteri sedang berjalan. Setelah selesai, lampu akan menyala diam (standby).",
        category: "Pengoperasian/Fitur",
        model: "DB-3301C, DB-3104C",
        tags: "feature, sterilization"
    },
    {
        title: "Pengaturan Mode Penjadwalan (DB-3301C)",
        content: "Unit memiliki 3 mode:\n1. Custom (24 jam aktif).\n2. Home (Aktif jam 06-08, 11-14, 17-22).\n3. Office (Aktif jam 07:30-20:00).\nTekan tombol [SET] lalu [UP/DOWN] untuk memilih mode.",
        category: "Pengoperasian/Mode",
        model: "DB-3301C",
        tags: "operation, scheduling"
    },
    {
        title: "Prosedur Penggantian Galon",
        content: "1. Tarik baki galon keluar.\n2. Lepaskan tutup galon baru.\n3. Masukkan pipa adaptor ke dalam galon dan tekan hingga bunyi 'klik'.\n4. Masukkan galon ke kabinet dan tutup pintu rapat-rapat.",
        category: "Pengoperasian/Galon",
        model: "ALL DB Series",
        tags: "operation, refill"
    },
    {
        title: "Troubleshooting: Alarm Berbunyi",
        content: "Penyebab: Sensor mendeteksi air galon habis.\nSolusi: Ganti galon dengan yang baru. Jika alarm tetap berbunyi, buka-tutup pintu kabinet untuk mereset sensor, atau cabut steker sebentar.",
        category: "Troubleshooting/Alarm",
        model: "ALL DB Series",
        tags: "warning, error"
    },
    {
        title: "Troubleshooting: Air Tidak Panas",
        content: "1. Cek sakelar pemanas (MERAH) di belakang unit (harus ON).\n2. Cek indikator pemanas di depan (jika berkedip berarti sedang memanas, tunggu hingga stabil).\n3. Jika terlalu banyak air panas diambil, tunggu 15-20 menit untuk pemanasan ulang.",
        category: "Troubleshooting/Suhu",
        model: "ALL DB Series",
        tags: "repair, heating"
    },
    {
        title: "Troubleshooting: Air Tidak Dingin",
        content: "1. Cek sakelar pendingin (HIJAU) di belakang unit (harus ON).\n2. Cek indikator pendingin (jika berkedip berarti kompresor sedang bekerja).\n3. Pastikan jarak belakang unit minimal 20cm untuk sirkulasi udara.",
        category: "Troubleshooting/Suhu",
        model: "ALL DB Series",
        tags: "repair, cooling"
    },
    {
        title: "Troubleshooting: Kode Error E1/E2/E3 (Digital)",
        content: "Indikasi kesalahan sistem pada model digital.\nSolusi: Matikan tombol daya (Power), tunggu ±5 menit, kemudian hidupkan kembali untuk mereset sistem. Jika berlanjut, hubungi teknisi.",
        category: "Troubleshooting/Error",
        model: "DB-3301C",
        tags: "error, digital"
    },
    {
        title: "Prosedur Pengurasan Tangki (Kuras)",
        content: "Wajib dilakukan jika unit tidak dipakai lama atau saat pemindahan.\n1. Matikan sakelar & cabut steker.\n2. Siapkan wadah di belakang unit.\n3. Buka tutup pembuangan (drain cap).\n4. Biarkan air panas dan dingin keluar hingga habis.",
        category: "Perawatan/Kuras",
        model: "ALL DB Series",
        tags: "maintenance, drain"
    },
    {
        title: "Instalasi: Pemasangan Kaki Penahan (Opsional)",
        content: "Jika unit diletakkan pada permukaan miring (maks 15-25 derajat), pasang Kaki Penahan di bagian belakang bawah menggunakan sekrup dan fisher ke lantai untuk mencegah unit roboh.",
        category: "Instalasi/Keamanan",
        model: "DB-3104C, DB-2304C, DB-3301C",
        tags: "installation, safety"
    },
    {
         title: "Instalasi Awal (Penting)",
         content: "Setelah unit dipasang dan galon masuk:\n1. Tunggu pengisian tangki ±5 menit.\n2. Pastikan air keluar dari kran panas/dingin SEBELUM menyalakan sakelar di belakang untuk mencegah kerusakan elemen pemanas (dry heating).",
         category: "Instalasi/Awal",
         model: "ALL DB Series",
         tags: "installation, safety"
    }
    // ... Tambahkan data Kulkas/AC/Mesin Cuci di sini ...
];