

function ProgBar() {
  return (
    <div style={{fontSize:"3.2vh", stroke:"white", paddingBottom:'0.5vh'}}>
        <p style={{background:'#FECACA', height:'5vh'}}>London <progress style={{width:"50%", height:'3.5vh'}} value={null} /> W.Sydney</p>



        <p style={{background:'#E9D5FF'}}>Panama <progress style={{width:"50%", height:'3.5vh'}} value={null} /> W.Sydney</p>
        
        <p style={{background:'#FECACA', height:'5vh'}}>Mexico <progress style={{width:"50%", height:'3.5vh'}} value={null} /> W.Sydney</p>

    <p style={{background:'#FED7AA'}}>Newark <progress style={{width:"50%", height:'3.5vh'}} value={null} /> W.Sydney</p>


    <p style={{background:'#BBF7D0'}}>Perth <progress style={{width:"50%", height:'3.5vh'}} value={null} /> W.Sydney</p>

    <p style={{background:'#E9D5FF'}}>Boston <progress style={{width:"50%", height:'3.5vh'}} value={null} /> W.Sydney</p>
    <p style={{background:'#FECACA', height:'5vh'}}> Dallas <progress style={{width:"50%", height:'3.5vh'}} value={null} /> W.Sydney</p>

    <p style={{background:'#FED7AA'}}>Chicago <progress style={{width:"50%", height:'3.5vh'}} value={null} /> W.Sydney</p>




    <p style={{background:'#E9D5FF'}}> Memphis <progress style={{width:"50%", height:'3.5vh'}} value={null} /> W.Sydney</p>
    <p style={{background:'#FED7AA'}}>Quebec <progress style={{width:"50%", height:'3.5vh'}} value={null} /> W.Sydney</p>
  

    <p style={{background:'#BBF7D0'}}>Albany <progress style={{width:"50%", height:'3.5vh'}} value={null} /> W.Sydney</p>

    </div>
  );
}

export default ProgBar;