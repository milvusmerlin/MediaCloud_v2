document.addEventListener("DOMContentLoaded", () => {
  const userItems = document.querySelectorAll(".user_ab ul li");
  console.log(userItems);
  const user_ab = document.querySelector(".user_ab > a > img");

  const user = { name: "" };
  // 상품 페이지 띠배너
  // const prd_ddi_banner_bg = document.querySelector(".prd_ddibanner a img");
  const prd_ddibanner = document.querySelector(".prd_ddibanner img");

  userItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      user.name = e.target.innerText;

      userItems.forEach((li) => li.classList.remove("active"));
      item.classList.add("active");
      if (user.name === "사용자 A") {
        user_ab.src = "../image/user.png";
        prd_ddibanner.src = "../image/prd_ddibanner_a.png";
        prd_ddibanner.style.border = "1px solid #6a84c2";
        prd_ddibanner.style.backgroundColor = "#edf0f8";
      } else if (user.name === "사용자 B") {
        user_ab.src = "../image/user_b.png";
        prd_ddibanner.src = "../image/prd_ddibanner_b.png";
        prd_ddibanner.style.border = "1px solid #84685a";
        prd_ddibanner.style.backgroundColor = "#f0edeb";
      }
    });
  });
});
