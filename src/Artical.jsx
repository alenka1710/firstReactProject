import React from 'react';
var Artical = React.createClass({
    getInitialState:function(){
        return{
            visible:false
        }
    },
    readmoreClick:function(event){
        event.preventDefault();
        this.setState({visible:true});
    },
    render:function(){
        var city = this.props.data.city;
        var tempreture = this.props.data.tempreture;
        var description = this.props.data.description;  
        var visible = this.state.visible;
        //console.log(this);
        return(
            <div className='artical'>
                <span className='city-name'>{city}</span>
                <span className='tempreture'>Temperature:{tempreture}</span>
                <a href="#" onClick={this.readmoreClick}
                className={visible?'noneItem':''}>More inf.</a>
                <p className={visible?'':'noneItem'}>{description}</p>
            </div>
        )
    }
    
});
export default Artical;