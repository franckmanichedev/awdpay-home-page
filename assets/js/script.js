
// Dynamique : simulateur de frais en temps réel
(function() {
  var amountInput = document.getElementById('amount');
  var feeResult = document.getElementById('fee-result');
  if (!amountInput || !feeResult) return;
  function calculateFee(amount) {
    var fee = Math.max(Math.round(amount * 0.02), 200);
    return fee;
  }
  function updateFee() {
    var amount = parseInt(amountInput.value, 10) || 0;
    var fee = calculateFee(amount);
    feeResult.textContent = 'Frais : ' + fee + ' XAF';
  }
  amountInput.addEventListener('input', updateFee);
  updateFee();
})();

// Animation bouton demo (micro-interaction)
document.querySelector('.cta-demo').addEventListener('mouseenter', e => {
  e.target.style.boxShadow = '0 0 0 4px #FF7A4555';
});
document.querySelector('.cta-demo').addEventListener('mouseleave', e => {
  e.target.style.boxShadow = '';
});

// Responsive menu
// ...
// Ajout d'animations sur les cards services
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.classList.add('animate__animated', 'animate__fadeInUp');
  card.style.setProperty('animation-delay', `${i * 0.1}s`);
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

// Validation dynamique du formulaire de contact
(function() {
  var form = document.querySelector('.form-body form');
  if (!form) return;
  var firstName = form.querySelector('#firstName');
  var lastName = form.querySelector('#lastName');
  var email = form.querySelector('#email');
  var phone = form.querySelector('#phone');

  // Création du message d'erreur
  var errorMsg = document.createElement('div');
  errorMsg.className = 'alert alert-danger py-2 px-3 mb-3 animate__animated';
  errorMsg.style.display = 'none';
  errorMsg.setAttribute('role', 'alert');
  form.insertBefore(errorMsg, form.firstChild);

  // Création du message de succès
  var successMsg = document.createElement('div');
  successMsg.className = 'alert alert-success py-2 px-3 mb-3 animate__animated';
  successMsg.style.display = 'none';
  successMsg.setAttribute('role', 'alert');
  form.insertBefore(successMsg, form.firstChild);

  function hideError() {
    errorMsg.style.display = 'none';
    errorMsg.classList.remove('animate__fadeInDown');
  }
  function hideSuccess() {
    successMsg.style.display = 'none';
    successMsg.classList.remove('animate__fadeInDown');
  }

  [firstName, lastName, email, phone].forEach(function(input) {
    input.addEventListener('input', hideError);
  });

  form.addEventListener('submit', function(e) {
    var errors = [];
    if (!firstName.value.trim()) errors.push('Le prénom est requis.');
    if (!lastName.value.trim()) errors.push('Le nom est requis.');
    if (!email.value.trim()) errors.push('L\'email est requis.');
    // Email format simple
    if (email.value && !/^\S+@\S+\.\S+$/.test(email.value)) errors.push('L\'email n\'est pas valide.');
    if (!phone.value.trim()) errors.push('Le numéro de téléphone est requis.');
    if (errors.length > 0) {
      e.preventDefault();
      errorMsg.innerHTML = errors.join('<br>');
      errorMsg.style.display = 'block';
      errorMsg.classList.add('animate__fadeInDown');
      setTimeout(hideError, 5000);
      hideSuccess();
      return false;
    }
    // Succès (mode démo)
    e.preventDefault();
    hideError();
    successMsg.innerHTML = 'Votre message a bien été envoyé. Merci de nous avoir contactés !';
    successMsg.style.display = 'block';
    successMsg.classList.add('animate__fadeInDown');
    setTimeout(hideSuccess, 5000);
    form.reset();
    return false;
  });
})();

// Dynamique : scroll smooth pour les ancres internes
(function() {
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();

// Dynamique : animation des chiffres (fun-facts)
(function() {
  var funFacts = document.querySelectorAll('.single-fun .counter');
  if (!funFacts.length) return;
  function animateCounter(el, to) {
    var start = 0;
    var duration = 1200;
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      el.textContent = Math.floor(progress * to);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = to;
    }
    requestAnimationFrame(step);
  }
  funFacts.forEach(function(el) {
    var to = parseInt(el.getAttribute('data-count'), 10) || 0;
    animateCounter(el, to);
  });
})();

// Dynamique : effet sticky + background navbar au scroll
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Dynamique : vision-card-stack animation (écartement au hover)
(function() {
  var stack = document.querySelector('.vision-card-stack');
  if (!stack) return;
  var cards = stack.querySelectorAll('.vision-card');
  cards.forEach(function(card, idx) {
    card.addEventListener('mouseenter', function() {
      cards.forEach(function(c, i) {
        if (c === card) {
          c.style.transform = 'translateY(-10px) scale(1.04)';
          c.style.zIndex = 10;
        } else if (i < idx) {
          c.style.transform = 'translateX(-60px)';
          c.style.zIndex = 5 - i;
        } else if (i > idx) {
          c.style.transform = 'translateX(60px)';
          c.style.zIndex = 5 - i;
        }
      });
    });
    card.addEventListener('mouseleave', function() {
      cards.forEach(function(c) {
        c.style.transform = '';
        c.style.zIndex = '';
      });
    });
  });
})();
