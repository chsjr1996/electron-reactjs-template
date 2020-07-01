import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export default {
  electron: {
    isDev: process.env.ELECTRON_DEV === 'true',
    windows: {
      mainUrl: process.env.MAIN_WINDOW_URL,
      mainPath: 'file://' + join(__dirname, '..', 'renderer', 'index.html')
    }
  }
};
