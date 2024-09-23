var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
});


const userLi = document.querySelectorAll(".user_list > li");
const banner = document.querySelector(".contents_banner > img");
const userWrap = document.querySelector(".user_box > .user_box_inner");
const userBtn = document.querySelector(".user_box > .user_box_inner > img");
const userList = document.querySelector(".user_list");

const user = {
  userName: "사용자 A"
};

let clickEvent = (function () {
  if ('ontouchstart' in document.documentElement === true) {
    return 'touchstart';
  } else {
    return 'click';
  }
})();

const giftBanner = document.querySelector(".contents_banner");

userBtn.addEventListener(clickEvent, (e) => {

  const userStatus = userList.style.display;

  if (userStatus === "none") {
    userList.style.display = "block";
  } else {
    userList.style.display = "none";
  }

});

userList.addEventListener("mouseleave", (e) => {

  userList.style.display = "none";

});



userLi.forEach((node, idx) => {

  node.addEventListener("click", (e) => {

    userLi.forEach((nd, i) => {

      nd.classList.remove("active_a");
      nd.classList.remove("active_b");

    });


    if (e.target.innerText === "사용자 A") {
      user.userName = "사용자 A";
      e.target.classList.add("active_a");
      giftBanner.style.background = "#ecf0f7";
      giftBanner.style.border = "1px solid #6a84c2";
    } else {
      user.userName = "사용자 B";
      e.target.classList.add("active_b");
      giftBanner.style.background = "#e3ddd9";
      giftBanner.style.border = "1px solid #84685a";
    }

    if (user.userName === "사용자 A") {
      banner.src = "../image/mo/main/banner_bottom.png";
      userBtn.src = "../image/mo/all/user_01.png";
    } else {
      banner.src = "../image/mo/main/banner_bottom_02.png"
      userBtn.src = "../image/mo/all/user_icon.png";
    }

  });

});





