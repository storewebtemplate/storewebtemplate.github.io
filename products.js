document.addEventListener('DOMContentLoaded', function() {
    // Simulación de la aplicación de filtros
    const applyFiltersButton = document.querySelector('.apply-filters');
    if (applyFiltersButton) {
        applyFiltersButton.addEventListener('click', function() {
            alert('Filtros aplicados (simulación)');
        });
    }

    // Simulación del ordenamiento de productos
    const sortSelect = document.getElementById('sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            alert('Productos ordenados por: ' + this.value + ' (simulación)');
        });
    }

    // Simulación de la carga diferida (lazy loading)
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        const products = productGrid.querySelectorAll('.product-card');
        let visibleProducts = 6; // Mostrar los primeros 6 productos

        // Ocultar productos iniciales
        for (let i = visibleProducts; i < products.length; i++) {
            products[i].style.display = 'none';
        }

        // Función para mostrar más productos
        function showMoreProducts() {
            for (let i = visibleProducts; i < Math.min(visibleProducts + 3, products.length); i++) {
                products[i].style.display = 'block';
            }
            visibleProducts = Math.min(visibleProducts + 3, products.length);

            // Ocultar el botón si ya se mostraron todos los productos
            if (visibleProducts === products.length) {
                loadMoreButton.style.display = 'none';
            }
        }

        // Crear botón "Cargar más"
        const loadMoreButton = document.createElement('button');
        loadMoreButton.textContent = 'Cargar más productos';
        loadMoreButton.classList.add('load-more');
        loadMoreButton.addEventListener('click', showMoreProducts);

        // Agregar botón al final del listado de productos
        productGrid.parentNode.appendChild(loadMoreButton);

        // Estilos para el botón "Cargar más"
        loadMoreButton.style.display = products.length > visibleProducts ? 'block' : 'none';
        loadMoreButton.style.backgroundColor = '#5cb85c';
        loadMoreButton.style.color = '#fff';
        loadMoreButton.style.border = 'none';
        loadMoreButton.style.borderRadius = '30px';
        loadMoreButton.style.padding = '10px 20px';
        loadMoreButton.style.cursor = 'pointer';
        loadMoreButton.style.transition = 'background 0.3s';
        loadMoreButton.style.marginTop = '20px';
        loadMoreButton.style.marginLeft = 'auto';
        loadMoreButton.style.marginRight = 'auto';
        loadMoreButton.style.display = 'block';

        loadMoreButton.addEventListener('mouseover', function() {
            loadMoreButton.style.backgroundColor = '#4aa64a';
        });

        loadMoreButton.addEventListener('mouseout', function() {
            loadMoreButton.style.backgroundColor = '#5cb85c';
        });
    }

    // Funcionalidad: Mostrar/ocultar menú en dispositivos móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');

    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', function() {
            if (navContainer.style.display === 'flex') {
                navContainer.style.display = 'none';
            } else {
                navContainer.style.display = 'flex';
            }
        });
    }
	
	
	
  const filterToggle = document.querySelector('.filter-toggle');
  const filters = document.querySelector('.filters');

  filterToggle.addEventListener('click', function() {
    if (filters.style.display === 'block') {
      filters.style.display = 'none';
    } else {
      filters.style.display = 'block';
    }
  });
  
  
  
  const userToggle = document.querySelector('.user-toggle');
  const userLinks = document.querySelector('.user-links');

  userToggle.addEventListener('click', function() {
    if (userLinks.style.display === 'block') {
      userLinks.style.display = 'none';
    } else {
      userLinks.style.display = 'block';
    }
  });
});
