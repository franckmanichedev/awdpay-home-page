// Simulateur de frais AWD Pay
const amountInput = document.getElementById('amount');
const feeResult = document.getElementById('fee-result');

function calculateFee(amount) {
  // Exemple : 2% de frais, minimum 200 XAF
  const fee = Math.max(Math.round(amount * 0.02), 200);
  return fee;
}

function updateFee() {
  const amount = parseInt(amountInput.value, 10) || 0;
  const fee = calculateFee(amount);
  feeResult.textContent = `→ ${fee} XAF`;
}

amountInput.addEventListener('input', updateFee);

// Animation bouton demo (micro-interaction)
document.querySelector('.cta-demo').addEventListener('mouseenter', e => {
  e.target.style.boxShadow = '0 0 0 4px #FF7A4555';
});
document.querySelector('.cta-demo').addEventListener('mouseleave', e => {
  e.target.style.boxShadow = '';
});

// Responsive menu
// ...
// Ajout d'animations sur les cards services (inspiration Flutterwave)
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.classList.add('animate__animated', 'animate__fadeInUp');
  card.style.setProperty('animation-delay', `${i * 0.1}s`);
});

// Animation et interaction pour la vision/mission stack
const visionCards = document.querySelectorAll('.vision-card-stack .vision-card');
let activeIndex = 0;

function updateVisionStack(idx) {
  visionCards.forEach((card, i) => {
    card.classList.remove('active');
    card.classList.remove('card-1', 'card-2', 'card-3');
    if (i === idx) card.classList.add('active', 'card-1');
    else if (i === (idx + 1) % 3) card.classList.add('card-2');
    else card.classList.add('card-3');
  });
}

visionCards.forEach((card, i) => {
  card.addEventListener('mouseenter', () => {
    if (i !== activeIndex) {
      activeIndex = i;
      updateVisionStack(activeIndex);
    }
  });
});

updateVisionStack(activeIndex);

// Navbar sticky background on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Animation des cards de la vision/mission
// Effet 3D au survol et animation automatique du stack
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.vision-card');
    
    // Effet 3D au survol
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            if(!card.classList.contains('active')) {
                card.style.transform = 'rotateY(0) rotateX(0)';
            }
        });
    });
    
    // Animation automatique du stack
    let current = 0;
    setInterval(() => {
        cards[current].classList.remove('active');
        current = (current + 1) % cards.length;
        cards[current].classList.add('active');
        
        // Réorganisation du stack
        cards.forEach((card, index) => {
            if(index < current) {
                card.style.transform = `rotateY(10deg) translateX(-${80 - (index * 40)}px)`;
            } else if(index > current) {
                card.style.transform = `rotateY(10deg) translateX(${80 - ((cards.length - 1 - index) * 40)}px)`;
            } else {
                card.style.transform = 'rotateY(0) scale(1.05)';
            }
        });
    }, 5000);
});


// Contact part
document.addEventListener('DOMContentLoaded', function() {
    // Animation des champs au focus
    const inputs = document.querySelectorAll('.form-control, .form-select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('animate__animated', 'animate__pulse');
        });
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('animate__animated', 'animate__pulse');
        });
    });
    
    // Validation en temps réel
    document.querySelector('form').addEventListener('submit', function(e) {
        const email = document.getElementById('email').value;
        if (!email.includes('@')) {
            e.preventDefault();
            alert('Veuillez entrer une adresse email valide');
        }
    });
});

// Animation au scroll
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    const animateOnScroll = () => {
        serviceCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial state for animation
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(35px)';
        card.style.transition = 'opacity 0.5s ease, transform 1.5s ease';
    });
    
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});
