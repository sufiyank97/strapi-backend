module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        // host: env('DATABASE_HOST', '127.0.0.1'),
        // srv: env.bool('DATABASE_SRV', false),
        // port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'kiaOrana'),
        // username: env('DATABASE_USERNAME', ''),
        // password: env('DATABASE_PASSWORD', ''),
        uri: "mongodb://sufiyan2:Sufiyan2@cluster0-shard-00-00.ooi6z.mongodb.net:27017,cluster0-shard-00-01.ooi6z.mongodb.net:27017,cluster0-shard-00-02.ooi6z.mongodb.net:27017/kiaOrana?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
      },
      options: {
        // ssl: true
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
