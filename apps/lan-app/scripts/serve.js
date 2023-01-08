/* eslint-disable @typescript-eslint/no-var-requires */
const { networkInterfaces } = require('os');
const { exec } = require('child_process');

function getIPv4Address() {
  const interfaces = networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const int of interfaces[name]) {
      if (int.family === 'IPv4' && !int.internal) {
        return int.address;
      }
    }
  }
  return '127.0.0.1';
}

const ipv4Address = getIPv4Address();

const childProcess = exec(`yarn dev -- -H ${ipv4Address}`);

childProcess.stdout.on('data', (data) => {
  // eslint-disable-next-line no-console
  console.log(data);
});

childProcess.stderr.on('data', (data) => {
  // eslint-disable-next-line no-console
  console.error(data);
});
