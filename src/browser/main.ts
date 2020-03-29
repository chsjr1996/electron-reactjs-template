import { app, BrowserWindow } from 'electron';

// windows
import win from './windows/win';
import MainWindow from './windows/main/MainWindow';

// configs
import envs from './envs';

class Main {
  constructor() {
    const {
      electron: { isDev }
    } = envs;

    this.isDev = isDev;
    this.run();
  }

  /**
   * The opened application windows
   */
  private windows: BrowserWindow[] = [];

  /**
   * Electron dev environment
   */
  private isDev: boolean = false;

  /**
   * Run application
   */
  private run() {
    // app events
    app.on('ready', () => {
      if (this.isDev) {
        this.installDevExtensions();
      }

      // The main window
      this.windows[win.main] = new MainWindow();
      this.windows[win.main].on(
        'closed',
        () => (this.windows[win.main] = null)
      );
    });

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });
  }

  /**
   * Install extensions for help development process
   */
  private installDevExtensions() {
    require('./extensions').install();
  }
}

new Main();
