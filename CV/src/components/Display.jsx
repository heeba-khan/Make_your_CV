import React from 'react'
import { useLocation } from 'react-router-dom'

function Display() {
    const location=useLocation();
    const {personaldata,educationdata,expdata}=location.state||{}

  return (
    <div>
      <h3>Submitted Data</h3>
      <h4>Personal Information</h4>
      <p><strong>First Name:</strong> {personaldata?.["First name"]}</p>
      <p><strong>Last Name:</strong> {personaldata?.["Last name"]}</p>
      <p><strong>Email:</strong> {personaldata?.Email}</p>
      <p><strong>Mobile Number:</strong> {personaldata?.["Mobile number"]}</p>
      
      <h4>Education Information</h4>
      <p><strong>School Name:</strong> {educationdata?.["School name"]}</p>
      <p><strong>Course Name:</strong> {educationdata?.Course}</p>
      <p><strong>Major:</strong> {educationdata?.Major}</p>
      <p><strong>Start Date:</strong> {educationdata?.startdate}</p>
      <p><strong>End Date:</strong> {educationdata?.enddate}</p>

      <h4>Experience Information</h4>
      <p><strong>Company:</strong> {expdata?.["Company name"]}</p>
      <p><strong>Position:</strong> {expdata?.Position}</p>
      <p><strong>Job Description:</strong> {expdata?.["Job Description"]}</p>
      <p><strong>Date of Joining:</strong> {expdata?.doj}</p>
      <p><strong>Date of Completion:</strong> {expdata?.doc}</p>
    </div>
  )
}

export default Display