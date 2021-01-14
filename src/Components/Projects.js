import React from 'react';
import { Button } from 'react-bootstrap';
import AdbOutlinedIcon from '@material-ui/icons/AdbOutlined';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import EcoIcon from '@material-ui/icons/Eco';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Projects() {
  return (
    <div className="ProjectScreenContainer" >
      <div style={{ borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: "black", width: "75vw" }} >
        <h1>Independent Projects</h1>
        <div style={{ width: '100%', marginTop: '5vh' , display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
          <h3 style={{ fontFamily: 'Castoro', marginLeft: '10vw' }} >Mobile and Web Design</h3>
          <h3 style={{ fontFamily: 'Castoro', marginRight: '12vw' }} >Machine Learning</h3>
        </div>
      </div>
      
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#face8c', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  #face8c' }}
          date="September 2020"
          position={"right"}
          iconStyle={{ background: '#face8c', color: '#000' }}
          icon={<AdbOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">AWS Lex Bot Generator</h3>
          <p style={{ marginBottom: 10 }} >
            AWS pipeline for generating AWS Lex AI-powered chatbots from inputed configuration files. Files are sent to an 
            S3 bucket in the cloud which then triggers lambda functions that start bot generation and build process.
          </p>
          <p>
            Developed using AWS Lex, Lambda, DynamoDB, S3, and React. <br/><br/>
          </p>
          <a href="https://github.com/SyedA5688/labelbox-custom-interface" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#cfe8ff', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  #cfe8ff' }}
          date="November 2020"
          position={"left"}
          iconStyle={{ background: '#cfe8ff', color: '#000' }}
          icon={<CropOriginalIcon />}
        >
          <h3 className="vertical-timeline-element-title">Labelbox Custom Medical Image Annotation Interface</h3>
          <p style={{ marginBottom: 10 }} >
            Custom image annotation interface allowing for rapid grid label application on medical images. Labels are
            saved to Labelbox system through integration with Javascript API.
          </p>
          <p>
            Developed using ReactJS and the Labelbox Javascript API. <br/><br/>
          </p>
          <a href="https://github.com/SyedA5688/labelbox-custom-interface" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#face8c', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  #face8c' }}
          date="September 2020"
          position={"right"}
          iconStyle={{ background: '#face8c', color: '#000' }}
          icon={<TrendingUpIcon />}
        >
          <h3 className="vertical-timeline-element-title">LSTM Stock Price Predictor</h3>
          <p style={{ marginBottom: 10 }} >
            Long Short-Term Memory model designed to predict the stock prices of NASDAQ companies. Network
            takes in stock information from previous month and outputs predicted opening price for the next
            day.
          </p>
          <p>
            Developed using Python and Keras, hosted on Herkou. <br/><br/>
          </p>
          <a href="https://github.com/SyedA5688/predictive-stock-price-model" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#face8c', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  #face8c' }}
          date="August 2020"
          position={"right"}
          iconStyle={{ background: '#face8c', color: '#000' }}
          icon={<EcoIcon />}
        >
          <h3 className="vertical-timeline-element-title">Autoencoder Anomaly Detection</h3>
          <p style={{ marginBottom: 10 }} >
            Machine learning model aimed at detecting anomalies in sensor data from environmental conservatories in 
            Seattle. Data is reconstructed by an autoencoder network and anomalies are then detected  
            based off MAE loss and segment analysis. 
          </p>
          <p>
            Developed using AWS Sagemaker and Jupyter Notebooks. <br/><br/>
          </p>
          <a href="https://github.com/SyedA5688/AWS-ML-Hackathon" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#cfe8ff', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  #cfe8ff' }}
          date="June - July 2020"
          position={"left"}
          iconStyle={{ background: '#cfe8ff', color: '#000' }}
          icon={<PhotoCameraIcon />}
        >
          <h3 className="vertical-timeline-element-title">NutrientView Mobile App</h3>
          <p style={{ marginBottom: 10 }} >
            Mobile application using image recognition to log, track, and display consumed micronutrients.
            Previous nutrient profiles available in calendar view page through integration with Firebase 
            database services.
          </p>
          <p>
            Developed using React Native/Expo, IBM Watson image recognition, Azure bot service, and the 
            Edamam Nutrition API. <br/><br/>
          </p>
          <a href="https://github.com/SyedA5688/NutrientView" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#cfe8ff', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  #cfe8ff' }}
          date="May - June 2020"
          position={"left"}
          iconStyle={{ background: '#cfe8ff', color: '#000' }}
          icon={<CloudQueueIcon />}
        >
          <h3 className="vertical-timeline-element-title">StormReady Mobile App</h3>
          <p style={{ marginBottom: 10 }} >
            Hurricane awareness and preparation mobile application. Includes informational pages and quizzes, 
            landing points of previous hurricanes, and a location tracking system with push notifications for 
            regional hurricane alerts.
          </p>
          <p>
            Developed using React Native/Expo and the AerisWeather API. <br/><br/>
          </p>
          <a href="https://github.com/SyedA5688/StormReady" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#afe0af', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  #afe0af' }}
          date="December 2019"
          position={"left"}
          iconStyle={{ background: '#afe0af', color: '#000' }}
          icon={<LocalAtmIcon />}
        >
          <h3 className="vertical-timeline-element-title">FinVisor Financial App</h3>
          <p style={{ marginBottom: 10 }} >
            Web application for income and expense tracking aimed at increasing personal financial awareness 
            and responsibility. Integrated with an SQL database to record personal transaction history of users.
          </p>
          <p>
            Developed using Python, Flask, and SQL Alchemy. <br/><br/>
          </p>
          <a href="https://github.com/SyedA5688/FinVisor" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}