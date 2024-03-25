export class Car {
    constructor(car){
        this.make = car.make;
        this.model = car.model;
        this.year = car.year;
        this.price = car.price;
        this.seats = car.seats;
        this.doors = car.doors;
        this.driveType = car.driveType;
        this.transmissionType = car.transmissionType;
        this.fuelType = car.fuelType;
        this.mileage = car.mileage;
        this.stockNumber = car.stockNumber;
        this.dealerNumber = car.dealerNumber;
        this.details = car.details;
        this.image = car.image;
    }

    getMake() {
        return this.make;
    }

    getModel() {
        return this.model;
    }

    getYear() {
        return this.year;
    }

    getPrice() {
        return this.price;
    }

    getSeats() {
        return this.seats;
    }

    getDoors() {
        return this.doors;
    }

    getDriveType() {
        return this.driveType;
    }

    getTransmissionType() {
        return this.transmissionType;
    }

    getFuelType() {
        return this.fuelType;
    }

    getMileage() {
        return this.mileage;
    }

    getStockNumber() {
        return this.stockNumber;
    }

    getDealerNumber() {
        return this.dealerNumber;
    }

    getDetails() {
        return this.details;
    }

    getImage() {
        return this.image;
    }

    setMake(make) {
        this.make = make;
    }

    setModel(model) {
        this.model = model;
    }

    setYear(year) {
        this.year = year;
    }

    setPrice(price) {
        this.price = price;
    }

    setSeats(seats) {
        this.seats = seats;
    }

    setDoors(doors) {
        this.doors = doors;
    }

    setDriveType(driveType) {
        this.driveType = driveType;
    }

    setTransmissionType(transmissionType) {
        this.transmissionType = transmissionType;
    }

    setFuelType(fuelType) {
        this.fuelType = fuelType;
    }

    setMileage(mileage) {
        this.mileage = mileage;
    }

    setStockNumber(stockNumber) {
        this.stockNumber = stockNumber;
    }

    setDealerNumber(dealerNumber) {
        this.dealerNumber = dealerNumber;
    }

    addDetails(details) {
        this.details.push(details);
    }

    setDetails(details) {
        this.details = details;
    }

    setImage(image) {
        this.image = image;
    }



    toString() {
        return `${this.year} ${this.make} ${this.model} for sale at dealer #${this.dealerNumber} for $${this.price}.`;
    }
}

export class CarBuilder {
    constructor(make, model, year, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.params = [
            'make',
            'model',
            'year',
            'price',
            'seats',
            'doors',
            'driveType',
            'transmissionType',
            'fuelType',
            'mileage',
            'stockNumber',
            'dealerNumber'
        ]
    }

    setSeats(seats) {
        this.seats = seats;
        return this;
    }

        setDoors(doors) {
            this.doors = doors;
            return this;
        }

    setDriveType(driveType) {
        this.driveType = driveType;
        return this;
    }

    setTransmissionType(transmissionType) {
        this.transmissionType = transmissionType;
        return this;
    }

    setImage(image) {
        this.image = image;
        return this;
    }

    setFuelType(fuelType) {
        this.fuelType = fuelType;
        return this;
    }

    setMileage(mileage) {
        this.mileage = mileage;
        return this;
    }

    setStockNumber(stockNumber) {
        this.stockNumber = stockNumber;
        return this;
    }

    setDealerNumber(dealerNumber) {
        this.dealerNumber = dealerNumber;
        return this;
    }

    setDetails(details) {
        this.details = details;
        return this;
    }


    build() {
        return {
            make: this.make,
            model: this.model,
            year: this.year,
            price: this.price,
            seats: this.seats,
            doors: this.doors,
            driveType: this.driveType,
            transmissionType: this.transmissionType,
            fuelType: this.fuelType,
            mileage: this.mileage,
            stockNumber: this.stockNumber,
            dealerNumber: this.dealerNumber,
            details: this.details,
            image: this.image,
        };
    }
}
