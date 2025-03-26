function toggleMenu() {
        document.getElementById("mobileMenu").classList.toggle("show");
    }

function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery');
    const scrollAmount = 300; // Wieviel Pixel gescrollt wird
    const images = document.querySelectorAll('.gallery img');
        
    images.forEach(img => {
    let clone = img.cloneNode(true);
    galleryContent.appendChild(clone);
    });    

    gallery.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });

    gallery.style.transform = `translateX(${-scrollAmount}px)`;    
}
