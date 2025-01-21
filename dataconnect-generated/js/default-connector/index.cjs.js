const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'sasik-car-care',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

