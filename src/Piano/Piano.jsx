import React, { Component } from 'react'
import './Piano.css'
import PianoKey from './PianoKey/Index'
import a from '../PianoNotes/a.wav'
import s from '../PianoNotes/s.wav'
import d from '../PianoNotes/d.wav'
import f from '../PianoNotes/f.wav'
import g from '../PianoNotes/g.wav'
import h from '../PianoNotes/h.wav'
import j from '../PianoNotes/j.wav'

export default class Piano extends Component {
    constructor(props){
        super(props)
        this.audioRef = React.createRef()
        this.accordionContent = []
        this.keyNote= []
    }
    state = {
        keyName: ['a', 's', 'd', 'f', 'g', 'h', 'j'] ,
        // keyNames : ['A' , 'S' , 'D' , 'F' , 'G' ,'H' ,'J'],
        keys:[
            ['a' , a , 0],
            ['s' , s , 1],
            ['d' , d , 2],
            ['f' , f , 3],
            ['g' , g , 4],
            ['h' , h , 5],
            ['j' , j , 6]
        ],
        letPlay: this.props.letPlays
    }
    noteClickHandler=e =>{
        // console.log('ss');
        let b =  e.target.getAttribute('data-notekeys')
        b = this.state.keyName.indexOf(b)
        this.play(b)
        // console.log(this.state.keyName.indexOf(b));
        // console.log(b);
        // e.target
    }
    play = e =>{
        if (this.accordionContent[e].paused) {
            this.accordionContent[e].play();
        }else{
            this.accordionContent[e].currentTime = 0
        }
        this.accordionContent[e].volume = 0.4

    }
    componentDidMount() {

        this.pianoKeyboard ()

    }

    static getDerivedStateFromProps(nextProps){
        return{
            letPlay : nextProps.letPlays
        }
    }
    componentDidUpdate(){
        this.pianoKeyboard ()
        // if(nextProps.letPlays !== pervState.letPlays){
        //     this.setState({
        //         letPlay: nextProps.letPlays
        //     })
        // }

    }
    pianoKeyboard = () =>{
        document.addEventListener('keydown',this.keypress)
    }
    keypress= e =>{
            if(this.state.keyName.includes(e.key)){
                let i = this.state.keyName.indexOf(e.key)
                this.keyNote[i].className='pianoKey pushed'
                setTimeout(() =>{
                this.keyNote[i].className='pianoKey'
                },100)
                this.play(i)

            }
        
    }
    render() {
        console.log(this.state.letPlay);
        return (
            <div className='piano'>
                {/* <audio ref={this.audioRef} src={this.state.noteSong}></audio> */}
                {this.state.keys.map(item => <PianoKey key={item[2]} src={item[1]} keyName={item[0]} refo={ref => (this.keyNote[item[2]] = ref)}  refs={ref => (this.accordionContent[item[2]] = ref)}  clickHandler={this.noteClickHandler}>

                </PianoKey>)}
            </div>
        )
    }
}
