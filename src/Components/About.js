import React from 'react';
import Grid from '@material-ui/core/Grid';
import portrait from '../images/portrait.jpg'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';


export default function About() {
  return (
    <Grid container className="AboutPageContainer" >
      <Grid item xs={12} lg={4} className="AboutImgColumn" >
        <img src={portrait} alt="Portrait" height="85%" className="AboutImg" ></img>
      </Grid>
      <Grid item xs={12} lg={8} className="AboutColumn" >
        <h1>About Me</h1>
        <p>
          I am an aspiring machine learning developer and a member of the Houston Ubiquitous 
          Learning Algorithms (HULA) research laboratory based in Houston, TX. As I pursue a
          B.S. in Computer Science from the University of Houston, I am researching 
          applications of artificial intelligence and computer vision on medical image data.
        </p>
        <p>
          I am proficient in Python, Pytorch, Keras, machine learning utility libraries, 
          and Labelbox image annotation projects. <br/>
          My past experience includes mobile and web design with React, React Native, and Javascript, 
          as well as programming with C++ and Java. <br/>
        </p>
        <h1>Contact Information</h1>
        <p>
          Name: Syed Asad Rizvi <br/>
          Inquiries: asad5688 [at] gmail [dot] com <br/>
          Location: Houston, TX
        </p>
      </Grid>
      <Grid item xs={12} className="TimelineContainer" >
        <div style={{ borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: "black", width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
          <h1>Activities Timeline</h1>
          <div style={{ marginLeft: '2vw', marginRight: '10px', display: "flex", flexDirection: "row" }} >
            <div>
              <p style={{ margin: 0, padding: 0, color: '#3f51b5', fontWeight: 'bold' }} >Machine Learning, Data Science</p>
              <p style={{ margin: 0, padding: 0, color: '#f50057', fontWeight: 'bold' }} >Web Design, Cloud Services, Other</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '15vh' }} >
          <Timeline>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">May - July 2021</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Information Technology internship at Phillips 66. Trained a domain-specific entity extraction
                  AI model to extract information from highly variable and unstructured pipeline land contract documents.
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Performed correlation analysis and visualization among health informatics datasets taken from wearable devices 
                  under the mentorshop of Dr. Syed Abdul Shabbir at Taipei Medical University (TMU)
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  March 2021
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">March 2021</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Delivered oral abstract for the MorphSet research project to over 100 medical professionals at the 
                  AI in Nephropathology Workshop in Amsterdam
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Completed Machine Learning certification offered by Stanford University on Coursera
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  February 2021
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">January 2021</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Delivered presentation on custom labeling schemes using LabelBox to AI group at the University
                  of Buffalo
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Competed in the HP and AWS Botathon Competition, team placed first overall
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  January 2021
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">November 2020</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Developed image annotation interfaces for fine-grained label application in medical
                  images on LabelBox platform
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Delivered presentation on IT profile development in a professional development workshop
                  hosted by the Management Information Systems Student Organization (MISSO) at UH
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  October 2020
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">September 2020</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Joined HULA Computer Vision laboratory in Houston, TX as an undergraduate machine learning
                  research assistant
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Competed in the AWS and NVIDIA Environmental Hackathon. Autoencoder project placed 3rd
                  overall, awarded $3000 prize
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  August 2020
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">July 2020</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Developed the NutrientView mobile app for nutrient tracking and progress visualizations
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Developed the StormReady mobile app for hurricane awareness and alerts 
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  June 2020
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">January 2020</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Joined the Management Information Systems Student Organization (MISSO)
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Developed the FinVisor financial awareness web application after attending HackTX 2019
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  January 2020
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">September 2019</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Joined CougarCS computer science student organization
                </p>
              </TimelineContent>
            </TimelineItem>

          </Timeline>
        </div>
      </Grid>
    </Grid>
  )
}