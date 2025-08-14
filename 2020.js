const images = document.querySelectorAll('.gallery img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxMsg = document.getElementById('lightbox-msg');
        const closeBtn = document.getElementById('close');

        images.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
                lightboxMsg.textContent = img.getAttribute('data-msg');
            });
        });
        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });

        // //video background
        // const bgVideo = document.getElementById("bg-video");

        // // Wait for user interaction to play with sound
        // document.body.addEventListener("click", () => {
        //     bgVideo.play().catch(err => console.log("Autoplay blocked:", err));
        // }, { once: true });