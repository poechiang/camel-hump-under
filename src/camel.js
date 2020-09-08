export default ( str ) => {
    return ( str || '' ).replace( /[_-]+[a-zA-Z]/g, ( item ) => ( item.replace( /[_-]/g, '' ).toUpperCase( ) ) );
}