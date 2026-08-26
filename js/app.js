const form=document.getElementById("searchForm"),input=document.getElementById("searchInput"),resultsSection=document.getElementById("resultsSection"),results=document.getElementById("results"),queryText=document.getElementById("queryText"),clearButton=document.getElementById("clearButton");
function normalize(v){return v.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
function searchProfile(query){const q=normalize(query.trim());if(!q)return[];return PROFILE_DATA.map(item=>{const haystack=normalize([item.type,item.title,item.text,...(item.tags||[])].join(" "));const safe=q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");const exactTitle=normalize(item.title).includes(q)?4:0;const exactTag=(item.tags||[]).some(t=>normalize(t).includes(q))?5:0;const occurrences=(haystack.match(new RegExp(safe,"g"))||[]).length;return{item,score:exactTag+exactTitle+occurrences}}).filter(x=>x.score>0).sort((a,b)=>b.score-a.score)}
function renderSearch(query){const matches=searchProfile(query);queryText.textContent=`"${query}"`;results.innerHTML=matches.length?matches.map(({item})=>`<article class="result-card"><div class="result-type">${item.type}</div><h3>${item.title}</h3><p>${item.text}</p><div class="tags">${(item.tags||[]).map(tag=>`<span class="tag">${tag}</span>`).join("")}</div></article>`).join(""):`<div class="result-card"><h3>No he encontrado coincidencias todavía</h3><p>Prueba con otra palabra como Java, IA, Spring, migración, proyectos, formación o inglés.</p></div>`;resultsSection.classList.remove("hidden");resultsSection.scrollIntoView({behavior:"smooth",block:"start"})}
form.addEventListener("submit",e=>{e.preventDefault();renderSearch(input.value)});
document.querySelectorAll("[data-search]").forEach(b=>b.addEventListener("click",()=>{input.value=b.dataset.search;renderSearch(input.value)}));
clearButton.addEventListener("click",()=>{input.value="";results.innerHTML="";resultsSection.classList.add("hidden");input.focus()});
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchForm = document.getElementById('searchForm');

  // Delegación de eventos para capturar clics en botones o tarjetas con data-search
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-search]');
    if (target) {
      const query = target.getAttribute('data-search');
      
      // Asignar el valor al input de búsqueda
      if (searchInput) {
        searchInput.value = query;
      }

      // Despachar el evento submit del formulario para ejecutar el filtrado existente
      if (searchForm) {
        searchForm.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    }
  });
});
