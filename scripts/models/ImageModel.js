class ImageModel extends MediaModel {
    /**
     * 
     * @param {Object} image 
     */
    constructor(image) {
        super(image)
        this._thumbSrc = `assets/photographers/thumbnails/${image.photographerName}/${image.image}`
        this._src = `assets/photographers/${image.photographerName}/${image.image}`
    }

 
    get src() {
        return this._src
    }


    getCardDOM() {
        const article = this.getDefaultCardDOM()

        const image = document.createElement('img')
        image.className = 'media-card__media'
        image.src = this._thumbSrc

        article.querySelector('.media-card__media-container').append(image)

        return article
    }
    getMediaDOM() {
        const image = document.createElement('img')
        image.className = 'photograph-media'
        image.src = this._src

        return image
    }

    saveLikeToLocalStorage(val) {
        try {
            localStorage.setItem(this._id, JSON.stringify(val))
        }catch(error) {
            console.log(error)
        }
    }
}