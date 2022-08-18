import React from 'react';

function instruct() {
  return (
    <p>Instructions</p>
  )
}

function info() {
  return (
    <form action="">
      <label>Personal Information</label>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Title" />
      <label htmlFor="photo">Photo</label>
      <input type="file" id='photo' />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Phone Number" />
      <input type="text" placeholder="Email" />
      <textarea placeholder="Description" />
    </form>
  )
}

function exp() {
  return(
    <p>Experience</p>
  )
}

function edu() {
  return (
    <p>Education</p>
  )
}

function error() {
  return <div>Something went wrong</div>
}

function DataEntry(props) {
  switch (props.section) {
    case "instruct": return instruct(); break;
    case "info": return info(); break;
    case "exp": return exp(); break;
    case "edu": return edu(); break;
    default: return error();
  }
}

export default DataEntry
