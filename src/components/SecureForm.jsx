import React from "react";
const Randomizer = () => {
    const [number, setNumber] = React.useState(Math.floor(Math.random() * (80-5)+5));
    React.useEffect(() => {

      const interval = setInterval(
        () => setNumber(Math.floor(Math.random() * (80-5)+5)),
        1500
      );
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return number;
  };


function SecureForm(){
return(
    <div style={{height:'85vh', width:'100%',background:'#FECACA',display: 'flex', justifyContent: 'center', alignItems:'center'}}>

    <form style={{fontSize:'4vh', fontWeight:'bold'}}>
    Available Guards<br/>
    <div style ={{background:'#BBF7D0', marginBottom:'1vh'}}>{Randomizer()}</div>
    <label for='guardcount'> Number of Guards Requested </label><br/>
    <select name="guardcount" id="guardcount">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
     <option value="4">4</option>
    </select><br/>
    <label for='reason'>Reason for Request </label><br/>
    <input style={{paddingBottom:'1vh', marginTop:'2vh'}} type ='text' id='reason' placeholder="Littering"/><br/>
    <label for='urgency'>Level of Urgency </label><br/>
    <select name="urgency">
    <option value="1">Inconvenience</option>
    <option value="2">Urgent</option>
    <option value="3">Imminent Danger</option>
     <option value="4">Catastrophic Potential</option>
    </select><br/>
    <button style={{marginTop:'2vh',background:'#BBF7D0', width:'100%', height:'10vh', fontSize:'5vh'}}>Request Help</button>
    </form>
    </div>
)
}
export default SecureForm;