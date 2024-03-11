const Payment = require('../models/payment');
const ReservationDAO = require('../dataAccess/reservationDAO');

class PaymentDAO {
    constructor() {}

    async create(paymentData) {
        try {
            //Checar que la reservacion exista
            const reservation = ReservationDAO.getReservationById(
                paymentData.reservationId
            );
            if (!reservation) {
                throw Error('La reservacion no existe');
            }

            const payment = new Payment(paymentData);
            return await payment.save();
        } catch (error) {
            throw Error(error);
        }
    }

    async getPayments(limit = 10) {
        try {
            return await Payment.find().limit(limit);
        } catch (error) {
            throw Error(error);
        }
    }

    async getPaymentById(id) {
        try {
            return await Payment.findById(id);
        } catch (error) {
            throw Error(error);
        }
    } 

    async updatePayment(id, paymentData) {
        try {
            const paymentUpdated = findById(id);
            if (!paymentUpdated) {
                throw Error('El pago no existe');
            }
            if (paymentData.reservationId) {
                const reservation = ReservationDAO.getReservationById(
                    paymentData.reservationId
                );
                if (!reservation) {
                    throw Error('La reservacion no existe');
                }
                paymentUpdated.reservationId = paymentData.reservationId;
            }
            if (paymentData.paymentMethod) {
                paymentUpdated.paymentMethod = paymentData.paymentMethod;
            }
            if (paymentData.transactionId) {
                paymentUpdated.transactionId = paymentData.transactionId;
            }
            return await Payment.findByIdAndUpdate(id, paymentUpdated, {
                new: true,
            });
        } catch (error) {
            throw Error(error);
        }
    }
}