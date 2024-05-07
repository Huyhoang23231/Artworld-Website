// Khởi tạo biến flag để kiểm tra trạng thái của sidebar
const sidebarVisible = false;

window.onload = function () {
  // Ẩn sidebar và overlay khi trang được tải
  closeSidebar();
};

function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  sidebar.style.right = "0"; // Hiện sidebar
  overlay.style.display = "block"; // Hiện overlay
  sidebarVisible = true;
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  sidebar.style.right = "-300px"; // Ẩn sidebar
  overlay.style.display = "none"; // Ẩn overlay
  sidebarVisible = false;
}

// Sử dụng sự kiện 'beforeunload' để lưu trạng thái của sidebar vào sessionStorage trước khi trang được tải lại
window.addEventListener("beforeunload", function () {
  sessionStorage.setItem("sidebarVisible", sidebarVisible);
});

// Kiểm tra trạng thái của sidebar sau khi trang được tải lại và thực hiện hiển thị sidebar nếu cần
window.onload = function () {
  var savedSidebarVisible = sessionStorage.getItem("sidebarVisible");
  if (savedSidebarVisible === "true") {
    openSidebar();
  } else {
    closeSidebar();
  }
};
