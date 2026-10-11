// 1. Hide loader setelah halaman selesai dimuat (delay 1.3 detik)
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 1300);
});

// 2. Fungsionalitas Tab
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Hapus kelas 'active' dari semua tab dan konten
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));
    
    // Tambahkan kelas 'active' ke tab yang diklik dan konten yang sesuai
    tab.classList.add("active");
    const targetContent = document.getElementById(tab.dataset.tab);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});

// 3. Highlight menu navigasi saat melakukan scroll
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".topbar nav a");

window.addEventListener("scroll", () => {
  let currentSection = "home";
  
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 250) {
      currentSection = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + currentSection);
  });
});

// 4. Update tahun otomatis pada elemen footer
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 5. Fungsi Simulasi Pengiriman Pesan
function sendMessage(event) {
  event.preventDefault();
  alert("Pesan siap dikirim. Ganti fungsi ini dengan Formspree, EmailJS, atau backend milikmu.");
  return false;
}

// 6. Toggle Menu Navigasi Mobile (Hamburger Menu)
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");
    menuBtn.textContent = navbar.classList.contains("show") ? "✕" : "☰";
  });

  // Tutup menu otomatis saat salah satu link diklik (opsional untuk mobile view)
  document.querySelectorAll("#navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("show");
      menuBtn.textContent = "☰";
    });
  });
}