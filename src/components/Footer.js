import React from 'react'

export default class Footer extends React.Component{
    render(){
        return(
            <footer id="main-footer">
                <small>Made with <i className="fa fa-music"></i> and <i className="fa fa-coffee"></i> by <a href="http://www.codepen.io/mercury">Mercury</a></small>
                <nav className="nav">
            <ul>
                <li><a href="https://www.linkedin.com/in/brianlusina" target="_blank"><i className="fa fa-linkedin fa-2x social"></i></a></li>
                <li><a href="https://github.com/brianlusina" target="_blank"><i className="fa fa-github fa-2x social"></i></a></li>
                <li><a href="https://twitter.com/brianlusina" target="_blank"><i className="fa fa-twitter fa-2x social"></i></a></li>
                <li><a href="https://medium.com/@brianlusina" target="_blank"><i className="fa fa-medium fa-2x social"></i></a></li>
                <li><a href="https://plus.google.com/102302755150765254402" target="_blank"><i className="fa fa-google-plus fa-2x social"></i></a></li>                    
            </ul>         
        </nav>
    </footer>
        )
    }
}

