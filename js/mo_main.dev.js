"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 10
});
var userLi = document.querySelectorAll(".user_list > li");
var banner = document.querySelector(".contents_banner > img");
var userWrap = document.querySelector(".user_box > .user_box_inner");
var userBtn = document.querySelector(".user_box > .user_box_inner > img");
var userList = document.querySelector(".user_list");
var user = {
  userName: "사용자 A"
};
userBtn.addEventListener("click", function (e) {
  var userStatus = userList.style.display;

  if (userStatus === "none") {
    userList.style.display = "block";
  } else {
    userList.style.display = "none";
  }
});
console.log("dd");
userList.addEventListener("mouseleave", function (e) {
  userList.style.display = "none";
});
userLi.forEach(function (node, idx) {
  node.addEventListener("click", function (e) {
    userLi.forEach(function (nd, i) {
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