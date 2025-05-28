const kurallar = [
    {
        baslik: "Ofsayt",
        resim: "assets/ofsayt.webp",
        aciklama: "Ofsayt, top oynandığında rakip savunma arkasında olan oyuncuya pas atılması durumudur.",
        video: "https://www.youtube.com/embed/GePlbCsGniA?si=Qg4RTCd9vplv51Cx"
    },

    {
        baslik: "Penaltı",
        resim: "assets/penaltı.webp",
        aciklama: "Ceza sahası içinde yapılan faullerde rakip takıma verilen vuruş hakkıdır. Kaleciyle bire bir atılır.",
        video: "https://www.youtube.com/embed/hIl854IHYno?si=MP0dxJJF6mJ-1B01"
    },

    {
        baslik: "Taç Atışı",
        resim: "assets/taç.jpeg",
        aciklama: "Top tamamen yan çizgiden çıktığında, rakip takım oyunu iki elle taç atışıyla tekrar başlatır.",
        video: "https://www.youtube.com/embed/ZUMT8hsC818?si=VqbEV8AKCplwCBbW"
    },

    {
        baslik: "Korner",
        resim: "assets/korner.webp",
        aciklama: "Top savunma yapan takımdan kale çizgisini geçtiğinde hücum yapan takım korner kullanır.",
        video: "https://www.youtube.com/embed/Dx_tnpkJuT4?si=MSLs3DxIxYxmoH1c"
    },

    {
        baslik: "Sarı Kart",
        resim: "assets/sarı_kart.webp",
        aciklama: "Oyuncunun uyarıldığı durumlarda hakem tarafından gösterilir. İki sarı kart kırmızıya dönüşür.",
        video: "https://www.youtube.com/embed/d3Woaa4aEzQ?si=D5UYrrVJjSbjU6M7"
    },

    {
        baslik: "Kırmızı Kart",
        resim: "assets/kırmızı_kart.jpg",
        aciklama: "Ağır faul, hakeme itiraz, sportmenlik dışı davranışlar sonucu gösterilir. Oyuncu oyun dışı kalır.",
        video: "https://www.youtube.com/embed/1DmjHohnRo8?si=m2QDnZfjWUtzinCq"
    },

    {
        baslik: "VAR Sistemi",
        resim: "assets/var_sistemi.jpg",
        aciklama: "Video Hakem Uygulaması; gol, penaltı, kırmızı kart gibi kararlar için yeniden inceleme sağlar.",
        video: "https://www.youtube.com/embed/YkEFkANMaQ8?si=EnDTezhM3rK3GraI"
    }
    
];

function gosterModal(index) {
    const kural = kurallar[index];
    document.getElementById("modalResim").src = kural.resim;
    document.getElementById("modalBaslik").innerText = kural.baslik;
    document.getElementById("modalAciklama").innerText = kural.aciklama;
    document.getElementById("modalVideo").src = kural.video;
    document.getElementById("kuralModal").style.display = "flex";
}

function kapatModal() {
    document.getElementById("kuralModal").style.display = "none";
    document.getElementById("modalVideo").src = "";
}
