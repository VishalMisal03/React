<<<<<<< HEAD
import React from "react";
import List from "./List1";
import Props from "./Props";
function ReactForms() {
  return (
    <div className="container">
      <h1>Form In React</h1>
      <form>
        <label htmlFor="firstname"> First Name*</label>
        <input type="text" placeholder="Enter first name" name="firstname" /><br />

        <label htmlFor="lastname"> Last Name*</label>
        <input type="text" placeholder="Enter last name" name="lastname" /><br />

        <label htmlFor="email"> Email*</label>
        <input type="text" placeholder="Enter Email " name="email" /><br />

        <label htmlFor="gender">Gender</label>
        <input type="radio" name="gender" /> Male
        <input type="radio" name="gender" /> Female
        <input type="radio" name="gender" /> Other<br />

        <label htmlFor="subject">Subbject</label>
        <select name="subject" id="subject">
          <option value="math">Math</option>
          <option value="physic">physic</option>
          <option value="English">English</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input type="file" placeholder="Select Resume" name="resume" /><br />

        <label htmlFor="url">URL</label>
        <input type="text" name="url" placeholder="Enter image URL" /><br />

        <label htmlFor="about">About</label>
        <textarea name="about" id="about" cols="30" rows="10" placeholder="enter description"></textarea><br />

        <button type="button">Resume</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReactForms;
=======
import Login,{Profile,Setting}from './UserComponent'

function App() {

  return (
    <div>
      <h1>Import and Exporting Components</h1>
      <Login/>
      <Profile/>
      <Setting/>
    </div>
  )
}
export default App
>>>>>>> 65c131d1d4f8053270f8d0883635d7333f2bc44a
