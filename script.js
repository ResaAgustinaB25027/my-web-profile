// Seleksi elemen DOM menggunakan getElementById dan querySelector
const themeToggleBtn = document.getElementById("theme-toggle");
const contactForm = document.querySelector("#contact-form");
const visitorInput = document.getElementById("visitor-name");
const greetingOutput = document.querySelector("#greeting-output");

// Fitur 1: Toggle Mode Gelap / Terang
themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.textContent = "Mode Terang";
    } else {
        themeToggleBtn.textContent = "Mode Gelap";
    }
});

// Fitur 2: Interaksi Form Sapaan Pengunjung
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = visitorInput.value.trim();
    if (nama !== "") {
        greetingOutput.textContent = "Halo, " + nama + "! Terima kasih sudah mengunjungi profil saya.";
        visitorInput.value = "";
    }
});
