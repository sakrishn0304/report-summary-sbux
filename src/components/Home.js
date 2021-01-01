import React, { Component } from 'react';
import starbucks_img from '../images/starbucks_img.png';
import './Home.css';
import '../App';
import {
    Nav,
    Navbar    
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Circle, Layer, Rect, Stage, Line, Text} from 'react-konva'


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
                        <Link className = 'nav_text' to = {"/IncidentAnalysis"}>Incidents Trends and SLA Metrics</Link>
                        <Link className = 'nav_text'>Risks,Improvement and Action Items</Link> 
                    </Nav>
                </Navbar>
            </div>
            {/* <div>
            <div class="circle">uibvsfbv</div>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                   
                    <Rect
                    x={20}
                    y={50}
                    width={100}
                    height={100}
                    fill="red"
                    shadowBlur={10}
                    />  
                    
                    <Circle x={210} y={100} radius={50} stroke={'black'} fill={'white'}
                        
                    /> 
                    
                    <Line
                        x={150}
                        y={90}
                        points={[10, 10, 10, 10, 110, 10]}
                        tension={0.5}
                        closed
                        stroke="black" />           
                </Layer>
            </Stage>
            </div> */}

            </>
           
        )
    }
}

export default Home;