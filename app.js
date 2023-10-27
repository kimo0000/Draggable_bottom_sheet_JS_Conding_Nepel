const btnShowModal = document.getElementById("btn_modal");
const overlay = document.querySelector(".overlay");
const bottomSheet = document.querySelector(".bottom_sheet");
const sheetContent = bottomSheet.querySelector(".content");
const dragSpan = document.querySelector("header span");

btnShowModal.addEventListener("click", () => {
  bottomSheet.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  bottomSheet.classList.remove("show");
});

dragSpan.addEventListener("click", (e) => {
  bottomSheet.classList.toggle("show_all");
});
