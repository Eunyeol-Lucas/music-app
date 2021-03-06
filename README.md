<div align="center">
	<img src="README.assets/Screenshot-1640517.png" alt="img" width="300"/>
  <p>
    	<a href="https://eunyeol-lucas.github.io/music-app/" target="_blank">Music app μ²΄ννκΈ° </a> π ν΄λ¦­
  </p>
 </div>

β° **μν λ μ§:** 2022.05.03 - 05.04

π **κ°λ°νκ²½:** Visual Studio Code

π **κ°λ°μΈμ΄:** html, css, JavaScript

**π  κ°λ° λκ΅¬**

- Visual Studio Code
- Google Chrome Browser
- last.fm API
- intersectionObserver api

---

## π― νμ κΈ°λ₯

### 1. κ²μμ°½ (DOM & Event)

- μ¬μ©μκ° inputμ valueλ₯Ό μλ ₯ν  κ²½μ°, ν΄λΉ μλ ₯κ°μ κΈ°μ€μΌλ‘ λ°μ΄ν°λ₯Ό μ€μκ° μμ²­ν©λλ€.

### 2. API μμ²­ (Ajax)

- μ¬μ©μκ° μλ ₯ν κ²μμ΄(keyword)λ₯Ό ν¬ν¨νμ¬ μ¨λ² κ²μ μμ²­μ λ³΄λλλ€.
- (μ°Έκ³  λ¬Έμ) https://www.last.fm/api/show/album.search

- μ¨λ² κ²μμ μν ajax μμ²­μλ `axios`λ₯Ό νμ©ν©λλ€.
- μμ²­μ΄ μ€ν¨νμ κ²½μ° `alert()`λ₯Ό μ΄μ©νμ¬ `μ μ ν λ€μ μλν΄μ£ΌμΈμ` λΌλ λ©μΈμ§λ₯Ό μΆλ ₯ν©λλ€.

### 3. κ²μ κ²°κ³Ό (DOM & Event)

- κ²μ κ²°κ³Όλ₯Ό input μ°½ μλμ λμλλ€.
- κ²μ κ²°κ³Όκ° λνλκΈ° μ  skeleton loaderλ₯Ό λμ μ¬μ©μμκ² λ°μ΄ν°κ° μμ²­ μ€μμ μλ¦½λλ€.
- λ¬΄ν μ€ν¬λ‘€μ ν΅ν΄ νμ΄μ§ μ€ν¬λ‘€ μ μλ‘μ΄ λ°μ΄ν°λ₯Ό μλ²μ μμ²­ν©λλ€.

---

## π μ€μ  νμ΄μ§

### κ²μ νμ΄μ§

<div align="center">
	<img src="README.assets/Screenshot.png" alt="img" width="600"/>
 </div>

### input μλ ₯μ λ°μ΄ν°λ₯Ό μμ²­

<div align="center">
	<img src="README.assets/May-04-2022 12-39-20.gif" alt="img" width="600"/>
 </div>



### κ²μ κ²°κ³Όκ° μλ κ²½μ°

<div align="center">
	<img src="README.assets/May-04-2022 12-39-46.gif" alt="img" width="600" />
 </div>



---

## ππ»ββοΈ ν΅μ¬ κΈ°λ₯

1. infinite Scroll κ΅¬ν

   intersectionObserver APIλ₯Ό νμ©νμ¬ λ¬΄ν μ€ν¬λ‘€λ‘ ν΄λΉ κ²μ κΈ°λ₯μ κ΅¬ννμμ΅λλ€.

   κ²μμ΄μ κ΄λ ¨λ λͺ¨λ  λ°μ΄ν°λ₯Ό μμ²­νλ, μ¬μ©μκ° μ€ν¬λ‘€μ ν΅ν΄ νμ΄μ§λ₯Ό μ΄λνμ§ μμλ λ λ§μ μμ μ¨λ²μ νμΈν  μ μμ΅λλ€.

   - intersection Observer APIλ?
     - νκ² μμμ μμ μμ λλ μ΅μμ documentμ viewport μ¬μ΄μ intersection λ΄μ λ³νλ₯Ό λΉλκΈ°μ μΌλ‘ κ΄μ°°νλ λ°©λ²
     - λΉλκΈ°μ μΌλ‘ μ€νλκΈ° λλ¬Έμ λ©μΈ μ€λ μ΄λμ μν₯μ μ£Όμ§ μμΌλ©΄μ λ³κ²½ μ¬ν­μ κ΄μ°°ν  μ μμΌλ©°, λ°λ‘ getBoundingClientRect() ν¨μλ₯Ό νΈμΆν  νμκ° μμ΄ **λ¦¬νλ‘μ° νμ**μ λ°©μ§ν  μ μμ΅λλ€.

