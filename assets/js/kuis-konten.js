// ==========================================================================
// VARIABEL GLOBAL KUIS
// ==========================================================================
let seluruhDataKuis = null; 
let dataKuisAktif = [];     
let indeksSekarang = 0;     
let jawabanUser = [];       
let levelAktif = null;

// Tandai bahwa pengguna sudah masuk ke halaman Kuis, dipakai oleh halaman
// Main Menu untuk menentukan notifikasi modern yang tampil saat kembali.
sessionStorage.setItem('gv_section_visited', '1');

// ==========================================================================
// SISTEM WAKTU PENGERJAAN & KESEMPATAN PER LEVEL
// ==========================================================================
const DURASI_KUIS_DETIK = 20 * 60;     // Waktu pengerjaan tiap level: 20 menit
const MAKS_KESEMPATAN = 3;             // Maksimal 3 kali percobaan tiap level
const DURASI_COOLDOWN_DETIK = 5 * 60;  // Waktu tunggu reset kesempatan: 5 menit
const KEY_KESEMPATAN = 'gv_kuis_kesempatan';

function muatStatusKesempatan() {
  try {
    return JSON.parse(localStorage.getItem(KEY_KESEMPATAN)) || {};
  } catch (e) {
    return {};
  }
}

function simpanStatusKesempatan(semua) {
  localStorage.setItem(KEY_KESEMPATAN, JSON.stringify(semua));
}

function ambilStatusLevel(level) {
  const semua = muatStatusKesempatan();
  return semua[level] || { sisa: MAKS_KESEMPATAN, lockUntil: null };
}

function perbaruiStatusLevel(level, data) {
  const semua = muatStatusKesempatan();
  semua[level] = data;
  simpanStatusKesempatan(semua);
}

// Jika waktu cooldown levelnya sudah lewat, otomatis kembalikan kesempatan jadi penuh
function segarkanStatusLevel(level) {
  const semua = muatStatusKesempatan();
  let data = semua[level] || { sisa: MAKS_KESEMPATAN, lockUntil: null };
  if (data.lockUntil && Date.now() >= data.lockUntil) {
    data = { sisa: MAKS_KESEMPATAN, lockUntil: null };
    semua[level] = data;
    simpanStatusKesempatan(semua);
  }
  return data;
}

function labelLevel(level) {
  return level.charAt(0).toUpperCase() + level.slice(1);
}

