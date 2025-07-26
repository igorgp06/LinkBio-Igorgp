document.addEventListener('DOMContentLoaded', () => {
    const starBackgroundContainer = document.getElementById('star-background-container');

    function generateStars() {
        starBackgroundContainer.querySelectorAll('.star').forEach(star => star.remove());

        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            const size = Math.random() * 3 + 1;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const opacity = Math.random() * 0.5 + 0.5;
            const animationDuration = Math.random() * 4 + 2;

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.opacity = opacity;
            star.style.setProperty('--star-animation-duration', `${animationDuration}s`);

            starBackgroundContainer.appendChild(star);
        }
    }

    function generateMeteors() {
        starBackgroundContainer.querySelectorAll('.meteor').forEach(meteor => meteor.remove());

        const numberOfMeteors = 4;

        for (let i = 0; i < numberOfMeteors; i++) {
            const meteor = document.createElement('div');
            meteor.classList.add('meteor');

            const size = Math.random() * 2 + 1;
            const x = Math.random() * 100;
            const y = Math.random() * 20;
            const delay = Math.random() * 15;
            const animationDuration = Math.random() * 3 + 3;

            meteor.style.width = `${size * 35}px`;
            meteor.style.height = `${size * 2}px`;
            meteor.style.left = `${x}%`;
            meteor.style.top = `${y}%`;
            meteor.style.animationDelay = `${delay}s`;
            meteor.style.setProperty('--meteor-animation-duration', `${animationDuration}s`);

            meteor.style.animationDelay = `${delay}s`;
            
            meteor.style.opacity = 0
            
            starBackgroundContainer.appendChild(meteor);
        }
    }

    generateStars();
    generateMeteors();

    window.addEventListener('resize', generateStars);
    window.addEventListener('resize', generateMeteors);
});