const mongoose = require('mongoose');
const Flight = require('./models/flight');
const Payment = require('./models/payment');
const Plane = require('./models/plane');
const Reservation = require('./models/reservation');
const Seat = require('./models/seat');
const User = require('./models/user');

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error de conexión a la base de datos:', error);
});

db.once('open', async () => {
  console.log('Conexión exitosa a la base de datos');

  try {
    // Crear un usuario
    const user = new User({
      name: 'John Doe',
      role: 'Administrator',
      email: 'john@example.com',
      password: 'password123',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const savedUser = await user.save();
    console.log('Usuario creado:', savedUser);

    // Crear un avión
    const plane = new Plane({
      type: 'Jet',
      seats: [], 
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const savedPlane = await plane.save();
    console.log('Avión creado:', savedPlane);

    // Crear un asiento asociado al avión
    const seat = new Seat({
      idPlane: savedPlane._id,
      num: 'A1',
      classType: 'Business',
      state: 1, // 1 para disponible, 0 para no disponible
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const savedSeat = await seat.save();
    console.log('Asiento creado:', savedSeat);

    // Crear un vuelo asociado al avión
    const flight = new Flight({
      idPlane: savedPlane._id,
      origin: 'City A',
      destiny: 'City B',
      departureDate: new Date(),
      arrivalDate: new Date(),
      luggage: 2,
      cost: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const savedFlight = await flight.save();
    console.log('Vuelo creado:', savedFlight);

    // Crear una reservación asociada al usuario y al vuelo
    const reservation = new Reservation({
      idUser: savedUser._id,
      idFlight: savedFlight._id,
      state: 'Confirmed', // Estado de la reservación
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const savedReservation = await reservation.save();
    console.log('Reservación creada:', savedReservation);

    // Crear un pago asociado a la reservación
    const payment = new Payment({
      idReservation: savedReservation._id,
      paymentMethod: 'Credit Card',
      transactionId: '123456789',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const savedPayment = await payment.save();
    console.log('Pago creado:', savedPayment);

    // Cierra la conexión a la base de datos
    mongoose.connection.close();
  } catch (error) {
    console.error('Error al realizar las operaciones:', error);
  }
});
