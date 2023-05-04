const photos = ['./images/photos/interior2.webp', './images/photos/exterior2.webp', './images/photos/front.webp', './images/photos/inside.webp', './images/photos/cosmetics.webp'];
var photo_idx = 0;

const btn_left = document.getElementById('circle-btn-1');
const btn_right = document.getElementById('circle-btn-2');
var photo = document.getElementById('photo');

function photo_left() {
    if (photo_idx == 0) {
        photo_idx = photos.length
    }
    photo_idx = photo_idx - 1;
    photo.src = photos[photo_idx];
}

function photo_right() {
    photo_idx = photo_idx + 1;
    if (photo_idx == photos.length) {
        photo_idx = 0
    }
    photo.src = photos[photo_idx];
}