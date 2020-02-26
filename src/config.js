module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || 0000,
  DB_URL: process.env.DB.URL || 'postgresql:postgres:401923@localhost/*db*',
  TEST_DB_URL: process.env.TEST.DB.URL || 'postgresql:postgres:401923@localhost/*test-db*'
}