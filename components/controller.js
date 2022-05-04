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
    this.searchedAlbums = SearchedAlbums.createSearchedAlbums();
    this.initEventListeners();
  }
  initEventListeners() {
    this.$searchInput.addEventListener(
      "keyup",
      throttle(() => {
        this.albums.fetchAlbums(this.$searchInput.value, this.api);
        this.render();
      }, 500)
    );
  }
  createObserver(target) {
    const options = {
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.api.page += 1;
          this.albums.fetchAlbums(this.$searchInput.value, this.api);
          this.render();
        }
      });
    }, options);
    observer.observe(target);
  }
  async render() {
    await this.searchedAlbums.renderAlbums(
      this.albums.albumList,
      this.observePoint
    );
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
