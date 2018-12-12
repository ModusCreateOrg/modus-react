const fs = require('fs');

function copyPublicFolder() {
  if (!process.env.PUBLIC_DIR) {
    return;
  }
  fs.copySync(process.env.PUBLIC_DIR, process.env.BUILD_DIR, {
    dereference: true,
    filter: file => file !== 'index.html',
  });
}

module.exports = copyPublicFolder;
