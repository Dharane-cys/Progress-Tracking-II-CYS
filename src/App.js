import React from 'react'
import './App.css'
import img from './Login/images/photo.jpeg'
const App = () => {
  return (
  <>
    <p className='text'><h2>SRI KRISHNA COLLEGE OF ENGINEEERING AND TECHNOLOGY</h2></p>
    <div className="text"><h1>Sivadharane</h1></div>
    <p className='text'><h4>CYBER SECURITY</h4></p>
    <img src={img} alt="no"></img><br></br>
    <a href="https://www.skcet.ac.in" target='blank'>Click here</a>
        <ol>
            <li>CSE</li>
            <li>IT</li>
            <li>EEE</li>
            <li>AIDS</li>
            <li>ECE</li>
        </ol>
        <ul>
            <li>CSE</li>
            <li>IT</li>
            <li>EEE</li>
            <li>AIDS</li>
            <li>ECE</li>
        </ul>
        <dl>
            <dt>CYBER SECURITY</dt>
            <dd>LET'S HACK</dd>
        </dl>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_7itWsjIPc0?si=8YdrOqGKPDhEbBdK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </>
  )
}
export default App