2. throttling

   κ²μμ΄λ₯Ό μλ ₯νμ λ 'enter'λ₯Ό λλ₯Ό λ λ³΄λ€ inputμ λ°λΌ λ°μ΄ν°λ₯Ό μμ²­νλ κ²μ΄ μ¬μ©μ κ²½ν μΈ‘λ©΄μμ μ΄μ μ΄ μμ κ²μ΄λΌ μκ°νμ΅λλ€.

   νμ§λ§ λͺ¨λ  key μλ ₯μ λ°λΌ λ°μ΄ν°λ₯Ό μμ²­νλ κ²μ μλ²μ κ³Όλν μμ²­μ μ€ μ μκΈ° λλ¬Έμ throttle ν¨μλ₯Ό κ΅¬ννμ¬, μΌμ  μκ°λ§λ€ μλ²μ λ°μ΄ν°λ₯Ό μμ²­νλλ‘ νμμ΅λλ€.

   ```javascript
   export const throttle = (cb, delay) => {
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
   
   ```

   - debounceμ throttleμ μ°¨μ΄
     - debounce: μ°μ΄μ΄ νΈμΆλλ ν¨μ μ€ λ§μ§λ§ ν¨μλ§ νΈμΆνλλ‘ νλ κ²
     - throttle: λ§μ§λ§ ν¨μκ° νΈμΆλ ν μΌμ  μκ°μ΄ μ§λκΈ° μ μ λ€μ νΈμΆλμ§ μλλ‘ νλ κ²μΌλ‘, μ΄λ²€νΈλ₯Ό μΌμ ν μ£ΌκΈ°λ§λ€ λ°μνλλ‘ ν©λλ€.

---

## π¨ λ¬Έμ  λ° ν΄κ²°

1. κ²μμ΄ μ­μ  μ λ§μ§λ§ κΈ°λ‘μ΄ λ¨μμλ λ¬Έμ 

inputμ μλ ₯λ κΈμ backspaceλ₯Ό ν΅ν΄ μ­μ ν  κ²½μ°, μ²« κΈμλ‘ μμ²­λ λ°μ΄ν°κ° dom μμ λ¨μμλ λ¬Έμ κ° λ°μνμμ΅λλ€. inputμ κ°μ μ­μ νμμ κ²½μ° μ¨λ²μ΄ λνλλ μμμ λ°μ΄ν°λ₯Ό μ­μ νκΈ° μνμ¬ backspaceμ λν μ΄λ²€νΈλ₯Ό λΆμ¬νμμ΅λλ€.

```javascript
searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Backspace" && searchInput.value === "")
      searchResult.innerHTML = "";
    loadingList.style.display = "none";
  });
```

2, λ¬΄ν μ€ν¬λ‘€ μ target unobserve

μ²μ λ¬΄ν μ€ν¬λ‘€μ κ΅¬ννμμ λ, observerκ° μΈμνκΈ° μν targetμΌλ‘

``` javascript
const observePoint = document.createElement("div");
createObserver(observePoint);

// ...μλ΅

const renderAlbums = async (albums) => {
  const fragment = document.createDocumentFragment();
  albums.forEach((album) => fragment.append(albumTemplate(album)));
  searchResult.append(fragment);
  searchResult.append(observePoint);
};
```

observePointμ ν΄λΉνλ elementλ₯Ό μμ±νμ¬, μμ²­λ μ¨λ² λ°μ΄ν° λ€μ λ§€λ² ν΄λΉ elementλ₯Ό μΆκ°ν΄μ£Όλ λ°©μμΌλ‘ νμμ΅λλ€. νμ§λ§ ν΄λΉ λ°©λ²μ ν΅ν΄ κ΅¬νν λ¬΄ν μ€ν¬λ‘€μμλ ν΄λΉ target pointλ₯Ό unobserveλ₯Ό μν€μ§ λͺ»νμμ΅λλ€.

```javascript
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
```

 κ·Έλ κΈ° λλ¬Έμ λλ€μ viewportμ μ κ·Όν  κ²½μ° λλ€μ fetchλ₯Ό νλ λ¬Έμ κ° λ°μνμμ΅λλ€.

- μ²« λ²μ§Έ λ°©λ²

unobserveλ₯Ό μν€κΈ° μν΄μ ν΄λΉ intersectionObserver μ½λλ₯Ό λ³κ²½νμμ΅λλ€.
μ¨λ² μμμ λ§μ§λ§ μμλ₯Ό targetμΌλ‘ κ΄μ°°νλλ‘ μ½λλ₯Ό λ³κ²½

λ§μ§λ§ μμΉλ₯Ό targetμΌλ‘ νμ¬ κ΄μ°°νμμ λ, μ²μμΌλ‘ λ°μ μ¨λ² λ°μ΄ν°μ λ§μ§λ§ λ°μ΄ν°κ° λ·° ν¬νΈμ μ κ·Όμ νμμ κ²½μ°, 10μ¬λ²μ μμ²­μ΄ λ°μνμμ΅λλ€. 

