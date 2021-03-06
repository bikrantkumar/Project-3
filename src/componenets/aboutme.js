import React , {Component} from 'react';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

class About extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="mt-0 ml-2 mr-2">
                    <Breadcrumb >
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About me</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div>
                    <h1>About me</h1>
                </div>
            </React.Fragment>
            
        );
    }
}
export default About;