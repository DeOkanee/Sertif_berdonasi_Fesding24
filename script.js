// Contoh data nama dan nama file gambar dengan foldernya
const dataGambar = {
  "I Kadek Adinata": { folder: "dps", file: "I Kadek Adinata.png" },
  "Sinta Tri Lestari": { folder: "dps", file: "Sinta Tri Lestari.png" },
  "Eka Amertha Sari": { folder: "dps", file: "Eka Amertha Sari.png" },
  "Ni Putu Heny Purbayanti": {
    folder: "dps",
    file: "Ni Putu Heny Purbayanti.png",
  },
  "Ni Putu Anggi Damayanti": {
    folder: "dps",
    file: "Ni Putu Anggi Damayanti.png",
  },
  "Ni Gusti Ayu Shinta Tirta Mahoni": {
    folder: "dps",
    file: "Ni Gusti Ayu Shinta Tirta Mahoni.png",
  },
  "Ni Komang Ayu Puspayanti": {
    folder: "dps",
    file: "Ni Komang Ayu Puspayanti.png",
  },
  "Ni luh Sri Pramesti Putri Mahadewi": {
    folder: "dps",
    file: "Ni luh Sri Pramesti Putri Mahadewi.png",
  },
  "Ni Kadek Ayu Lianita": { folder: "dps", file: "Ni Kadek Ayu Lianita.png" },
  "Mega sintya": { folder: "dps", file: "Mega sintya.png" },
  "Ni Made Mely Fitriana Dewi": {
    folder: "dps",
    file: "Ni Made Mely Fitriana Dewi.png",
  },
  "I Putu Wrastiya Aprinata Yasa": {
    folder: "dps",
    file: "I Putu Wrastiya Aprinata Yasa.png",
  },
  "Ni Nyoman Rasti Darmayanti": {
    folder: "dps",
    file: "Ni Nyoman Rasti Darmayanti.png",
  },
  "Ni Made Nandasari": { folder: "dps", file: "Ni Made Nandasari.png" },
  "I Dewa Gede Satria Wira Bawana": {
    folder: "dps",
    file: "I Dewa Gede Satria Wira Bawana.png",
  },
  "Ni Putu Lidya Susilawati": {
    folder: "dps",
    file: "Ni Putu Lidya Susilawati.png",
  },
  "Luh Komang Ayu Trischintyadewi": {
    folder: "dps",
    file: "Luh Komang Ayu Trischintyadewi.png",
  },
  "Ni Made Sanis Mira Wedanti": {
    folder: "dps",
    file: "Ni Made Sanis Mira Wedanti.png",
  },
  "Ida Ayu Dwita Senja Pratiwi": {
    folder: "dps",
    file: "Ida Ayu Dwita Senja Pratiwi.png",
  },
  "Anak Agung Putri Agung Naraswari": {
    folder: "dps",
    file: "Anak Agung Putri Agung Naraswari.png",
  },
  "Made Dinda Sandrika Devina": {
    folder: "dps",
    file: "Made Dinda Sandrika Devina.png",
  },
  "Ketut Sri Komala Dewi": { folder: "dps", file: "Ketut Sri Komala Dewi.png" },
  "Ni Luh Sumi Ardini": { folder: "dps", file: "Ni Luh Sumi Ardini.png" },
  "Ni Made Nia Yulanda Sari": {
    folder: "dps",
    file: "Ni Made Nia Yulanda Sari.png",
  },
  "I Wayan Budiana": { folder: "dps", file: "I Wayan Budiana.png" },
  "Kadek Adi Guna Suyoga": { folder: "dps", file: "Kadek Adi Guna Suyoga.png" },
  "I Komang Wirata": { folder: "dps", file: "I Komang Wirata.png" },
  "Ida Bagus Made Bayu Prayuptha Putra": {
    folder: "dps",
    file: "Ida Bagus Made Bayu Prayuptha Putra.png",
  },
  "Nyoman Triana Mahadewi": {
    folder: "dps",
    file: "Nyoman Triana Mahadewi.png",
  },
  "Yogi Catur Anggarawan": { folder: "dps", file: "Yogi Catur Anggarawan.png" },
  "Ni Ketut Diah Ayu Anggreni": {
    folder: "dps",
    file: "Ni Ketut Diah Ayu Anggreni.png",
  },
  "I Made Karisma Putra": { folder: "dps", file: "I Made Karisma Putra.png" },
  "Ni Luh Putu Divashia Saraswati": {
    folder: "dps",
    file: "Ni Luh Putu Divashia Saraswati.png",
  },
  "Ni Luh Gede Gita Antari": {
    folder: "dps",
    file: "Ni Luh Gede Gita Antari.png",
  },
  "Ni Kadek Tia Wiantari": { folder: "dps", file: "Ni Kadek Tia Wiantari.png" },
  "Ni Nengah Yuniari": { folder: "dps", file: "Ni Nengah Yuniari.png" },
  "Ida Ayu Komang Dwija Sri Rahayu": {
    folder: "dps",
    file: "Ida Ayu Komang Dwija Sri Rahayu.png",
  },
  "Kadek Resta Diah Kusuma Dewi": {
    folder: "dps",
    file: "Kadek Resta Diah Kusuma Dewi.png",
  },
  "I Putu Dedik Noviadtara": {
    folder: "dps",
    file: "I Putu Dedik Noviadtara.png",
  },
  "Ni Wayan Indriani": { folder: "dps", file: "Ni Wayan Indriani.png" },
  "Ni Made Dwi Andini": { folder: "dps", file: "Ni Made Dwi Andini.png" },
  "Ni Luh Putu Karina Setia Wati": {
    folder: "dps",
    file: "Ni Luh Putu Karina Setia Wati.png",
  },
  "Ni Kadek Cindy Yunita Dewi": {
    folder: "dps",
    file: "Ni Kadek Cindy Yunita Dewi.png",
  },
  "Ni Luh Kade Dinda Dewi Lestari": {
    folder: "dps",
    file: "Ni Luh Kade Dinda Dewi Lestari.png",
  },
  "Ni Luh Ade Setia Dewi": { folder: "dps", file: "Ni Luh Ade Setia Dewi.png" },
  "Ni Kadek Nia Febina Sari": {
    folder: "dps",
    file: "Ni Kadek Nia Febina Sari.png",
  },
  "Ni Kadek Rahayu Riska Yanti": {
    folder: "dps",
    file: "Ni Kadek Rahayu Riska Yanti.png",
  },
  "Ni Nyoman Candra Dewi": { folder: "dps", file: "Ni Nyoman Candra Dewi.png" },
  "Ida Bagus Putu Kesawa": { folder: "dps", file: "Ida Bagus Putu Kesawa.png" },
  "Ni Putu Nia Ari Antini": {
    folder: "dps",
    file: "Ni Putu Nia Ari Antini.png",
  },
  "Gst A.Kd.Wulan Maheswari K": {
    folder: "dps",
    file: "Gst A.Kd.Wulan Maheswari K.png",
  },
  "Ni Made Pritha Nabila": { folder: "dps", file: "Ni Made Pritha Nabila.png" },
  "Ni Kadek Ayu Mulianingsih": {
    folder: "dps",
    file: "Ni Kadek Ayu Mulianingsih.png",
  },
  "Ni Ketut Prita Lestati": {
    folder: "dps",
    file: "Ni Ketut Prita Lestati.png",
  },
  "Ni Made Samara Pertiwi Anantawijaya": {
    folder: "dps",
    file: "Ni Made Samara Pertiwi Anantawijaya.png",
  },
  "Ni Made Laksmi Purnama Dewi": {
    folder: "dps",
    file: "Ni Made Laksmi Purnama Dewi.png",
  },
  "Ni Putu Lestari Dewi": { folder: "dps", file: "Ni Putu Lestari Dewi.png" },
  "Ni Made Desi Trisnawati": {
    folder: "dps",
    file: "Ni Made Desi Trisnawati.png",
  },
  "Ni Wayan Harini": { folder: "bangli", file: "Ni Wayan Harini.png" },
  "Ni Kadek Sri Surya Ningsih": {
    folder: "bangli",
    file: "Ni Kadek Sri Surya Ningsih.png",
  },
  "Anak Agung Ayu Novi Widiantini": {
    folder: "bangli",
    file: "Anak Agung Ayu Novi Widiantini.png",
  },
  "I Komang Aditya Surya Darma": {
    folder: "bangli",
    file: "I Komang Aditya Surya Darma.png",
  },
  "I Made Dharma Adnyana": {
    folder: "bangli",
    file: "I Made Dharma Adnyana.png",
  },
  "Sang Putu Ramanda Maha Wijaya": {
    folder: "bangli",
    file: "Sang Putu Ramanda Maha Wijaya.png",
  },
  "I Komang Cakra Pendiasa": {
    folder: "bangli",
    file: "I Komang Cakra Pendiasa.png",
  },
  "Ni Ketut Pebriani": { folder: "bangli", file: "Ni Ketut Pebriani.png" },
  "Ida Ayu Gede Wulandari": {
    folder: "bangli",
    file: "Ida Ayu Gede Wulandari.png",
  },
  "Ida Ayu Tri Dewi": { folder: "bangli", file: "Ida Ayu Tri Dewi.png" },
  "Dewa Made Adi Pramana": {
    folder: "bangli",
    file: "Dewa Made Adi Pramana.png",
  },
  "Ni Ketut Riski Muliawati": {
    folder: "bangli",
    file: "Ni Ketut Riski Muliawati.png",
  },
  "Ni Luh Widiayani": { folder: "bangli", file: "Ni Luh Widiayani.png" },
  "I Gusti Ayu Ari Pratiwi": {
    folder: "bangli",
    file: "I Gusti Ayu Ari Pratiwi.png",
  },
  "Ni Komang Ana Pratiwi": {
    folder: "bangli",
    file: "Ni Komang Ana Pratiwi.png",
  },
  "I Komang Agus Bayu Juniarta": {
    folder: "bangli",
    file: "I Komang Agus Bayu Juniarta.png",
  },
  "Ni Luh Nana Sri Handayani": {
    folder: "bangli",
    file: "Ni Luh Nana Sri Handayani.png",
  },
  "Ni Komang Mira Nilayani": {
    folder: "bangli",
    file: "Ni Komang Mira Nilayani.png",
  },
  "Ni Putu Pebriani": { folder: "bangli", file: "Ni Putu Pebriani.png" },
  "Ni Putu Ayu Pebyanti": {
    folder: "bangli",
    file: "Ni Putu Ayu Pebyanti.png",
  },
  "Sang Ayu Ketut Arimasanti": {
    folder: "bangli",
    file: "Sang Ayu Ketut Arimasanti.png",
  },
  "Ni Luh Putu Ika Darmayanti": {
    folder: "bangli",
    file: "Ni Luh Putu Ika Darmayanti.png",
  },
  "Ni Komang Junita": { folder: "bangli", file: "Ni Komang Junita.png" },
  "Ni Made Sukreni": { folder: "bangli", file: "Ni Made Sukreni.png" },
  "I Komang Ari Dimas Santika": {
    folder: "bangli",
    file: "I Komang Ari Dimas Santika.png",
  },
  "I Kadek Ardis": { folder: "bangli", file: "I Kadek Ardis.png" },
  "I Made Yoga Gunawan": { folder: "bangli", file: "I Made Yoga Gunawan.png" },
  "I Gede Arta Panji": { folder: "bangli", file: "I Gede Arta Panji.png" },
  "I Ketut Widiarsa Maha Putra": {
    folder: "bangli",
    file: "I Ketut Widiarsa Maha Putra.png",
  },
  "I Kadek Yogi Adi Saputra": {
    folder: "bangli",
    file: "I Kadek Yogi Adi Saputra.png",
  },
  "I Wayan Eka Darmayasa": {
    folder: "bangli",
    file: "I Wayan Eka Darmayasa.png",
  },
  "Ni Wayan Merianti": { folder: "bangli", file: "Ni Wayan Merianti.png" },
  "Ni Kadeki Mila Apriyanti": {
    folder: "bangli",
    file: "Ni Kadeki Mila Apriyanti.png",
  },
  "Ni Made Serlianti": { folder: "bangli", file: "Ni Made Serlianti.png" },
  "Ni Made Cintya Pradnya Dewi": {
    folder: "bangli",
    file: "Ni Made Cintya Pradnya Dewi.png",
  },
  "I Gusti Ayu Made Diah Mahayani": {
    folder: "bangli",
    file: "I Gusti Ayu Made Diah Mahayani.png",
  },
  "Putu Feby Maharani": { folder: "bangli", file: "Putu Feby Maharani.png" },
  "Ni Kadek Arianti": { folder: "bangli", file: "Ni Kadek Arianti.png" },
  "Ni Kadek Ratna Amira": {
    folder: "bangli",
    file: "Ni Kadek Ratna Amira.png",
  },
  "Ni Komang Agustina Wati": {
    folder: "bangli",
    file: "Ni Komang Agustina Wati.png",
  },
  "Ni Komang Ari Sukmayanti": {
    folder: "bangli",
    file: "Ni Komang Ari Sukmayanti.png",
  },
  "Ni Made Dwi Aprilia": { folder: "bangli", file: "Ni Made Dwi Aprilia.png" },
  "Ni Kadek Sutantri": { folder: "bangli", file: "Ni Kadek Sutantri.png" },
  "Ni Putu Meta Setyaningsih": {
    folder: "bangli",
    file: "Ni Putu Meta Setyaningsih.png",
  },
  "Ni Wayan Putu Dani": { folder: "bangli", file: "Ni Wayan Putu Dani.png" },
  "Ni Wayan Rimbiani": { folder: "bangli", file: "Ni Wayan Rimbiani.png" },
  "I Putu Wahyu Juliantara": {
    folder: "bangli",
    file: "I Putu Wahyu Juliantara.png",
  },
  "Ni Wayan Rencani": { folder: "bangli", file: "Ni Wayan Rencani.png" },
  "Ida Bagus Made Putra Adnyana Manuaba": {
    folder: "bangli",
    file: "Ida Bagus Made Putra Adnyana Manuaba.png",
  },
  "I Kadek Budiarta": { folder: "bangli", file: "I Kadek Budiarta.png" },
  "Ni Kadek Eny Mahayani": {
    folder: "bangli",
    file: "Ni Kadek Eny Mahayani.png",
  },
  "Dewa Ayu Diah Anggarini": {
    folder: "bangli",
    file: "Dewa Ayu Diah Anggarini.png",
  },
  "Ni Kadek Dwi Sawitri Dewi": {
    folder: "bangli",
    file: "Ni Kadek Dwi Sawitri Dewi.png",
  },
  "Ngakan Putu Dipta Putra": {
    folder: "bangli",
    file: "Ngakan Putu Dipta Putra.png",
  },
  "I Gusti Ayu Putu Indah Pratiwi": {
    folder: "bangli",
    file: "I Gusti Ayu Putu Indah Pratiwi.png",
  },
  "Kadek Meyta Pradnya Kirani": {
    folder: "bangli",
    file: "Kadek Meyta Pradnya Kirani.png",
  },
  "I Dewa Gede Aditya Pradnyana Putra": {
    folder: "bangli",
    file: "I Dewa Gede Aditya Pradnyana Putra.png",
  },
  "I Gusti Agung Istri Tri Widyantari": {
    folder: "bangli",
    file: "I Gusti Agung Istri Tri Widyantari.png",
  },
};

