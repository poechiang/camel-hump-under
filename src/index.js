export const underline = ( str ) => {
    return ( str || '' ).replace( /[A-Z-]/g, ( item ) => ( '_' + item.toLowerCase( ) ) ).split( '_' ).filter( ( item ) => ( !!item ) ).join( '_' );
}

export const camel = ( str ) => {
    return ( str || '' ).replace( /[_-][a-z]/g, ( item ) => ( item.replace( /[_-]/g, '' ).toUpperCase( ) ) );
}

export const hump = ( str ) => {
    return ( str || '' ).replace( /[A-Z_]/g, ( item ) => ( '-' + item.toLowerCase( ) ) ).split( '-' ).filter( ( item ) => ( !!item ) ).join( '-' );
}