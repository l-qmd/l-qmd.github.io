const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Ajouter la classe active au lien cliqué
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Animation de sortie plus douce
            const main = document.querySelector('main');
            main.style.opacity = '0';
            main.style.transition = 'opacity 1s ease';
            
            // Redirection après l'animation
            setTimeout(() => {
                window.location.href = this.href;
            }, 500); 
        });
    });
});

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:lqmd.contact.qefij@slmails.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`De: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    window.location.href = mailtoLink;
}



document.addEventListener('DOMContentLoaded', () => {
    // Retirer la classe preload après le chargement
    document.body.classList.remove('preload');
    
    const themeToggle = document.getElementById('theme-toggle');
    
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode'); // Modifier html aussi
        document.body.classList.toggle('dark-mode');
        
        if (document.documentElement.classList.contains('dark-mode')) {
            themeToggle.src = 'icons/Sun.png';
        } else {
            themeToggle.src = 'icons/Moon.png';
        }
        
        localStorage.setItem('darkMode', document.documentElement.classList.contains('dark-mode'));
    });
    
    // Vérifier le thème au chargement
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
        themeToggle.src = 'icons/Sun.png';
    }
});