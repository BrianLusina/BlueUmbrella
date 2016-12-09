import React from "react";


export default class Forecast extends React.Component{
    
    render(){
        return(
            <div class='row'>
                <div class='col-xs-6'>
                    <div id='icon'></div>
                </div>
            <div class='col-xs-4'>
                <div class='icons'></div>
                <div id='forecast'></div>
                <div id='weekdays'></div>
            </div>
        </div>
        )
    }
}