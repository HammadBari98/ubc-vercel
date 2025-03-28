  // Get references to the buttons and divs
  const productsButton = document.getElementById('productsBtn');
  const offersButton = document.getElementById('offersBtn');
  const productsDiv = document.getElementById('products');
  const offersDiv = document.getElementById('offers');

  // Function to show products and hide offers
  function showProducts() {
    productsDiv.style.display = 'flex';
    offersDiv.style.display = 'none';
    productsButton.classList.add('text-[#4E5EA5]', 'border-b-4', 'border-[#4E5EA5]');
    productsButton.classList.remove('text-gray-400');
    offersButton.classList.remove('text-[#4E5EA5]', 'border-b-4', 'border-[#4E5EA5]');
    offersButton.classList.add('text-gray-400');
  }

  // Function to show offers and hide products
  function showOffers() {
    offersDiv.style.display = 'flex';
    productsDiv.style.display = 'none';
    offersButton.classList.add('text-[#4E5EA5]', 'border-b-4', 'border-[#4E5EA5]');
    offersButton.classList.remove('text-gray-400');
    productsButton.classList.remove('text-[#4E5EA5]', 'border-b-4', 'border-[#4E5EA5]');
    productsButton.classList.add('text-gray-400');
  }

  // Add event listeners to the buttons
  productsButton.addEventListener('click', showProducts);
  offersButton.addEventListener('click', showOffers);

  // Initialize the page to show products by default
  showProducts();