function cariGambar() {
    const nama = document.getElementById("nama").value.trim().toLowerCase();
    const hasil = document.getElementById("hasil");
    const downloadButton = document.getElementById("downloadButton");

    // Membersihkan hasil sebelum pencarian baru
    hasil.textContent = "";
    downloadButton.style.display = "none";

    if (nama === "") {
        hasil.textContent = "Silahkan masukkan nama yang akan dicari";
        return; // Keluar dari fungsi jika input kosong
    }

    let found = false;

    for (let key in dataGambar) {
        if (dataGambar.hasOwnProperty(key)) {
            // Menggunakan metode pencarian yang sederhana
            if (key.toLowerCase().indexOf(nama) !== -1) {
                const folder = dataGambar[key].folder;
                const file = dataGambar[key].file;
                hasil.textContent = "Sedang mencari...";

                // Menampilkan pesan "Sedang mendownload..." selama 5 detik
                setTimeout(() => {
                    hasil.textContent = `Hasil: ${file}`;
                    downloadButton.style.display = "inline-block";
                    downloadButton.href = `${folder}/${file}`; // Pastikan path ini sesuai dengan lokasi folder gambar Anda
                    downloadButton.download = file;
                }, 3000);

                found = true;
                break;
            }
        }
    }

    if (!found) {
        hasil.textContent = "Nama Tidak Ada! (bagi yang namanya tidak ada tapi sudah berdonasi, bisa Contact Panitia dengan mengirimkan bukti foto berdonasi/foto buku SKP yg sudah di TTD dan diCAP oleh yang bertugas piket)";
    }
}
