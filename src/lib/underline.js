export default (str) => (str || '').replace(/[A-Z]/g, (item) => (`_${item}`)).toLowerCase().replace(/[-_]+/g, '_');
