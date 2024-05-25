import{S as u,i as d}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const f="44067691-76497e8def9c6eb00e23cd4a0",m="https://pixabay.com/api/";function p(e){return fetch(`${m}?key=${f}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>t.json()).then(t=>t.hits)}let i;function h(e,t){g(t);const s=e.map(n=>y(n)).join("");t.insertAdjacentHTML("beforeend",s),i?i.refresh():i=new u(".gallery a")}function y({webformatURL:e,largeImageURL:t,tags:s,likes:n,views:r,comments:o,downloads:a}){return`
    <a class="gallery-item" href="${t}">
      <img src="${e}" alt="${s}" loading="lazy" />
      <div class="info">
        <p><span>Likes:</span> ${n}</p>
        <p><span>Views:</span> ${r}</p>
        <p><span>Comments:</span> ${o}</p>
        <p><span>Downloads:</span> ${a}</p>
      </div>
    </a>
  `}function g(e){e.innerHTML=""}function c(e){d.error({title:"Error",message:e})}function L(){const e=document.createElement("div");e.className="loader",document.body.appendChild(e)}function l(){const e=document.querySelector(".loader");e&&document.body.removeChild(e)}const b=document.querySelector("form"),$=document.querySelector(".gallery");b.addEventListener("submit",v);function v(e){e.preventDefault();const t=e.currentTarget,s=t.elements.query.value.trim();if(s===""){c("Please enter a search query.");return}L(),p(s).then(n=>{if(l(),n.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}h(n,$)}).catch(n=>{l(),console.log(n),c("Failed to fetch images. Please try again later.")}),t.reset()}
//# sourceMappingURL=commonHelpers.js.map
