// Code Keypad Component Here

function Keypad (){

    function handleInput(){
        console.log('Entering password...')
    }

    return (
        <div>
            <input type='password' placeholder='password' onChange= {handleInput} />
        </div>
    )
}

export default Keypad;