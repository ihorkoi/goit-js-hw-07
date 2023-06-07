import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onImageClick);

generateGalleryMarckup(galleryItems);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250',captionClass:'gallery__caption'});

function generateGalleryMarckup(imageOdjectArray) {
    let galleryMarckup = '';
    for (const imageOdject of imageOdjectArray) {
        const { original, preview, description } = imageOdject;
        galleryMarckup += `<li class="gallery__item"><a class="gallery__link" href="${original}"><img  class="gallery__image" src="${preview}" alt="${description}"/></a></li>`;
    galleryRef.innerHTML = galleryMarckup;
   
    }
}

console.log(galleryItems);

function onImageClick(evt) {
    evt.preventDefault();
}