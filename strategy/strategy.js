function TravelByBicycle() {
    this.calculateCheckPoints = data => {
        //caculate {lat,long} checkpoints algorithm routes by bicycle
        return [{ lat: 1.1, long: 2.2 }, { lat: 1.2, long: 1.3 }]
    }
}

function TravelByCar() {
    this.calculateCheckPoints = data => {
        //caculate {lat,long} checkpoints algorithm routes by car
        return [{ lat: 10.1, long: 20.2 }, { lat: 30.0, long: 40.0 }]
    }
}

function TravelByBus() {
    this.calculateCheckPoints = data => {
        //caculate {lat,long} checkpoints algorithm routes by bus
        return [{ lat: 11.1, long: 12.2 }, { lat: 11.2, long: 11.3 }]
    }
}

function TravelByFlight() {
    this.calculateCheckPoints = data => {
        //caculate {lat,long} checkpoints algorithm routes by flight
        return [{ lat: 13.1, long: 32.2 }, { lat: 31.2, long: 31.3 }]
    }
}


function Routing() {
    this.route = "";
    
    this.setStrategy = (route) => {
        this.route = route
    }

    this.caculate = (data) => {
        return this.route.calculateCheckPoints(data);
    }
    
}


const data = { budget: '1111', time: '2h' }
// const bicycle = new TravelByBicycle();
// const car = new TravelByCar();
// const bus = new TravelByBus();
// const flight = new TravelByFlight();


// console.log(bicycle.calculateCheckPoints(data));
// console.log(car.calculateCheckPoints(data));
// console.log(bus.calculateCheckPoints(data));
// console.log(flight.calculateCheckPoints(data));



//new way to use strategy pattern
const routing = new Routing();
routing.setStrategy(new TravelByBicycle())
const bicycleRoutes = routing.caculate(data);
console.log(bicycleRoutes);

routing.setStrategy(new TravelByCar())
const carRoutes = routing.caculate(data);
console.log(carRoutes);

routing.setStrategy(new TravelByBus())
const busRoutes = routing.caculate(data);
console.log(busRoutes);

routing.setStrategy(new TravelByFlight())
const flightRoutes = routing.caculate(data);
console.log(flightRoutes);



