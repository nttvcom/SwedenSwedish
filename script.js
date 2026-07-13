const slides = Array.from(document.querySelectorAll('.thumb'));
const featuredImage = document.getElementById('featured-image');
const galleryTitle = document.getElementById('gallery-title');
const galleryDescription = document.getElementById('gallery-description');
const randomBtn = document.getElementById('random-btn');

function updateGallery(index) {
  const slide = slides[index];
  if (!slide || !featuredImage) return;

  featuredImage.src = slide.dataset.image;
  featuredImage.alt = slide.dataset.title;
  galleryTitle.textContent = slide.dataset.title;
  galleryDescription.textContent = slide.dataset.description;

  slides.forEach((button) => button.classList.remove('active'));
  slide.classList.add('active');
}

slides.forEach((button) => {
  button.addEventListener('click', () => updateGallery(Number(button.dataset.index)));
});

if (randomBtn) {
  randomBtn.addEventListener('click', () => {
    const nextIndex = Math.floor(Math.random() * slides.length);
    updateGallery(nextIndex);
  });
}

if (slides.length) {
  updateGallery(0);
}
