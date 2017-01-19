import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class TestForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            btnIsAvalible: false,
            authorValue:'',
            textValue:''
        };
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onVisibleRule = this.onVisibleRule.bind(this);
        this.updateData = this.updateData.bind(this);
    }
    componentDidMount () {
        //ReactDOM.findDOMNode(this.refs.author).focus();
        //console.log('focus in child component');
    }
    onButtonClick(event){
        console.log(this.state);
        //event.preventDefault();
       // console.log('author name '+ this.state.authorValue);
    }
    onVisibleRule(event){
        this.setState({
            btnIsAvalible:!this.state.btnIsAvalible
        });
    }
    updateData(event){
        // console.log('отрисовка события) ' + event);
        if(event.target.getAttribute('name')==='author'){
            this.setState({
                authorValue:event.target.value
            })
        }
        else{
            this.setState({
               textValue:event.target.value
            })
        }
        
        //console.log(event.target.getAttribute('name'));
    }
    
    render(){
       // console.log(this.state)
        return(
            <div className = 'wrapper-form'>
                <h1>Add the new</h1>
                <form action="">
                    <input type = "text"
                       className = 'add-author'
                       name ='author'
                       placeholder = 'enter name author'
                       onChange = {this.updateData}/>
                <textarea className = 'add-text'
                          placeholder = 'enter some text about the new'
                         
                          onChange = {this.updateData}
                          >
                </textarea>
                <label className = 'checked-rules'>
                    <input type = 'checkbox' 
                    onChange = {this.onVisibleRule}/>
                    i am agree with rules
                </label>
        <button type='reset' className= {((this.state.btnIsAvalible)&&
                              (this.state.authorValue.length>0)&&
                              (this.state.textValue.length>0)) ?'':'noneItem '}
                              onClick={this.onButtonClick}
                >Submit New</button>
                </form>
            </div>
        )
    }
}
export default TestForm;