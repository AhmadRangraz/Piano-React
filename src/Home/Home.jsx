import React, { Component } from 'react'
import './home.css'
import free from '../img/freemode.jpg'
// import teach from '../img/pianoteacher.jpg'
// import student from '../img/student.jpg'
import pin from '../img/pin.jpg'
import { Link } from 'react-router-dom'
export default class Home extends Component {


    render() {
        return (
            <section className='home'>
                <figure className='free'>
                    <Link to={'/free-Mode'}>

                        <img src={free} alt="free mode" />
                    </Link>
                    <figcaption>Free Mode</figcaption>

                </figure>
                <div className='learn'>
                    <figure ref={ref => { this.teacherFigure = ref }} className='teacher'>
                    <Link to={'/teacher'}>

                        <img src={pin} alt="teach" />
                        </Link>
                        <figcaption>Teacher</figcaption>
                    </figure>
                    <figure ref={ref => { this.studentFigure = ref }} className='student'>
                    <Link to={'/student'}>

                        <img src={pin} alt="study" />
                        </Link>
                        <figcaption>Student</figcaption>
                    </figure>
                </div>
            </section>
        )
    }
}