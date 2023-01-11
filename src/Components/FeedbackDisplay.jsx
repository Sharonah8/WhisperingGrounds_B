import React,{ useState,useEffect } from "react";
import "../Styles/FeedbackDisplay.css";

function FeedbackDisplay() {
  
  
const [feedbacks, setFeedback]=useState([]);
 useEffect(()=>{
    fetch(`http://localhost:3000/feedback`)
    .then(res=>res.json())
    .then(data=>setFeedback(data))

},[])

console.log('This the fetch data',feedbacks)
function handleBlur(e){
    console.log(e.target.innerText)
    // //console.log(typeof(e.target.innerText))
    // setComment(previousState=>{
    //     previousState=e.target.innerText
    //     return previousState;
    // })
    // console.log('This is new comment:',changedComment)
    // // console.log("handle Blur")

       fetch(`https://powerful-escarpment-81140.herokuapp.com/feedbacks/${e.target.id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body:JSON.stringify({"comment":e.target.innerText})
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
}

 const cards=feedbacks.map(feedback=>{
    return (
    <div key={feedback.id} className="feedbackCard" >
        <p contentEditable='true' onBlur={handleBlur} id={feedback.id}>{feedback.comment}</p>
        <img src={feedback.photo_url} alt='img' id="feed-pic" />
        <p>{feedback.name}</p>
        {/* <button onClick={handleDelete} id="my-x-btn">x</button> */}
         <button onClick={handleDelete}  id={feedback.id} >x</button>
    </div>)
 })
 
 //console.log(feedbacks)
 function handleDelete(e){
    const newfeedbacks=feedbacks.filter(item=>{
        // console.log(e.target)
        // console.log(item.id)
       return item.id !== parseInt(e.target.id)
    })

    setFeedback(newfeedbacks)
    console.log('This is newfeedback:',newfeedbacks)
    
    fetch(`https://powerful-escarpment-81140.herokuapp.com/feedbacks/${e.target.id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
}



  return (
    <div className="feed">
      <div className="cont2">
        <h1>What our customers have to say about us</h1>
          <div className='fcontainer'>
            {cards}
          </div>
      </div>
    </div>
  );
}

export default FeedbackDisplay;