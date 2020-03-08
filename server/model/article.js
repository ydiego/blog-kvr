const sequelize = require('../database')
const Sequelize = require('sequelize')
const moment = require('moment') 

const article = sequelize.define('article', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true, 
    autoIncrement: true
  },
  title: {
    allowNull: false,
    type: Sequelize.STRING(255),
    unique: {
      'msg': '重复的标题'
    }
  },
  visitCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  author: {
    type: Sequelize.STRING,
    defaultValue: 'ydiego'
  },
  summary: Sequelize.TEXT,
  tag: Sequelize.STRING,
  content: Sequelize.TEXT,
  content_md: Sequelize.TEXT,
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm')
    }
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm')
    }
  }
},{})

module.exports = article