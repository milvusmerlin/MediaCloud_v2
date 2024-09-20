document.addEventListener("DOMContentLoaded", () => {
  const userItems = document.querySelectorAll(".user_ab ul li");
  console.log(userItems);
  const user_ab = document.querySelector(".user_ab > a > img");
  const slide1img = document.querySelector(".rec_prd img");

  const slide1img_bg = document.querySelector(".userA");
  const ddi_banner_bg = document.querySelector(".ddi_banner img");
  const ddibanner = document.querySelector(".ddi_banner img");
  const user = { name: "" };

  userItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      user.name = e.target.innerText;

      userItems.forEach((li) => li.classList.remove("active"));
      item.classList.add("active");
      if (user.name === "사용자 A") {
        slide1img.src = "../image/slide1_img2.png";
        ddibanner.src = "../image/ddibanner_a.png";
        user_ab.src = "../image/user.png";
        slide1img_bg.style.border = "1px solid #6a84c2";
        slide1img_bg.style.backgroundColor = "#edf0f8";
        ddi_banner_bg.style.border = "1px solid #6a84c2";
        ddi_banner_bg.style.backgroundColor = "#edf0f8";
      } else if (user.name === "사용자 B") {
        slide1img.src = "../image/slide1_img5.png";
        ddibanner.src = "../image/ddibanner_b.png";
        user_ab.src = "../image/user_b.png";
        slide1img_bg.style.border = "1px solid #84685a";
        slide1img_bg.style.backgroundColor = "#f0edeb";
        ddi_banner_bg.style.border = "1px solid #84685a";
        ddi_banner_bg.style.backgroundColor = "#f0edeb";
      }
    });
  });
});
