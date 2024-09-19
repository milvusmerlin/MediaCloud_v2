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


userBtn.addEventListener("click", (e) => {

  const userStatus = userList.style.display;

  if (userStatus === "none") {
    userList.style.display = "block";
  } else {
    userList.style.display = "none";
  }

});

console.log("dd");

userList.addEventListener("mouseleave", (e) => {

  userList.style.display = "none";


});



userLi.forEach((node, idx) => {

  node.addEventListener("click", (e) => {

    userLi.forEach((nd, i) => {

      nd.classList.remove("active");

    });

    e.target.classList.add("active");

    if (e.target.innerText === "사용자 A") {
      user.userName = "사용자 A";
    } else {
      user.userName = "사용자 B";
    }

    if (user.userName === "사용자 A") {
      banner.src = "../image/mo/main/banner_bottom.png"
    } else {
      banner.src = "../image/mo/main/banner_bottom_02.png"
    }

  });

});



