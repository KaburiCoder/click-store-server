module.exports = {
  apps: [
    {
      name: 'click-store-backend',
      script: 'dist/main.js',
      instances: 1,
      exec_mode: 'cluster',
    },
  ],
};
