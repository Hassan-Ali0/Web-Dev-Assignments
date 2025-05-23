let mainDiv = document.querySelector('#main') ;
let toggleNav = document.querySelector('.toggle-nav') ;
let data = [] ;

function renderCards(){
    if(data.length < 1 ){
        console.log('No Data')
        return
    }

    for (let i = 0; i < data.products.length; i++) {
        let productDiv = document.createElement('div') ;
        let productImg = document.createElement('img') ;
        let productTitle = document.createElement('h2') ;
        let productDesc = document.createElement('p') ;
        let productPrice = document.createElement('span') ;
        let productRating = document.createElement('span') ;

        productDiv.className = 'card' ;
        productImg.className = 'product-image' ;
        productTitle.className = 'product-title' ;
        productDesc.className = 'product-desc' ;
        productPrice.className = 'product-price' ;
        productRating.className = 'product-rating' ;



        for(key in data.products[i]){
            productImg.src = data.products[i].images[0] ;
            productTitle.innerText = data.products[i].title ;

            productDesc.innerText = data.products[i].description
            productPrice.innerText = `Rs ${data.products[i].price}`
            productRating.innerText = `Rating ${data.products[i].rating}`
        }







        mainDiv.appendChild(productDiv) ;
        productDiv.appendChild(productImg) ;
        productDiv.appendChild(productTitle) ;
        productDiv.appendChild(productDesc) ;
        productDiv.appendChild(productPrice) ;
        productDiv.appendChild(productRating) ;
    }


}


async function fetchApi(){
    try {
        let response = await   fetch('https://dummyjson.com/products')
         data = await response.json() ;
        console.log(data.products)

    } catch (error) {
        console.log(error)
    }
}

fetchApi().then(function(){ renderCards()})

function showNav(){
    toggleNav.className += ' toggled-nav' ;

}

function hideNav(){
    toggleNav.className = 'toggle-nav'
}

