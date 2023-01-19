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

function resolveHost(optionsHost) {
  let host
  if (optionsHost === undefined || optionsHost === false) {
    // Use a secure default
    host = 'localhost'
  } else if (optionsHost === true) {
    // If passed --host in the CLI without arguments
    host = undefined // undefined typically means 0.0.0.0 or :: (listen on all IPs)
  } else {
    host = optionsHost
  }

  return host;
}

const ipv4Address = resolveHost();

const childProcess = exec(`yarn dev -H ${ipv4Address}`);

childProcess.stdout.on('data', (data) => {
  // eslint-disable-next-line no-console
  console.log(data);
});

childProcess.stderr.on('data', (data) => {
  // eslint-disable-next-line no-console
  console.error(data);
});
