import {Sequelize} from 'sequelize';

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('CRMProject', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        // Dev
        await sequelize.sync({ alter: true });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}



export {sequelize,connectDatabase}