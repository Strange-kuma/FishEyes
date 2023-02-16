class photographersProfil {
    constructor(Mediadata) {
        
        this._id = Mediadata.id
        this._photographerId = Mediadata.photographerId
        this._image = Mediadata.image
        this._likes = Mediadata.likes
        this._date = Mediadata.date
        this._price = Mediadata.price
    }
  

    get id() {
        return this._id
    }

    get photographerId() {
        return this._photographerId
    }

    get image() {
        return `/assets/images/${this._photographerId}/${this._image}`
    }

    get likes() {
        return this._likes
    }

    get date() {
        return this._date
    }

    get price() {
        return this._price
    }
}