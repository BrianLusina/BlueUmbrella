import React from 'react'

export default class Footer extends React.Component{
    constructor(){
        super();
    }

    render(){
        const socialLinks = [
            ["https://www.linkedin.com/in/brianlusina", "fa fa-linkedin fa-2x social"],
            ["https://github.com/brianlusina", "fa fa-github fa-2x social"],
            ["https://twitter.com/brianlusina", "fa fa-twitter fa-2x social"],
            ["https://medium.com/@brianlusina", "fa fa-medium fa-2x social"],
            ["https://plus.google.com/102302755150765254402", "fa fa-google-plus fa-2x social"]
        ];

        var socialMap = socialLinks.map((item, index)=>{
            return (
                <li key={index}>
                    <a href={item[0]} target="blank">
                        <i className={item[1]}> </i>
                    </a>
                </li>
            )
        });

        return(
            <footer id="main-footer">
                <small>Made with <i className="fa fa-music"></i> and <i className="fa fa-coffee"></i> by <a href="http://www.codepen.io/thelusina">The Lusina</a></small>
                <nav className="nav">
                    <ul>{socialMap}</ul>         
                </nav>
            </footer>
        )
    }
}

