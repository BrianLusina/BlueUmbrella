import React from 'react'

export default class Header extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <header id="banner">
                <div id="logo">
                    <h1 id="siteTitle">L<i class="wi wi-hail"></i>cal Weather</h1>
                </div>
            </header>
        )
    }
}