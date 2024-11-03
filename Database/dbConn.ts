import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://sa:123456@localhost:3306/consultoriomedico');

async function tryconection() {
  try {
    await sequelize.authenticate();
    return sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { sequelize };