const Reservation = require("../models/reservation");
const UserDAO = require("../dataAccess/userDAO");
const FlightDAO = require("../dataAccess/flightDAO");

class ReservationDAO {
    constructor() {}

    async create(reservationData) {
        try {
            //Checar que el usuario exista
            const user = UserDAO.getUserById(reservationData.userId);
            if (!user) {
                throw Error("El usuario no existe");
            }
            //Checar que el vuelo exista
            const flight = FlightDAO.getFlightById(reservationData.flightId);
            if (!flight) {
                throw Error("El vuelo no existe");
            }

            const reservation = new Reservation(reservationData);
            return await reservation.save();
        } catch (error) {
            throw Error(error);
        }
    }

    async getReservations(limit = 10) {
        try {
            return await Reservation.find().limit(limit);
        } catch (error) {
            throw Error(error);
        }
    }

    async getReservationById(id) {
        try {
            return await Reservation.findById(id);
        } catch (error) {
            throw Error(error);
        }
    }

    async updateReservation(id, reservationData) {
        try {
            const reservationUpdated = findById(id);
            if (!reservationUpdated) {
                throw Error("La reservacion no existe");
            }
            if (reservationData.idUser) {
                const user = UserDAO.getUserById(reservationData.idUser);
                if (!user) {
                    throw Error("El usuario no existe");
                }
                reservationUpdated.idUser = reservationData.idUser;
            }
            if (reservationData.idFlight) {
                const flight = FlightDAO.getFlightById(
                    reservationData.idFlight
                );
                if (!flight) {
                    throw Error("El vuelo no existe");
                }
                reservationUpdated.idFlight = reservationData.idFlight;
            }
            if (reservationData.state) {
                reservationUpdated.state = reservationData.state;
            }
            return await Reservation.findByIdAndUpdate(id, reservationUpdated, {
                new: true,
            });
        } catch (error) {
            throw Error(error);
        }
    }

    async deleteReservation(id) {
        try {
            return await Reservation.findByIdAndRemove(id);
        } catch (error) {
            throw Error(error);
        }
    }
}

module.exports = new ReservationDAO();
