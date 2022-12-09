$(document).ready(function () {
  // ----------------------------Clothing Section-----------------
  const content = document.body;
  async function fetchApi() {
    await fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data)
        sessionStorage.productList = JSON.stringify(data);
        getData(data);
      })
      .catch((err) => {
        console.error("ISSUE FETCHING DATA!");
        console.error(err.message);
      });
  }
  fetchApi();

  function getData(productList) {
    const clothingProduct = productList.filter((items) => items.isAccessory === false);
    // console.log(clothingProduct)
    let output = "";
    function onLoad() {
      clothingProduct.map((items) => {
        output += `
            <div class="cards" id=${items.id}>
                <a href="javascript:void">
                <div class="image">
                    <img src=${items.preview}   alt="" />
                </div>
                <div class="content">
                    <h3 class="name">${items.name.slice(0, 30)}</h3>
                    <h4 id="type">${items.brand}</h4>
                    <h5 id="price">Rs ${items.price}</h5>
                </div>
                </a> 
            </div> 
        `;
        return output;
      });

      document.querySelector(".card-container-clothing").innerHTML = output;
    }

    onLoad();

    // ----------------------------Accessories Section-----------------
    function Accessories() {
      const accesseries = productList.filter((items) => items.isAccessory === true);
      let AccessAdd = "";
      accesseries.map((items) => {
        AccessAdd += ` 
            <div class="cards AssCards" id='${items.id}' >
                <a href="javscript:void">
                    <div class="image">
                    <img src=${items.preview}   alt="${items.name}" />
                    </div>
                    <div class="content">
                    <h3 class="name">${items.name}</h3>
                    <h4 id="type">${items.brand}</h4>
                    <h5 id="price">Rs ${items.price}</h5>
                    </div>
                </a> 
            </div>
        `;

        return AccessAdd;
      });

      document.getElementById("accesseries").innerHTML = AccessAdd;
    }

    Accessories();

    document.querySelectorAll(".cards").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.id;
        console.log(id);
        if (id) {
          window.location.href = `./productPage.html?id=${id}`;
        }
      });
    });
  }

  // hamburger event /
  const showMenu = document.getElementById("show-menu");
  showMenu.addEventListener("click", onEvent);

  function onEvent() {
    const hamburger = document.getElementById("hamburger");

    if (hamburger.style.display !== "none") {
      hamburger.style.display = "none";
    } else {
      hamburger.style.display = "block";
    }
  }

  const hamburger = document.getElementById("hamburger");

  hamburger.addEventListener("click", hide);
  function hide() {
    if (hamburger.style.display !== "block") {
      hamburger.style.display = "block";
    } else {
      hamburger.style.display = "none";
    }
  }

  const clothtilte = document.getElementById("cloth-title");
  const hometitle = document.getElementById("home-title");
  const Acctitle = document.getElementById("acc-title");

  clothtilte.addEventListener("click", hide);
  Acctitle.addEventListener("click", hide);

  hometitle.addEventListener("click", hide);
});

// slider section

var i = 0; // Start Point
var images = []; // Images Array
var time = 3000; // Time Between Switch

// Image List
images[0] = "https://shoplane.netlify.app/img/img2.png";
images[1] = "https://shoplane.netlify.app/img/img3.png";
images[2] = "https://shoplane.netlify.app/img/img4.png";

// Change Image
function changeImg() {
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;
