const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");
const homeLink = document.querySelector(".nav-link[href='#']");
const detailMesinLink = document.querySelectorAll(".nav-link")[1];
const workOrderLink = document.querySelectorAll(".nav-link")[2];
const historyPmLink=document.querySelectorAll(".nav-link")[3];
const planPmLink=document.querySelectorAll(".nav-link")[4];
const settingLink=document.querySelectorAll(".nav-link")[5];
const profileLink=document.querySelectorAll(".nav-link")[6];
// Tambahkan event listener untuk menampilkan notifikasi saat diklik
homeLink.addEventListener("click", (event) => {

  event.preventDefault();
  alert("Anda menekan Home!");
});

profileLink.addEventListener("click",(event)=>{
    event.preventDefault();
    alert("Anda menekan profile!");
});

settingLink.addEventListener("click",(event)=>{
    event.preventDefault();
    alert("Anda menekan Setting!");
});

detailMesinLink.addEventListener("click",(event)=>{
  event.preventDefault();
  alert("Anda Menekan Detail Mesin!");
});

workOrderLink.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Anda menekan Work Order!");
});

historyPmLink.addEventListener("click", (event) => {
    /*fetch("{{ url_for('historyPM') }}")
    .then(response => response.text())
    .then(html => {
        document.getElementById("content").innerHTML = html;
    });
  event.preventDefault();
  alert("Anda menekan History PM!");*/
});

planPmLink.addEventListener("click",(event)=>{
  /*event.preventDefault();
  alert("Anda Menekan Plan PM!");*/
});

//workOrderLink.addEventListener("click", (event) => {
//  event.preventDefault();
//  alert("Anda menekan Setting!");
//});

document.addEventListener("DOMContentLoaded", function() {
    const flashMessages = document.querySelector(".flash-messages");
    if (flashMessages) {
        flashMessages.style.display = "block";
        setTimeout(() => {
            flashMessages.style.display = "none";
        }, 2000); // 2 detik
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const logoutLink = document.querySelector(".logout-link");

    if (logoutLink) {
        logoutLink.addEventListener("click", function(event) {
            event.preventDefault();
            const confirmLogout = confirm("Apakah Anda yakin ingin logout?");
            if (confirmLogout) {
                window.location.href = logoutLink.href;
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        const header = accordion.querySelector(".accordion-header");
        const content = accordion.querySelector(".accordion-content");
        const icon = header.querySelector(".icon");

        header.addEventListener("click", function () {
            // Toggle visibility
            const isOpen = content.style.display === "block";
            content.style.display = isOpen ? "none" : "block";

            // Ubah ikon dari + ke -
            icon.textContent = isOpen ? "+" : "-";
        });
    });
});



// Pastikan elemen ditemukan sebelum menambahkan event listener
if (sidebar && sidebarToggler && menuToggler) {
  let collapsedSidebarHeight = "52px"; // Tinggi sidebar collapse (mobile)
  let fullSidebarHeight = "calc(100vh - 32px)"; // Tinggi sidebar penuh

  // Fungsi toggle sidebar collapsed
  sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

  // Fungsi toggle menu dan update tinggi sidebar
  const toggleMenu = (isMenuActive) => {
    sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : collapsedSidebarHeight;
    menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
    alert(`Menu ${isMenuActive ? "Opened" : "Closed"}!`); // 🔥 Notifikasi sederhana
  };

  // Event untuk menu toggler
  menuToggler.addEventListener("click", () => {
    toggleMenu(sidebar.classList.toggle("menu-active"));
  });

  // Event untuk menangani perubahan ukuran layar
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      sidebar.style.height = fullSidebarHeight;
    } else {
      sidebar.classList.remove("collapsed");
      sidebar.style.height = "auto";
      toggleMenu(sidebar.classList.contains("menu-active"));
    }
  });
}
