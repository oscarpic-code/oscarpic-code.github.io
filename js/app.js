const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const resultsSection = document.getElementById("resultsSection");
const results = document.getElementById("results");
const queryText = document.getElementById("queryText");
const clearButton = document.getElementById("clearButton");

function normalize(value) {
  return String(value || "")
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function searchProfile(query) {
  const q = normalize(query.trim());

  if (!q) {
    return [];
  }

  return PROFILE_DATA
    .map(item => {

      const searchableContent = [
        item.type,
        item.title,
        item.summary,
        ...(item.details || []),
        ...(item.tags || []),
        ...(item.keywords || [])
      ];

      const haystack = normalize(searchableContent.join(" "));

      const safe = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      const exactTitle =
        normalize(item.title || "").includes(q) ? 4 : 0;

      const exactTag =
        (item.tags || []).some(tag =>
          normalize(tag).includes(q)
        ) ? 5 : 0;

      const exactKeyword =
        (item.keywords || []).some(keyword =>
          normalize(keyword).includes(q)
        ) ? 3 : 0;

      const occurrences =
        haystack.match(new RegExp(safe, "g"))?.length || 0;

      return {
        item,
        score: exactTag + exactTitle + exactKeyword + occurrences
      };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);
}

function renderSearch(query) {

  const matches = searchProfile(query);

  queryText.textContent = `"${query}"`;

  if (matches.length) {

    results.innerHTML = matches
      .map(({ item }) => {

        const details = (item.details || [])
          .map(detail => `<li>${detail}</li>`)
          .join("");

        const tags = (item.tags || [])
          .map(tag => `<span class="tag">${tag}</span>`)
          .join("");

        return `
          <article class="result-card">

            <div class="result-type">
              ${item.type || ""}
            </div>

            <h3>
              ${item.title || ""}
            </h3>

            <p>
              ${item.summary || ""}
            </p>

            ${
              details
                ? `<ul class="result-details">${details}</ul>`
                : ""
            }

            ${
              tags
                ? `<div class="tags">${tags}</div>`
                : ""
            }

          </article>
        `;
      })
      .join("");

  } else {

    results.innerHTML = `
      <div class="result-card">
        <h3>No he encontrado coincidencias todavía</h3>

        <p>
          Prueba con otra palabra como Java, IA, Spring,
          migración, proyectos, formación o inglés.
        </p>
      </div>
    `;
  }

  resultsSection.classList.remove("hidden");

  resultsSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

form.addEventListener("submit", event => {

  event.preventDefault();

  renderSearch(input.value);

});

document.querySelectorAll("[data-search]").forEach(button => {

  button.addEventListener("click", () => {

    input.value = button.dataset.search;

    renderSearch(input.value);

  });

});

clearButton.addEventListener("click", () => {

  input.value = "";

  results.innerHTML = "";

  resultsSection.classList.add("hidden");

  input.focus();

});
