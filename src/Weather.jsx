import React, {Component} from 'react';
class Weather extends Component{
    render(){
        var data = this.props.dataAlena;
        var weatherTemplate = data.map(function(item,index){
            return(
                <div key={index} className='tempreture-in-the-city'>
                    <span className='city'>{item.city}</span>
                    <span className='temperature'>Tempreture:{item.tempreture}</span>
                    <span className='description'>Description:{item.description}</span>
                </div>
            )
        })
        return(
            <div>
                <div className='weather'>
                <span data={this.props.dataAlena}>

                    weather isn't good
                </span>
            </div>
            <div className='itemOfArray'>
                {weatherTemplate}
            </div>
            </div>
        )
    }
}
Weather.propTypes={
    weatherTemplate:React.PropTypes.shape({
            city:React.PropTypes.string.isRequired,
            tempreture:React.PropTypes.string.isRequired,
            description:React.PropTypes.string.isRequired
    })
}
export default Weather;