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
  feeResult.textContent = `→ ${fee} XAF de frais`;
}

amountInput.addEventListener('input', updateFee);

// Animation bouton demo (micro-interaction)
document.querySelector('.cta-demo').addEventListener('mouseenter', e => {
  e.target.style.boxShadow = '0 0 0 4px #FF7A4555';
});
document.querySelector('.cta-demo').addEventListener('mouseleave', e => {
  e.target.style.boxShadow = '';
});

// Responsive menu (optionnel, à améliorer si besoin)
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

// Vision/Mission cards interaction (hover/active)
(function() {
  var visionCards = document.querySelectorAll('.vision-card');
  visionCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      visionCards.forEach(function(c) { c.classList.remove('active'); });
      card.classList.add('active');
    });
  });
})();
