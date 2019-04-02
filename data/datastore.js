const Datastore = require('react-native-local-mongodb');
export const db = new Datastore({ filename: 'asyncStorageKey', autoload: true });