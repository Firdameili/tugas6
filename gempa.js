let tampil = document.getElementById("tampil")
let no = 1

class Gempa {
    constructor(lokasi, skala) {
        this.lokasi = lokasi
        this.skala = skala
    }
    dampakGempa() {
        if (this.skala <= 2 ) {
            this.dampak = "Tidak Terasa";
        }
        else if (this.skala <= 4) {
            this.dampak = "Bangunan Retak - Retak";
        }
        else if (this.skala <= 6) {
            this.dampak = "Bangunan Roboh";
        }else {
            this.dampak = "Bangunan Roboh dan Berpotensi Tsunami";
        }
        return this.dampak;
    }
    infoGempa() {
        tampil.innerHTML += `
        <tr>
            <td>${no++}</td>
            <td>${this.lokasi}</td>
            <td>${this.skala}</td>
            <td>${this.dampakGempa()}</td>
        </tr>
        `;
    }
}
const g1 = new Gempa("Aceh", 5.5);
g1.infoGempa();
const g2 = new Gempa("Palu", 5.3);
g2.infoGempa();
const g3 = new Gempa("Jakarta", 3);
g3.infoGempa();
const g4 = new Gempa("Bali", 4);
g4.infoGempa();
const g5 = new Gempa("NTT", 4);
g5.infoGempa();
const g6 = new Gempa("Lampung", 2);
g6.infoGempa();
const g7 = new Gempa("Lombok", 7,5);
g7.infoGempa();
const g8 = new Gempa("Mamuju", 5);
g8.infoGempa();
const g9 = new Gempa("Malang", 4);
g9.infoGempa();
const g10 = new Gempa("Padang", 2);
g10.infoGempa();