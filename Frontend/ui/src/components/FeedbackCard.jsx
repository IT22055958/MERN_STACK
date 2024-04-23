import React from 'react';

const FeedbackCard = ({ feedback }) => {
  
  return (
    <div>
      <p>
      <span style={{ width: "120px", display: "inline-block" }}>Client Name</span>: {feedback.clientID}<br />
        <span style={{ width: "120px", display: "inline-block" }}>Client Name</span>: {feedback.clientName}<br />
        <span style={{ width: "120px", display: "inline-block" }}>Client Email</span>: {feedback.clientEmail}<br />
        <span style={{ width: "120px", display: "inline-block" }}>Role</span>: {feedback.role}<br />
        <p style={{ display: "flex" }}>
        <span style={{ flexBasis: "120px" }}>Feedback</span>: {feedback.context.split("").map((char, index) => index === 0 ? char : (char === " " ? char + "\n" : char)).join("")}
        </p>
        <span style={{ width: "120px", display: "inline-block" }}>Rate</span>: {feedback.type}<br />
        <span style={{ width: "120px", display: "inline-block" }}>Date and Time</span>: {feedback.dateandtime}<br />

        <a href="#" class="btn btn-primary">Update </a>
        <a href="#" class="btn btn-primary">Delete </a>


        <br/><br/>
      </p>
    </div>
  );
};

export default FeedbackCard;
