module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        // host: env('DATABASE_HOST', '127.0.0.1'),
        // srv: env.bool('DATABASE_SRV', false),
        // port: env.int('DATABASE_PORT', 27017),
        // username: env('DATABASE_USERNAME', ''),
        // password: env('DATABASE_PASSWORD', ''),

        database: env('DATABASE_NAME'),
        uri: env('DATABASE_URI')
        // uri: `${env.DATABASE_URI}`,
        // database: `${env.DATABASE_NAME}`
      },
      options: {
        ssl: true
        // authenticationDatabase: env('AUTHENTICATION_DATABASE', ''),
        // ssl: env.bool('DATABASE_SSL', false),
        // ssl: `${process.env.DATABASE_SSL || false}`,
        // useUnifiedTopology: env.bool('USE_UNIFIED_TOPOLOGY', false)
        // useUnifiedTopology: `${process.env.USE_UNIFIED_TOPOLOGY || false}`,
        // authenticationDatabase: `${process.env.DATABASE_AUTHENTICATION_DATABASE || ''}`
      },
    },
  },
});
