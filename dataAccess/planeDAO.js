const Plane = require("../models/plane");

class PlaneDAO {
    constructor() {}

    async addSeatsToPlane(idPlane, seats) {
        try {
            const plane = await this.findById(idPlane);

            if (!plane) {
                throw new Error("El avion no existe");
            }

            plane.seats.push(
                ...seats.map((seat) => {
                    return {
                        number: seat.number,
                        classType: seat.classType,
                        state: seat.state,
                        price: seat.price,
                    };
                })
            );

            return await plane.save();
        } catch (error) {
            throw Error(error);
        }
    }

    async create(planeData) {
        try {
            const plane = new Plane(planeData);
            return await plane.save();
        } catch (error) {
            throw Error(error);
        }
    }

    async getPlanes(limit = 10) {
        try {
            return await Plane.find().limit(limit);
        } catch (error) {
            throw Error(error);
        }
    }

    async getPlaneById(id) {
        try {
            return await Plane.findById(id);
        } catch (error) {
            throw Error(error);
        }
    }

    async updatePlane(id, planeData) {
        try {
            const planeUpdated = findById(id);
            if (!planeUpdated) {
                throw Error("El avion no existe");
            }
            if (planeData.type) {
                planeUpdated.type = planeData.type;
            }
            if (planeData.seats) {
                planeUpdated.seats = planeData.seats;
            }

            return await Plane.findByIdAndUpdate(id, planeUpdated, {
                new: true,
            });
        } catch (error) {
            throw Error(error);
        }
    }

    async deletePlane(id) {
        try {
            return await Plane.findByIdAndRemove(id);
        } catch (error) {
            throw Error(error);
        }
    }
}

module.exports = new PlaneDAO();
