-- Tabel identitas KTP
CREATE TABLE kyc_ktp (
    nik VARCHAR(16) PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    tempat_lahir VARCHAR(50) NOT NULL,
    tanggal_lahir DATE NOT NULL,
    jenis_kelamin VARCHAR(20) NOT NULL,
    alamat TEXT NOT NULL,
    rt VARCHAR(3) NOT NULL,
    rw VARCHAR(3) NOT NULL,
    kelurahan VARCHAR(50) NOT NULL,
    kecamatan VARCHAR(50) NOT NULL,
    kota_kabupaten VARCHAR(50) NOT NULL,
    provinsi VARCHAR(50) NOT NULL,
    agama VARCHAR(30) NOT NULL,
    status_perkawinan VARCHAR(30) NOT NULL,
    pekerjaan VARCHAR(50) NOT NULL,
    kewarganegaraan VARCHAR(10) NOT NULL,
    masa_berlaku VARCHAR(20) NOT NULL
);

-- Seeding data contoh
INSERT INTO kyc_ktp VALUES
('3175090801010001', 'Budi Santoso', 'Jakarta', '1980-01-08', 'Laki-laki', 'Jl. Merdeka No. 1', '001', '002', 'Gambir', 'Gambir', 'Jakarta Pusat', 'DKI Jakarta', 'Islam', 'Kawin', 'Karyawan Swasta', 'WNI', 'Seumur Hidup'),
('3201011502920002', 'Siti Aminah', 'Bandung', '1992-02-15', 'Perempuan', 'Jl. Sudirman No. 10', '003', '004', 'Cicendo', 'Cicendo', 'Bandung', 'Jawa Barat', 'Islam', 'Belum Kawin', 'Mahasiswa', 'WNI', '2026-12-31');