function formatMenitDetik(totalDetik) {
  const d = Math.max(0, Math.ceil(totalDetik));
  const m = Math.floor(d / 60);
  const s = d % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

// Perbarui tampilan badge kesempatan & overlay kunci pada kartu level
function perbaruiTampilanLevel(level, status) {
  const card = document.querySelector(`.level-card[data-level="${level}"]`);
  if (!card) return;

  let badge = card.querySelector('.level-kesempatan-badge');
  if (!badge) {
    badge = document.createElement('div');
    badge.className = 'level-kesempatan-badge';
    card.appendChild(badge);
  }

  const terkunci = !!(status.lockUntil && Date.now() < status.lockUntil);

  if (terkunci) {
    badge.textContent = '🔒 Terkunci';
    card.classList.add('terkunci');

    let overlay = card.querySelector('.level-lock-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'level-lock-overlay';
      overlay.innerHTML = `
        <div class="level-lock-icon">🔒</div>
        <div class="level-lock-teks">Kesempatan habis, tunggu</div>
        <div class="level-lock-waktu" data-waktu></div>
      `;
      card.appendChild(overlay);
    }
    const sisaDetik = Math.max(0, Math.ceil((status.lockUntil - Date.now()) / 1000));
    const elWaktu = overlay.querySelector('[data-waktu]');
    if (elWaktu) elWaktu.textContent = formatMenitDetik(sisaDetik);
  } else {
    badge.textContent = `💪 ${status.sisa}/${MAKS_KESEMPATAN}`;
    card.classList.remove('terkunci');
    const overlay = card.querySelector('.level-lock-overlay');
    if (overlay) overlay.remove();
  }
}

function renderStatusSemuaLevel() {
  ['mudah', 'sedang', 'sulit'].forEach(level => {
    const status = segarkanStatusLevel(level);
    perbaruiTampilanLevel(level, status);
  });
}

// ==========================================================================
// TIMER PENGERJAAN KUIS (20 MENIT PER LEVEL)
// ==========================================================================
let waktuTersisaKuis = DURASI_KUIS_DETIK;
let timerKuisInterval = null;

function perbaruiTampilanTimer() {
  const kuisTimerEl = document.getElementById('kuis-timer');
  if (!kuisTimerEl) return;
  kuisTimerEl.innerHTML = `⏱ ${formatMenitDetik(waktuTersisaKuis)}`;
  kuisTimerEl.classList.toggle('waktu-kritis', waktuTersisaKuis <= 60);
}

function mulaiTimerKuis() {
  hentikanTimerKuis();
  waktuTersisaKuis = DURASI_KUIS_DETIK;
  perbaruiTampilanTimer();
  timerKuisInterval = setInterval(() => {
    waktuTersisaKuis--;
    perbaruiTampilanTimer();
    if (waktuTersisaKuis <= 0) {
      waktuHabisKuis();
    }
  }, 1000);
}

function hentikanTimerKuis() {
  if (timerKuisInterval) {
    clearInterval(timerKuisInterval);
    timerKuisInterval = null;
  }
}

function waktuHabisKuis() {
  hentikanTimerKuis();
  tampilkanNotifModern('⏰', 'Waktu Habis!', 'Waktu pengerjaan 20 menit untuk level ini sudah selesai.<br>Jawabanmu otomatis dikumpulkan.');
  setTimeout(() => { selesaikanKuis(); }, 700);
}

// ==========================================================================
// AMBIL ELEMEN-ELEMEN HTML
// ==========================================================================
const menuKesulitan = document.getElementById("menu-kesulitan");
const areaGame = document.getElementById("area-game");
const hasilContainer = document.getElementById("hasil-container");

const materiEl = document.getElementById("materi");
const nomorEl = document.getElementById("nomor");
const soalEl = document.getElementById("soal");
const opsiEl = document.getElementById("opsi");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const nilaiSkor = document.getElementById("nilai-skor");
const detailStat = document.getElementById("detail-stat");


// 1. FUNGSI MEMUAT DATA SOAL
function AMBIL_DATA_JSON() {

  if (typeof DATA_SOAL_KUIS !== 'undefined') {
    seluruhDataKuis = DATA_SOAL_KUIS;
    return;
  }

  // Fallback: fetch dari file JSON eksternal (butuh Live Server)
  fetch('data-kuis/kuis.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Gagal memuat berkas JSON. Status: ${response.status}`);
      }
      return response.json();
    })
    .then(json => {
      seluruhDataKuis = json;
    })
    .catch(err => {
      console.error("Error Fetching JSON:", err);
      if (soalEl) {
        soalEl.innerHTML = `<span style="color: #dc3545; font-weight: bold;">
          Gagal memuat data kuis! Pastikan file kuis-data.js termuat sebelum kuis-konten.js.
        </span>`;
      }
    });
}

// Jumlah soal yang ditampilkan per level
const JUMLAH_SOAL = {
  mudah: 15,
  sedang: 12,
  sulit: 8
};

// Fisher-Yates shuffle untuk mengacak array
function acakArray(arr) {
  const hasil = [...arr];
  for (let i = hasil.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [hasil[i], hasil[j]] = [hasil[j], hasil[i]];
  }
  return hasil;
}

