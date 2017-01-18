import React from 'react';
import Artical from './Artical';
var News = React.createClass({
    getInitialState:function(){
        return{
            counter:0
        }
    },
    changeCounter:function(){
        this.setState({counter: ++this.state.counter});
    },
        render:function(){
        var data = this.props.dataMas;
        var newsTemplate;
        console.log(this.state.counter);
        if(data.length>0){
            newsTemplate = data.map(function(item,index){
                return(
                    <div key={index}>
                        <Artical data={item} />
                    </div>
                )
            })
        }
        else{
            newsTemplate = <span>никаких новых новостей(</span>
        }
        return(
            
            <div className='news'>
                {newsTemplate}
                <strong className={data.length>6?'':'noneItem'}
                        onClick={this.changeCounter}>
                    Всего новостейо погоде: {data.length}                
                </strong>
            </div>
        );
    }
})
export default News;