ν΄λΉ λ°©λ²μ μμ νκΈ° μν΄ μλμ κ°μ΄ μ½λλ₯Ό μμ νμ¬, κΈ°μ‘΄μ λμ λ μ¨λ² κ°μμ νμ¬ λ°μμ¨ λ°μ΄ν°μ κ°μκ° λ€λ₯Έ κ²½μ°μ ν΄λΉ μ¨λ²μ λ§μ§λ§ μμλ₯Ό κ΄μ°° μμλ‘ μ€μ νμμ΅λλ€.

``` javascript
let albumCount = 0;

const ioCallback = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      api.page += 1;
      fetchAlbums(api.page);
      observeLastItem(io, document.querySelectorAll(".search-result__card"));
    }
  });
};

const observeLastItem = (io, items) => {
  if (!items) return;
  const lastItem = items[items.length - 1];
  if (!lastItem) return;
  if (albumCount !== items.length) io.observe(lastItem);
  albumCount = items.length;
};

const io = new IntersectionObserver(ioCallback, { threshold: 1 });
```

π¨ λ¬Έμ  λ°μ

μ λ¬ λ°μ λ°μ΄ν°λ₯Ό λμ νμ¬ μ¨λ² κ°μμ λ€λ₯Ό κ²½μ°μλ§ μλ‘μ΄ λ°μ΄ν°λ₯Ό μμ²­νλλ‘ νμμ§λ§, 2 νμ΄μ§μμ λμ΄μ μμ²­μ΄ κ°μ§ μμ λ¬Έμ κ° λ°μνμμ΅λλ€. 

λν λ§€λ² μμ²­νλ λ°μ΄ν°μ κΈΈμ΄λ₯Ό μ λ κ²μ λΆνμν νμλΌ μκ°νμ¬ data-* μμ±μ μ¬μ©νμ¬ μ½λλ₯Ό λ³κ²½νκΈ°λ‘ νμμ΅λλ€.

- λ λ²μ¨° λ°©λ²

```javascript
const ioCallback = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      delete entry.target.dataset.id;
      requestInfo.page += 1;
      fetchAlbums(requestInfo.page);
    }
  });
};

const observeLastItem = (io) => {
  const target = $(".search-result").querySelector('[data-id="target"]');
  if (!target) return;
  io.observe(target);
};
const io = new IntersectionObserver(ioCallback, { threshold: 1 });

// ... μλ΅

const renderAlbums = async (albums) => {
  const fragment = document.createDocumentFragment();
  const count = albums.length;
  albums.forEach((album, idx) =>
    fragment.append(albumTemplate(album, idx, count))
  );
  searchResult.append(fragment);
  observeLastItem(io);
};

```

μ λ¬λ°μ μ¨λ² λ°μ΄ν°μ λ§μ§λ§ μμμ data μμ±μ ν΅ν΄ λ§μ§λ§ elementμμ νμν λ€, ν΄λΉ targetμ observerλ₯Ό ν΅ν΄ κ΄μ°°νμ¬ viewportμ λ€μ΄μ€λ κ²½μ°, μλ‘­κ² dataλ₯Ό μμ²­νκ³ , targetμ unobserveλ₯Ό μμΌ λ€μ λ·°ν¬νΈμ λ€μ΄μλ fetchκ° λ°μνμ§ μλλ‘ νμμ΅λλ€.

ν΄λΉ λ°©λ²μ ν΅ν΄ λ§€ μλ‘μ΄ λ°μ΄ν°κ° λ€μ΄μ¬ κ²½μ°, λ§μ§λ§ λ°μ΄ν°λ₯Ό κ΄μ°° ν¬μΈνΈλ‘ μ§μ νμ¬ ν΄λΉ targetμ΄ λ·°ννΈμ λ€μ΄μ€λ κ²½μ°μ 1νμ© λ°μ΄ν°λ₯Ό μμ²­ν  μ μμμ΅λλ€.

3. μλ ₯κ°μ μ¦μ μ λ¬ν¨μ λ°λ₯Έ κ³Όλν λ€νΈμν¬ μμ²­

μ μ κ° κ²μμ΄λ₯Ό μλ ₯νλ μκ° μλ²μ μμ²­μ λ³΄λκΈ° λλ¬Έμ μ¦μ λ¦¬λ λλ§μ΄ λ°μνλ©°, μλ²μ κ³Όλν μμ²­μ΄ λ°μνμμ΅λλ€. ν΄λΉ λ¬Έμ λ₯Ό ν΄κ²°νκΈ° μν΄ throttle κ°λμ λμνμ¬, μΌμ  μλ ₯ μκ° μ΄νμ μλ²λ‘ μμ²­μ μ λ¬νλλ‘ νμ¬ μλ² μμ²­μ μ‘°μ νμμ΅λλ€.