import envs from '../../envs';

const {
  electron: {
    isDev,
    windows: { mainPath, mainUrl }
  }
} = envs;

export default {
  browserWindow: {
    width: 800,
    height: 600
  },
  baseUrl: isDev ? mainUrl : mainPath
};