// ==========================================================================
// 2. FUNGSI PEMILIHAN TINGKAT KESULITAN KUIS
// ==========================================================================
function pilihLevel(level) {
  if (!seluruhDataKuis) {
    tampilkanNotifModern('⚠️', 'Data Belum Siap', 'Data kuis belum siap atau gagal dimuat.<br>Silakan muat ulang halaman.', false);
    return;
  }
  
  // Ambil seluruh soal untuk level ini
  const semuaSoal = seluruhDataKuis[level];
  
  // Jika level kosong atau tidak ditemukan datanya
  if (!semuaSoal || semuaSoal.length === 0) {
    tampilkanNotifModern('❌', 'Level Tidak Tersedia', `Maaf, soal untuk tingkat kesulitan <b>${level}</b> belum tersedia.`, false);
    return;
  }

  // Cek kesempatan & status cooldown level ini sebelum memulai
  const status = segarkanStatusLevel(level);
  renderStatusSemuaLevel();

  if (status.lockUntil && Date.now() < status.lockUntil) {
    const sisaDetik = Math.max(0, Math.ceil((status.lockUntil - Date.now()) / 1000));
    tampilkanNotifModern('⏳', 'Kesempatan Sedang Diisi Ulang', `Kesempatan level <b>${labelLevel(level)}</b> sudah habis.<br>Coba lagi dalam <b>${formatMenitDetik(sisaDetik)}</b>.`, false);
    return;
  }

  if (status.sisa <= 0) {
    // Jaga-jaga: kesempatan habis tapi cooldown belum tersimpan, kunci sekarang
    perbaruiStatusLevel(level, { sisa: 0, lockUntil: Date.now() + DURASI_COOLDOWN_DETIK * 1000 });
    renderStatusSemuaLevel();
    tampilkanNotifModern('⏳', 'Kesempatan Habis', `Kesempatan level <b>${labelLevel(level)}</b> sudah habis.<br>Tunggu 5 menit untuk mencoba lagi.`, false);
    return;
  }

  // Gunakan satu kesempatan untuk percobaan kali ini
  perbaruiStatusLevel(level, { sisa: status.sisa - 1, lockUntil: null });
  renderStatusSemuaLevel();
  levelAktif = level;

  // Acak soal lalu ambil sejumlah JUMLAH_SOAL[level]
  const jumlah = JUMLAH_SOAL[level] || semuaSoal.length;
  const soalAcak = acakArray(semuaSoal);
  dataKuisAktif = soalAcak.slice(0, Math.min(jumlah, soalAcak.length));

  // Inisialisasi ulang state kuis
  jawabanUser = Array(dataKuisAktif.length).fill(null);
  indeksSekarang = 0;
  
  // Atur visibilitas tampilan kontainer halaman
  menuKesulitan.style.display = "none";
  hasilContainer.style.display = "none";
  areaGame.style.display = "block";

  // Mulai hitung mundur waktu pengerjaan 20 menit untuk level ini
  mulaiTimerKuis();
  
  // Tampilkan soal pertama
  tampilkanSoal();
}

// ==========================================================================
// 3. FUNGSI MENAMPILKAN BUTIR SOAL DAN OPSI JAWABAN
// ==========================================================================
function tampilkanSoal() {
  if (dataKuisAktif.length === 0) return;

  const data = dataKuisAktif[indeksSekarang];
  
  // Bersihkan sisa elemen kotak pembahasan/penjelasan dari nomor sebelumnya
  const pembBoxLama = document.querySelector(".pembahasan-box");
  if (pembBoxLama) pembBoxLama.remove();

  // Injeksikan data materi, nomor navigasi, dan teks soal ke elemen HTML
  materiEl.innerHTML = data.materi;
  nomorEl.innerText = `Soal ${indeksSekarang + 1} dari ${dataKuisAktif.length}`;
  soalEl.innerHTML = data.soal;

  // Kosongkan daftar opsi jawaban lama sebelum diisi opsi baru
  opsiEl.innerHTML = "";

  // Huruf untuk label opsi jawaban (A, B, C, D, ...)
  const HURUF_OPSI = ["A", "B", "C", "D", "E", "F"];

  // Iterasi pembuatan elemen tombol pilihan ganda
  data.opsi.forEach((opsiTeks, index) => {
    const button = document.createElement("button");
    button.className = "opsi-btn";
    button.innerHTML = `<span class="opsi-huruf">${HURUF_OPSI[index] || String.fromCharCode(65 + index)}.</span> <span class="opsi-teks">${opsiTeks}</span>`;
    
    // PENGECEKAN STATE
    if (jawabanUser[indeksSekarang] !== null) {
      button.disabled = true; 
      
      if (index === data.jawabanIndex) {
        button.classList.add("benar"); 
      }
      if (jawabanUser[indeksSekarang] === index && index !== data.jawabanIndex) {
        button.classList.add("salah"); 
      }
    } else {
      button.onclick = () => pilihJawaban(index);
    }
    
    opsiEl.appendChild(button);
  });

  if (jawabanUser[indeksSekarang] !== null) {
    tampilkanPembahasan(jawabanUser[indeksSekarang] === data.jawabanIndex);
  }

  prevBtn.disabled = indeksSekarang === 0; 
  
  if (indeksSekarang === dataKuisAktif.length - 1) {
    nextBtn.style.display = "none";
    finishBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "inline-block";
    finishBtn.style.display = "none";
  }

  // Render ulang notasi matematika (MathJax) pada materi, soal, dan opsi jawaban
  if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetPromise([materiEl, soalEl, opsiEl]).catch(err => console.error("MathJax error:", err));
  }
}

