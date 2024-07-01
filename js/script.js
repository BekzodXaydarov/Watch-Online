const logo = document.getElementById("nav_logo");
const bars = document.getElementById("bars");
const links = document.getElementById("links");
const new_datas_wrap = document.getElementById("new_datas_wrap");
const main = document.getElementById("main");

logo.addEventListener("click", () => {
  window.location.href = "/";
});
bars.addEventListener("click", () => {
  links.classList.toggle("active_links");
  bars.classList.toggle("toggle");
});

let NewData = [
  {
    title: "Iron man",
    img: "./images/iron man.jfif",
    like: 15000,
    dislike: 0,
    series: 500,
  },
  {
    title: "Naruto",
    img: "./images/naruto.jfif",
    like: 15000,
    dislike: 0,
    series: 500,
  },

  
];

let datas = [
  {
    title: "Movies",
    data: [
      {
        title: "Iron man",
        img: "./images/iron man.jfif",
        like: 15000,
        dislike: 0,
        series: 500,
      },
    ],
  },
  {
    title: "Animes",
    data: [
      {
        title: "Naruto",
        img: "./images/naruto.jfif",
        like: 15000,
        dislike: 0,
        series: 500,
      },      
    ],
  },
];

function NewDataMap(data) {
  data.map((item, index) => {
    return (new_datas_wrap.innerHTML += `<div class="card_data" key="${index}">
          <img src="${item.img}" alt="" />
            <h2>${item.title}</h2>
            <div class="card_data_footer">
              <p>likes:${item.like}</p>
            <p>dislikes:${item.dislike}</p>
            <h3>series:${item.series}</h3>
            </div>
        </div>`);
  });
}
let data = [];
if (NewData.length > 12) {
  data = NewData.slice(0, 12);
} else {
  data = NewData;
}
NewDataMap(data);

function DatasMap() {
  datas.map((item, index) => {
    return (main.innerHTML += `
       <h1>${item.title}</h1>
      <ul class="main_wrapper" key="${index}">
       ${item.data.map((x) => {
         return ` <li class="main_card">
          <img src="${x.img}" alt="" />
          <h2 class="main_card_title">${x.title}</h2>
          <div class="main_card_body">
            <p><i class="fa-solid fa-thumbs-up"></i>:<span>${x.like}</span></p>
            <p><i class="fa-solid fa-thumbs-down"></i>:<span>${x.dislike}</span></p>
            <h2>Series: <span>${x.series}</span></h2>
          </div>
        </li>`;
       })}
      </ul>
    `);
  });
}
DatasMap();
