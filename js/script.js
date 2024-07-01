const logo = document.getElementById("nav_logo");
const bars = document.getElementById("bars");
const links = document.getElementById("links");
const header = document.getElementById("header");

logo.addEventListener("click", () => {
  window.location.href = "/";
});
bars.addEventListener("click", () => {
  links.classList.toggle("active_links");
  bars.classList.toggle("toggle");
});

const SlideData = [
  {
    title: "Bleach",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, iste facere? Quos quas, aliquam dolores maiores amet consectetur doloribus impedit suscipit, ex nam adipisci cum natus consequatur quia harum praesentium minima excepturi nostrum vel illo mollitia? Laboriosam, quis dolorem, id cumque architecto nam tempora labore cupiditate unde necessitatibus dignissimos, adipisci et nisi placeat earum eveniet eligendi quasi hic praesentium sed suscipit. Atque odio unde ducimus laudantium commodi quis officia temporibus eos doloremque numquam consectetur delectus, dolores dolorum iste ullam saepe consequatur praesentium totam blanditiis aperiam doloribus soluta, pariatur nisi accusantium! Voluptate saepe aut, officiis tenetur architecto nobis repudiandae voluptatem fugiat?`,
    link: "/Bleach",
    video: "./videos/video.mp4",
  },
  {
    title: "Venom",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, iste facere? Quos quas, aliquam dolores maiores amet consectetur doloribus impedit suscipit, ex nam adipisci cum natus consequatur quia harum praesentium minima excepturi nostrum vel illo mollitia? Laboriosam, quis dolorem, id cumque architecto nam tempora labore cupiditate unde necessitatibus dignissimos, adipisci et nisi placeat earum eveniet eligendi quasi hic praesentium sed suscipit. Atque odio unde ducimus laudantium commodi quis officia temporibus eos doloremque numquam consectetur delectus, dolores dolorum iste ullam saepe consequatur praesentium totam blanditiis aperiam doloribus soluta, pariatur nisi accusantium! Voluptate saepe aut, officiis tenetur architecto nobis repudiandae voluptatem fugiat?`,
    link: "/Venom",
    video: "./videos/video2.mp4",
  },
];

function SlideHeader() {
  let slider = SlideData.map((item) => {
    return `
         <div class="slide_header">
        <div class="header_info">
          <h1>${item.title}</h1>
          <p>
            ${item.description}
          </p>
          <a href="/video.html">Watch</a>
        </div>
        <video
          src="${item.video}"
          autoplay
          loop
          muted
          plays-inline
          class="header_video"
        ></video>
      </div>
    `;
  });
  header.innerHTML = slider;
}

SlideHeader();