// 4. FUNGSI EKSEKUSI JAWABAN SAAT OPSI DIKLIK
function pilihJawaban(indeksPilihan) {
  const data = dataKuisAktif[indeksSekarang];
  jawabanUser[indeksSekarang] = indeksPilihan; 

  const semuaTombolOpsi = opsiEl.querySelectorAll(".opsi-btn");
  semuaTombolOpsi.forEach((button, index) => {
    button.disabled = true; 
    
    if (index === data.jawabanIndex) {
      button.classList.add("benar"); 
    } else if (index === indeksPilihan) {
      button.classList.add("salah"); 
    }
  });

  // Validasi kecocokan nilai untuk memicu warna border pada kotak pembahasan
  const apakahBenar = indeksPilihan === data.jawabanIndex;
  tampilkanPembahasan(apakahBenar);
}


// 5. FUNGSI PEMBUATAN WADAH INDIKATOR & TEKS PENJELASAN
function tampilkanPembahasan(apakahBenar) {
  const data = dataKuisAktif[indeksSekarang];
  
  const pembBox = document.createElement("div");

  pembBox.className = `pembahasan-box ${apakahBenar ? 'status-benar' : 'status-salah'}`;
  
  const statusTeks = apakahBenar 
    ? "<strong style='color:#28a745;'>✓ Jawaban Anda Benar!</strong>" 
    : "<strong style='color:#dc3545;'>✗ Jawaban Anda Salah!</strong>";

  pembBox.innerHTML = `
    <div style="margin-bottom: 8px;">${statusTeks}</div>
    <div><strong>Penjelasan:</strong> ${data.pembahasan}</div>
  `;
  
  opsiEl.after(pembBox);

  if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetPromise([pembBox]).catch(err => console.error("MathJax error:", err));
  }
}

// 6. LOGIKA TOMBOL NAVIGASI DAN KALKULASI SKOR AKHIR
prevBtn.onclick = () => {
  if (indeksSekarang > 0) {
    indeksSekarang--;
    tampilkanSoal();
  }
};

nextBtn.onclick = () => {
  if (indeksSekarang < dataKuisAktif.length - 1) {
    indeksSekarang++;
    tampilkanSoal();
  }
};

// ============================================================
// MODAL KONFIRMASI SELESAI (modern)
// ============================================================
function buatModal() {
  if (document.getElementById('modal-konfirmasi')) return;

  const overlay = document.createElement('div');
  overlay.id = 'modal-konfirmasi';
  overlay.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-card">
      <div class="modal-icon" id="modal-icon">⚠️</div>
      <h3 class="modal-judul" id="modal-judul">Soal Belum Lengkap</h3>
      <p class="modal-pesan" id="modal-pesan"></p>
      <div class="modal-aksi">
        <button class="modal-btn modal-btn-batal" id="modal-batal">Kembali ke Soal</button>
        <button class="modal-btn modal-btn-lanjut" id="modal-lanjut">Selesai Sekarang</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  document.getElementById('modal-batal').onclick = tutupModal;
  document.getElementById('modal-lanjut').onclick = () => { tutupModal(); selesaikanKuis(); };
  overlay.querySelector('.modal-backdrop').onclick = tutupModal;
}

function bukaModal(belumDijawab) {
  buatModal();
  const modal = document.getElementById('modal-konfirmasi');
  const pesan = document.getElementById('modal-pesan');
  const icon = document.getElementById('modal-icon');
  const judul = document.getElementById('modal-judul');

  if (belumDijawab > 0) {
    icon.textContent = '⚠️';
    judul.textContent = 'Ada Soal yang Belum Dijawab!';
    pesan.innerHTML = `Masih ada <strong>${belumDijawab} soal</strong> yang belum kamu jawab.<br>Anda yakin untuk selesai?`;
  } else {
    icon.textContent = '✅';
    judul.textContent = 'Siap Mengumpulkan?';
    pesan.innerHTML = `Semua soal sudah dijawab.<br>Anda yakin untuk selesai?`;
  }

  modal.classList.add('aktif');
  requestAnimationFrame(() => modal.querySelector('.modal-card').classList.add('masuk'));
}

function tutupModal() {
  const modal = document.getElementById('modal-konfirmasi');
  if (!modal) return;
  modal.querySelector('.modal-card').classList.remove('masuk');
  setTimeout(() => modal.classList.remove('aktif'), 280);
}

