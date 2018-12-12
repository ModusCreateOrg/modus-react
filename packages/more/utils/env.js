const path = require('path');
const find = require('find-file-up');

// Find .env or .env.local
const envFile =
  find.sync('.env') ||
  find.sync('.env.local') ||
  path.resolve(__dirname, '..', '.env.local');

require('dotenv').config({ path: envFile });
