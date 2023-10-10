// preloader
function activeShowPage() {
  let content = setTimeout(showPage, 550);
}
function showPage() {
  document.getElementById("preLoader").style.display = "none";
  document.getElementById("pageContent").style.display = "block";
}