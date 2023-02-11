// -------------------------------------------------------------------------------
//  Block Services
// -------------------------------------------------------------------------------
const list = document.querySelector(".block-services");

list.addEventListener("click", (event) => {
  let target = event.target;
  if (event.target.tagName === "BUTTON") {
    btnClick(target);
  }
});
let buttonServices;
let textBlockServices;
function btnClick(currBtn) {
  let buttonAttr = currBtn.getAttribute("data-item");
  let currTextBlockServices = document.querySelector("." + buttonAttr);
  document
    .querySelector(".services-item-active")
    .classList.remove("services-item-active");
  document
    .querySelector(".active-text-block")
    .classList.remove("active-text-block");
  if (buttonServices) {
    buttonServices.classList.remove("services-item-active");
    textBlockServices.classList.remove("active-text-block");
  }
  buttonServices = currBtn;
  textBlockServices = currTextBlockServices;
  buttonServices.classList.add("services-item-active");
  textBlockServices.classList.add("active-text-block");
}

// -------------------------------------------------------------------------------
//  Block Work Image
// -------------------------------------------------------------------------------

let btnLoad = document.querySelector(".btn-load-img");

btnLoad.addEventListener("click", () => {
  let loadPicture = document.querySelector(".container-load");
  loadPicture.style.display = "flex";
  btnLoad.style.display = "none";
  setTimeout(() => {
    loadPicture.style.display = "none";
    btnLoadImage();
  }, 3000);
});

function btnLoadImage() {
  let loadImg = document.querySelectorAll(".item-img-work");
  loadImg.forEach((el) => {
    el.classList.remove("active1");
  });
}

let arrayImg = [
  "./image/img1.jpg",
  "./image/img2.jpg",
  "./image/img3.jpg",
  "./image/img4.jpg",
  "./image/img5.jpg",
  "./image/img6.jpg",
  "./image/img7.jpg",
  "./image/img8.jpg",
  "./image/img9.jpg",
  "./image/img10.jpg",
  "./image/img11.jpg",
  "./image/img12.jpg",
];

function clickLoad(array) {
  for (let i = 0; i < 12; i++) {
    let listImgWork = document.querySelector(".list-img-work");
    let itemListWork = document.createElement("li");
    let cloneIconHoverBlock;
    itemListWork.classList.add("item-img-work");
    let arrCategory = ["landing", "design", "wordpress", "web-design"];
    if (i < 3) {
      itemListWork.classList.add(arrCategory[0]);
       cloneIconHoverBlock = document.querySelector(".hover-landing").cloneNode(true);
    }
    if (i >= 3 && i < 6) {
      itemListWork.classList.add(arrCategory[1]);
      cloneIconHoverBlock = document.querySelector(".hover-design").cloneNode(true);
    }
    if (i >= 6 && i < 9) {
      itemListWork.classList.add(arrCategory[2]);
      cloneIconHoverBlock = document.querySelector(".hover-wordpress").cloneNode(true);
    }
    if (i >= 9 && i < 12) {
      itemListWork.classList.add(arrCategory[3]);
      cloneIconHoverBlock = document.querySelector(".hover-webdesign").cloneNode(true);
    }
    let img = document.createElement("img");
    img.classList.add("img-work");
    img.src = `${array[i]}`;
    itemListWork.append(img);
    itemListWork.append(cloneIconHoverBlock);
    listImgWork.append(itemListWork);

    itemListWork.classList.add("active1");
  }
}
clickLoad(arrayImg);

const listItemImg = document.querySelector(".list-block-work");
let itemImgWork = document.querySelectorAll(".item-img-work");
listItemImg.addEventListener("click", () => {
  let targetImg = event.target;
  if (event.target.tagName === "BUTTON") {
    btnClickItemImg(targetImg);
  }
});

let btnWork;
let imageWork;
function btnClickItemImg(currBtn) {
  let buttonAttr = currBtn.getAttribute("data-img");
  let currImages = document.querySelectorAll("." + buttonAttr);
  document.querySelector(".btn-work-all").style.cssText =
    "color: #717171;border: 1px solid #dadada;";
  currImages.forEach((el) => {
    el.animate(
      [
        {
          opacity: 0,
          transform: "scale(0.5)",
          bottom: "30px",
          left: "100px",
        },
        {
          opacity: 1,
          transform: "scale(1)",
          bottom: 0,
          left: 0,
        },
      ],
      {
        duration: 1000,
      }
    );
  });
  itemImgWork.forEach((el) => {
    el.classList.add("active");
  });
  if (btnWork) {
    btnWork.style.cssText = "color: #717171;border: 1px solid #dadada;";
    imageWork.forEach((el) => {
      el.classList.add("active");
    });
  }
  btnWork = currBtn;
  imageWork = currImages;
  btnWork.style.cssText = "color: #18cfab; border: 2px solid #18cfab;";
  imageWork.forEach((el) => {
    el.classList.remove("active");
  });
}

