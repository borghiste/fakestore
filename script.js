/*
  Suggerimenti: 
    - faccio un fetch sull'endpoint per ottenere le categorie
    - creo i pulsanti per ogni categoria
    - inserisco i pulsanti nel DOM
    - creo il listener per i pulsanti
    - ogni pulsante chiama la stessa funzione, ma con parametri diversi
    - questa funzione farà la fetch all'endpoint per ottenere i prodotti della categoria specificata come argomento
    - faccio un ciclo per generare un l'elenco di prodotti nel DOM
    - per ogni prodotto potrei mostrare titolo, descrizione, prezzo e foto
*/




















// dichiaro le variabili globali menu e nav//

let title = document.querySelector(".arrow");
let mainContainer = document.querySelector('main');

let navBar = document.querySelector("nav");


// aggiungo un event listener al nav, cos' quando viene cliccato un targewt che ha come tagname button invoco la funzione per oittenere i prodotti in base alla categoria del pulsante, la funzione avrà come argomento il testo del pulsante
navBar.addEventListener("click", (e)=>{
  if(e.target.tagName == 'BUTTON') {getProductsByCategory(e.target.textContent)}
  console.log(e.target.textContent);
  
  

})


// funzione per ottenere le categorie
function getCategories() {
  fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(categories => createButtons(categories))
    
}

// creo la funzione per ottenere i prodotti in base alla categoria: faccio una fectch poi converto la risposta in un file json poi invoco la funzione createproducts

function getProductsByCategory(category){
  fetch(`https://fakestoreapi.com/products/category/${category}`)
  
    .then(response => response.json())

    .then(products => createProducts(products))
    
}



// creo funzione per creare pulsanti in base alla categoria, come argomento passo le categorie

function createButtons(categories){
  // per ogni  categoria di categorie creo un elemento button nel html, il contenuto del testo del bottone sarà la categoria stessa
  categories.forEach(category => {let button = document.createElement("button")
  button.textContent = category;
  navBar.append(button);
})
  }
  
  // creo funzione che crea i prodotti
  function createProducts(products){
console.log(products);
    // per ogni prodotto di products dichiaro una variabile productContainer che crea un elemento article nel html
    mainContainer.innerHTML = '';
products.forEach(product=>{let productContainer= document.createElement("article");
mainContainer.append(productContainer);
console.log(productContainer);

let articleTitle = document.createElement("h2");
articleTitle.textContent = product.title;
productContainer.append(articleTitle);
let articleDescription = document.createElement("p");
articleDescription.textContent = product.description;
productContainer.append(articleDescription);
let img = document.createElement('img');
img.src = product.image;
productContainer.append(img);
})
}

getCategories();

title.addEventListener('mouseover', ()=>{navBar.classList.toggle("show");

})

