window.onload = function () {

   setTimeout(function() {

        document.body.classList.add('loaded')

        Draggable.create('.gallery', {
            bounds: 'body',
            inertial: true
        })

   })

}

import PhotoSwipeLightbox from '../libs/PhotoSwipe/photoswipe-lightbox.esm.min.js'
const lightbox = new PhotoSwipeLightbox({
	gallery: '.gallery',
	children: '.gallery__item',
	pswpModule: () => import('../libs/PhotoSwipe/photoswipe.esm.min.js')
})
lightbox.init()

/* !new! */

/*
window.onload = function() {

	setTimeout(function() {

		document.body.classList.add('loaded')

		if (window.matchMedia('(min-width: 992px)').matches) { // If not mobile

			Draggable.create('.gallery', {
				bounds: 'body',
				inertia: true
			})
			
		}

	}, 200)

}

*/
