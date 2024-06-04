import{S as d,i as f}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const m="44067691-76497e8def9c6eb00e23cd4a0",p="https://pixabay.com/api/";function h(e){return fetch(`${p}?key=${m}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>t.json()).then(t=>t.hits)}const y=new d(".gallery a");function g(e,t){u(t);const s=e.map(n=>L(n)).join("");t.insertAdjacentHTML("beforeend",s),y.refresh()}function L({webformatURL:e,largeImageURL:t,tags:s,likes:n,views:r,comments:o,downloads:a}){return`
    <a class="gallery-item" href="${t}">
      <img src="${e}" alt="${s}" loading="lazy" />
      <div class="info">
        <p><span>Likes:</span> ${n}</p>
        <p><span>Views:</span> ${r}</p>
        <p><span>Comments:</span> ${o}</p>
        <p><span>Downloads:</span> ${a}</p>
      </div>
    </a>
  `}function u(e){e.innerHTML=""}function i(e){f.error({title:"Error",message:e})}function b(){const e=document.createElement("div");e.className="loader",document.body.appendChild(e)}function c(){const e=document.querySelector(".loader");e&&document.body.removeChild(e)}const $=document.querySelector("form"),l=document.querySelector(".gallery");$.addEventListener("submit",v);function v(e){e.preventDefault();const t=e.currentTarget,s=t.elements.query.value.trim();if(s===""){i("Please enter a search query.");return}b(),h(s).then(n=>{if(c(),n.length===0){i("Sorry, there are no images matching your search query. Please try again!"),u(l);return}g(n,l)}).catch(n=>{c(),console.log(n),i("Failed to fetch images. Please try again later.")}),t.reset()}
//# sourceMappingURL=commonHelpers.js.map
