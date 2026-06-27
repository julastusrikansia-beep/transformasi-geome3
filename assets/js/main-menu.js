// ============================================================
// NOTIFIKASI MODERN SAMBUTAN MENU UTAMA (pengganti alert)
// ============================================================
function tampilToastMenu(icon, judul, pesan) {
    const lama = document.getElementById('menu-toast');
    if (lama) { lama.remove(); }

    const toast = document.createElement('div');
    toast.id = 'menu-toast';
    toast.innerHTML = `
        <div class="menu-toast-card">
            <span class="menu-toast-icon">${icon}</span>
            <div class="menu-toast-body">
                <div class="menu-toast-judul">${judul}</div>
                ${pesan ? `<div class="menu-toast-pesan">${pesan}</div>` : ''}
            </div>
            <button class="menu-toast-close" onclick="this.closest('#menu-toast').remove()">✕</button>
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

    // Jika sebelumnya pengguna sempat masuk ke salah satu halaman (Materi/Simulasi/Kuis)
    // lalu menekan tombol kembali, tampilkan ajakan untuk coba halaman lain.
    // Jika belum pernah sama sekali (baru pertama buka), tampilkan sambutan awal.
    const pernahKeHalamanLain = sessionStorage.getItem('gv_section_visited') === '1';

    setTimeout(() => {
        if (pernahKeHalamanLain) {
            tampilToastMenu('🧭', 'Mau Coba ke Halaman Lain di Bawah Ini?', 'Pilih salah satu menu di bawah untuk lanjut menjelajah ya!');
        } else {
            tampilToastMenu('👋', 'Selamat Datang GeoVerse Morph', 'Ayo ke halaman materi transformasi Geometri dulu yuk!');
        }
    }, 600);

    const tombol = document.querySelectorAll(".btn-menu");

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