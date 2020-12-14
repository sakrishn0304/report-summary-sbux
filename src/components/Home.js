import React, { Component } from 'react';
import starbucks_img from '../images/starbucks_img.png';
import './Home.css';
import '../App';
import {
    Nav,
    Navbar    
} from 'reactstrap';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);        
    }
    

    render(){
        return(
            <>
             <div className = 'header_home'>
                <img alt='Starbucks_Logo' className='starbucks_img_style' src={starbucks_img} width='20%' height='20%'/>
                <span className = 'header_home_text'>Starbucks Partner Hours - Monthly Review</span>
            </div>
            <div className = 'navbar_home'>
                <Navbar>
                    <Nav style={{paddingLeft:"9px"}}>
                        <Link className = 'nav_text' to = {"/"}>Home</Link>
                        <Link className = 'nav_text' to = {"/Summary"}>Portfolio Summary</Link>
                        <Link className = 'nav_text'>Incidents Trends and SLA Metrics</Link>
                        <Link className = 'nav_text'>Risks,Improvement and Action Items</Link> 
                    </Nav>
                </Navbar>
            </div>
            </>
           
        )
    }
}

export default Home;