const sequelize = require('../database')
const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')
const moment = require('moment')

const User = sequelize.define('user', { 
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true, 
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(64),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(128),
    unique: true,
    allowNull: false
  },
  pwd: {
    type: Sequelize.STRING,
    set(val) {
      const salt = bcrypt.genSaltSync(10);
      const pwd = bcrypt.hashSync(val, salt);
      this.setDataValue("pwd", pwd);
    },
    allowNull: false,
  },
  token: {
    type:Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD')
    }
  },
  auth: {
    type: Sequelize.INTEGER(1),
    defaultValue: 0 // admin auth login 1: admin 0: normal
  }
},
{})
module.exports = User