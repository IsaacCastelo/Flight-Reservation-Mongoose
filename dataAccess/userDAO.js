const User = require('../models/user');

class UserDAO{
    constructor(){}

    async create(userData){
        try{
            const user = new User(userData);
            return await user.save();
        }catch(error){
            throw Error(error);
        }
    }

    async getUsers(limit = 10){
        try{
            return await User.find().limit(limit);
        }catch(error){
            throw Error(error);
        }
    }

    async gerUserById(id){
        try{
            return await User.findById(id);
        }catch(error){
            throw Error(error);
        }
    }

    async updateUser(id, userData){
        try{

            const userUpdated = findById(id);
            if(!userUpdated){
                throw Error('El usuario no existe');
            }
            if(userData.name){
                userUpdated.name = userData.name;
            }
            if(userData.role){
                userUpdated.role = userData.role;
            }
            if(userData.email){
                userUpdated.email = userData.email;
            }
            if(userData.password){
                userUpdated.password = userData.password;
            }
            return await User.findByIdAndUpdate(id, userUpdated, {
                new: true,
            });
        }catch(error){
            throw Error(error);
        }
    }

    async deleteUser(id){
        try{
            return await User.findByIdAndRemove(id);
        }catch(error){
            throw Error(error);
        }
    }
}

module.exports = new UserDAO();