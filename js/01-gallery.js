import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onImageClick);

generateGalleryMarckup(galleryItems);

function generateGalleryMarckup(imageOdjectArray) {
    let galleryMarckup = '';
    for (const imageOdject of imageOdjectArray) {
        const { original, preview, description } = imageOdject;
        galleryMarckup += `<li class="gallery__item"><a class="gallery__link" href="${original}"><img  class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
    galleryRef.innerHTML = galleryMarckup;
   
    }
}
function onImageClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return
    }

    const instance = basicLightbox.create(`
        <div class="modal">
            <img src="${evt.target.dataset.source}" width="1000px">
        </div>`,
        {onShow: (instance) => {
                instance.element().querySelector('.modal').onclick = instance.close
            }
        })
    
    instance.show()
    document.addEventListener("keydown", event => {
        if (event.key ==='Escape'){
            instance.close();
        }
    });
}

