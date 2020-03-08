const Sequelize = require('sequelize')
const sequelize = new Sequelize('blog', 'root', 'local123', {
	"host": '127.0.0.1',
	"dialect": "mysql",
	"operatorsAliases": false,
	"pool": {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
})

sequelize
	.authenticate()
	.then(() => {
		console.log('connect success!');
	})
	.catch(err => {
		console.log('connect error:', err);
	})
	sequelize.sync()
	module.exports = sequelize
