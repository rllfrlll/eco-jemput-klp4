function hitungTabungan() {
  const kategoriInput = document.getElementById("kategori").value;
  const beratInput = document.getElementById("berat").value;
  const promoInput = document.getElementById("promo").value.trim().toUpperCase();
  const hasilDiv = document.getElementById("hasil-perhitungan");

  if (!kategoriInput || !beratInput || beratInput <= 0) {
    hasilDiv.innerHTML = `
      <div style="color: #B91C1C; font-size: 0.95rem; font-weight: 500;">
        Informasi tidak lengkap. Harap pilih kategori dan isi berat sampah.
      </div>`;
    hasilDiv.classList.add("show");
    return;
  }

  const hargaPerKg = parseInt(kategoriInput);
  const berat = parseFloat(beratInput);
  
  let tabunganAwal = hargaPerKg * berat;
  let bonusPromo = 0;
  let rowPromo = "";

  // Logika persentase 10% untuk promo PILAHCUAN
  if (promoInput === "PILAHCUAN") {
    bonusPromo = tabunganAwal * 0.10; // Menghitung 10% dari tabungan awal
    rowPromo = `
      <div class="hasil-row">
        <span>Promo PILAHCUAN (10%)</span>
        <span style="color: #15803D; font-weight: 500;">+ Rp${bonusPromo.toLocaleString('id-ID')}</span>
      </div>`;
  } else if (promoInput !== "") {
    rowPromo = `
      <div class="hasil-row">
        <span>Promo Tidak Valid</span>
        <span>Rp0</span>
      </div>`;
  }

  const totalTabungan = tabunganAwal + bonusPromo;

  // Menampilkan rincian akhir
  hasilDiv.innerHTML = `
    <div class="hasil-row">
      <span>Nilai Konversi (${berat} Kg)</span>
      <span>Rp${tabunganAwal.toLocaleString('id-ID')}</span>
    </div>
    ${rowPromo}
    <div class="hasil-divider"></div>
    <div class="hasil-total">
      <span>Total Tabungan</span>
      <span>Rp${totalTabungan.toLocaleString('id-ID')}</span>
    </div>
  `;
  
  hasilDiv.classList.remove("show");
  void hasilDiv.offsetWidth; 
  hasilDiv.classList.add("show");
}