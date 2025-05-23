let mainDiv = document.querySelector('#main') ;
let toogleNav = document.querySelector('.toogle-nav') ;
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
        let productdDesc = document.createElement('p') ;
        productDiv.className = 'card' ;
        productImg.className = 'product-image' ;
        productTitle.className = 'product-title' ;
        productdDesc.className = 'product-Desc' ;



        for(key in data.products[i]){
            productImg.src = data.products[i].images[0] ;
            productTitle.innerText = data.products[i].title ;

            productdDesc.innerText = data.products[i].description
        }







        mainDiv.appendChild(productDiv) ;
        productDiv.appendChild(productImg) ;
        productDiv.appendChild(productTitle) ;
        productDiv.appendChild(productdDesc)
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
    toogleNav.className += ' toogled-nav' ;

}

function hideNav(){
    toogleNav.className = 'toogle-nav'
}

