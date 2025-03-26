function toggleMenu() {
        document.getElementById("mobileMenu").classList.toggle("show");
    }

function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery');
    const scrollAmount = 300; // Wieviel Pixel gescrollt wird
    

    gallery.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });

     
}
