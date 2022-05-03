import { $ } from "../utils/dom.js";
import Albums from "./model.js";
import SearchedAlbums from "./view.js";
export default class Controller {
  constructor() {
    this.api = {
      page: 1,
      prevKeyword: "",
    };
    this.$searchInput = $(".search-box__input");
    this.$searchButton = $(".search-box__button");
    this.observePoint = document.createElement("div");
    this.createObserver(this.observePoint);

    this.albums = Albums.createAlbums();
    this.searchedAlbums = SearchedAlbums.createSearchedAlbum();
    this.initEventListeners();
  }
  initEventListeners() {
    this.$searchInput.addEventListener(
      "keyup",
      throttle(
        () => this.albums.fetchAlbums(this.$searchInput.value, this.api),
        500
      )
    );
    this.$searchButton.addEventListener("click", () =>
      this.albums.fetchAlbums(this.$searchInput.value)
    );
  }
  createObserver(target) {
    const options = {
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          api.page += 1;
          fetchAlbums(api.page, this.createObserver);
        }
      });
    }, options);
    observer.observe(target);
  }
}

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

// throttle(() => albums.fetchAlbums(), 500);
