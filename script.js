const photos = ['./images/photos/Votanoessa2023_shop2.webp',
                './images/photos/Votanoessa2023_shop1.webp',
                './images/photos/Votanoessa2023_shop3.webp',
                './images/photos/Votanoessa2023_shop4.webp',
                './images/photos/Votanoessa2023_shop5.webp',
                './images/photos/Votanoessa2023_shop6.webp',
                './images/photos/Votanoessa2023_shop7.webp',
                './images/photos/Votanoessa2023_shop8.webp',
                './images/photos/Votanoessa2023_shop9.webp',
                './images/photos/Votanoessa2023_shop10.webp',
                './images/photos/Votanoessa2023_shop11.webp',
                './images/photos/Votanoessa2023_shop12.webp',
                './images/photos/Votanoessa2023_shop13.webp',
                './images/photos/Votanoessa2023_shop14.webp',
                './images/photos/Votanoessa2023_shop15.webp',
                './images/photos/Votanoessa2023_shop16.webp',
                ];
var photo_idx = 0;
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