import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TestForm from './TestForm';
class TestInput extends Component{
    constructor(props){
        super(props);
        this.state= {
            value:'',
            news:this.props.dataWeather
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
    }
    
    componentDidMount () {
        /*слушать событие создана новость */
    }
    componentWillUnmount () {
        /*больше не слушать событие*/
    }
    
    
    updateHandler(event){
       this.setState({
           value: event.target.value
       })
    }
    onClickHandler(){
        console.log(this.state.value);
       // console.log(ReactDOM.findDOMNode(this.refs.myTextInput).value);
    }
    render(){
        return(
            <div className='wrapper'>
                <input  type ="text"
                    placeholder = 'enter some text'
                    defaultValue = ''
                    ref = 'myTextInput'
                    value = {this.state.value}
                    className = 'text-input'
                    onChange = {this.updateHandler}
                />
                <input type='button' onClick = {this.onClickHandler} />Click me
                <h1>{this.state.value?this.state.value:''}</h1>
                <TestForm dataWeather={this.props.dataWeather}/>
            </div>
        )
    }
}
export default TestInput;