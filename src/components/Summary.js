import React, { Component } from 'react';
import '../App';
import 'bootstrap/dist/css/bootstrap.css';
import './Summary.css';
import img from '../images/starbucks_img.png';
import { PieChart } from 'react-minimal-pie-chart';
import {   Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Row, Col, CardDeck, Container } from 'reactstrap';
import { Button } from 'reactstrap';
import Home from './Home';
import Test from './Test';

class Summary extends Component{
    render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

        
        const a= ['Labor Setting Adjustments for the business week 10/26','Labor Setting Adjustments for the business week 10/26','Labor Setting Adjustments for the business week 10/26','Labor Setting Adjustments for the business week 10/26','Labor Setting Adjustments for the business week 10/26']
        const items = []
 
   for (const i of a) {
     items.push(<li >{i}</li>)
     
   }

        return(
          <>
            <Home />
            <h1 className = 'summary_head_text'>PORTFOLIO SUMMARY</h1>
            <br/>
            <div style={{marginLeft:"20px",marginRight:"30px"}}>
            <Row>                                
                <Col   lg="6" >
                  <div className='summary_subhead_text_left'>Key higlights</div>
                  <div className='summary_content_left'>
                    <ul style={{paddingTop:"10px"}}>{items}</ul>
                    <div className='summary_content_subhead'>
                      <span style={{fontWeight:"bold"}}>New Issues:</span>
                      <div className=''>
                        <ul>{items}</ul>
                      </div>
                    </div> 
                  </div>                              
                </Col>                 
                <Col  lg="6">
                  <div className='summary_subhead_text_right'>Upcoming Activities and Releases</div>
                  <div className='summary_content_right'>                   
                    <CardDeck className='card_deck'>
                      <Card >
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */} 
                        <CardBody>
                          <CardTitle className='card_title'>Title</CardTitle>
                          <CardText>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </CardText>    
                        </CardBody>
                      </Card>
                      <Card >
                        <CardBody>
                          <CardTitle className='card_title'>Title</CardTitle>
                          <CardText>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </CardText>   
                        </CardBody>                      
                      </Card>
                      <Card>
                        <CardBody>
                          <CardTitle className='card_title'>Title</CardTitle>
                          <CardText>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </CardText>
                          {/* <Button variant="primary">Go somewhere</Button> */}
                        </CardBody>                        
                      </Card>
                    </CardDeck>
                  </div>
                  <div style={{paddingTop:"40px"}} className='summary_content_right'>
                    <div className='summary_subhead_text_right'>SUPPORT METRICS</div> 
                    <Test/> 
                  </div>            
                </Col>               
            </Row> 
            </div>              
          </>
        )
    }
}

export default Summary;


 