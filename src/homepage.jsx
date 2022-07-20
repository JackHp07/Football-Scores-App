import React from "react";
import "./homepage.css"
 function Homepage(props){
 const [goalsScoredInput,setGoalsScoredInput]=React.useState(0);
 const [AssistsInput,setAssistsInput]=React.useState(0);
 const [AppearancesMadeInput,setAppearancesMadeInput]=React.useState(0);

 const [Goals,setGoals]=React.useState(0);
 const [Assists,setAssists]=React.useState(0);
 const [Appearances,setAppearancesMade]=React.useState(0);
 const handlegoalsScoredinputchanged=(e)=>{
  setGoalsScoredInput(e.target.value);
  
 }
 const handleassistsinputchanged=(e)=>{
  setAssistsInput(e.target.value);
  
 }
 const handleappearancesmadeinputchanged=(e)=>{
  setAppearancesMadeInput(e.target.value);
  
 }
 const onupdatestatsbuttonclicked=()=>{
   setGoals(parseInt(Goals)+parseInt(goalsScoredInput));
   setAssists(parseInt(Assists)+parseInt(AssistsInput));
   setAppearancesMade(parseInt(Appearances)+parseInt(AppearancesMadeInput));
  
   setGoalsScoredInput(0)
   setAssistsInput(0)
   setAppearancesMadeInput(0)
 }
    return(
        <div className="homepagediv">
        <h1>Personal Stats Tracker</h1>
        <div className='datadisplaycontainer'>
         <p>{props.name}</p>
       <div className='headingsanddataitems'>
         <h4 className='headings'>Goals</h4>
          <p className='datadisplayitem'>{Goals}</p>
       </div>
       <div className='headingsanddataitems'>
         <h4 className='headings'>Assists</h4>
          <p className='datadisplayitem'>{Assists}</p>
       </div>
       <div className='headingsanddataitems'>
         <h4 className='headings'>Appearances</h4>
          <p className='datadisplayitem'>{Appearances}</p>
       </div>
        </div>
        <div className='updaterecordcontainer'>
         <div className='inputlabelcontainer'>
            <label className='inputlabel' >Enter goals scored </label>
            <input type="number" min="0"className='numberfield'value={goalsScoredInput} onChange={(e)=>{handlegoalsScoredinputchanged(e)}}></input>
           
         </div>
         <div className='inputlabelcontainer'>
            <label className='inputlabel'>Enter Assists  </label>
            <input type="number" min="0"className='numberfield'value={AssistsInput} onChange={(e)=>{handleassistsinputchanged(e)}}></input>
         </div>
         <div className='inputlabelcontainer'>
            <label className='inputlabel'>Enter Appearances Made </label>
            <input type="number" min="0"className='numberfield'value={AppearancesMadeInput} onChange={(e)=>{handleappearancesmadeinputchanged(e)}}></input>
         </div>
         <button className='updatestatsbutton' onClick={()=>onupdatestatsbuttonclicked()}>Update Stats</button>
        
        </div>
        </div>
    )
}
export default Homepage