import path from "path";

const rootPath = __dirname;

const config = {
  rootPath,
  publicPath: path.join(rootPath, 'public'),
  db: process.env.MONGO_URL || 'mongodb://localhost:27017/marketplace?authSource=admin',
};

export default config;