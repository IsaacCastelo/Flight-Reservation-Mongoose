const Flight = require("../models/flight");
const PlaneDAO = require("../dataAccess/planeDAO");
const SeatDAO = require("../dataAccess/seatDAO");

class FlightDAO {
    constructor() {}

    async create(flightData) {
        try {
            //Checar el asiento que quiere registrar
            const seat = seatDAO.getSeatByPlaneId(flightData.planeId, flightData.seatId);
            //Checar la disponibilidad del asiento
            //change state for available
            if (!seat.state) {
                //Si no esta disponible mandar mensaje de error
                throw Error("El asiento no esta disponible");
            }
            //Si esta disponible registrar el asiento
            SeatDAO.updateSeat(flightData.seatId, { state: false });
            const flight = new Flight(flightData);
            return await flight.save();
        } catch (error) {
            throw Error(error);
        }
    }

    async getFlights(limit = 10) {
        try {
            return await Flight.find().limit(limit);
        } catch (error) {
            throw Error(error);
        }
    }

    async getFlightById(id) {
        try {
            return await Flight.findById(id);
        } catch (error) {
            throw Error(error);
        }
    }

    async updateFlight(id, flightData) {
        try {
            const flightUpdated = findById(id);
            if (!flightUpdated) {
                throw Error("El vuelo no existe");
            }
            if (flightData.idPlane) {
                const plane = PlaneDAO.getPlaneById(flightData.idPlane);
                if (!plane) {
                    throw Error("El avion no existe");
                }
                flightUpdated.idPlane = flightData.idPlane;
            }
            if (flightData.origin) {
                flightUpdated.origin = flightData.origin;
            }
            if (flightData.destiny) {
                flightUpdated.destiny = flightData.destiny;
            }
            if (flightData.departureDate) {
                flightUpdated.departureDate = flightData.departureDate;
            }
            if (flightData.arrivalDate) {
                flightUpdated.arrivalDate = flightData.arrivalDate;
            }
            if (flightData.luggage) {
                flightUpdated.luggage = flightData.luggage;
            }
            if (flightData.cost) {
                flightUpdated.cost = flightData.cost;
            }
            return await Flight.findByIdAndUpdate(id, flightUpdated, {
                new: true,
            });
        } catch (error) {
            throw Error(error);
        }
    }

    async deleteFlight(id) {
        try {
            return await Flight.findByIdAndRemove(id);
        } catch (error) {
            throw Error(error);
        }
    }
}

module.exports = new FlightDAO();
