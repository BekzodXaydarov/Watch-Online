const logo = document.getElementById("nav_logo");
const bars = document.getElementById("bars");
const links = document.getElementById("links");

logo.addEventListener('click',()=>{
    window.location.href = '/';
})
bars.addEventListener('click',()=>{
    links.classList.toggle("active_links");
    bars.classList.toggle("toggle")
})