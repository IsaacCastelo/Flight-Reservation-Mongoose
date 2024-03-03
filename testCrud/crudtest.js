const User = require('../models/user'); 

class UserCRUD {
  static async createUser(userData) {
    try {
      const user = new User(userData);
      await user.save();
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(userId) {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(userId, updateData) {
    try {
      const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(userId) {
    try {
      await User.findByIdAndDelete(userId);
      return { message: 'User deleted successfully' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserCRUD;
