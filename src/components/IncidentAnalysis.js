import React, { Component } from 'react';
import Home from './Home';
import Test from './Test';
import '../App';
import './IncidentAnalysis.css';
import {Row, Col } from 'reactstrap';


class IncidentAnalysis extends Component{
    render(){
        const a= ['Labor Setting Adjustments for the business week 10/26','Labor Setting Adjustments for the business week 10/26','Labor Setting Adjustments for the business week 10/26','Labor Setting Adjustments for the business week 10/26','Labor Setting Adjustments for the business week 10/26']
        const items = []
 
        for (const i of a) {
            items.push(<li >{i}</li>)            
        }

        const datas= [
            {
                id: 1,
                category: "Partner Keyholder",
                count_1 : "123",
                count_2:"145"
              },
              {
                  id: 2,
                  category: "Partner Keyholder",
                count_1 : "123",
                count_2:"145"
                 
              },
              {
                  id: 3,
                  category: "Partner Keyholder",
                count_1 : "123",
                count_2:"145"
                 
              },
              {
                  id: 4,
                  category: "Partner Keyholder",
                count_1 : "123",
                count_2:"145"
                 
              }
        ]
           
        

        return(
            <>
                <Home />
                <div className='chart_div'>
                    <p>Incident Trend and SLA Metrics</p>                   
                </div>
                 <div style={{paddingTop:'50px', paddingBottom:'50px'}}><Test /></div>
                 <div className='incidentAnalysis_head'>Incident Analysis</div>
                <div style={{paddingTop:'20px'}}>
                    <Row>
                        <Col lg-8>
                            <div className='incidentAnalysis_content_left'>
                                <ul style={{paddingTop:"10px"}}>{items}</ul>                  
                            </div> 
                        </Col>                        
                        <Col lg-4>
                            <table className="incidentAnalysis_table">
                                <thead>
                                    <tr>
                                        <th className="incidentAnalysis_table_head">Category</th>
                                        <th className="incidentAnalysis_table_head">November</th>
                                        <th className="incidentAnalysis_table_head">December</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        datas.map((item) =>(
                                            <tr key={item.id}>
                                                <td className="incidentAnalysis_table_content">{item.category}</td> 
                                               <td className="incidentAnalysis_table_content">{item.count_1}</td>
                                               <td className="incidentAnalysis_table_content">{item.count_2}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>                               
                            </table>
                        </Col>
                    </Row>              
                
                </div>

            </>
        )
    }
}

export default IncidentAnalysis;