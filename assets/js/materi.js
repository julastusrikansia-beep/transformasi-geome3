// ============================================================
// NOTIFIKASI MODERN SAMBUTAN HALAMAN MATERI (pengganti alert)
// ============================================================
function tampilToastMateri(icon, judul, pesan) {
    const lama = document.getElementById('materi-toast');
    if (lama) { lama.remove(); }

    const toast = document.createElement('div');
    toast.id = 'materi-toast';
    toast.innerHTML = `
        <div class="materi-toast-card">
            <span class="materi-toast-icon">${icon}</span>
            <div class="materi-toast-body">
                <div class="materi-toast-judul">${judul}</div>
                ${pesan ? `<div class="materi-toast-pesan">${pesan}</div>` : ''}
            </div>
            <button class="materi-toast-close" onclick="this.closest('#materi-toast').remove()">✕</button>
        </div>
    `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        requestAnimationFrame(() => toast.classList.add('tampil'));
    });
    setTimeout(() => {
        toast.classList.remove('tampil');
        setTimeout(() => toast.remove(), 380);
    }, 4000);
}

document.addEventListener("DOMContentLoaded", () => {

    // Tandai bahwa pengguna sudah masuk ke halaman Materi, dipakai oleh halaman
    // Main Menu untuk menentukan notifikasi modern yang tampil saat kembali.
    sessionStorage.setItem('gv_section_visited', '1');

    // Jika pengguna sudah pernah membuka salah satu dari 4 materi transformasi
    // lalu kembali lagi ke halaman ini, ajak untuk mencoba simulasi.
    const pernahKeMateriDetail = sessionStorage.getItem('gv_materi_detail_visited') === '1';

    setTimeout(() => {
        if (pernahKeMateriDetail) {
            tampilToastMateri('🔬', 'Ayo Coba Simulasi!', 'Uji pemahamanmu langsung di halaman simulasi interaktif.');
        } else {
            tampilToastMateri('📘', 'Ayo, Mulai Belajar!', 'Pilih salah satu materi transformasi geometri di bawah ini.');
        }
    }, 500);

    const tombol = document.querySelectorAll(".card-materi");

    tombol.forEach(btn => {

        btn.addEventListener("click", function (e) {

            e.preventDefault();

            this.classList.add("klik");

            setTimeout(() => {
                window.location.href = this.href;
            }, 0);

        });

    });

});