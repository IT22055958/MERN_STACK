import React, {useState} from 'react'
import "./InsertFeedback.css";
import axios from "axios";
import {Link} from "react-router-dom";

const InsertFeedback = () => {

  const [feedbackData, setFeedbackData] = useState({
    clientID:" ",
    clientName: " ",
    clientEmail: "",
    role: "",
    context: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFeedbackData({
      ...feedbackData,
      [name]: value, 
    });

    console.log(feedbackData);
  };

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3000/api/feedback", feedbackData).then(()=> { console.log(feedbackData);
    alert("Your feedback has been submitted!");
    setFeedbackData({
      clientID:" ",
      clientName: " ",
      clientEmail: "",
      role: "",
      context: "",
      type: "",

    });
  });
  
}
  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit} action="/submit-feedback" method="post">
      <div>
    <label for="clientID">Client ID:</label>
    <input type="text" id="clientID" name="clientID" onChange={handleChange} value={feedbackData.clientID}/><br/><br/>
  </div>
  <div>
    <label for="clientName">Name:</label>
    <input type="text" id="clientName" name="clientName" onChange={handleChange} value={feedbackData.clientName}/><br/><br/>
  </div>
  <div>
    <label for="clientEmail">Email:</label>
    <input type="email" id="clientEmail" name="clientEmail" onChange={handleChange} value={feedbackData.clientEmail}/><br/><br/>
  </div>
  <div>
    <label for="role">Role:</label>
    <input type="text" id="role" name="role" onChange={handleChange} value={feedbackData.role}/><br/><br/>
  </div>
  <div>
    <label for="context">Feedback:</label>
    <textarea id="context" name="context" rows="4" cols="50" onChange={handleChange} value={feedbackData.context} ></textarea><br/><br/>
  </div>

  <style>{`
    .container {
      display: flex;
      align-items: center;
    }
  
    label {
      margin-right: 20px; /* Adjust margin as needed */
    }
  `}

</style>
  <div class="container">
    <label for="rate">Rate:</label>
    <select id="type" name="type" onChange={handleChange} value={feedbackData.type} >
    <option value="1">1</option>
    <option value="1.5">1.5</option>
    <option value="2">2</option>
    <option value="2.5">2.5</option>
    <option value="3">3</option>
    <option value="3.5">3.5</option>
    <option value="4">4</option>
    <option value="4.5">4.5</option>
    <option value="5">5</option>
    </select>
  </div>

  <style> {`
   .container2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  .datetime-picker {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }

  input[type="date"],
  input[type="time"] {
    border: none;
    background-color: transparent;
    outline: none;
    margin: 0 10px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
  `}
</style>



  <center>
    <Link to="/insert">
    <button onSubmit={handleSubmit} type="Submit">Submit</button>
    </Link>

  </center>
  </form>
    </div>
  )
}

export default InsertFeedback
