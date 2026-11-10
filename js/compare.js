document.addEventListener("DOMContentLoaded", () => {
  const robots = window.ROBOPEARL_ROBOTS || [];
  if (!robots.length) return;

  const defaultIds = ["pudubot-2", "bellabot", "kettybot"];
  let selected = defaultIds.filter((id) => robots.some((r) => r.id === id));
  if (selected.length < 2) selected = robots.slice(0, 3).map((r) => r.id);

  const picker = document.getElementById("compare-picker");
  const board = document.getElementById("compare-board");
  const table = document.getElementById("compare-table");
  const enquire = document.getElementById("compare-enquire");

  const rows = [
    ["Best for", (r) => r.bestFor],
    ["Purchase", (r) => r.priceLabel],
    ["Lease / day", (r) => r.lease],
    ["Food running", (r) => r.compare.foodRunning],
    ["Dish return", (r) => r.compare.dishReturn],
    ["Greeting / ads", (r) => r.compare.greetingAds],
    ["Guest wow", (r) => r.compare.guestWow],
    ["Covered trays", (r) => r.compare.coveredTrays],
    ["Path clearance", (r) => r.compare.tightAisles],
    ["Payload", (r) => r.compare.payload],
    ["Trays", (r) => r.compare.trays],
    ["Battery", (r) => r.compare.battery],
    ["Charging", (r) => r.compare.charge],
    ["Size", (r) => r.compare.size],
    ["Weight", (r) => r.compare.weight],
  ];

  function byId(id) {
    return robots.find((r) => r.id === id);
  }

  function render() {
    picker.innerHTML = robots
      .map((r) => {
        const on = selected.includes(r.id);
        return `<button type="button" class="compare-chip${on ? " active" : ""}" data-id="${r.id}" aria-pressed="${on}">
          <img src="assets/robots/${r.image}" alt="" />
          <span>${r.name}</span>
        </button>`;
      })
      .join("");

    const chosen = selected.map(byId).filter(Boolean);

    board.innerHTML = chosen
      .map(
        (r) => `<article class="compare-card">
        <div class="compare-card-media"><img src="assets/robots/${r.image}" alt="${r.name}" /></div>
        <p class="role">${r.brand}</p>
        <h2>${r.name}</h2>
        <p class="compare-tagline">${r.tagline}</p>
        <p class="price-hint">${r.priceLabel}</p>
        <p class="compare-lease">${r.lease}</p>
        <p class="compare-best"><strong>Best for</strong> ${r.bestFor}</p>
        <a class="btn btn-outline" href="robots/${r.id}.html">View details</a>
      </article>`
      )
      .join("");

    let thead = "<thead><tr><th>Feature</th>";
    chosen.forEach((r) => {
      thead += `<th>${r.name}</th>`;
    });
    thead += "</tr></thead>";

    let tbody = "<tbody>";
    rows.forEach(([label, fn]) => {
      tbody += `<tr><th scope="row">${label}</th>`;
      chosen.forEach((r) => {
        tbody += `<td>${fn(r)}</td>`;
      });
      tbody += "</tr>";
    });
    tbody += "</tbody>";
    table.innerHTML = thead + tbody;

    if (enquire) {
      const names = chosen.map((r) => r.name).join(", ");
      enquire.href = `contact.html?robot=${encodeURIComponent(names)}`;
    }
  }

  picker.addEventListener("click", (e) => {
    const btn = e.target.closest(".compare-chip");
    if (!btn) return;
    const id = btn.dataset.id;
    if (selected.includes(id)) {
      if (selected.length <= 2) return;
      selected = selected.filter((x) => x !== id);
    } else {
      if (selected.length >= 4) selected = selected.slice(1);
      selected = [...selected, id];
    }
    render();
  });

  render();
});
