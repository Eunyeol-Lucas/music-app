import { $ } from "../utils/dom.js";
import { API_KEY, URL } from "../utils/consts.js";

export default class Albums {
  constructor() {
    this.$searchResult = $(".search-result");
  }
  async fetchAlbums(input, api, observer) {
    loadingList.style.display = "block";
    let keyword = input.trim();
    if (!keyword) return;
    console.log(keyword);
    if (api.prevKeyword !== keyword) {
      this.$searchResult.innerHTML = "";
      api.prevKeyword = keyword;
      api.page = 1;
    }
    const requestUrl = URL.BASE_URL + URL.SEARCH_URL;
    const params = {
      page: api.page,
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
      this.$searchResult.innerHTML = `<div> "${keyword}"에 대한 검색 결과가 없습니다.</div>`;
      return;
    }
    this.searchedAlbums.renderAlbums(albums, observer);
  }
  createAlbums() {
    return new Albums();
  }
}
