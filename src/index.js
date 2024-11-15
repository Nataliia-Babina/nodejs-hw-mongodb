import { DOWNLOAD_DIRECTORY } from './constants/index.js';
import { initMongoConnection } from "./db/initMongoConnection.js";
import { setupServer } from "./server.js";
import { createCatalog } from './utils/createCatalog.js';

const bootstrap = async () => {
  await initMongoConnection();
  await createCatalog(DOWNLOAD_DIRECTORY);
  setupServer();
};

bootstrap();

