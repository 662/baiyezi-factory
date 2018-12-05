import moment from 'moment';

const formatTimestamp = timestamp => moment(timestamp).format('YYYY-MM-DD HH:mm:ss');

const delay = (ms, response = {}) => new Promise(resolve => setTimeout(() => resolve(response), ms));

export { delay, formatTimestamp };
