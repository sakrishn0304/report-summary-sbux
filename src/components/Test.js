import React, { Component } from 'react';
import '../App';
import 'bootstrap/dist/css/bootstrap.css';
import {   Card, CardImg, CardText, CardBody,CardImgOverlay,CardSubtitle,CardTitle,Row, 
    Col,CardHeader,CardBlock,CardFooter, CardDeck } from 'reactstrap';
import { Button } from 'reactstrap';
import { Legend,PieChart } from 'react-minimal-pie-chart';
import LineChart from 'react-linechart';
import {Bar,Line,Pie} from 'react-chartjs-2';
// import { BarChart } from 'react-charts'
import PercentageCircle from 'reactjs-percentage-circle';

class Test extends Component {
    render() {
        const data = [
            {									
                color: "steelblue", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: 3}] 
            }
        ];
        const state = {
          labels: ['January', 'February', 'March',
                   'April', 'May'],
          datasets: [
            {
              label: 'Rainfall',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: [65, 59, 80, 81, 56]
            }
          ]
        }

        const state1 = {
          labels: ['January', 'February', 'March',
                   'April', 'May'],
          datasets: [
            {
              label: 'Rainfall',
              backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
              ],
              hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000',
              '#003350',
              '#35014F'
              ],
              data: [65, 59, 80, 81, 56]
            }
          ]
        }

        const state2 = {
          labels: ['January', 'February', 'March',
                   'April', 'May'],
          datasets: [
            {
              label: 'Rainfall',
              fill: false,
              lineTension: 0.5,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: [65, 59, 80, 81, 56]
            }
          ]
        }
        
      
        
        
        return(
          <>
         
          <Row>
            <Col lg-4>
            <div >
              <Pie data={state1} />
          
            
            </div>
            </Col>
            <Col lg-4>
              <div>
              <Line            
              data={state2}
              />
              </div>
           
            </Col>
            <Col lg-4>
            <div >
            <Bar
          data={state}
          // options={{
          //   title:{
          //     display:true,
          //     text:'Average Rainfall per month',
          //     fontSize:20
          //   },
          //   legend:{
          //     display:true,
          //     position:'right'
          //   }
          // }}
        />
        </div>
            </Col>
          </Row>
          <div>
          
          </div>

        




           
        </>
       
        )
    }
}

export default Test;