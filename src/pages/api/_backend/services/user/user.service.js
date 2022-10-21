const boom = require('@hapi/boom');

const { models } = require('libs/sequelize');

class UserService {
  async find() {
    const users = await models.User.findAll();
    delete users.dataValues.password;
    return users;
  }

  async findByEmail(email) {
    const user = await models.User.findOne({
      where: { email }
    });
    return user;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('Email not found');
    }
    delete user.dataValues.password;
    return user;
  }

  async create(data) {
    const newUser = await models.User.create({
      ...data
    });
    return newUser;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
