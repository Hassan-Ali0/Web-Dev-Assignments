let mainDiv = document.querySelector('#main');
let toggleNav = document.querySelector('.toggle-nav');
let loader = document.querySelector('.loader')
let modalDiv = document.querySelector('.background')
let data = [];

let renderCards =() => {
    if (data.length < 1) {
        console.log('No Data')
        return
    }

    loader.style.display = 'none'

    for (let i = 0; i < data.products.length; i++) {
        let productDiv = document.createElement('div');
        let productImg = document.createElement('img');
        let productTitle = document.createElement('h2');
        let productDesc = document.createElement('p');
        let productPrice = document.createElement('span');
        let productRating = document.createElement('span');

        productDiv.className = 'card';
        productDiv.id = data.products[i].id;

        productImg.id = data.products[i].id
        productTitle.id = data.products[i].id
        productDesc.id = data.products[i].id
        productPrice.id = data.products[i].id
        productRating.id = data.products[i].id
        productImg.className = 'product-image';
        productTitle.className = 'product-title';
        productDesc.className = 'product-desc';
        productPrice.className = 'product-price';
        productRating.className = 'product-rating';

        productDiv.addEventListener('click', showDetails)


        productImg.src = data.products[i].images[0];
        productTitle.innerText = data.products[i].title;

        productDesc.innerText = data.products[i].description
        productPrice.innerText = `Rs ${data.products[i].price}`
        productRating.innerText = `Rating ${printRating( Math.round(data.products[i].rating)) }`


        mainDiv.appendChild(productDiv);
        productDiv.appendChild(productImg);
        productDiv.appendChild(productTitle);
        productDiv.appendChild(productDesc);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productRating);
    }
}


let  showDetails =(e) => {
    let productInfo = document.querySelector('.product-info')
    let img = document.querySelector('#product_img');
    let title = document.querySelector('#product_title');
    let desc = document.querySelector('#product_desc');
    let brand = document.querySelector('#brand');
    let reviwsDiv = document.querySelector('.reviews')
    let id = Number(e.target.id) - 1;
    let reviews = data.products[id].reviews
    
    modalDiv.style.display = 'flex' ;
    img.src = data.products[id].images[0];
    title.innerText = data.products[id].title ;
    desc.innerText =  data.products[id].description ;
    brand.innerHTML = `<b>Brand :</b> ${ data.products[id].brand} `;
    console.log(reviews)
    for (let i = 0; i < reviews.length; i++) {
       
        let review = document.createElement('div') ;
        let reviewTop = document.createElement('div') ;
        let reviewBottum = document.createElement('div') ;
        let reviewerNameDiv = document.createElement('div') ;
        let reviewerEmailDiv = document.createElement('span') ;
        let reviewerName = document.createElement('span') ;
        let reviewerComment = document.createElement('span') ;
        let reviewerEmail = document.createElement('span') ;
        let reviewerMail = document.createElement('span') ;
        let reviewerRating = document.createElement('span') ;
        let reviewerDate = document.createElement('span') ;
        review.className = 'review' ;
        reviewTop.className = 'review-top'
        reviewBottum.className = 'review-bottum'
        reviewerNameDiv.className = 'reviewer-name'
        reviewerEmailDiv.className = 'reviewer-email'
        reviewerName.id = 'reviewer_name_span' ;
        reviewerComment.id = 'reviewer_comment_span' ;
        reviewerEmail.id = 'reviewer_email_span' ;
        reviewerMail.id = 'reviewer_mail_span' ;

        reviewerName.innerText = reviews[i].reviewerName
        reviewerComment.innerText = reviews[i].comment
        reviewerEmail.innerText = 'Reviewer Email'
        reviewerMail.innerText = reviews[i].reviewerEmail
        reviewerRating.innerText = `Rating ${printRating( Math.round(reviews[i].rating)) }`
        reviewerDate.innerText = reviews[i].date
        
        
        reviwsDiv.appendChild(review) ;
        review.appendChild(reviewTop) ;
        review.appendChild(reviewBottum) ;
        reviewTop.appendChild(reviewerNameDiv) ;
        reviewTop.appendChild(reviewerEmailDiv) ;
        reviewBottum.appendChild(reviewerRating) ;
        reviewBottum.appendChild(reviewerDate) ;
        reviewerNameDiv.appendChild(reviewerName) ;
        reviewerNameDiv.appendChild(reviewerComment) ;
        reviewerEmailDiv.appendChild(reviewerEmail) ;
        reviewerEmailDiv.appendChild(reviewerMail) ;
    }
    console.log(reviews)
}


    let  fetchApi = async() => {
    try {

        loader.style.display = 'block'
        let response = await fetch('https://dummyjson.com/products')
        data = await response.json();
        console.log(data.products)

    } catch (error) {
        console.log(error)
    }
}

fetchApi().then(() => { renderCards() })

let  closeModal =() => modalDiv.style.display = 'none'

let showNav =() => toggleNav.className += ' toggled-nav' ;
let hideNav =() => toggleNav.className = 'toggle-nav' ; 
let printRating = (num)=>{ 
    let str = "";
    for (let i = 0; i < num; i++) {
        
        str += "⭐" ;

    } 
    return str
}


