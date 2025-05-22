let mainDiv = document.querySelector('#main') ;
let toogleNav = document.querySelector('.toogle-nav') ;
let data = [] ;

function renderCards(){
    if(data.length < 1 ){
        // alert('No DATA')
        return
    }

    console.log(data.products[0])


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

