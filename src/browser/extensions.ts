import installExtensions, {
  REACT_DEVELOPER_TOOLS
} from 'electron-devtools-installer';

export function install() {
  // React Dev Tools
  installExtensions(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added extension: ${name}`))
    .catch(err => console.log(`An error occurred: ${err}`));
}
