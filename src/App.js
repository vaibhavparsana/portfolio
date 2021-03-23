import udemyCCP from './images/c-aws.jpg';
import kanbanPractitioner from './images/c-tkp.jpg';
import frontEnd from './images/c-front-end.jpg';
import javascriptAlgo from './images/c-javascript.jpg';
import webDesign from './images/c-web.jpg';
import astitva from './images/p-astistva.jpg';
import drumMachine from './images/p-drum-machine.jpg';
import jsCalc from './images/p-calculator.jpg';
import pomodoro from './images/p-pomodoro-clock.jpg';
import rqg from './images/p-quote.jpg';
import avsar from './images/p-avsar.jpg';
import rock from './images/p-rock.jpg';
import table from './images/p-table.jpg';
import value from './images/p-value.jpg';
import pform from './images/p-form.jpg';
import chart from './images/p-chart-2.jpg';
import bar_chart from './images/p-bar-chart.jpg';
import awsCCP from './images/awsCCP.jpeg';
import csservices from './images/Carriersafetyservices.png'
import awsCCPCert from './images/AWS-Certified-Cloud-Practitioner-certificate.pdf';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="site-header sticky-top py-1 my-header">
        <nav className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2 d-none d-md-inline-block active" href="#home">Home</a>
          <a className="py-2 d-none d-md-inline-block" href="#about-me">About</a>
          <a className="py-2 d-none d-md-inline-block" href="#skills">Skills</a>
          <a className="py-2 d-none d-md-inline-block" href="#achievement">Achievement</a>
          <a className="py-2 d-none d-md-inline-block" href="#portfolio">Portfolio</a>
          <a className="py-2 d-none d-md-inline-block" href="#experience">Experience</a>
          <a className="py-2 d-none d-md-inline-block" href="#education">Education</a>
        </nav>
      </header>

      <div id='home' className=''>
        <div className="container">
          <div className=" row bg-color">
            <div className="col-md-6">
            </div>
            <div className="about-content col-md-6">
              <h3 className="card-title mt-5">Vaibhav Parsana</h3>
              <div><i className="fa fa-envelope mr-3"></i>parsana7v@gmail.com</div>
              <div><i className="fa fa-phone mr-3"></i>+1 905 208 6645</div>
              <div><i className="fa fa-map-marker mr-3"></i>Brampton, Ontario, Canada</div>
              <div><a href="https://www.linkedin.com/in/vaibhav-parsana" className="text-light"><i className="fa fa-linkedin mr-3"></i>https://www.linkedin.com/in/vaibhav-parsana</a>
                <div><a href="https://github.com/vaibhavparsana" className="text-light"><i className="fa fa-github-square mr-3"></i>https://github.com/vaibhavparsana</a></div>

              </div>
            </div>
          </div>
        </div>
        <Divider space="70" />
      </div>
      <div id='about-me' className=''>
        <div className="container">
          <div className=" row justify-content-around">
            <div className="col-md-4">
              <h4 className='section-title'><i className="fa fa-user icon-color mr-3"></i>About Me</h4>
              <p className="card-text">I am a self-motivated individual with about two years of learning experience at a coding Bootcamp seeking a challenging role as Developer in an organization that values my qualifications and my ability to deliver quality products.</p>
            </div>
            <div className="col-md-4">
              <h4 className='section-title'><i className="fa fa-pencil icon-color mr-3"></i>Knowledge</h4>
              <ul>
                <li className="skill-tags">Python</li><li className="skill-tags">Nodejs</li>
                <li className="skill-tags">Java</li>
                <li className="skill-tags">C</li>
                <li className="skill-tags">React</li>
                <li className="skill-tags">JavaScript/jQuery</li>
                <li className="skill-tags">HTML/CSS</li>
                <li className="skill-tags">Bootstrap</li>
                <li className="skill-tags">PL/SQL</li>
                <li className="skill-tags">MySQL/Oracle</li>
                <li className="skill-tags">NoSQL</li>
                <li className="skill-tags">MongoDB</li>
                <li className="skill-tags">AWS</li>
                <li className="skill-tags">Kanban</li>
                <li className="skill-tags">Test Driven Development</li>
              </ul>

            </div>
          </div>

        </div>
        <Divider space="70" />
      </div>


      <div id='skills' className=''>

        <div className="container">
          <SectionHeader section_title='My Skills' icon_name='fa fa-desktop' />
          <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-4'>
              <ProgressBar skill='Python' percentage='75' />
              <ProgressBar skill='Nodejs' percentage='70' />
              <ProgressBar skill='React' percentage='80' />
              <ProgressBar skill='Java' percentage='75' />
              <ProgressBar skill='C' percentage='80' />

            </div><div className='col-md-2'></div> <div className='col-md-4'>
              <ProgressBar skill='AWS' percentage='60' />
              <ProgressBar skill='JavaScript/jQuery' percentage='85' />
              <ProgressBar skill='HTML/CSS/BootStrap' percentage='90' />
              <ProgressBar skill='Mongodb' percentage='75' />
              <ProgressBar skill='SQL' percentage='80' />
              <div className='col-md-1'></div>


            </div>
          </div>
        </div>
        <Divider space="70" />
      </div>

      <div id='achievement' className=''>
        <SectionHeader section_title='My Achievements' icon_name="fa fa-trophy" />
        <div className="container">
          <div className='row'>
            <AchievementContent achievementImage={awsCCP} achievementImageAlt='AWS_CCP' achievementTitle='AWS Certified Cloud Practitioner' achievementDesc='Learned basics of AWS Cloud architectural principles, security aspects, billing, account management, pricing models and core characteristics of deploying and operating in the AWS Cloud' achievementCerti={awsCCPCert} />
            <AchievementContent achievementImage={udemyCCP} achievementImageAlt='udemy-AWS_CCP' achievementTitle='AWS Certified Cloud Practitioner' achievementDesc='Learned basics of AWS Cloud architectural principles, security aspects, billing, account management, pricing models and core characteristics of deploying and operating in the AWS Cloud' achievementCerti='https://www.udemy.com/certificate/UC-e9e6a62a-4a32-4055-a820-37deb675db62/' />
            <AchievementContent achievementImage={kanbanPractitioner} achievementImageAlt='Kanban_Practitioner' achievementTitle='Team Kanban Practitioner' achievementDesc='Learned how to organize your work, improve transparency, identify bottlenecks, visualize workflow, improve communication, and enhance team collaboration' achievementCerti='https://edu.kanban.university/users/vaibhav-parsana' />

            <AchievementContent achievementImage={webDesign} achievementImageAlt='Responsive_Web_Design' achievementTitle='Responsive Web Design' achievementDesc='HTML, HTML5, Basic CSS, CSS Flexbox, CSS Grid, Applied Visual Design, Responsive Web Design Principles, Applied Accessibility' achievementCerti="https://freecodecamp.org/certification/vaibhavparsana/responsive-web-design" />
            <AchievementContent achievementImage={javascriptAlgo} achievementImageAlt='JavaScript_Algorithms' achievementTitle='JavaScript Algorithms & Data Structure' achievementDesc='JavaScript, ES6, Regular Expressions, Data Structures, Algorithm, Object-Oriented Programming, Functional Programming, Debugging' achievementCerti='https://www.freecodecamp.org/certification/vaibhavparsana/javascript-algorithms-and-data-structures' />

            <AchievementContent achievementImage={frontEnd} achievementImageAlt='Front_End_Libraries' achievementTitle='Front End Libraries' achievementDesc='Bootstrap, Jquery, Sass, React, Redux, React and Redux' achievementCerti='https://www.freecodecamp.org/certification/vaibhavparsana/front-end-libraries' />
          </div>
        </div>
        <Divider space="70" />
      </div>

      <div id='portfolio' className=''>
        <SectionHeader section_title='My Portfolio' icon_name="fa fa-briefcase" />
        <div className="container ">
          <div className='row justify-content-around'>
            <PortfolioContent portfolioImage={csservices} portfolioImageAlt='csservices' portfolioTitle='Carrier Safety Services' portfolioDesc='A website which provides a trucking safety services.' category='Client Project' portfolioLink='https://https://carriersafetyservices.com/' />
            <PortfolioContent portfolioImage={rqg} portfolioImageAlt='Random_quote_genereator' portfolioTitle='Random Quote Generator' portfolioDesc='A React Application to generate random quotes.' category='Freecodecamp Project' portfolioLink='https://master.d8c9xlg665lm7.amplifyapp.com/' />
            <PortfolioContent portfolioImage={jsCalc} portfolioImageAlt='Javascript-calculator' portfolioTitle='Calculator' portfolioDesc='This is a react application for calculator.' category='Freecodecamp Project' portfolioLink='https://master.dflli073n6woh.amplifyapp.com/' />
            <PortfolioContent portfolioImage={pomodoro} portfolioImageAlt='Pomodoro-clock' portfolioTitle='Pomodoro Clock' portfolioDesc='A Pomodoro Clock is a time management clock. This is a react application for pomodoro clock.' category='Freecodecamp Project' portfolioLink='https://master.d24nfqk1xjrn42.amplifyapp.com/' />

            <PortfolioContent portfolioImage={astitva} portfolioImageAlt='Astitva' portfolioTitle='Astitva' portfolioDesc='The Astitva is a organization who works to help children. This is a Static HTML/Javascript Website.' category='Personal Project' portfolioLink='http://vaibhav-parsana-portfolio-sites.s3-website-us-east-1.amazonaws.com/astitva/' />
            <PortfolioContent portfolioImage={avsar} portfolioImageAlt='Avsar' portfolioTitle='Avsar' portfolioDesc='The Avsar is a website for purchase different watches/clocks. This is a Static HTML/Javascript Website.' category='Personal Project' portfolioLink='http://vaibhav-parsana-portfolio-sites.s3-website-us-east-1.amazonaws.com/avsar/' />
            <PortfolioContent portfolioImage={drumMachine} portfolioImageAlt='Drum-machine' portfolioTitle='Drum machine' portfolioDesc='This is a React Application fotr drum machine. It has different keys which will be triggered by user in order to play music.' category='Freecodecamp Project' portfolioLink='https://master.ddai3eze139cs.amplifyapp.com/' />

            <PortfolioContent portfolioImage={rock} portfolioImageAlt='rock-paper-scissor' portfolioTitle='Rock Paper Scissor Game' portfolioDesc='This is a Static HTML/Javascript Website to play game rock paper and scissor with computer. It takes value from users and display result using prompt box.' category='Acadamic Project' portfolioLink='http://vaibhav-parsana-portfolio-sites.s3-website-us-east-1.amazonaws.com/rock-paper-scissor/' />
            <PortfolioContent portfolioImage={value} portfolioImageAlt='value-conversion' portfolioTitle='Value Conversion' portfolioDesc='This a Static HTML/Javascript Website to convert value into different measurement entities for example celsius, fahrenhites, feet, meters, inches, centimeters, pounds and kilograms.' category='Acadamic Project' portfolioLink='http://vaibhav-parsana-portfolio-sites.s3-website-us-east-1.amazonaws.com/value-conversion/' />
            <PortfolioContent portfolioImage={table} portfolioImageAlt='json-data-display' portfolioTitle='Json Data Display' portfolioDesc='This is a Static HTML/Javascript Webpage to display data from the json file into to table form using jQuery.' category='Acadamic Project' portfolioLink='http://vaibhav-parsana-portfolio-sites.s3-website-us-east-1.amazonaws.com/json-data-display/' />

            <PortfolioContent portfolioImage={pform} portfolioImageAlt='Rental-application' portfolioTitle='Rental Application' portfolioDesc='This is a Static HTML/Javascript Webpage for rental application form.' category='Acadamic Project' portfolioLink='http://vaibhav-parsana-portfolio-sites.s3-website-us-east-1.amazonaws.com/Rental-application/' />
            <PortfolioContent portfolioImage={bar_chart} portfolioImageAlt='Bar Chart' portfolioTitle='Bar Chart' portfolioDesc='This is a Static HTML/Javascript Webpage to generate bar chart using Data Visualication(D3).' category='Freecodecamp Project' portfolioLink='http://vaibhav-parsana-portfolio-sites.s3-website-us-east-1.amazonaws.com/bar-chart/' />
            <PortfolioContent portfolioImage={chart} portfolioImageAlt='Scatterplot Graph' portfolioTitle='Scatterplot Graph' portfolioDesc='This is a Static HTML/Javascript Webpage to generate Scatterplot Graph using Data Visualication(D3).' category='Freecodecamp Project' portfolioLink='http://vaibhav-parsana-portfolio-sites.s3-website-us-east-1.amazonaws.com/scatterplot-graph/' />
          </div>
        </div>
        <Divider space="70" />
      </div>

      <div id='experience' className=''>
        <SectionHeader section_title='My Experience' icon_name='fa fa-building-o' />
        <div className="container">
          <div className="row experience-content">
            <div className="left-content col-md-4">
              <p className="mt-1">June 2017 - July 2018</p>

            </div>

            <div className="middle-content col-md-1">
              <i className="fa fa-circle time-circle"></i>
              <p className="vert-line text-center"></p>

            </div>
            <div className="right-content col-md-7">
              <h4>Assistant Engineer at Aaditya Techtronics Pvt Ltd</h4>
              <p>Research and Development Department</p>
              <ul><li>Analyzed requirements and prepared the design for research products.</li>
                <li>Monitored the products under development in the research lab.</li>
                <li>Assembled circuitry for given system as per requirements.</li>
                <li>Developed, integrated and tested the research products.</li></ul>
            </div>
          </div>
        </div>
        <Divider space="70" />
      </div>

      <div id='education' className=''>
        <SectionHeader section_title='My Education' icon_name="fa fa-graduation-cap" />
        <div className="container">
          <EducationContent certificate="Ontario College Diploma" majors="Computer Systems Technician – Software Engineering" collegename="Sheridan College" year="June 2019 - Aug 2020" />
          <EducationContent certificate="Bachelor's Engineering" majors="Electronics and Telecommunication Engineering" collegename="BVM Collge of Engineering" year="June 2014 - May 2017" />
          <EducationContent certificate="Diploma Engineering" majors="Electronics and Communication Engineering" collegename="STBS College of Engineering " year="June 2011 - May 2014" />

        </div>
        <Divider space="70" />
      </div>

    </div >
  );
}

