document.addEventListener('DOMContentLoaded', function() {
  // Funcionalidad: Añadir al carrito
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      alert('Producto añadido al carrito!');
    });
  });
  
  // Slider automático para la sección hero
  const slider = document.querySelector('.hero-slider');
  if (slider) {
    const images = slider.querySelectorAll('img');
    let current = 0;
    images.forEach((img, index) => {
      img.style.display = (index === 0) ? 'block' : 'none';
    });
    function showNextImage() {
      images[current].style.display = 'none';
      current = (current + 1) % images.length;
      images[current].style.display = 'block';
    }
    setInterval(showNextImage, 4000);
  }
  
  // Modal de vista rápida para productos
  const modal = document.getElementById('quickViewModal');
  const modalImg = document.getElementById('modalProductImage');
  const modalTitle = document.getElementById('modalProductTitle');
  const modalDescription = document.getElementById('modalProductDescription');
  const modalRating = document.getElementById('modalProductRating');
  const modalPrice = document.getElementById('modalProductPrice');
  
  const productData = {
    1: {
      title: 'Producto 1',
      description: 'Innovador y de alta calidad con características únicas.',
      rating: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>',
      price: '$19.99',
      img: 'images/product1.jpg'
    },
    2: {
      title: 'Producto 2',
      description: 'Estilo moderno y durabilidad garantizada en cada uso.',
      rating: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i>',
      price: '$29.99',
      img: 'images/product2.jpg'
    },
    3: {
      title: 'Producto 3',
      description: 'Calidad premium, para quienes no se conforman con menos.',
      rating: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
      price: '$39.99',
      img: 'images/product3.jpg'
    }
  };
  
  document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', function() {
      const prodId = button.getAttribute('data-product');
      const data = productData[prodId];
      if (data) { 
        modalImg.src = data.img;
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalRating.innerHTML = data.rating;
        modalPrice.textContent = data.price;
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
      }
    });
  });
  
  document.querySelector('.close-modal').addEventListener('click', function() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  });
  
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
modal.setAttribute('aria-hidden', 'true');
    }
  });
  
  // Funcionalidad del menú en móviles (mostrar/ocultar)
  const menuToggle = document.querySelector('.menu-toggle');
  const navContainer = document.querySelector('.nav-container');
  
  menuToggle.addEventListener('click', function() {
    if (navContainer.style.display === 'flex') {
      navContainer.style.display = 'none';
    } else {
      navContainer.style.display = 'flex';
    }
  });
});
