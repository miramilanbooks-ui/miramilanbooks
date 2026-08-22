const books = [
  {
    title: "Farm Animals",
    subtitle: "It’s Guessing Time!",
    description: "Meet familiar farm animals through playful rhyming clues and a simple guessing game.",
    emoji: "🐮🐷",
    coverClass: "cover-farm",
    tags: ["Rhyming riddles", "Animals", "Young learners"]
  },
  {
    title: "Sea Animals",
    subtitle: "It’s Guessing Time!",
    description: "Dive under the sea and discover ocean animals by listening carefully to each rhyme.",
    emoji: "🐬🐙",
    coverClass: "cover-sea",
    tags: ["Ocean vocabulary", "Guessing game", "Read aloud"]
  },
  {
    title: "Wild Animals",
    subtitle: "It’s Guessing Time!",
    description: "Explore the wild with fun clues that encourage children to think, guess, and learn new words.",
    emoji: "🦁🐘",
    coverClass: "cover-wild",
    tags: ["Wildlife", "Vocabulary", "Playful learning"]
  }
];

const grid = document.querySelector("#book-grid");

if (grid) {
  grid.innerHTML = books.map((book) => `
    <article class="book-card">
      <div class="book-cover ${book.coverClass}">
        <div>
          <span class="cover-emoji" aria-hidden="true">${book.emoji}</span>
          <strong>${book.title}</strong>
          <small>${book.subtitle}</small>
        </div>
      </div>
      <div class="book-body">
        <h3>${book.title}</h3>
        <p>${book.description}</p>
        <div class="book-meta">
          ${book.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <a class="text-link" href="#sample">See sample →</a>
      </div>
    </article>
  `).join("");
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('.is-placeholder').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});