function ProgressBar(props) {
  return <div>
    <p className="my-progress-title">{props.skill}<span className="float-right">{props.percentage + '%'}</span></p>
    <div className='progress'>
      <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: props.percentage + '%' }} aria-valuenow={props.percentage} aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
}

function SectionHeader(props) {
  return <div className='container'><div className="row"><div className="col-md-12">
    <h4 className='section-title text-center'><i className={"icon-color mr-3 " + props.icon_name}></i>{props.section_title}</h4>
  </div>
  </div>
  </div>
}

function AchievementContent(props) {
  return <div className="col-md-6 my-2" >
    <div className="row g-0 certi-container">
      <div className="col-md-4 certi-border mx-auto text-center">
        <img className='img-fluid ' src={props.achievementImage} alt={props.achievementImageAlt} style={{ Height: 100, Width: 100 }} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{props.achievementTitle}</h5>
          <p className="card-text">{props.achievementDesc}</p>
          <a href={props.achievementCerti} target="_blank" className="btn btn-primary">View Certificate</a>
          {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
      </div>
    </div>
  </div>
}

function PortfolioContent(props) {
  return <div className="col-md-4 my-3">
    <div className="card portfolio-card">
      <img src={props.portfolioImage} className="card-img-top" alt={props.portfolioImageAlt} />
      <div className="card-body bg-portfolio">
        <h5 className="card-title">{props.portfolioTitle}</h5>
        <p className="card-text">{props.portfolioDesc}</p>

        <a href={props.portfolioLink} target="_blank" className="btn btn-primary">View</a><br />
        <span class="badge badge-pill badge-secondary mt-4">{props.category}</span>
      </div>
    </div>
  </div>
}


function EducationContent(props) {
  return <div>
    <div className="row experience-content">
      <div className="left-content col-md-4">

        <p className="mt-1">{props.year}</p>



      </div>

      <div className="middle-content col-md-1">
        <i className="fa fa-circle time-circle"></i>
        <p className="vert-line text-center"></p>

      </div>
      <div className="right-content col-md-7">
        <h4>{props.certificate}</h4>
        <p>{props.majors}</p>
        <p>{props.collegename}</p>
      </div>
    </div>
  </div>
}

function Divider(props) {
  return <div style={{ height: props.space + 'px' }}>

  </div>
}



export default App;
