import WidgetWrapper from "../components/WidgetWrapper";
import FlexBox from "../components/FlexBox";

const About = () => {
    return (
        <div className="About">

            <WidgetWrapper style={{width: "max-content", marginBottom: "50px"}}>
                <h1>about me</h1>
                <p>this is basically my resume</p>

            </WidgetWrapper>

            <WidgetWrapper style={{marginBottom: "20px"}}>
                <h1 style={{textAlign: "center"}}>Emmanuel Sayoto</h1>
                <h3 style={{textAlign: "center"}}>Email: emmanuelsayoto@gmail.com | Website: emmanuelsayoto.com</h3>
            </WidgetWrapper>

            <WidgetWrapper style={{marginBottom: "30px"}}>
                <h2>Education</h2>
                <ul>
                <li> <strong>Concordia University </strong> | Bachelor of Computer Science, GPA: 3.330, 2021 – Expected May 2024
                    <ul>
                    <li>Relevant Courses: Data Structures and Algorithms, Object-Oriented Programming, Introduction to Software Engineering, Formal Methods of Software Engineering, User Interface Design, Introduction to Data Analytics, Big Data Analytics, Databases</li>
                    </ul>
                </li>
                <li><strong>Vanier College</strong> | Computer Science Technology, 2017 – Graduated 2021
                    <ul>
                    <li>Honour Roll Winter 2019, Fall 2019</li>
                    </ul>
                </li>
                </ul>

                <h2 style={{marginTop: "30px"}}>Skills</h2>
                <ul>
                    <li><strong>Programming Languages:</strong> Java, C# and .NET, C, Python, JavaScript</li>
                    <li><strong>Web Development:</strong> React, ASP.NET, HTML, CSS, PHP, Node.js, Express, Bootstrap</li>
                    <li><strong>Databases:</strong> SQL, MySQL, MongoDB</li>
                    <li><strong>Developer tools:</strong> Git, GitHub, Bitbucket, Android Studio, Gradle, Google Cloud Platform</li>
                </ul>

                    <h2 style={{marginTop: "30px"}}>Work Experience</h2>
                    <ul>
                    <li><strong>TELUS</strong> | Google Cloud Platform Developer Support (Full-time), Jan 2020 – Aug 2020
                        <ul>
                        <li>Assist clients with Google Cloud Platform related issues to meet strict deadlines</li>
                        <li>Work with various GCP services and products such as Google App Engine, Cloud SQL, and Cloud Storage for bug replication and testing purposes</li>
                        <li>Utilize various internal tools, documentation, and logs in order to diagnose and resolve cases</li>
                        <li>Communicate with Google Engineers regarding any potential and ongoing bugs</li>
                        </ul>
                    </li>
                    <li><strong>CGI Inc.</strong> | Access Management Technician (Full-time and Part-time), May 2018 – Aug 2019
                        <ul>
                        <li>Processed Active Directory requests in ticket form</li>
                        <li>Completed tickets correctly and timely in order to meet the ticket’s SLA</li>
                        </ul>
                    </li>
                    </ul>
            
            </WidgetWrapper>
        </div>
        
        
    );
}

export default About;