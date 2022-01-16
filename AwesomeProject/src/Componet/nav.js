import React,{Component} from "react";
import { Link } from "react-router-dom";

class Nav extends Component{
    constructor(props){
        super(props)
    }
componentWillUnmount(){
    this.props.notifyPathname(window.location.pathname)
}
render()
{
    return(
        <div>
            {
                this.props.pathname ==='/'?<Link to='/Create'>Add name</Link> :''
            }
        </div>
    )
}
}

export default Nav;