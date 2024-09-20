var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // 한 슬라이드에 보여줄 갯수
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

const userBtn = document.querySelector(".prd_user_box_inner > img");
const userList = document.querySelector(".prd_user_list");
const userLi = document.querySelectorAll(".prd_user_list > li");
const banner = document.querySelector(".prd_main_info_ad > a > img");
const user = { userName: "사용자 A" }



userBtn.addEventListener("click", (e) => {

  if (userList.style.display === "none") {
    userList.style.display = "block";
  } else {
    userList.style.display = "none";
  }

});

userLi.forEach((node, index) => {

  node.addEventListener("click", (e) => {

    user.userName = e.target.innerText

    userLi.forEach((nd, idx) => {

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