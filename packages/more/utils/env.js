const fs = require('fs');
const path = require('path');
const expand = require('dotenv-expand');
const dotenv = require('dotenv');

const { NODE_ENV, INIT_CWD: projectRoot } = process.env;

const dotenvFiles = [
  path.resolve(__dirname, '..', '.env.local'),
  path.join(projectRoot, `.env.${NODE_ENV}.local`),
  path.join(projectRoot, `.env.${NODE_ENV}`),
  NODE_ENV !== 'test' && path.join(projectRoot, `.env.local`),
  path.join(projectRoot, `.env`),
].filter(Boolean);

// Load environment variables from .env* files.
// Use local .env as defaults
dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    expand(
      dotenv.config({
        path: dotenvFile,
      })
    );
  }
});
