import React from 'react';

export default class Search extends React.Component{
    render(){
        return(
            <div className='row'>
                <div className='col-xs-12'>
                    <div id='searchbox'>
                        <input id="search" className="form-control" placeholder='Search for another City..'></input>
                    </div>
                </div>
            </div>
        )
    }
}