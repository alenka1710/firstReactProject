import React, {Component} from 'react';
import Weather from './Weather';
import News from './News';
// var Alena = React.createClass({
//     render:function(){
//         return(
//          <h1>i don't remember my name</h1>   
//         )
//     },
// })
class Alena extends Component{
    constructor(){
               super();
               this.state = {
                    txt: 'something text)))'
                };
           }
           update(event){
               this.setState({txt:event.target.value})
           }
    render(){
            var  dataMas=this.props.dataArray;
            var nameTemplate = dataMas.map(function(item,index){
                return(                 
                        <div key={index} >
                            <span>{item}</span>
                        </div>
                )
            })
        return(
        <div>
            <input type="text" onChange ={ this.update.bind(this)}/>
            <h1>{this.state.txt}</h1>
            <h1>i don't remember my name</h1>
            <Weather  tempretureArray={this.props.data} dataAlena={this.props.data}/>
            <div className='nameOfArray'>{nameTemplate}</div>
            <strong className={dataMas.length >= 3 ? '' : 'noneItem'}>All-{dataMas.length+this.props.data.length}</strong>
            <News dataMas={this.props.data}/>
        </div>   
        )
    }
}

export default Alena;
