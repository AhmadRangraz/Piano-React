import React  from 'react'
import {Link} from 'react-router-dom'
const Info = props =>
<>

<div className='teacherInfo'>
    <h2>Dear Teachers:</h2>
    <p> Here you will create new melodies for the students , please consider that this App does not have server or something like that, so the melodies will save on your browser (don't worry, even if you close the app the melodies will be available to use). <br/>
    also you can delete notes that you don't want just by pressing Delete button or Backspace button on keyboard<br/>By the way don't forget press the Done Button to when you've finished your piece !!</p>

    <Link to='/teacher/piano' className='bwbtn' onClick={props.onclick}>Let's Go</Link>
</div>

</>

export default Info