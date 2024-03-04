const Seat = require('../models/seat');
const PlaneDAO = require('../dataAccess/planeDAO');

class SeatDAO{
    constructor(){}

    async create(seatData){
        try{
            //Validamos que el avion exista
            const plane = PlaneDAO.getPlaneById(seatData.planeId);
            if(!plane){
                throw Error('El avion no existe');
            }

            const seat = new Seat(seatData);
            return await seat.save();
        }catch(error){
            throw Error(error);
        }
    }

    async getSeats(limit = 180){
        try{
            return await Seat.find().limit(limit);
        }catch(error){
            throw Error(error);
        }
    }

    async getSeatById(id){
        try{
            return await Seat.findById(id);
        }catch(error){
            throw Error(error);
        }
    }

    async getSeatByPlaneId(planeId, seatId){
        try{
            const plane = await PlaneDAO.find({planeId});
            if(!plane){
                throw Error('El avion no existe');
            }

            //Checar que el asiento exista dentro de este avión
            const seat = await plane.seats.find({seatId});
            if(!seat){
                throw Error('El asiento no existe');
            }

            return seat;
        }catch(error){
            throw Error(error);
        }
    }

    async updateSeat(id, seatData){
        try{

            const seatUpdated = findById(id);
            if(!seatUpdated){
                throw Error('El asiento no existe');
            }

            if (seatData.planeId) {
                const plane = PlaneDAO.getPlaneById(seatData.planeId);
                if (!plane) {
                    throw Error("El avion no existe");
                }
                seatUpdated.planeId = seatData.planeId;
            }

            if(seatData.number){
                seatUpdated.number = seatData.number;
            }

            if(seatData.classType){
                seatUpdated.classType = seatData.classType;
            }

            if(seatData.state){
                seatUpdated.state = seatData.state;
            }

            if(seatData.price){
                seatUpdated.price = seatData.price;
            }

            return await Seat.findByIdAndUpdate(id, seatUpdated, {
                new: true,
            });
        }catch(error){
            throw Error(error);
        }
    }

    async deleteSeat(id){
        try{
            return await Seat.findByIdAndRemove(id);
        }catch(error){
            throw Error(error);
        }
    }
}

module.exports = new SeatDAO();