export default (str) => (str || '').replace(/[A-Z]/g, (item) => (`-${item}`)).toLowerCase().replace(/[-_]+/g, '-');