function selesaikanKuis() {
  hentikanTimerKuis();

  let jumlahBenar = 0;
  let belumDijawab = 0;

  dataKuisAktif.forEach((soal, i) => {
    if (jawabanUser[i] === soal.jawabanIndex) jumlahBenar++;
    if (jawabanUser[i] === null) belumDijawab++;
  });

  const jumlahSalah = dataKuisAktif.length - jumlahBenar - belumDijawab;
  const totalSkor = Math.round((jumlahBenar / dataKuisAktif.length) * 100);

  // Jika percobaan ini adalah kesempatan terakhir, mulai hitung mundur 5 menit untuk reset
  if (levelAktif) {
    const status = ambilStatusLevel(levelAktif);
    if (status.sisa <= 0 && !status.lockUntil) {
      perbaruiStatusLevel(levelAktif, { sisa: 0, lockUntil: Date.now() + DURASI_COOLDOWN_DETIK * 1000 });
    }
    renderStatusSemuaLevel();
  }

  areaGame.style.display = "none";
  hasilContainer.style.display = "block";

  nilaiSkor.innerText = totalSkor;
  detailStat.innerHTML = `Benar: <b>${jumlahBenar}</b> | Salah: <b>${jumlahSalah}</b> ${belumDijawab > 0 ? `| Belum Dijawab: <b>${belumDijawab}</b>` : ''}`;

  // Tampilkan tombol Ulang Materi jika ada jawaban salah atau soal yang belum dijawab
  const adaKesalahan = jumlahSalah > 0 || belumDijawab > 0;
  tampilkanTombolUlangMateri(adaKesalahan);
}

// ==========================================================================
// 7. FUNGSI TOMBOL ULANG MATERI (muncul jika ada jawaban salah)
// ==========================================================================
function tampilkanTombolUlangMateri(tampilkan) {
  // Hapus tombol lama jika ada
  const tombolLama = document.getElementById('btn-ulang-materi');
  if (tombolLama) tombolLama.remove();

  if (!tampilkan) return;

  const tombol = document.createElement('a');
  tombol.id = 'btn-ulang-materi';
  tombol.href = '01-1-materi-pengantar.html';
  tombol.className = 'btn-kuis-aksi btn-ulang-materi';
  tombol.innerHTML = '<span class="btn-kuis-icon">📖</span> Ulang Materi <span class="btn-kuis-arrow">→</span>';

  // Sisipkan ke dalam grup tombol yang sama dengan Main Lagi, agar jarak (gap)
  // antar tombol konsisten dan tidak dempet (sebelumnya tombol ini malah
  // ditambahkan di luar .hasil-tombol-group sehingga jaraknya tidak diatur).
  const grupTombol = hasilContainer.querySelector('.hasil-tombol-group');
  if (grupTombol) {
    grupTombol.appendChild(tombol);
  } else {
    hasilContainer.appendChild(tombol);
  }
}

// Fungsi ketika tombol SELESAI ditekan
finishBtn.onclick = () => {
  let belumDijawab = 0;
  jawabanUser.forEach(j => { if (j === null) belumDijawab++; });
  bukaModal(belumDijawab);
};

// Fungsi tombol Main Lagi untuk kembali ke Menu Utama tingkat kesulitan
function ulangiKuis() {
  hasilContainer.style.display = "none";
  menuKesulitan.style.display = "block";

  // Bersihkan tombol ulang materi agar tidak muncul saat halaman hasil dibuka lagi
  const tombolUlang = document.getElementById('btn-ulang-materi');
  if (tombolUlang) tombolUlang.remove();

  // Perbarui badge kesempatan & status kunci tiap level
  renderStatusSemuaLevel();
}



// ============================================================
// NOTIFIKASI MODERN (pengganti alert)
// ============================================================
function tampilkanNotifModern(icon, judul, pesan, autoClose = true) {
  // Hapus notif lama
  const lama = document.getElementById('notif-modern');
  if (lama) lama.remove();

  const notif = document.createElement('div');
  notif.id = 'notif-modern';
  notif.innerHTML = `
    <div class="notif-card">
      <div class="notif-icon">${icon}</div>
      <div class="notif-body">
        <div class="notif-judul">${judul}</div>
        <div class="notif-pesan">${pesan}</div>
      </div>
      <button class="notif-tutup" onclick="document.getElementById('notif-modern').remove()">✕</button>
    </div>
  `;
  document.body.appendChild(notif);
  requestAnimationFrame(() => notif.classList.add('tampil'));

  if (autoClose) {
    setTimeout(() => {
      notif.classList.remove('tampil');
      setTimeout(() => notif.remove(), 350);
    }, 3500);
  }
}

// KICK-START: JALANKAN PROSES PERTAMA KALI 
AMBIL_DATA_JSON();

// Tampilkan status kesempatan tiap level sejak awal, lalu perbarui tiap detik
// agar hitung mundur cooldown (reset kesempatan) berjalan secara langsung.
renderStatusSemuaLevel();
setInterval(renderStatusSemuaLevel, 1000);
