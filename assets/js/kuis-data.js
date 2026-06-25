const DATA_SOAL_KUIS = {
  "mudah": [
    // ===== JAWABAN A (7 soal) =====
    {
      "id": "m-A1",
      "materi": "Translasi",
      "soal": "Titik $A(1, 1)$ ditranslasikan oleh vektor $T = \\begin{pmatrix} 5 \\\\ 4 \\end{pmatrix}$. Tentukan koordinat bayangan titik $A$.",
      "opsi": ["$(6,5)$", "$(5,6)$", "$(4,6)$", "$(7,3)$"],
      "jawabanIndex": 0,
      "pembahasan": "Rumus translasi: $A'(x+a,\\ y+b)$.<br>Substitusi nilai: $A'(1+5,\\ 1+4) = A'(6, 5)$."
    },
    {
      "id": "m-A2",
      "materi": "Translasi",
      "soal": "Titik $D(0, 0)$ ditranslasikan oleh $T = \\begin{pmatrix} -3 \\\\ 7 \\end{pmatrix}$. Koordinat bayangannya adalah...",
      "opsi": ["$(-3,7)$", "$(3,-7)$", "$(7,-3)$", "$(0,0)$"],
      "jawabanIndex": 0,
      "pembahasan": "Rumus translasi: $D'(x+a,\\ y+b)$.<br>Substitusi nilai: $D'(0+(-3),\\ 0+7) = D'(-3, 7)$."
    },
    {
      "id": "m-A3",
      "materi": "Translasi",
      "soal": "Titik $E(4, 6)$ ditranslasikan oleh $T = \\begin{pmatrix} -4 \\\\ -6 \\end{pmatrix}$. Koordinat bayangannya adalah...",
      "opsi": ["$(0,0)$", "$(8,12)$", "$(-4,-6)$", "$(4,6)$"],
      "jawabanIndex": 0,
      "pembahasan": "Rumus translasi: $E'(x+a,\\ y+b)$.<br>Substitusi nilai: $E'(4+(-4),\\ 6+(-6)) = E'(0, 0)$."
    },
    {
      "id": "m-A4",
      "materi": "Translasi",
      "soal": "Titik $F(2, -5)$ ditranslasikan oleh $T = \\begin{pmatrix} 3 \\\\ 8 \\end{pmatrix}$. Koordinat bayangan $F$ adalah...",
      "opsi": ["$(5,3)$", "$(5,-3)$", "$(-1,-13)$", "$(3,-5)$"],
      "jawabanIndex": 0,
      "pembahasan": "Rumus translasi: $F'(x+a,\\ y+b)$.<br>Substitusi nilai: $F'(2+3,\\ -5+8) = F'(5, 3)$."
    },
    {
      "id": "m-A5",
      "materi": "Translasi",
      "soal": "Titik $G(-4, -3)$ ditranslasikan oleh $T = \\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix}$. Koordinat bayangan $G$ adalah...",
      "opsi": ["$(2,0)$", "$(-2,0)$", "$(0,2)$", "$(6,3)$"],
      "jawabanIndex": 0,
      "pembahasan": "Rumus translasi: $G'(x+a,\\ y+b)$.<br>Substitusi nilai: $G'(-4+6,\\ -3+3) = G'(2, 0)$."
    },
    {
      "id": "m-A6",
      "materi": "Refleksi",
      "soal": "Titik $Q(-5, 3)$ dicerminkan terhadap sumbu-$y$. Hasil refleksinya adalah...",
      "opsi": ["$(5,3)$", "$(-5,-3)$", "$(3,5)$", "$(5,-3)$"],
      "jawabanIndex": 0,
      "pembahasan": "Rumus refleksi terhadap sumbu-$y$: $(x, y) \\to (-x, y)$.<br>Substitusi: $(-5, 3) \\to (-(-5), 3) = Q'(5, 3)$."
    },
    {
      "id": "m-A7",
      "materi": "Refleksi",
      "soal": "Titik $M(7, 3)$ dicerminkan terhadap sumbu-$y$. Koordinat bayangannya adalah...",
      "opsi": ["$(-7,3)$", "$(7,-3)$", "$(-7,-3)$", "$(3,7)$"],
      "jawabanIndex": 0,
      "pembahasan": "Rumus refleksi terhadap sumbu-$y$: $(x, y) \\to (-x, y)$.<br>Substitusi: $(7, 3) \\to (-7, 3) = M'(-7, 3)$."
    },
    // ===== JAWABAN B (7 soal) =====
    {
      "id": "m-B1",
      "materi": "Translasi",
      "soal": "Titik $B(1, -2)$ ditranslasikan oleh vektor $T = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}$. Hasil translasi titik $B$ adalah...",
      "opsi": ["$(2,4)$", "$(3,3)$", "$(3,7)$", "$(9,3)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus translasi: $B'(x+a,\\ y+b)$.<br>Substitusi nilai: $B'(1+2,\\ -2+5) = B'(3, 3)$."
    },
    {
      "id": "m-B2",
      "materi": "Translasi",
      "soal": "Titik $H(1, 4)$ ditranslasikan oleh $T = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$. Koordinat bayangan $H$ adalah...",
      "opsi": ["$(1,4)$", "$(3,3)$", "$(3,5)$", "$(2,-1)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus translasi: $H'(x+a,\\ y+b)$.<br>Substitusi nilai: $H'(1+2,\\ 4+(-1)) = H'(3, 3)$."
    },
    {
      "id": "m-B3",
      "materi": "Refleksi",
      "soal": "Titik $P(4, -2)$ dicerminkan terhadap sumbu-$x$. Hasil pencerminannya adalah...",
      "opsi": ["$(-4,-2)$", "$(4,2)$", "$(-4,2)$", "$(2,4)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus refleksi terhadap sumbu-$x$: $(x, y) \\to (x, -y)$.<br>Substitusi: $(4, -2) \\to (4, -(-2)) = P'(4, 2)$."
    },
    {
      "id": "m-B4",
      "materi": "Refleksi",
      "soal": "Titik $R(2, -6)$ dicerminkan terhadap sumbu-$x$. Koordinat bayangannya adalah...",
      "opsi": ["$(-2,-6)$", "$(2,6)$", "$(-2,6)$", "$(6,2)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus refleksi terhadap sumbu-$x$: $(x, y) \\to (x, -y)$.<br>Substitusi: $(2, -6) \\to (2, -(-6)) = R'(2, 6)$."
    },
    {
      "id": "m-B5",
      "materi": "Rotasi",
      "soal": "Titik $N(2, 4)$ dirotasikan sebesar $90°$ berlawanan arah jarum jam terhadap pusat $O(0,0)$. Hasil rotasinya adalah...",
      "opsi": ["$(4,-2)$", "$(-4,2)$", "$(2,-4)$", "$(4,2)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus rotasi $90°$ berlawanan jarum jam terhadap $O(0,0)$: $(x, y) \\to (-y, x)$.<br>Substitusi: $(2, 4) \\to (-4, 2) = N'(-4, 2)$."
    },
    {
      "id": "m-B6",
      "materi": "Dilatasi",
      "soal": "Titik $T(1, 3)$ didilatasi dengan faktor skala $k = 3$ terhadap pusat $O(0,0)$. Hasil dilatasinya adalah...",
      "opsi": ["$(4,9)$", "$(3,9)$", "$(3,6)$", "$(1,9)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus dilatasi: $T'(kx, ky)$.<br>Substitusi: $T'(3 \\times 1,\\ 3 \\times 3) = T'(3, 9)$."
    },
    {
      "id": "m-B7",
      "materi": "Dilatasi",
      "soal": "Titik $U(-2, 4)$ didilatasi dengan faktor skala $k = 2$ terhadap pusat $O(0,0)$. Koordinat bayangan $U$ adalah...",
      "opsi": ["$(-1,2)$", "$(-4,8)$", "$(-2,8)$", "$(4,-8)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus dilatasi: $U'(kx, ky)$.<br>Substitusi: $U'(2 \\times (-2),\\ 2 \\times 4) = U'(-4, 8)$."
    },
    // ===== JAWABAN C (7 soal) =====
    {
      "id": "m-C1",
      "materi": "Translasi",
      "soal": "Titik $C(-3, 5)$ ditranslasikan oleh vektor $T = \\begin{pmatrix} 4 \\\\ -2 \\end{pmatrix}$. Koordinat bayangan titik $C$ adalah...",
      "opsi": ["$(7,3)$", "$(-1,-3)$", "$(1,3)$", "$(-1,3)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus translasi: $C'(x+a,\\ y+b)$.<br>Substitusi nilai: $C'(-3+4,\\ 5+(-2)) = C'(1, 3)$."
    },
    {
      "id": "m-C2",
      "materi": "Translasi",
      "soal": "Titik $I(-1, -4)$ ditranslasikan oleh $T = \\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}$. Koordinat bayangan $I$ adalah...",
      "opsi": ["$(-4,-10)$", "$(4,-2)$", "$(2,2)$", "$(3,6)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus translasi: $I'(x+a,\\ y+b)$.<br>Substitusi nilai: $I'(-1+3,\\ -4+6) = I'(2, 2)$."
    },
    {
      "id": "m-C3",
      "materi": "Refleksi",
      "soal": "Titik $S(0, 5)$ dicerminkan terhadap sumbu-$x$. Koordinat bayangannya adalah...",
      "opsi": ["$(5,0)$", "$(0,5)$", "$(0,-5)$", "$(-5,0)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus refleksi terhadap sumbu-$x$: $(x, y) \\to (x, -y)$.<br>Substitusi: $(0, 5) \\to (0, -5) = S'(0, -5)$."
    },
    {
      "id": "m-C4",
      "materi": "Refleksi",
      "soal": "Titik $T(3, -4)$ dicerminkan terhadap sumbu-$y$. Koordinat bayangannya adalah...",
      "opsi": ["$(3,4)$", "$(4,-3)$", "$(-3,-4)$", "$(-4,3)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus refleksi terhadap sumbu-$y$: $(x, y) \\to (-x, y)$.<br>Substitusi: $(3, -4) \\to (-3, -4) = T'(-3, -4)$."
    },
    {
      "id": "m-C5",
      "materi": "Rotasi",
      "soal": "Titik $G(4, -2)$ dirotasikan sebesar $270°$ berlawanan arah jarum jam terhadap pusat $O(0,0)$. Koordinat bayangannya adalah...",
      "opsi": ["$(2,4)$", "$(-2,4)$", "$(-2,-4)$", "$(2,-4)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus rotasi $270°$ berlawanan jarum jam terhadap $O(0,0)$: $(x, y) \\to (y, -x)$.<br>Substitusi: $(4, -2) \\to (-2, -4) = G'(-2, -4)$."
    },
    {
      "id": "m-C6",
      "materi": "Dilatasi",
      "soal": "Titik $V(5, -3)$ didilatasi dengan faktor skala $k = 2$ terhadap pusat $O(0,0)$. Koordinat bayangan $V$ adalah...",
      "opsi": ["$(5,-3)$", "$(5,-6)$", "$(10,-6)$", "$(2,-3)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus dilatasi: $V'(kx, ky)$.<br>Substitusi: $V'(2 \\times 5,\\ 2 \\times (-3)) = V'(10, -6)$."
    },
    {
      "id": "m-C7",
      "materi": "Rotasi",
      "soal": "Titik $K(2, 5)$ dirotasikan sebesar $90°$ searah jarum jam terhadap pusat $O(0,0)$. Koordinat bayangannya adalah...",
      "opsi": ["$(-5,2)$", "$(2,-5)$", "$(5,-2)$", "$(-2,-5)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus rotasi $90°$ searah jarum jam (atau $-90°$) terhadap $O(0,0)$: $(x, y) \\to (y, -x)$.<br>Substitusi: $(2, 5) \\to (5, -2) = K'(5, -2)$."
    },
    // ===== JAWABAN D (9 soal) =====
    {
      "id": "m-D1",
      "materi": "Rotasi",
      "soal": "Titik $L(3, 0)$ dirotasikan sebesar $180°$ terhadap pusat $O(0,0)$. Koordinat bayangannya adalah...",
      "opsi": ["$(0,-3)$", "$(0,3)$", "$(3,0)$", "$(-3,0)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus rotasi $180°$ terhadap $O(0,0)$: $(x, y) \\to (-x, -y)$.<br>Substitusi: $(3, 0) \\to (-3, 0) = L'(-3, 0)$."
    },
    {
      "id": "m-D2",
      "materi": "Rotasi",
      "soal": "Titik $H(5, 3)$ dirotasikan sebesar $180°$ terhadap pusat $O(0,0)$. Koordinat bayangannya adalah...",
      "opsi": ["$(5,-3)$", "$(-5,3)$", "$(3,5)$", "$(-5,-3)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus rotasi $180°$ terhadap $O(0,0)$: $(x, y) \\to (-x, -y)$.<br>Substitusi: $(5, 3) \\to (-5, -3) = H'(-5, -3)$."
    },
    {
      "id": "m-D3",
      "materi": "Dilatasi",
      "soal": "Titik $S(2, 3)$ didilatasi dengan faktor skala $k = 2$ terhadap pusat $O(0,0)$. Hasil dilatasinya adalah...",
      "opsi": ["$(2,6)$", "$(4,3)$", "$(1,2)$", "$(4,6)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus dilatasi: $S'(kx, ky)$.<br>Substitusi: $S'(2 \\times 2,\\ 2 \\times 3) = S'(4, 6)$."
    },
    {
      "id": "m-D4",
      "materi": "Dilatasi",
      "soal": "Titik $P(-3, 1)$ didilatasi dengan faktor skala $k = 3$ terhadap pusat $O(0,0)$. Hasil dilatasinya adalah...",
      "opsi": ["$(-1,3)$", "$(-3,3)$", "$(-6,3)$", "$(-9,3)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus dilatasi: $P'(kx, ky)$.<br>Substitusi: $P'(3 \\times (-3),\\ 3 \\times 1) = P'(-9, 3)$."
    },
    {
      "id": "m-D5",
      "materi": "Refleksi",
      "soal": "Titik $U(6, -2)$ dicerminkan terhadap sumbu-$x$. Koordinat bayangannya adalah...",
      "opsi": ["$(-6,-2)$", "$(-6,2)$", "$(2,6)$", "$(6,2)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus refleksi terhadap sumbu-$x$: $(x, y) \\to (x, -y)$.<br>Substitusi: $(6, -2) \\to (6, 2) = U'(6, 2)$."
    },
    {
      "id": "m-D6",
      "materi": "Translasi",
      "soal": "Titik $J(3, 7)$ ditranslasikan oleh $T = \\begin{pmatrix} -5 \\\\ -3 \\end{pmatrix}$. Koordinat bayangan $J$ adalah...",
      "opsi": ["$(8,10)$", "$(-3,7)$", "$(3,-3)$", "$(-2,4)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus translasi: $J'(x+a,\\ y+b)$.<br>Substitusi nilai: $J'(3+(-5),\\ 7+(-3)) = J'(-2, 4)$."
    },
    {
      "id": "m-D7",
      "materi": "Rotasi",
      "soal": "Titik $O(0, 3)$ dirotasikan sebesar $90°$ searah jarum jam terhadap pusat $O(0,0)$. Koordinat bayangannya adalah...",
      "opsi": ["$(0,-3)$", "$(-3,0)$", "$(0,3)$", "$(3,0)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus rotasi $90°$ searah jarum jam: $(x, y) \\to (y, -x)$.<br>Substitusi: $(0, 3) \\to (3, 0) = O'(3, 0)$."
    },
    {
      "id": "m-D8",
      "materi": "Dilatasi",
      "soal": "Titik $W(4, -2)$ didilatasi dengan faktor skala $k = \\frac{1}{2}$ terhadap pusat $O(0,0)$. Koordinat bayangan $W$ adalah...",
      "opsi": ["$(8,-4)$", "$(4,-1)$", "$(2,-4)$", "$(2,-1)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus dilatasi: $W'(kx, ky)$.<br>Substitusi: $W'(\\frac{1}{2} \\times 4,\\ \\frac{1}{2} \\times (-2)) = W'(2, -1)$."
    },
    {
      "id": "m-D9",
      "materi": "Translasi",
      "soal": "Titik $K(5, -3)$ ditranslasikan oleh $T = \\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}$. Koordinat bayangan $K$ adalah...",
      "opsi": ["$(5,-3)$", "$(0,4)$", "$(5,4)$", "$(5,1)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus translasi: $K'(x+a,\\ y+b)$.<br>Substitusi nilai: $K'(5+0,\\ -3+4) = K'(5, 1)$."
    }
  ],
  "sedang": [
    // ===== JAWABAN A (7 soal) =====
    {
      "id": "s-A1",
      "materi": "Refleksi Garis $y = x$",
      "soal": "Titik $A(3, 7)$ dicerminkan terhadap garis $y = x$. Koordinat bayangannya adalah...",
      "opsi": ["$(7,3)$", "$(-3,7)$", "$(3,-7)$", "$(-7,-3)$"],
      "jawabanIndex": 0,
      "pembahasan": "Rumus refleksi terhadap garis $y = x$: $(x, y) \\to (y, x)$.<br>Substitusi: $(3, 7) \\to (7, 3) = A'(7, 3)$."
    },
    {
      "id": "s-A2",
      "materi": "Refleksi Garis $y = -x$",
      "soal": "Titik $B(5, -2)$ dicerminkan terhadap garis $y = -x$. Koordinat bayangannya adalah...",
      "opsi": ["$(2,-5)$", "$(-2,5)$", "$(-5,2)$", "$(5,2)$"],
      "jawabanIndex": 0,
      "pembahasan": "Rumus refleksi terhadap garis $y = -x$: $(x, y) \\to (-y, -x)$.<br>Substitusi: $(5, -2) \\to (-(-2), -5) = B'(2, -5)$."
    },
    {
      "id": "s-A3",
      "materi": "Dilatasi Pusat $P(a,b)$",
      "soal": "Titik $C(4, 3)$ didilatasi dengan pusat $P(2, 1)$ dan faktor skala $k = 2$. Koordinat bayangannya adalah...",
      "opsi": ["$(6,5)$", "$(4,3)$", "$(8,6)$", "$(2,1)$"],
      "jawabanIndex": 0,
      "pembahasan": "Rumus dilatasi terhadap pusat $P(a, b)$: $x' = a + k(x-a)$, $y' = b + k(y-b)$.<br>$x' = 2 + 2(4-2) = 6$<br>$y' = 1 + 2(3-1) = 5$<br>Bayangan: $C'(6, 5)$."
    },
    {
      "id": "s-A4",
      "materi": "Refleksi Garis $x = k$",
      "soal": "Titik $M(1, 7)$ dicerminkan terhadap garis $x = 4$. Koordinat bayangan titik $M$ adalah...",
      "opsi": ["$(7,7)$", "$(5,7)$", "$(3,7)$", "$(8,7)$"],
      "jawabanIndex": 0,
      "pembahasan": "Rumus refleksi terhadap garis $x = k$: $(x, y) \\to (2k - x,\\, y)$.<br>Substitusi $k = 4$, $x = 1$: $x' = 2(4) - 1 = 7$, $y' = 7$.<br>Bayangan: $M'(7, 7)$."
    },
    {
      "id": "s-A5",
      "materi": "Rotasi Pusat $O(0,0)$",
      "soal": "Titik $N(-3, 5)$ dirotasikan sebesar $90°$ berlawanan arah jarum jam terhadap pusat $O(0,0)$. Koordinat bayangannya adalah...",
      "opsi": ["$(-5,-3)$", "$(5,3)$", "$(-5,3)$", "$(5,-3)$"],
      "jawabanIndex": 0,
      "pembahasan": "Rumus rotasi $90°$ berlawanan jarum jam terhadap $O(0,0)$: $(x, y) \\to (-y,\\, x)$.<br>Substitusi: $(-3, 5) \\to (-5, -3) = N'(-5, -3)$."
    },
    {
      "id": "s-A6",
      "materi": "Refleksi Garis $y = x$",
      "soal": "Titik $D(-4, 2)$ dicerminkan terhadap garis $y = x$. Koordinat bayangannya adalah...",
      "opsi": ["$(2,-4)$", "$(-2,4)$", "$(-4,-2)$", "$(4,2)$"],
      "jawabanIndex": 0,
      "pembahasan": "Rumus refleksi terhadap garis $y = x$: $(x, y) \\to (y, x)$.<br>Substitusi: $(-4, 2) \\to (2, -4) = D'(2, -4)$."
    },
    {
      "id": "s-A7",
      "materi": "Rotasi Pusat $P(a,b)$",
      "soal": "Titik $E(3, 2)$ dirotasikan $90°$ berlawanan arah jarum jam terhadap pusat $P(1, 1)$. Koordinat bayangannya adalah...",
      "opsi": ["$(0,3)$", "$(2,3)$", "$(-1,3)$", "$(0,-1)$"],
      "jawabanIndex": 0,
      "pembahasan": "Untuk rotasi $90°$ berlawanan jarum jam terhadap $P(a,b)$:<br>$x' = a - (y - b) = 1 - (2-1) = 0$<br>$y' = b + (x - a) = 1 + (3-1) = 3$<br>Bayangan: $E'(0, 3)$."
    },
    // ===== JAWABAN B (7 soal) =====
    {
      "id": "s-B1",
      "materi": "Dilatasi Pusat $P(a,b)$",
      "soal": "Titik $F(5, 4)$ didilatasi dengan pusat $P(1, 2)$ dan faktor skala $k = 2$. Koordinat bayangannya adalah...",
      "opsi": ["$(11,6)$", "$(9,6)$", "$(5,4)$", "$(10,8)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus dilatasi terhadap pusat $P(a, b)$: $x' = a + k(x-a)$, $y' = b + k(y-b)$.<br>$x' = 1 + 2(5-1) = 9$<br>$y' = 2 + 2(4-2) = 6$<br>Bayangan: $F'(9, 6)$."
    },
    {
      "id": "s-B2",
      "materi": "Refleksi Garis $y = k$",
      "soal": "Titik $G(3, 1)$ dicerminkan terhadap garis $y = 4$. Koordinat bayangan titik $G$ adalah...",
      "opsi": ["$(3,9)$", "$(3,7)$", "$(3,-7)$", "$(-3,7)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus refleksi terhadap garis $y = k$: $(x, y) \\to (x,\\, 2k - y)$.<br>Substitusi $k = 4$, $y = 1$: $x' = 3$, $y' = 2(4) - 1 = 7$.<br>Bayangan: $G'(3, 7)$."
    },
    {
      "id": "s-B3",
      "materi": "Dilatasi Pusat $P(a,b)$",
      "soal": "Titik $L(4, 6)$ didilatasi dengan pusat $P(2, 3)$ dan faktor skala $k = 2$. Koordinat bayangannya adalah...",
      "opsi": ["$(8,12)$", "$(6,9)$", "$(2,3)$", "$(4,6)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus dilatasi terhadap pusat $P(a, b)$: $x' = a + k(x-a)$, $y' = b + k(y-b)$.<br>Substitusi $P(2,3)$, $k = 2$:<br>$x' = 2 + 2(4-2) = 6$<br>$y' = 3 + 2(6-3) = 9$<br>Bayangan: $L'(6, 9)$."
    },
    {
      "id": "s-B4",
      "materi": "Rotasi Pusat $O(0,0)$",
      "soal": "Titik $H(4, -1)$ dirotasikan sebesar $270°$ berlawanan arah jarum jam terhadap $O(0,0)$. Koordinat bayangannya adalah...",
      "opsi": ["$(4,-1)$", "$(-1,-4)$", "$(1,4)$", "$(-4,1)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus rotasi $270°$ berlawanan jarum jam $(x, y) \\to (y, -x)$.<br>Substitusi: $(4, -1) \\to (-1, -4) = H'(-1, -4)$."
    },
    {
      "id": "s-B5",
      "materi": "Refleksi Garis $y = -x$",
      "soal": "Titik $I(6, 2)$ dicerminkan terhadap garis $y = -x$. Koordinat bayangannya adalah...",
      "opsi": ["$(6,-2)$", "$(-2,-6)$", "$(2,6)$", "$(-6,2)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus refleksi terhadap garis $y = -x$: $(x, y) \\to (-y, -x)$.<br>Substitusi: $(6, 2) \\to (-2, -6) = I'(-2, -6)$."
    },
    {
      "id": "s-B6",
      "materi": "Rotasi Pusat $O(0,0)$",
      "soal": "Titik $J(-2, 3)$ dirotasikan sebesar $180°$ terhadap $O(0,0)$. Koordinat bayangannya adalah...",
      "opsi": ["$(3,-2)$", "$(2,-3)$", "$(-3,2)$", "$(-2,3)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus rotasi $180°$ terhadap $O(0,0)$: $(x, y) \\to (-x, -y)$.<br>Substitusi: $(-2, 3) \\to (2, -3) = J'(2, -3)$."
    },
    {
      "id": "s-B7",
      "materi": "Refleksi Garis $x = k$",
      "soal": "Titik $K(7, 3)$ dicerminkan terhadap garis $x = 2$. Koordinat bayangan titik $K$ adalah...",
      "opsi": ["$(5,3)$", "$(-3,3)$", "$(9,3)$", "$(3,-3)$"],
      "jawabanIndex": 1,
      "pembahasan": "Rumus refleksi terhadap garis $x = k$: $(x, y) \\to (2k - x,\\, y)$.<br>Substitusi $k = 2$, $x = 7$: $x' = 2(2) - 7 = -3$, $y' = 3$.<br>Bayangan: $K'(-3, 3)$."
    },
    // ===== JAWABAN C (7 soal) =====
    {
      "id": "s-C1",
      "materi": "Dilatasi Pusat $P(a,b)$",
      "soal": "Titik $O(6, 4)$ didilatasi dengan pusat $P(2, 2)$ dan faktor skala $k = 3$. Koordinat bayangannya adalah...",
      "opsi": ["$(18,12)$", "$(8,6)$", "$(14,8)$", "$(4,2)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus dilatasi terhadap pusat $P(a, b)$: $x' = a + k(x-a)$, $y' = b + k(y-b)$.<br>Substitusi $P(2,2)$, $k = 3$:<br>$x' = 2 + 3(6-2) = 14$<br>$y' = 2 + 3(4-2) = 8$<br>Bayangan: $O'(14, 8)$."
    },
    {
      "id": "s-C2",
      "materi": "Refleksi Garis $y = k$",
      "soal": "Titik $P(5, -1)$ dicerminkan terhadap garis $y = 3$. Koordinat bayangan titik $P$ adalah...",
      "opsi": ["$(5,5)$", "$(5,-7)$", "$(5,7)$", "$(5,1)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus refleksi terhadap garis $y = k$: $(x, y) \\to (x,\\, 2k - y)$.<br>Substitusi $k = 3$, $y = -1$: $x' = 5$, $y' = 2(3) - (-1) = 7$.<br>Bayangan: $P'(5, 7)$."
    },
    {
      "id": "s-C3",
      "materi": "Refleksi Garis $y = x$",
      "soal": "Titik $Q(8, -3)$ dicerminkan terhadap garis $y = x$. Koordinat bayangannya adalah...",
      "opsi": ["$(8,3)$", "$(-8,3)$", "$(-3,8)$", "$(3,-8)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus refleksi terhadap garis $y = x$: $(x, y) \\to (y, x)$.<br>Substitusi: $(8, -3) \\to (-3, 8) = Q'(-3, 8)$."
    },
    {
      "id": "s-C4",
      "materi": "Rotasi Pusat $O(0,0)$",
      "soal": "Titik $R(5, 0)$ dirotasikan sebesar $90°$ searah jarum jam terhadap $O(0,0)$. Koordinat bayangannya adalah...",
      "opsi": ["$(0,5)$", "$(-5,0)$", "$(0,-5)$", "$(5,0)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus rotasi $90°$ searah jarum jam: $(x, y) \\to (y, -x)$.<br>Substitusi: $(5, 0) \\to (0, -5) = R'(0, -5)$."
    },
    {
      "id": "s-C5",
      "materi": "Dilatasi Pusat $P(a,b)$",
      "soal": "Titik $S(3, 5)$ didilatasi dengan pusat $P(1, 1)$ dan faktor skala $k = 3$. Koordinat bayangannya adalah...",
      "opsi": ["$(9,15)$", "$(4,8)$", "$(7,13)$", "$(5,9)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus dilatasi terhadap pusat $P(a, b)$: $x' = a + k(x-a)$, $y' = b + k(y-b)$.<br>$x' = 1 + 3(3-1) = 7$<br>$y' = 1 + 3(5-1) = 13$<br>Bayangan: $S'(7, 13)$."
    },
    {
      "id": "s-C6",
      "materi": "Refleksi Garis $y = -x$",
      "soal": "Titik $T(-3, -5)$ dicerminkan terhadap garis $y = -x$. Koordinat bayangannya adalah...",
      "opsi": ["$(-5,-3)$", "$(3,5)$", "$(5,3)$", "$(-3,-5)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus refleksi terhadap garis $y = -x$: $(x, y) \\to (-y, -x)$.<br>Substitusi: $(-3, -5) \\to (5, 3) = T'(5, 3)$."
    },
    {
      "id": "s-C7",
      "materi": "Rotasi Pusat $O(0,0)$",
      "soal": "Titik $U(0, -4)$ dirotasikan sebesar $90°$ berlawanan arah jarum jam terhadap $O(0,0)$. Koordinat bayangannya adalah...",
      "opsi": ["$(-4,0)$", "$(0,4)$", "$(4,0)$", "$(0,-4)$"],
      "jawabanIndex": 2,
      "pembahasan": "Rumus rotasi $90°$ berlawanan jarum jam: $(x, y) \\to (-y, x)$.<br>Substitusi: $(0, -4) \\to (4, 0) = U'(4, 0)$."
    },
    // ===== JAWABAN D (9 soal) =====
    {
      "id": "s-D1",
      "materi": "Dilatasi Pusat $P(a,b)$",
      "soal": "Titik $V(2, 4)$ didilatasi dengan pusat $P(2, 4)$ dan faktor skala $k = 5$. Koordinat bayangannya adalah...",
      "opsi": ["$(10,20)$", "$(12,24)$", "$(0,0)$", "$(2,4)$"],
      "jawabanIndex": 3,
      "pembahasan": "Jika pusat dilatasi sama dengan titik yang didilatasi, maka bayangannya tetap di titik itu sendiri.<br>$x' = 2 + 5(2-2) = 2$<br>$y' = 4 + 5(4-4) = 4$<br>Bayangan: $V'(2, 4)$."
    },
    {
      "id": "s-D2",
      "materi": "Refleksi Garis $x = k$",
      "soal": "Titik $W(3, 5)$ dicerminkan terhadap garis $x = -1$. Koordinat bayangan titik $W$ adalah...",
      "opsi": ["$(-3,5)$", "$(5,5)$", "$(-3,-5)$", "$(-5,5)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus refleksi terhadap garis $x = k$: $(x, y) \\to (2k - x,\\, y)$.<br>Substitusi $k = -1$, $x = 3$: $x' = 2(-1) - 3 = -5$, $y' = 5$.<br>Bayangan: $W'(-5, 5)$."
    },
    {
      "id": "s-D3",
      "materi": "Rotasi Pusat $P(a,b)$",
      "soal": "Titik $X(4, 3)$ dirotasikan $180°$ terhadap pusat $P(2, 1)$. Koordinat bayangannya adalah...",
      "opsi": ["$(8,4)$", "$(4,2)$", "$(2,1)$", "$(0,-1)$"],
      "jawabanIndex": 3,
      "pembahasan": "Untuk rotasi $180°$ terhadap pusat $P(a,b)$:<br>$x' = 2a - x = 2(2) - 4 = 0$<br>$y' = 2b - y = 2(1) - 3 = -1$<br>Bayangan: $X'(0, -1)$."
    },
    {
      "id": "s-D4",
      "materi": "Refleksi Garis $y = k$",
      "soal": "Titik $Y(2, 8)$ dicerminkan terhadap garis $y = 3$. Koordinat bayangan titik $Y$ adalah...",
      "opsi": ["$(2,14)$", "$(2,3)$", "$(2,8)$", "$(2,-2)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus refleksi terhadap garis $y = k$: $(x, y) \\to (x,\\, 2k - y)$.<br>Substitusi $k = 3$, $y = 8$: $x' = 2$, $y' = 2(3) - 8 = -2$.<br>Bayangan: $Y'(2, -2)$."
    },
    {
      "id": "s-D5",
      "materi": "Dilatasi Pusat $P(a,b)$",
      "soal": "Titik $Z(5, 3)$ didilatasi dengan pusat $P(3, 1)$ dan faktor skala $k = -1$. Koordinat bayangannya adalah...",
      "opsi": ["$(5,3)$", "$(-5,-3)$", "$(3,1)$", "$(1,-1)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus dilatasi: $x' = a + k(x-a)$, $y' = b + k(y-b)$.<br>$x' = 3 + (-1)(5-3) = 3 - 2 = 1$<br>$y' = 1 + (-1)(3-1) = 1 - 2 = -1$<br>Bayangan: $Z'(1, -1)$."
    },
    {
      "id": "s-D6",
      "materi": "Rotasi Pusat $O(0,0)$",
      "soal": "Titik $A'(3, -2)$ dirotasikan sebesar $90°$ searah jarum jam terhadap $O(0,0)$. Koordinat bayangannya adalah...",
      "opsi": ["$(3,2)$", "$(-3,2)$", "$(2,3)$", "$(-2,-3)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus rotasi $90°$ searah jarum jam: $(x, y) \\to (y, -x)$.<br>Substitusi: $(3, -2) \\to (-2, -3) = A''(-2, -3)$."
    },
    {
      "id": "s-D7",
      "materi": "Refleksi Garis $y = x$",
      "soal": "Titik $B'(0, -6)$ dicerminkan terhadap garis $y = x$. Koordinat bayangannya adalah...",
      "opsi": ["$(0,6)$", "$(6,0)$", "$(0,-6)$", "$(-6,0)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus refleksi terhadap garis $y = x$: $(x, y) \\to (y, x)$.<br>Substitusi: $(0, -6) \\to (-6, 0) = B''(-6, 0)$."
    },
    {
      "id": "s-D8",
      "materi": "Rotasi Pusat $O(0,0)$",
      "soal": "Titik $C'(2, 5)$ dirotasikan $90°$ searah jarum jam terhadap $O(0,0)$. Koordinat bayangannya adalah...",
      "opsi": ["$(-2,-5)$", "$(-5,2)$", "$(-5,-2)$", "$(5,-2)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus rotasi $90°$ searah jarum jam: $(x, y) \\to (y, -x)$.<br>Substitusi: $(2, 5) \\to (5, -2) = C''(5, -2)$."
    },
    {
      "id": "s-D9",
      "materi": "Refleksi Garis $y = -x$",
      "soal": "Titik $D'(4, -7)$ dicerminkan terhadap garis $y = -x$. Koordinat bayangannya adalah...",
      "opsi": ["$(4,7)$", "$(-4,7)$", "$(-7,-4)$", "$(7,-4)$"],
      "jawabanIndex": 3,
      "pembahasan": "Rumus refleksi terhadap garis $y = -x$: $(x, y) \\to (-y, -x)$.<br>Substitusi: $(4, -7) \\to (7, -4) = D''(7, -4)$."
    }
  ],
  "sulit": [
    // ===== JAWABAN A (5 soal) =====
    {
      "id": "t-A1",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $P(1, 2)$ ditranslasikan oleh $T = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$ kemudian dilanjutkan refleksi terhadap sumbu-$x$. Bayangan akhir titik $P$ adalah...",
      "opsi": ["$(4,-4)$", "$(4,4)$", "$(-4,4)$", "$(-4,-4)$"],
      "jawabanIndex": 0,
      "pembahasan": "<b>Tahap 1 — Translasi:</b> $P(1,2) \\to P'(1+3,\\ 2+2) = P'(4, 4)$<br><b>Tahap 2 — Refleksi sumbu-$x$</b> $(x,y)\\to(x,-y)$:<br>$P'(4, 4) \\to P''(4, -4)$"
    },
    {
      "id": "t-A2",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $Q(2, -1)$ dicerminkan terhadap sumbu-$y$, kemudian dirotasikan $90°$ berlawanan arah jarum jam terhadap pusat $O(0,0)$. Bayangan akhir titik $Q$ adalah...",
      "opsi": ["$(1,-2)$", "$(-1,-2)$", "$(2,1)$", "$(-2,1)$"],
      "jawabanIndex": 0,
      "pembahasan": "<b>Tahap 1 — Refleksi sumbu-$y$</b> $(x,y)\\to(-x,y)$: $Q(2,-1)\\to Q'(-2,-1)$<br><b>Tahap 2 — Rotasi $+90°$</b> $(x,y)\\to(-y,x)$: $Q'(-2,-1)\\to Q''(1,-2)$"
    },
    {
      "id": "t-A3",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $R(3, 4)$ didilatasi dengan faktor skala $k = 2$ terhadap pusat $O(0,0)$, kemudian dicerminkan terhadap garis $y = -x$. Bayangan akhir titik $R$ adalah...",
      "opsi": ["$(-8,-6)$", "$(-6,-8)$", "$(8,6)$", "$(-8,6)$"],
      "jawabanIndex": 0,
      "pembahasan": "<b>Tahap 1 — Dilatasi</b> $k=2$: $R(3,4)\\to R'(6,8)$<br><b>Tahap 2 — Refleksi garis $y=-x$</b> $(x,y)\\to(-y,-x)$: $R'(6,8)\\to R''(-8,-6)$"
    },
    {
      "id": "t-A4",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $S(2, 3)$ dirotasikan $180°$ terhadap pusat $O(0,0)$, kemudian ditranslasikan oleh vektor $T = \\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$. Bayangan akhir titik $S$ adalah...",
      "opsi": ["$(2,-4)$", "$(-2,4)$", "$(6,2)$", "$(2,-2)$"],
      "jawabanIndex": 0,
      "pembahasan": "<b>Tahap 1 — Rotasi $180°$</b> $(x,y)\\to(-x,-y)$: $S(2,3)\\to S'(-2,-3)$<br><b>Tahap 2 — Translasi</b>: $S'(-2,-3)\\to S''(-2+4,\\ -3-1)=S''(2,-4)$"
    },
    {
      "id": "t-A5",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $T(-1, 2)$ dicerminkan terhadap garis $y = x$, kemudian didilatasi dengan faktor skala $k = 2$ terhadap pusat $O(0,0)$. Bayangan akhir titik $T$ adalah...",
      "opsi": ["$(4,-2)$", "$(-2,4)$", "$(2,-4)$", "$(-4,2)$"],
      "jawabanIndex": 0,
      "pembahasan": "<b>Tahap 1 — Refleksi garis $y=x$</b> $(x,y)\\to(y,x)$: $T(-1,2)\\to T'(2,-1)$<br><b>Tahap 2 — Dilatasi</b> $k=2$: $T'(2,-1)\\to T''(4,-2)$"
    },
    // ===== JAWABAN B (5 soal) =====
    {
      "id": "t-B1",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $U(3, 1)$ dirotasikan $90°$ berlawanan arah jarum jam terhadap $O(0,0)$, kemudian ditranslasikan oleh $T = \\begin{pmatrix} 2 \\\\ -2 \\end{pmatrix}$. Bayangan akhir adalah...",
      "opsi": ["$(-1,3)$", "$(1,1)$", "$(1,-2)$", "$(-1,-2)$"],
      "jawabanIndex": 1,
      "pembahasan": "<b>Tahap 1 — Rotasi $+90°$</b> $(x,y)\\to(-y,x)$: $U(3,1)\\to U'(-1,3)$<br><b>Tahap 2 — Translasi</b>: $U'(-1,3)\\to U''(-1+2,\\ 3-2)=U''(1,1)$"
    },
    {
      "id": "t-B2",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $X(4, 0)$ dirotasikan $90°$ searah jarum jam terhadap $O(0,0)$, kemudian dicerminkan terhadap garis $y = x$. Bayangan akhirnya adalah...",
      "opsi": ["$(0,-4)$", "$(-4,0)$", "$(4,0)$", "$(0,4)$"],
      "jawabanIndex": 1,
      "pembahasan": "<b>Tahap 1 — Rotasi $-90°$</b> $(x,y)\\to(y,-x)$: $X(4,0)\\to X'(0,-4)$<br><b>Tahap 2 — Refleksi $y=x$</b> $(x,y)\\to(y,x)$: $X'(0,-4)\\to X''(-4,0)$"
    },
    {
      "id": "t-B3",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $A(5, 1)$ ditranslasikan oleh $T = \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$, kemudian dicerminkan terhadap garis $y = x$. Bayangan akhirnya adalah...",
      "opsi": ["$(3,4)$", "$(4,3)$", "$(-4,3)$", "$(3,-4)$"],
      "jawabanIndex": 1,
      "pembahasan": "<b>Tahap 1 — Translasi</b>: $A(5,1)\\to A'(5-2,\\ 1+3)=A'(3,4)$<br><b>Tahap 2 — Refleksi $y=x$</b> $(x,y)\\to(y,x)$: $A'(3,4)\\to A''(4,3)$"
    },
    {
      "id": "t-B4",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $B(-2, 4)$ dicerminkan terhadap sumbu-$x$, kemudian ditranslasikan oleh $T = \\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix}$. Bayangan akhirnya adalah...",
      "opsi": ["$(3,-4)$", "$(3,-3)$", "$(-2,-3)$", "$(5,-3)$"],
      "jawabanIndex": 1,
      "pembahasan": "<b>Tahap 1 — Refleksi sumbu-$x$</b> $(x,y)\\to(x,-y)$: $B(-2,4)\\to B'(-2,-4)$<br><b>Tahap 2 — Translasi</b>: $B'(-2,-4)\\to B''(-2+5,\\ -4+1)=B''(3,-3)$"
    },
    {
      "id": "t-B5",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $C(0, 3)$ didilatasi dengan $k=3$ terhadap $O(0,0)$, kemudian dirotasikan $90°$ searah jarum jam terhadap $O(0,0)$. Bayangan akhirnya adalah...",
      "opsi": ["$(-9,0)$", "$(9,0)$", "$(0,9)$", "$(0,-9)$"],
      "jawabanIndex": 1,
      "pembahasan": "<b>Tahap 1 — Dilatasi</b> $k=3$: $C(0,3)\\to C'(0,9)$<br><b>Tahap 2 — Rotasi $90°$ CW</b> $(x,y)\\to(y,-x)$: $C'(0,9)\\to C''(9,0)$"
    },
    // ===== JAWABAN C (3 soal) =====
    {
      "id": "t-C1",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $V(0, 4)$ dicerminkan terhadap sumbu-$x$, kemudian dirotasikan $90°$ berlawanan arah jarum jam terhadap $O(0,0)$. Bayangan akhirnya adalah...",
      "opsi": ["$(0,4)$", "$(-4,0)$", "$(4,0)$", "$(0,-4)$"],
      "jawabanIndex": 2,
      "pembahasan": "<b>Tahap 1 — Refleksi sumbu-$x$</b> $(x,y)\\to(x,-y)$: $V(0,4)\\to V'(0,-4)$<br><b>Tahap 2 — Rotasi $+90°$</b> $(x,y)\\to(-y,x)$: $V'(0,-4)\\to V''(4,0)$"
    },
    {
      "id": "t-C2",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $Z(3, -2)$ dicerminkan terhadap garis $y = -x$, kemudian dirotasikan $180°$ terhadap $O(0,0)$. Bayangan akhirnya adalah...",
      "opsi": ["$(2,-3)$", "$(-2,-3)$", "$(-2,3)$", "$(2,3)$"],
      "jawabanIndex": 2,
      "pembahasan": "<b>Tahap 1 — Refleksi garis $y=-x$</b> $(x,y)\\to(-y,-x)$: $Z(3,-2)\\to Z'(2,-3)$<br><b>Tahap 2 — Rotasi $180°$</b> $(x,y)\\to(-x,-y)$: $Z'(2,-3)\\to Z''(-2,3)$"
    },
    {
      "id": "t-C3",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $D(6, 2)$ didilatasi dengan $k = \\frac{1}{2}$ terhadap $O(0,0)$, kemudian dicerminkan terhadap sumbu-$y$. Bayangan akhirnya adalah...",
      "opsi": ["$(3,1)$", "$(-3,-1)$", "$(-3,1)$", "$(3,-1)$"],
      "jawabanIndex": 2,
      "pembahasan": "<b>Tahap 1 — Dilatasi</b> $k=\\frac{1}{2}$: $D(6,2)\\to D'(3,1)$<br><b>Tahap 2 — Refleksi sumbu-$y$</b> $(x,y)\\to(-x,y)$: $D'(3,1)\\to D''(-3,1)$"
    },
    // ===== JAWABAN D (7 soal) =====
    {
      "id": "t-D1",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $W(2, 3)$ didilatasi dengan $k=2$ terhadap pusat $P(1,1)$, kemudian dicerminkan terhadap sumbu-$y$. Bayangan akhirnya adalah...",
      "opsi": ["$(3,5)$", "$(-3,-5)$", "$(3,-5)$", "$(-3,5)$"],
      "jawabanIndex": 3,
      "pembahasan": "<b>Tahap 1 — Dilatasi pusat $P(1,1)$, $k=2$</b>: $x'=1+2(2-1)=3$, $y'=1+2(3-1)=5 \\to W'(3,5)$<br><b>Tahap 2 — Refleksi sumbu-$y$</b> $(x,y)\\to(-x,y)$: $W'(3,5)\\to W''(-3,5)$"
    },
    {
      "id": "t-D2",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $Y(5, 2)$ ditranslasikan oleh $T = \\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix}$, kemudian dicerminkan terhadap sumbu-$y$. Bayangan akhirnya adalah...",
      "opsi": ["$(2,6)$", "$(-2,-6)$", "$(2,-6)$", "$(-2,6)$"],
      "jawabanIndex": 3,
      "pembahasan": "<b>Tahap 1 — Translasi</b>: $Y(5,2)\\to Y'(5-3,\\ 2+4)=Y'(2,6)$<br><b>Tahap 2 — Refleksi sumbu-$y$</b> $(x,y)\\to(-x,y)$: $Y'(2,6)\\to Y''(-2,6)$"
    },
    {
      "id": "t-D3",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $A(1, -3)$ didilatasi dengan $k = 3$ terhadap $O(0,0)$, kemudian ditranslasikan oleh $T = \\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}$. Bayangan akhirnya adalah...",
      "opsi": ["$(-1,4)$", "$(1,4)$", "$(-1,-4)$", "$(1,-4)$"],
      "jawabanIndex": 3,
      "pembahasan": "<b>Tahap 1 — Dilatasi</b> $k=3$: $A(1,-3)\\to A'(3,-9)$<br><b>Tahap 2 — Translasi</b>: $A'(3,-9)\\to A''(3-2,\\ -9+5)=A''(1,-4)$"
    },
    {
      "id": "t-D4",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $E(2, 5)$ dicerminkan terhadap garis $y=x$, kemudian dirotasikan $180°$ terhadap $O(0,0)$. Bayangan akhirnya adalah...",
      "opsi": ["$(5,2)$", "$(-2,-5)$", "$(2,5)$", "$(-5,-2)$"],
      "jawabanIndex": 3,
      "pembahasan": "<b>Tahap 1 — Refleksi $y=x$</b> $(x,y)\\to(y,x)$: $E(2,5)\\to E'(5,2)$<br><b>Tahap 2 — Rotasi $180°$</b> $(x,y)\\to(-x,-y)$: $E'(5,2)\\to E''(-5,-2)$"
    },
    {
      "id": "t-D5",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $F(-1, 3)$ ditranslasikan oleh $T = \\begin{pmatrix} 4 \\\\ -2 \\end{pmatrix}$, kemudian didilatasi dengan $k=2$ terhadap $O(0,0)$. Bayangan akhirnya adalah...",
      "opsi": ["$(-2,2)$", "$(-6,2)$", "$(3,1)$", "$(6,2)$"],
      "jawabanIndex": 3,
      "pembahasan": "<b>Tahap 1 — Translasi</b>: $F(-1,3)\\to F'(-1+4,\\ 3-2)=F'(3,1)$<br><b>Tahap 2 — Dilatasi</b> $k=2$: $F'(3,1)\\to F''(6,2)$."
    },
    {
      "id": "t-D6",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $G(4, 1)$ dirotasikan $90°$ berlawanan jarum jam terhadap $O(0,0)$, kemudian dicerminkan terhadap sumbu-$x$. Bayangan akhirnya adalah...",
      "opsi": ["$(1,4)$", "$(-1,4)$", "$(-4,1)$", "$(-1,-4)$"],
      "jawabanIndex": 3,
      "pembahasan": "<b>Tahap 1 — Rotasi $+90°$</b> $(x,y)\\to(-y,x)$: $G(4,1)\\to G'(-1,4)$<br><b>Tahap 2 — Refleksi sumbu-$x$</b> $(x,y)\\to(x,-y)$: $G'(-1,4)\\to G''(-1,-4)$"
    },
    {
      "id": "t-D7",
      "materi": "Komposisi Transformasi",
      "soal": "Titik $H(3, 5)$ dicerminkan terhadap sumbu-$y$, kemudian didilatasi dengan $k=2$ terhadap $O(0,0)$. Bayangan akhirnya adalah...",
      "opsi": ["$(3,5)$", "$(-3,5)$", "$(6,10)$", "$(-6,10)$"],
      "jawabanIndex": 3,
      "pembahasan": "<b>Tahap 1 — Refleksi sumbu-$y$</b> $(x,y)\\to(-x,y)$: $H(3,5)\\to H'(-3,5)$<br><b>Tahap 2 — Dilatasi</b> $k=2$: $H'(-3,5)\\to H''(-6,10)$"
    }
  ]
};
