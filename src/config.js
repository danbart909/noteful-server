module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || 0000,
  DATABASE_URL: 'postgresql://postgres:401923@localhost/noteful',
  TEST_DATABASE_URL: 'postgresql://postgres:401923@localhost/noteful-test'
}

// DATABASE_URL: process.env.DATABASE.URL || 'postgresql:postgres:401923@localhost/noteful',
// TEST_DATABASE_URL: process.env.TEST.DATABASE.URL || 'postgresql:postgres:401923@localhost/noteful-test'