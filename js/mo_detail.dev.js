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
userBtn.addEventListener("click", function (e) {
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
      nd.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.innerText === "사용자 A") {
      user.userName = "사용자 A";
    } else {
      user.userName = "사용자 B";
    }

    if (user.userName === "사용자 A") {
      banner.src = "../image/mo/main/banner_bottom.png";
    } else {
      banner.src = "../image/mo/main/banner_bottom_02.png";
    }
  });
});