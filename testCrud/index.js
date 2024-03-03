const mongoose = require('mongoose');
const UserCRUD = require('./crudtest'); 

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/FRP', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch((error) => console.error('Error conectando a MongoDB:', error));

// Ejemplo de cómo usar la clase UserCRUD
async function testCRUD() {
  try {
    // Crear un nuevo usuario
    const newUser = await UserCRUD.createUser({
      name: 'Juan Perez',
      role: 'Client',
      email: 'juanperez@example.com',
      password: 'securepassword123',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log('Usuario creado:', newUser);

    // Obtener un usuario por ID
    const user = await UserCRUD.getUserById(newUser._id);
    console.log('Usuario obtenido:', user);

    // Actualizar un usuario
    //const updatedUser = await UserCRUD.updateUser(newUser._id, { name: 'Juan P. Actualizado' });
  //  console.log('Usuario actualizado:', updatedUser);

    // Eliminar un usuario
  //  const deleteMessage = await UserCRUD.deleteUser(updatedUser._id);
   // console.log(deleteMessage);
  } catch (error) {
    console.error('Error durante las pruebas CRUD:', error);
  }
}

testCRUD();
