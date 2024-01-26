import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallerycontainer = document.querySelector(",gallery");
console.log(galleryContainer);
const
function createGallery(galleryItems) {
return galleryItems
.map(
    ({ preview, original, description }) => `<li class="gallery__item">`
  <a class="gallery__link" href="${original}g">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
)
.join(" ");
}

gallerycontainer.insertAdjacentHTML("afterbegin", createGallery(galleryItems));
gallerycontainer.addEventListener("click", openModal);
   
    function openModal (e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${e.target.dataset.source}" alt="${e.target.alt}">
    </div>
`);

instance.show()
document.addEventListener("keydown", onClose);
function onClose(e) {
    if (e.code !== "Escape" && basicLightbox.visible()) {
        return;
    }
    instance.close();
    document.removeEventListener("keydown", onClose);
}
}