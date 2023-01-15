import { useState, useEffect } from 'react' ;
export default function Dictionary ( ) {
    const [ word, setWord ] = useState ( 'Help' ) ;

    /* This is actually the callback function which is a function passed into another function */
    /* It make sure the state is executed after state is updated */
    useEffect (  () => {
        console.log ( 'State Update', word + ' ' + word2 );
    }); //limit what state useEffect cares about --> dependency array
        
    const [ word2, setWord2 ] = useState ( '' ) ;
    
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
                    setWord2 ( e.target.value  )
                }}
            />
            <h2>"Let's get the definition for { word2 }"</h2>
        </>
    );
}
