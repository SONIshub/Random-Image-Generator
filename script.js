document.addEventListener('DOMContentLoaded', () => {
    const images = [
        './img1.jpg',
        './img2.jpg',
        './img3.jpg',
        './img4.jpg',
        './img5.jpg',
        './img6.jpg',
        './img7.jpg',
        './img8.jpg',
        './img9.jpg',
        './img10.jpg'
    ];

    const randomImage = document.getElementById('randomImage');
    const generateButton = document.getElementById('generateButton');

    function generateRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        randomImage.src = images[randomIndex];
    }

    generateButton.addEventListener('click', generateRandomImage);

    // Generate an initial random image on page load
    generateRandomImage();
});
