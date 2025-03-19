export {} //<== ini biar ga bentrok sama variable di file lain, kalo di js ga perlu, tapi di ts perlu, buat contoh soalnya kalo ga diginiin bikin variabel pake nama yg sama 100% error kalo di lingkungan server yg sama


//Typescript penggunaannya sama kek javascript, cuma TS punya tipe data yang lebih ketat, nanti bedanyal liat di file js

//1. bikin console.log
console.log("ini latihan TypeScript");

//2 . Deklarasi variable
let nama: string = "Adis";
let umur: number = 22;
let aktif: boolean = true;

//cara nyetaknya sama kaya di javascript ==> console.log(nama, umur, aktif);

//3. function

//3.a. function tanpa parameter, kalo di ts lebih ketat pake tipe return, kalo di js gausah pake void
function sapa(): void {
    console.log("Selamat datang di TypeScript!");
}

//3.b. function dengan parameter
function tambah(a: number, b: number): number {
    return a + b;
}

//4. array, lebih aman dr js, cuma nerima data sesuai tipe data yang dideklarasikan
let angka: number[] = [1, 2, 3, 4, 5];

//5. class
class Manusia {
    nama: string;
    umur: number;

    constructor(nama: string, umur: number) {
        this.nama = nama;
        this.umur = umur;
    }

    perkenalan(): string {
        return `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
    }
}

//6. class dengan pewarisan ato extends, kudu nentuin tipe data di konstruktor sm metode

class Mahasewa extends Manusia {
    univ: string;

    constructor(nama: string, umur: number, univ: string) {
        super(nama, umur);
        this.univ = univ;
    }

    deskripsi(): string {
        return `${this.perkenalan()} Saya kuliah di ${this.univ}.`;
    }
}

//7. arrow function
const kali = (x: number, y: number): number => x * y;

//8. object & interface, kalo di js object bisa nerima data apa aja, di ts bisa dibatasi pake interface
interface Kendaraan {
    merk: string;
    roda: number;
    jalan(): void;
}

class Mobil implements Kendaraan {
    merk: string;
    roda: number;

    constructor(merk: string, roda: number) {
        this.merk = merk;
        this.roda = roda;
    }

    jalan(): void {
        console.log(`${this.merk} sedang berjalan dengan ${this.roda} roda.`);
    }
}

//9. module (export & import)

///////////////////////////////////////////////////////////////

    //bikin file baru, misalnya module.ts

    // export function Module(a: number, b: number): number {
    //     return a * b;
    // }

///////////////////////////////////////////////////////////////

    //ini di file utama untuk import komponen module.ts tadi, misalnya latihan.ts

    import { Module } from "./module";
    console.log("Hasil dari module:", Module(6, 7)); // => ini ambil dr yang a sm b tadi

///////////////////////////////////////////////////////////////