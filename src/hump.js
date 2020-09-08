export default ( str ) => {
    let [ first, ...others ] = ( str || '' ).replace( /[_-]+[a-zA-Z]/g, ( item ) => ( item.replace( /[_-]/g, '' ).toUpperCase( ) ) );
    return first.toUpperCase( ) + others.join( '' )
}