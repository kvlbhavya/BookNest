// Array to store selected books
let selectedBooks = [];

// Function to add a book to the cart
function addToCart(bookName, price) {
  selectedBooks.push({ name: bookName, price: price });
  updateCartDisplay();
}

// Function to add selected books to the cart
function addToCartFromCheckbox(checkboxId, bookName, price) {
  const checkbox = document.getElementById(checkboxId);
  if (checkbox.checked) {
    addToCart(bookName, price);
  }
}

// Function to update cart display
function updateCartDisplay() {
  const selectedBooksContainer = document.querySelector('.selected-books');
  selectedBooksContainer.innerHTML = '';
  selectedBooks.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.textContent = `${book.name} - Rs. ${book.price}`;
    selectedBooksContainer.appendChild(bookItem);
  });
  calculateTotal(); // Recalculate total whenever the cart is updated
}

// Function to place an order
function placeOrder() {
  if (selectedBooks.length === 0) {
    alert("Your cart is empty. Please select books to place an order.");
  } else {
    alert("Thank you for successfully placing the order! Please make the payment at the library and collect the books.");
  }
}

// Function to calculate total price and display it
function calculateTotal() {
  const totalPriceDisplay = document.querySelector('.total-price');
  const totalPrice = selectedBooks.reduce((total, book) => total + parseInt(book.price), 0);
  totalPriceDisplay.textContent = `Total Price: Rs. ${totalPrice}`;

  // Add a button to place the order
  totalPriceDisplay.innerHTML += "<br>";
  const placeOrderButton = document.createElement('button');
  placeOrderButton.textContent = "Place Order";
  placeOrderButton.addEventListener('click', placeOrder);
  totalPriceDisplay.appendChild(placeOrderButton);
}


function promptSignIn() {
  const email = prompt("Please sign in with your college email ID:");
  if (email) {
    document.querySelector('.sign-in').innerHTML = `<span>Welcome, ${email.split('@')[0]}</span>`;
  }
}


function initializeBooks() {
  // Add event listeners for each checkbox to add selected books to the cart
  document.getElementById('data-structures-book1-checkbox').addEventListener('change', function() {
    addToCartFromCheckbox('data-structures-book1-checkbox', 'Data Structures and Algorithms in Java', 750);
  });
  document.getElementById('data-structures-book2-checkbox').addEventListener('change', function() {
    addToCartFromCheckbox('data-structures-book2-checkbox', 'Introduction to Algorithms', 600);
  });
  // Add event listeners for checkboxes in other sections
  document.getElementById('programming-book1-checkbox').addEventListener('change', function() {
    addToCartFromCheckbox('programming-book1-checkbox', 'Java', 850);
  });
  document.getElementById('programming-book2-checkbox').addEventListener('change', function() {
    addToCartFromCheckbox('programming-book2-checkbox', 'Python', 700);
  });
  document.getElementById('web-development-book1-checkbox').addEventListener('change', function() {
    addToCartFromCheckbox('web-development-book1-checkbox', 'HTML', 950);
  });
  document.getElementById('web-development-book2-checkbox').addEventListener('change', function() {
    addToCartFromCheckbox('web-development-book2-checkbox', 'CSS', 600);
  });
  document.getElementById('cyber-security-book1-checkbox').addEventListener('change', function() {
    addToCartFromCheckbox('cyber-security-book1-checkbox', 'Cryptography', 1050);
  });
  document.getElementById('cyber-security-book2-checkbox').addEventListener('change', function() {
    addToCartFromCheckbox('cyber-security-book2-checkbox', 'Ethical Hacking', 1200);
  });
}

// Function to handle contact form submission
function handleContactFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting in the traditional way
  alert("OK, we will contact you soon!");
}

document.addEventListener('DOMContentLoaded', function() {
  initializeBooks();
  

  document.getElementById('contactForm').addEventListener('submit', handleContactFormSubmit);
});
