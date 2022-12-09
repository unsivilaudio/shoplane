const content = document.body;
const productList = sessionStorage.productList
    ? JSON.parse(sessionStorage.productList)
    : [];
const prodId = new URLSearchParams(window.location.search).get('id');
console.log(prodId);
const item = productList.find(p => p.id.toString() === prodId);

function getData(productDetails) {
    let details = `
        <div class="error">
            <h2 class="error-message">No Product Found.</h2>
            <a class="go-back" href="/">Back to Home?</a>
        </div>
    `;
    if (productDetails) {
        // console.log(items)
        details = `
            <div class="left-container" id=${productDetails.id}>
                <img src=${productDetails.preview}
                    alt="logo" id='mainimages' />
                </div>
                <div class="right-container">
                <h1>${productDetails.name}</h1>
                
                <h2>${productDetails.brand}</h2>
                <h2>Price : Rs <span>${productDetails.price}</span></h2>
                <h2>Description</h2>
                <p>
                    ${productDetails.description}
                </p>
                <div class="preview">
                    <h2>Product Preview</h2>
                    <div class="preivew-images" >
                        ${productDetails.photos
                            .map((photo, idx) => {
                                const classes =
                                    idx === 0
                                        ? 'smallImages active'
                                        : 'smallImages';
                                return `<img src='${photo}' onclick="setActiveImage(event)" width="15%" alt='photo-${idx}' class='${classes}' />`;
                            })
                            .join('')}
                    </div>
                </div>
                <button>Add to Cart</button>
                </div>
            </div>
            `;
    }

    document.getElementById('product-details').innerHTML = details;
}

getData(item);
// productPage();

// const newArr  = productDetails.photos
const mainImg = document.getElementById('mainimages');
// const smallImg = document.getElementsByClassName('smallImages');
function setActiveImage(e) {
    document.querySelectorAll('.smallImages').forEach(element => {
        element.classList.remove('active');
    });

    mainImg.src = e.target.src;
    e.target.classList.add('active');
}
