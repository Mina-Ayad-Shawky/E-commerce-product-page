$(document).ready(function () {
  let thumbImg = $(".thumbParent");
  let bigImg = $(".bigimg img")
  thumbImg.click(function () {
    $(this).addClass("border active");
    $(this).siblings(".thumbParent").removeClass("border active");
    bigImg.attr("src", $(this).find("img").attr('src'))
  })
  let minus = $(".minus");
  let plus = $(".plus");
  let pcs = $(".pcs");

  // Function to subtract 1 from the current value
  let substract = () => {
    // Get the current value from pcs
    let currentValue = parseInt(pcs.text(), 10);

    // Check if the current value is greater than 0 before subtracting
    if (currentValue > 0) {
      let newValue = currentValue - 1;
      pcs.text(newValue);
    }
  };
  let addition = () => {
    let currentValue = parseInt(pcs.text(), 10);
    let newValue = currentValue + 1;
    pcs.text(newValue);
  }
  // Attach the substract function to the minus button's click event
  let cartButton = $(".cart1");
  let cartDiv = $(".cart2");
  let cartDivCap = $(".cap2")
  let showDiv = () => {
    cartDiv.fadeToggle();
  }

  let addtocartbtn = $(".addtocartbtn");
  // console.log(addtocartbtn);
  let addtocartdiv = () => {
    let myvalue = parseInt(pcs.text(), 10);
    if (myvalue == 0) {
      cartDiv.html(`<div class="title2">
            <h5>cart</h5>
        </div>
        <div class="cap2">
            <p>Your cart is empty</p>
        </div>`)
    } else {
      cartDiv.removeClass("none")
      cartDiv.html(`
    <div class="title2">
      <h5>cart</h5>
  </div>
  <div class="cap2">
      <div class="row w-100 hello">
          <div class="col-3"><img class="w-100 rounded" src="./assets/images/image-product-1-thumbnail.jpg" alt="">
          </div>
          <div class="col-7 px-0">
              <h6 style="font-size: 12px;color: #777;">Fall Limited Edition Sneakers</h6>
              <h6 class="no" style="font-size: 12px;color: #777;">$125.00 x${myvalue} <span class="total">$${myvalue * 125}</span></h6>
          </div>
          <div class="col-2 deleteicon"><img src="./assets/images/icon-delete.svg" alt=""></div>
      </div>
      <div class="col-md-12 ">
          <button style="background: hsl(26, 100%, 55%); color: black; font-size: 13px; font-weight: bolder;"
              type="button" class="btn w-100"> Checkout</button>
      </div>
  </div>
    `)
    }
  }
  let closeimg = $(".close");
  let bigimg1 = $(".bigimg1");
  let modal = $(".model");
  let showmodal = () => {
    modal.removeClass("none");
  }
  let closemodal = () => {
    modal.addClass("none")
  }

  function checkWindowSize() {
    let thumbParentParent = $(".images");
    let caro=$(".caro");
    let windowWidth = $(window).width();
    let priceDiv=$(".price");
    // console.log(windowWidth);
    // console.log(thumbParentParent);
    
    if (windowWidth <= 750) {
      thumbParentParent.hide();
      priceDiv.addClass("row");
      caro.html(`
        <div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
          <div class="carousel-inner">
            <div style="height:250px"; class="carousel-item active">
              <img style="height:100%"; src="./assets/images/image-product-1.jpg" class="d-block w-100" alt="...">
            </div>
            <div style="height:250px"; class="carousel-item">
              <img style="height:100%"; src="./assets/images/image-product-2.jpg" class="d-block w-100" alt="...">
            </div>
            <div style="height:250px"; class="carousel-item">
              <img style="height:100%"; src="./assets/images/image-product-3.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
      `);
      caro.show();
    } else {
      caro.hide();
      thumbParentParent.show();
      priceDiv.removeClass("row");

    }
  }

  checkWindowSize(); // Initial check

  // Check window size on resize
  $(window).resize(function () {
    checkWindowSize();
  });




  cartButton.click(showDiv);
  cartDiv.hide();
  minus.click(substract);
  plus.click(addition);
  addtocartbtn.click(() => {
    addtocartdiv();
    cartDiv.fadeIn();
  });
  bigimg1.click(showmodal);
  closeimg.click(closemodal);


})