// ----------------------------------------------------------------------------------
//  block SLIDER
// ----------------------------------------------------------------------------------

let image = document.querySelectorAll(".item-block-peaple");
let iconPeople = document.querySelectorAll(".image-peaple-slide");
let btnRightSlide = document.querySelector(".btn-right-slide");
let btnLeftSlide = document.querySelector(".btn-left-slide");

btnLeftSlide.addEventListener("click", () => {
  let activeImgcount = document.querySelector(".active-img").dataset.imgIndex;
  let nextImgnum1 = document.querySelector(
    `img[data-img-index="${+activeImgcount - 1}"]`
  );
  btnSlider(nextImgnum1,3);
});

btnRightSlide.addEventListener("click", () => {
  let activeImgcount = document.querySelector(".active-img").dataset.imgIndex;
  let nextImgnum1 = document.querySelector(
    `img[data-img-index="${+activeImgcount + 1}"]`
  );
  btnSlider(nextImgnum1,0);
});

function btnSlider(nextImgnum,index) {
  iconPeople.forEach((el) => {
    el.classList.remove("active-img");
  });
  image.forEach((el) => {
    el.classList.remove("active-block-people");
  });
  if (nextImgnum) {
    nextImgnum.classList.add("active-img");
    const textBlock = document.querySelector(nextImgnum.dataset.imgPeople);
    textBlock.classList.add("active-block-people");
  } else {
      iconPeople[index].classList.add("active-img");
      const textBlock = document.querySelector(iconPeople[index].dataset.imgPeople);
      textBlock.classList.add("active-block-people");
    } 
  }
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------

let sliderImg = document.querySelector(".slider");
sliderImg.addEventListener("click", (event) => {
  let target = event.target;
  if (event.target.tagName === "IMG") {
    imgSlider(target);
  }
});

let currImg;
let currInformation;
function imgSlider(Img) {
  let attrImg = Img.getAttribute("data-img-people");
  let imgPeople = document.querySelector(attrImg);
  document.querySelector(".active-img").classList.remove("active-img");
  document
    .querySelector(".active-block-people")
    .classList.remove("active-block-people");
  if (currImg) {
    currImg.classList.remove("active-img");
    currInformation.classList.remove("active-block-people");
  }
  currImg = Img;
  currInformation = imgPeople;
  currImg.classList.add("active-img");
  currInformation.classList.add("active-block-people");
}

// ---------------------------------------------------------------------------
//  Block best-image masonry
// ---------------------------------------------------------------------------

let msnry = new Masonry(".list-best-image", {
  columnWidth: 373,
  gutter: 20,
  itemSelector: ".item-best-image",
});

// ---------------------------------------------------------------------------
//  Block best-image load
// ---------------------------------------------------------------------------

let btnLoadBestImage = document.querySelector(".btn-load-best-img");
btnLoadBestImage.addEventListener("click", () => {
  let loadPicture = document.querySelector(".container-load-bestImg");
  loadPicture.style.display = "flex";
  btnLoadBestImage.style.display = "none";
  setTimeout(() => {
    loadPicture.style.display = "none";
    clickLoadBestImg(arrayBestImage);
  }, 3000);
});

let arrayBestImage = [
  "./image/best-image1.png",
  "./image/best-image2.png",
  "./image/best-image5.png",
  "./image/best-image6.png",
  "./image/best-image18.png",
  "./image/best-image16.png",
  "./image/best-image17.png",
];

let clickLoadBestImg = function (array) {
  let listBestImage = document.querySelector(".list-best-image");
  let itemBestImageLoad;
  let img;
  for (let i = 0; i < 7; i++) {
    itemBestImageLoad = document.createElement("li");
    itemBestImageLoad.classList.add("item-best-image");
    img = document.createElement("img");
    img.src = `${array[i]}`;

    itemBestImageLoad.append(img);
    listBestImage.append(itemBestImageLoad);

    new Masonry(".list-best-image", {
      columnWidth: 373,
      gutter: 20,
      itemSelector: ".item-best-image",
    });
  }
};
