import React , {Component} from 'react'
import './PianoKey.css'
export default class PianoKey extends Component {
render(){
    return(
<div data-notekeys={this.props.keyName} ref ={this.props.refo}  onClick={this.props.clickHandler} className='pianoKey'>
{this.props.keyName}
<audio ref ={this.props.refs} src={this.props.src}></audio>
</div>
    )

}
} 


