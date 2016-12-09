import React from "react";


export default class Forecast extends React.Component{
    
    render(){
        return(
            <div className='row'>
                <div className='col-xs-6'>
                    <div id='icon'></div>
                </div>
            <div className='col-xs-4'>
                <div className='icons'></div>
                <div id='forecast'></div>
                <div id='weekdays'></div>
            </div>
        </div>
        )
    }
}