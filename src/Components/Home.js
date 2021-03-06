import React from 'react';
import Grid from '@material-ui/core/Grid';
import portrait_no_bg from '../images/professional_portrait.png';
import githubIcon from '../images/GitHub-Mark-64px.png';
import linkedInIcon from '../images/linkedin.png';


export default function Home() {
  return (
    <Grid container className="HomeScreenContainer" >
      <Grid item xs={12} lg={6} className="DescColumn" >
        <div style={{ borderBottomWidth: 2, borderBottomColor: "grey", borderBottomStyle: "solid" }} >
          <p style={{ fontSize: 65, fontWeight: "bold", fontFamily: "Castoro" }} >Syed Asad Rizvi</p>
          <p>
            Computer Science undergraduate at the University of Houston,
            machine learning research assistant, and data science enthusiast.
          </p>
          <p>
            Click around to find out more about me, or check out one of my
            portfolios below:
          </p>
        </div>
        <div className="IconsContainer" >
          <a href="https://github.com/SyedA5688" target="_blank" rel="noreferrer" ><img src={githubIcon} alt="GitHub" height="50px" ></img></a>
          <a href="https://linkedin.com/in/syed-a-rizvi-01" target="_blank" rel="noreferrer" ><img src={linkedInIcon} alt="LinkedIn" height="50px" ></img></a>
        </div>
      </Grid>
      <Grid item xs={12} lg={6} className="ImageColumn" >
        <img src={portrait_no_bg} alt="Syed Rizvi" height="100%" ></img>
      </Grid>
    </Grid>
  )
}