module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'barbershop',
  define: {
    timestamp: true,
    underscored: true,
    underscored_all: true
  }
};
