//coba bandingin, di js lebih enak, tp kalo error pusing karena gabisa nentuin tipe data langsung, tp kalo mau tau tipe datanya bisa pake typeof, coba bedain ubah dikit aja, kalo di ts gampang merah

//1. console log
console.log("Ini latihan JavaScript");


//2. Deklarasi variabel
let nama = "John";
let umur = 25;
let aktif = true;

//3. fungsi

//3. a. fungsi tanpa parameter
function sapa() {
    console.log("Selamat datang di JavaScript!");
}

//3. b. fungsi dengan parameter, bisa disebut props juga
function tambah(a, b) {
    return a + b;
}

//4. array
let angka = [1, 2, 3, 4, 5];

//5. class
class Manusia {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    perkenalan() {
        return `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
    }
}

//6. class pake pewarisan/extends
class Mahasewa extends Manusia {
    constructor(nama, umur, univ) {
        super(nama, umur);
        this.univ = univ;
    }

    deskripsi() {
        return `${this.perkenalan()} Saya bekerja sebagai ${this.univ}.`;
    }
}

//7. Arrow Function
const kali = (x, y) => x * y;

//8. object & interface
const kendaraan = {
    merk: "Toyota Avanza",
    roda: 4,
    jalan() {
        console.log(`${this.merk} sedang berjalan dengan ${this.roda} roda.`);
    }
};

//export import, liat di file ts lengkapnya, males nulis
import { Module } from "./module";
console.log("Hasil dari module:", Module(6, 7));