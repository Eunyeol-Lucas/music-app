import { $ } from "./utils/dom.js";
import { API_KEY, URL } from "./utils/consts.js";

const api = {
  page: 1,
};
let prevKeyword = "";
function createObserver(target) {
  const options = {
    threshold: 0,
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        api.page += 1;
        fetchAlbums(api.page);
      }
    });
  }, options);
  observer.observe(target);
}

const searchInput = $(".search-box__input");
const searchButton = $(".search-box__button");
const searchResult = $(".search-result");
const observePoint = document.createElement("div");
createObserver(observePoint);

const fetchAlbums = async (page = 1) => {
  loadingList.style.display = "block";
  let keyword = searchInput.value.trim();
  if (!keyword) return;
  console.log(keyword);
  if (prevKeyword !== keyword) {
    searchResult.innerHTML = "";
    prevKeyword = keyword;
    api.page = 1;
  }
  const requestUrl = URL.BASE_URL + URL.SEARCH_URL;
  const params = {
    page: page,
    album: keyword,
    api_key: API_KEY,
  };
  const response = await axios.get(requestUrl, { params });
  loadingList.style.display = "none";
  if (response.status !== 200) {
    alert("잠시 후 다시 시도해주세요");
    return;
  }
  const albums = response.data.results.albummatches.album;
  if (albums.length === 0) {
    searchResult.innerHTML = `<div> "${keyword}"에 대한 검색 결과가 없습니다.</div>`;
    return;
  }
  renderAlbums(albums);
};

const renderAlbums = async (albums) => {
  const fragment = document.createDocumentFragment();
  albums.forEach((album) => fragment.append(albumTemplate(album)));
  searchResult.append(fragment);
  searchResult.append(observePoint);
};

const albumTemplate = (album) => {
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("search-result__card");
  let cardImgSrc = album.image[1]["#text"];
  if (!cardImgSrc) {
    cardImgSrc = "./assets/logo.png";
  }
  const cardImg = document.createElement("img");
  cardImg.width = "64";
  cardImg.heigh = "64";
  cardImg.src = cardImgSrc;
  cardImg.alt = `${album.name} album cover`;
  const cardTextWrapper = document.createElement("div");
  cardTextWrapper.classList.add("search-result__text");
  const artistName = document.createElement("h2");
  artistName.textContent = album.artist;
  const albumName = document.createElement("p");
  albumName.textContent = album.name;
  cardTextWrapper.append(artistName, albumName);
  cardWrapper.append(cardImg, cardTextWrapper);
  return cardWrapper;
};

const throttle = (cb, delay) => {
  let timerId;
  return (e) => {
    if (timerId) return;
    timerId = setTimeout(
      () => {
        cb(e);
        timerId = null;
      },
      delay,
      e
    );
  };
};
const initEventListeners = () => {
  searchInput.addEventListener(
    "keyup",
    throttle(() => fetchAlbums(), 500)
  );
  searchButton.addEventListener("click", fetchAlbums);
};

initEventListeners();
