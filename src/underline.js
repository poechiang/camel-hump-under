export default ( str ) => {
    return ( str || '' ).replace( /[_-]*[A-Z]/g, ( item ) => ( item.replace( /[_-]/g, '_' ).toLowerCase( ) ) ).toLowerCase( );
}