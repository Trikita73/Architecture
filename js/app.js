window.onload = function () {

   setTimeout(function() {

        document.body.classList.add('loaded')

		if (window.matchMedia('(min-width: 992px)').matches) {
			Draggable.create('.gallery', {
				bounds: 'body',
				inertial: true
			})
		}

   },300)

}

document.querySelectorAll('.gallery__item').forEach(function(e) {
	let img = new Image(), hrefURL = e.getAttribute('href')
	img.onload = function() {
		e.dataset.pswpWidth = this.width
		e.dataset.pswpHeight = this.height
	}
	img.src = hrefURL
})


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
