"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // 한 슬라이드에 보여줄 갯수
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  }
});
var userBtn = document.querySelector(".prd_user_box_inner > img");
var userList = document.querySelector(".prd_user_list");
var userLi = document.querySelectorAll(".prd_user_list > li");
var banner = document.querySelector(".prd_main_info_ad > a > img");
var user = {
  userName: "사용자 A"
};
var giftBanner = document.querySelector(".prd_main_info_ad");

var clickEvent = function () {
  if ('ontouchstart' in document.documentElement === true) {
    return 'touchstart';
  } else {
    return 'click';
  }
}();

userBtn.addEventListener(clickEvent, function (e) {
  if (userList.style.display === "none") {
    userList.style.display = "block";
  } else {
    userList.style.display = "none";
  }
});
userLi.forEach(function (node, index) {
  node.addEventListener("click", function (e) {
    user.userName = e.target.innerText;
    userLi.forEach(function (nd, idx) {
      nd.classList.remove("active_a");
      nd.classList.remove("active_b");
    });

    if (e.target.innerText === "사용자 A") {
      user.userName = "사용자 A";
      e.target.classList.add("active_a");
      giftBanner.style.background = "#ecf0f7";
      giftBanner.style.border = "1px solid #6a84c2";
      console.log(giftBanner);
    } else {
      user.userName = "사용자 B";
      e.target.classList.add("active_b");
      giftBanner.style.background = "#e3ddd9";
      giftBanner.style.border = "1px solid #84685a";
      console.log(giftBanner);
    }

    if (user.userName === "사용자 A") {
      banner.src = "../image/mo/main/banner_bottom.png";
      userBtn.src = "../image/mo/all/user_01.png";
    } else {
      banner.src = "../image/mo/main/banner_bottom_02.png";
      userBtn.src = "../image/mo/all/user_icon.png";
    }
  });
});