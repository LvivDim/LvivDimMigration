const { env } = process;

const project = env['MONGO_ATLAS_PROJECT'];
const database = env['DB_NAME'];
const user = env['DB_USER'];
const pass = env['DB_PASS'];

const config = {
  mongodb: {
    url: `mongodb+srv://${user}:${pass}@${project}/${database}?retryWrites=true&w=majority`,
    databaseName: database,
    options: {
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    }
  },
  migrationsDir: 'migrations',
  changelogCollectionName: 'migrations',
  migrationFileExtension: '.js',
  useFileHash: false,
  moduleSystem: 'commonjs'
};

module.exports = config;
