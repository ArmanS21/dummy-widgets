function QueueTimer(){
    var waitingmin = Math.floor(Math.random() * (20-5)+5);
    var waitingsec = Math.floor(Math.random() * 60);
    return(
        <div>
        <div style={{backgroundColor:"#BBF7D0", width:"100%", height:'100vh'}}>
        <h2 style={{color:"#64748B", fontSize:"10vh"}}>Estimated Security <br></br>Queue Time:</h2>
        <h3 style={{color:"#64748B",fontSize:"10vh"}}>{waitingmin} Minutes {waitingsec} Seconds</h3>
      </div>
      </div>
    )

}
export default QueueTimer