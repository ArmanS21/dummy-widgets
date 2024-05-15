function QueueTimer(){
    var waitingmin = Math.floor(Math.random() * (20-5)+5);
    var waitingsec = Math.floor(Math.random() * 60);
    return(
        <div>
        <div style={{backgroundColor:"#BBF7D0",padding:10,marginLeft:500,marginRight:500}}>
        <h2 style={{color:"#64748B"}}>Estimated Security <br></br>Queue Time:</h2>
        <h3 style={{color:"#64748B"}}>{waitingmin} Minutes {waitingsec} Seconds</h3>
      </div>
      <div style={{paddingTop:10}}></div>
      </div>
    )

}
export default QueueTimer