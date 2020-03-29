import { join } from 'path';

export default {
  electron: {
    isDev: process.env.ELECTRON_DEV === 'true',
    windows: {
      mainUrl: process.env.MAIN_WINDOW_URL,
      mainPath: join(__dirname, '..', '..', 'dist', 'static', 'index.html')
    }
  }
};
