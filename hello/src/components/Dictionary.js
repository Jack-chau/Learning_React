import { useState, useEffect } from 'react' ;
export default function Dictionary ( ) {
    const [ word, setWord ] = useState ( 'Help' ) ; // set function is already asynchronous

    /* This is actually the callback function which is a function passed into another function */
    /* It make sure the state is executed after state is updated */

    // no dependency array --> update for any state change
    // empty dependency array --> execute once
    useEffect (  () => {
        console.log ( 'State Update ' + word);
    }, [ word ] // execute when "word" updated
    ); //limit what state useEffect cares about --> dependency array
        
    const [ word2, setWord2 ] = useState ( '' ) ;
    
    // Passing in data --> only execute when those state variable are changed
    useEffect (  () => {
        console.log ( 'State Update ' + word2 );
    }, [ word2 ]
    );

    return (
        <>
            <input 
                type = "Text"
                onChange = { ( e ) => {
                    setWord ( e.target.value ) ;
                }} 
                />
            <h1>"Let's get the definition for { word }"</h1>

            <input 
                type = "text" 
                onChange = { ( e ) => {
                    setWord2 ( e.target.value )
                }}
            />
            <h2>"Let's get the definition for { word2 }"</h2>
        </>
    );
}
