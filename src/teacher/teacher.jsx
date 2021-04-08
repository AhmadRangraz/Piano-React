import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Info from './Info/Info'
import Piano from '../Piano/Piano'
import Done from './Done/Done'
import './teacher.css'


export default class Teacher extends Component {

    state = {
        keyName: ['a', 's', 'd', 'f', 'g', 'h', 'j'],
        musicNotes: [],
        doneCheck: false,
        letPlay: true
        // store:[]
    }

    componentDidMount() {
        // console.log(this.state.letPlay);

            document.addEventListener('keydown', e => {
                if(this.state.letPlay){ let temp = [...this.state.musicNotes]
                    if (this.state.keyName.includes(e.key)) {
                        temp.push(e.key)
                        // console.log(temp);
                        this.setState({
                            musicNotes: [...temp]
                        })
                    } else if (e.key === 'Backspace' || e.key === 'Delete') {
                        temp.pop()
                        this.setState({
                            musicNotes: [...temp]
                        })
                    }}
                // console.log(e.key);
            })
    }

    done = () => {
        // console.log(this.state.letPlay);

        this.setState({
            doneCheck: true,
            letPlay:false

        })
        // console.log(this.state.letPlay);
    }

    render() {
        console.log(this.state.letPlay);

        return (
            <section className='teacherSection'>
                <Route path='Piano-React/teacher' exact><Info></Info></Route>
                <Route path='Piano-React/teacher/piano' exact>
                    <section className='tph'>
                        <div className='teacherHolder'>
                            <h3>Notes: {this.state.musicNotes.join(' , ')}
                            </h3>
                            <button onClick={this.done} className='bwbtn' to='piano/done'>Done</button>
                        </div>
                        <Piano letPlays ={this.state.letPlay}></Piano>
                    </section>
                    {this.state.doneCheck && <Done ></Done>}


                </Route>


            </section>
        )
    }
}