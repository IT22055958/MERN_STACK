import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FeedbackCard from './FeedbackCard';
import "./FeedbackList.css";


const FeedbackList = () => {

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/feedback/").then((res)=>{
      setFeedback(res.data);
      console.log(res.data);

    }).catch(()=>{
      console.log("error while getting data");
    })
  }, []);

  const FeedbackList = feedback.length === 0 ? "no feedbacks found ! " : feedback.map((feedback, index)=> <FeedbackCard key={index} feedback={feedback}/>);

  return (
    <div className="showFeedbackList">
        <div className="container">
          <div className="list">{FeedbackList}</div>
        </div>
    </div>
  )
}

export default FeedbackList
