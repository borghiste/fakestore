
// uso una funzione di utility che ho importato
let navMenu = document.querySelector('nav');
let mainContainer = document.querySelector('main');

// aggiungo un listener sul menu per attivare il comportamento al click dei pulsanti.
navMenu.addEventListener('click', (e) => {
  // console.log(e)
  if(e.target.tagName == 'BUTTON') {
    console.log(e.target.textContent)
    // se ho cliccato uno dei pulsanti di categoria, chiamo la funzione per ottenere i prodotti passando come argomento il testo del pulsante (ovvero il nome della categoria)
    getProductsByCategory(e.target.textContent);
  }
})

// funzione per recuperare le categorie
function getCategories() {
  fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(categories => createButtons(categories))
    .catch(error => {
      console.log('errore!');
    })
    .finally(
      console.log('promise terminata!')
    )
}

// funzione per recuperare i prodotti della categoria selezionata
function getProductsByCategory(category) {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(response => response.json())
    .then(products => createProducts(products))
}

// funzione per creare i pulsanti per la categoria
function createButtons(categories) {
  categories.forEach(category => {
    let button = document.createElement('button');
    button.textContent = category;
    navMenu.append(button);
  })
}

// funzione per creare i prodotti
function createProducts(products) {
  console.log(products);
  mainContainer.innerHTML = '';
  products.forEach(product => {
    let productContainer = document.createElement('article');
    let articleTitle = document.createElement('h2');
    articleTitle.textContent = product.title;
    let articleDescription = document.createElement('p');
    articleDescription.textContent = product.description;
    let articleImage = document.createElement('img');
    articleImage.src = product.image;

    productContainer.append(articleTitle);
    productContainer.append(articleDescription);
    productContainer.append(articleImage);
    mainContainer.append(productContainer);
  })
}

getCategories();