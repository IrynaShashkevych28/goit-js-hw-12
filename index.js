import{a as S,S as R,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const E="https://pixabay.com/api/",P="54777791-355634ca1663ab6ad364842b0",q=15;async function m(o,r){return(await S.get(E,{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:q}})).data}const y=document.querySelector(".gallery"),l=document.querySelector(".loader"),u=document.querySelector(".load-more"),_=new R(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const r=o.map(e=>`
 <li class="gallery-item">
          <a class="gallery__link" href="${e.largeImageURL}">
            <div class="photo-card">
              <img
                class="photo-card__img"
                src="${e.webformatURL}"
                alt="${e.tags}"
                loading="lazy"
              />
              <div class="info">
                <p class="info-item"><b>Likes</b><span>${e.likes}</span></p>
                <p class="info-item"><b>Views</b><span>${e.views}</span></p>
                <p class="info-item"><b>Comments</b><span>${e.comments}</span></p>
                <p class="info-item"><b>Downloads</b><span>${e.downloads}</span></p>
              </div>
            </div>
          </a>
        </li>
`).join("");y.insertAdjacentHTML("beforeend",r),_.refresh()}function $(){y.innerHTML=""}function w(){l&&l.classList.remove("is-hidden")}function L(){l&&l.classList.add("is-hidden")}function f(){u&&u.classList.remove("is-hidden")}function c(){u&&u.classList.add("is-hidden")}const b=document.querySelector(".form"),A=document.querySelector('.form input[name="searchQuery"]'),B=document.querySelector(".load-more");let h="",a=1,i=0;const v=15;b.addEventListener("submit",M);B.addEventListener("click",H);async function M(o){o.preventDefault();const r=A.value.trim();if(!r){n.warning({message:"Please enter a search query",position:"topRight"});return}h=r,a=1,i=0,c(),$(),w();try{const e=await m(h,a);if(i=e.totalHits,!e.hits||e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}n.success({message:`Hooray! We found ${i} images.`,position:"topRight"}),g(e.hits),a*v<i?f():(c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L(),b.reset()}}async function H(){a+=1,w(),c();try{const o=await m(h,a);if(!o.hits||o.hits.length===0){c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}g(o.hits),O(),a*v<i?f():(c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),f()}finally{L()}}function O(){const o=document.querySelector(".gallery a");if(!o)return;const{height:r}=o.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
