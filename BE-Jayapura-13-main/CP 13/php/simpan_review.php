<?php
// Sambungkan ke database MySQL
$servername = "localhost";
$username = "root"; // Ganti dengan username MySQL Anda
$password = ""; // Ganti dengan password MySQL Anda
$dbname = "revou";

$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari formulir
$email = $_POST['email'];
$review = $_POST['describeReview'];
$gameName = $_POST['gameName'];
echo "gameName: " . $gameName;

// Buat dan jalankan query SQL untuk menyimpan data ke dalam tabel reviewTable
$sql = "INSERT INTO reviewtable (emailPengguna, reviewPengguna, namaGame) VALUES ('$email', '$review', '$gameName')";

if ($conn->query($sql) === TRUE) {
    echo "Review berhasil disimpan!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Tutup koneksi ke database
$conn->close();
?>
