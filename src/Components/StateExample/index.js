import React from "react";

function StateFunction() {

    const isInitialMount = React.useRef(true);
    const isUnMountEvent = React.useRef(true);

    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        isUnMountEvent.current = true;
        if (isInitialMount.current) {
            alert("Building Component...");
            isInitialMount.current = false;
        }else{
            alert("Total Value "+counter);
        }
       
        return () => {
            if(isUnMountEvent.current){
                alert("Destroying Component...");
            }            
        };
    }, [counter]);

    const onClicAddButton = () =>{
        isUnMountEvent.current = false;
        setCounter(counter+1);
    }

    return (
        <div style={{ marginTop: 20 + 'px' }}>
            <label>Number Counter: {counter} </label>
            <br></br>
            <button onClick={onClicAddButton}> Add </button>
        </div>
    );
}

export { StateFunction };