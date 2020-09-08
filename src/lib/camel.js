export default (str) => (str || '').replace(/[_-]+[a-zA-Z]/g, (item) => (item.replace(/[_-]/g, '').toUpperCase()));
