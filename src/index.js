import { TEMP_UPLOAD_DIR } from './constants/index.js';
import { initMongoConnection } from "./db/initMongoConnection.js";
import { setupServer } from "./server.js";
import { createCatalog } from './utils/createCatalog.js';

const bootstrap = async () => {
  await initMongoConnection();
  await createCatalog(TEMP_UPLOAD_DIR);
  setupServer();
};

bootstrap();

