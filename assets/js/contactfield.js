document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown_content");
  const selectedValue = document.getElementById("selectedValue");

  dropbtn.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
    // Thêm lớp "shown" vào các phần tử con đã được hiển thị
    Array.from(dropdownContent.children).forEach((child) => {
      if (child.style.display !== "none") {
        child.classList.add("show");
      }
    });
  });

  dropdownContent.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      const selectedPrice = e.target.getAttribute("data-value");
      selectedValue.textContent = selectedPrice;
      dropdownContent.classList.remove("show");
    }
  });
});
