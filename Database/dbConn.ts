import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL);

async function tryconection() {
  try {
    await sequelize.authenticate();
    return sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { sequelize };