import React from 'react';


export default class Metrics extends React.Component{
    render(){
        return(
            <div className='row'>
                <div className='col-xs-6'>
                    <div id='temp'></div>
                </div>                
                <div className='col-xs-4'>
                    <div id='switch'></div>
                </div>
            </div>
        )
    }
}