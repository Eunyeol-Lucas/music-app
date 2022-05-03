import { $ } from "../utils/dom.js";

export default class SearchedAlbums {
  constructor() {
    this.$searchResult = $(".search-result");
  }
  async renderAlbums(albums, observer) {
    const fragment = document.createDocumentFragment();
    albums.forEach((album) => fragment.append(this.albumTemplate(album)));
    this.$searchResult.append(fragment);
    this.$searchResult.append(observer);
  }

  albumTemplate(album) {
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
  }
  createSearchedAlbums() {
    return new SearchedAlbums();
  }
}
