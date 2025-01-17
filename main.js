const toggleButton = document.getElementById('toggleButton');
const moreContent = document.getElementById('moreContent');
let isExpanded = false;

toggleButton.addEventListener('click', () => {
  isExpanded = !isExpanded;
  moreContent.classList.toggle('visible');
  toggleButton.textContent = isExpanded ? 'VOIR MOINS' : 'EN SAVOIR PLUS';
});





// Sélectionner tous les éléments à animer
const elements = document.querySelectorAll('.menu-item, .stats-card, .about-content, .menu-header, .menu-section, .contact-section, .container');

// Configuration de l'observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

// Callback pour l'observer
function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Ajouter une classe pour déclencher l'animation
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(50px)';
            
            // Utiliser setTimeout pour créer un délai avant l'animation
            setTimeout(() => {
                entry.target.style.transition = 'all 0.8s ease-out';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            // Arrêter d'observer l'élément une fois animé
            observer.unobserve(entry.target);
        }
    });
}

// Créer l'observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Ajouter les styles CSS initiaux pour les éléments
elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    observer.observe(element);
});

// Animation du hero avec effet croisé
const heroText = document.querySelector('.hero-text');
const heroImage = document.querySelector('.hero-image');

// Configuration initiale du texte (venant de la gauche)
heroText.style.opacity = '0';
heroText.style.transform = 'translateX(-100px)';

// Configuration initiale de l'image (venant de la droite)
heroImage.style.opacity = '0';
heroImage.style.transform = 'translateX(100px)';

// Animer le hero après le chargement de la page
window.addEventListener('load', () => {
    setTimeout(() => {
        // Animation du texte de gauche à droite
        heroText.style.transition = 'all .3s ease-out';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateX(0)';

        // Animation de l'image de droite à gauche
        heroImage.style.transition = 'all .7s ease-out';
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateX(0)';
    }, 500);
});

// Fonction pour animer les éléments au scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('reveal-visible');
        }
    });
}

// Écouter l'événement de scroll
window.addEventListener('scroll', reveal);












/*
const ratio = .1
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function(entries,observer) {
  entries.forEach(function(entry){
    if(entry.intersectionRatio > ratio) {
    entry.target.classList.add('reveal-visible')
      observer.unobserver(entry.target)
    }
   
  })
 
}

const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelector('.reveal')) ;
*/
