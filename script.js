// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Fermer le menu mobile en cliquant sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Changement de header au scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Filtrage du menu
const categoryButtons = document.querySelectorAll('.category-btn');
const menuCategories = document.querySelectorAll('.menu-category');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Retirer la classe active de tous les boutons
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    // Ajouter la classe active au bouton cliqué
    button.classList.add('active');
    
    // Masquer toutes les catégories de menu
    menuCategories.forEach(category => {
      category.classList.remove('active');
    });
    
    // Afficher la catégorie correspondante
    const categoryId = button.getAttribute('data-category');
    document.getElementById(categoryId).classList.add('active');
  });
});

// Formulaire de réservation
const reservationForm = document.getElementById('reservation-form');
if (reservationForm) {
  reservationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ici, vous ajouteriez la logique pour envoyer le formulaire
    alert('Merci pour votre réservation ! Nous vous contacterons bientôt pour confirmation.');
    this.reset();
  });
}

// Animation au défilement
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.menu-item, .testimonial, .gallery-item').forEach(el => {
  observer.observe(el);
});