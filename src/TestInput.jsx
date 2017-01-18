import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class TestInput extends Component{
    constructor(props){
        super(props);
        this.state= {
            value:''
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    updateHandler(event){
       this.setState({
           value: event.target.value
       })
    }
    onClickHandler(){
        console.log(ReactDOM.findDOMNode(this.refs.myTextInput).value);
    }
    
    render(){
        return(
            <div className='wrapper'>
                <input  type ="text"
                    placeholder = 'enter some text'
                    defaultValue = ''
                    ref = 'myTextInput'
                    className = 'text-input'
                    onChange = {this.updateHandler.bind(this)}
                />
                <p>{this.state.value}</p>
                <button onClick = {this.onClickHandler}>Click me</button>
                <h1>{this.state.value?this.state.value:''}</h1>
            </div>
        )
    }
}
export default TestInput;