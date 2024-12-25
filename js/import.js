import PhotoSwipeLightbox from '../libs/PhotoSwipe/photoswipe-lightbox.esm.min.js'
const lightbox = new PhotoSwipeLightbox({
	gallery: '.gallery',
	children: '.gallery__item',
	pswpModule: () => import('../libs/PhotoSwipe/photoswipe.esm.min.js')
})
lightbox.init()