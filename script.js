const books = [
  {
    title: "Wild Animals",
    desc: "Roar, jump, swim and guess your way through the wild!",
    cover: "cover-wild-animals.png.png",
    amazon: "https://www.amazon.com/gp/product/8690525009"
  },
  {
    title: "Domestic Animals",
    desc: "Meet familiar animals from the farm and home.",
    cover: "cover-domestic-animals.png.png",
    amazon: "https://www.amazon.com/gp/product/8690525017"
  },
  {
    title: "Sea Animals",
    desc: "Dive into an ocean of rhymes and amazing creatures.",
    cover: "cover-sea-animals.png.png",
    amazon: "https://www.amazon.com/gp/product/B0CGL25866"
  },
  {
    title: "Insects and Bugs",
    desc: "Tiny creatures, colorful clues and big discoveries.",
    cover: "cover-insects-and-bugs.png.png",
    amazon: "https://www.amazon.com/gp/product/8690525033"
  }
];

const grid = document.querySelector("#book-grid");
if (grid) {
  grid.innerHTML = books.map(book => `
    <article class="book-card">
      <a class="cover-link" href="${book.amazon}" target="_blank" rel="noopener noreferrer" aria-label="View ${book.title} on Amazon">
        <img class="book-cover-image" src="${book.cover}" alt="It's Guessing Time! ${book.title} book cover" loading="lazy">
      </a>
      <h3>${book.title}</h3>
      <p>${book.desc}</p>
      <a class="book-buy" href="${book.amazon}" target="_blank" rel="noopener noreferrer" aria-label="Buy ${book.title} on Amazon">View on Amazon →</a>
    </article>
  `).join("");
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();