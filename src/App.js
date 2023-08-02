import React from 'react';
import './App.css';
import Resume from './Resume.pdf';

function App() {
  return (
    <div className="body">
      <div className='main'>
        <div className='header'>
        <h1 className='name'>PRIYANKA MAVURI</h1>
        <p>FrontEnd Developer</p>
        <p>Mobile no: 7980334906</p>
        <p>Email Id: priyankamavuri31@gmail.com</p>
        <p> Uppal/Hyderabad</p><br/>
        <a download href={Resume}>Download Resume</a>
        <a  href='https://github.com/Priyankamavuri' >Github Account</a>
        <a  href='https://www.linkedin.com/in/mavuri-priyanka-964b61214/' >Linkdin Account</a>
        </div><br/><hr/>
        
        <h3>FrontEnd Projects:</h3>
        <div className='grid'>
            <div className="gridcell">
              <h3>TodoList</h3>
              <p>To-Do List project is an application specially built to keep track of errands or tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove and edit them from the list.</p>
              <a href="http://Priyankamavuri.github.io/TodoList-React">Click Here</a>
              </div>       

             
              <div className="gridcell">
              <h3>Weather App</h3>
              <p>This is a small project, creating a weather widget which can be implemented on a website using the "openweathermap.org" API in order to fetch local weather like data temperature, humidity, wind speed. based on the users input.<br/>
              You can only acceess weather report on a city names only</p>
              <a href="http://Priyankamavuri.github.io/Weather-React">Click Here</a>
              </div> 


               <div className="gridcell">
              <h3>LandingPage</h3>
              <p>A landing page is a standalone web page that a person "lands" on after clicking here. Every content strategy should include the use of landing pages to convert more traffic and increase conversions.<br/>
              Here I created landing page on Cakes with an amazing Cake images.   </p>
              <a href="http://Priyankamavuri.github.io/Cakes-page-React">Click Here</a>
              </div>      
        </div>
      </div>
      
    </div>
  );
}

export default App;
