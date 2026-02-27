import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEL = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      img => `
 <li class="gallery-item">
          <a class="gallery__link" href="${img.largeImageURL}">
            <div class="photo-card">
              <img
                class="photo-card__img"
                src="${img.webformatURL}"
                alt="${img.tags}"
                loading="lazy"
              />
              <div class="info">
                <p class="info-item"><b>Likes</b><span>${img.likes}</span></p>
                <p class="info-item"><b>Views</b><span>${img.views}</span></p>
                <p class="info-item"><b>Comments</b><span>${img.comments}</span></p>
                <p class="info-item"><b>Downloads</b><span>${img.downloads}</span></p>
              </div>
            </div>
          </a>
        </li>
`
    )
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  if (!loaderEL) return;
  loaderEL.classList.remove('is-hidden');
}

export function hideLoader() {
  if (!loaderEL) return;
  loaderEL.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  if (!loadMoreBtn) return;
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  if (!loadMoreBtn) return;
  loadMoreBtn.classList.add('is-hidden');
}
