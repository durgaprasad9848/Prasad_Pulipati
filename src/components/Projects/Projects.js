import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Personal from "../../Assets/Projects/Personal.jpeg";
import Restaurent from "../../Assets/Projects/Restaurent.jpg";
import Shopping from "../../Assets/Projects/Shopping.png";
import Expense from "../../Assets/Projects/Expense.jpg";
import Mailbox from "../../Assets/Projects/Mailbox.jpg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mailbox}
              isBlog={false}
              title="Mail box client"
              description="Mail box for performing all the user specific mail operations of send | Receive | Unread | Delete"
              ghLink="https://github.com/durgaprasad9848/Mailbox"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shopping}
              isBlog={false}
              title="Online shopping"
              description="User specific online shopping application that perform all the cart operations and finally sending order request to the server"
              ghLink="https://github.com/durgaprasad9848/ecommerceapp"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Expense}
              isBlog={false}
              title="Expense Tracker"
              description="It will track the monthly expenses of the user by taking individual expense type and calculate and shows the final monthly report"
              ghLink="https://github.com/durgaprasad9848/expensetracker"
                   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Restaurent}
              isBlog={false}
              title="Restaurent app"
              description="This app will display the available food items in the restaurent and alows user to add food items to the cart and send order request to the restaurent"
              ghLink="https://github.com/durgaprasad9848/foodorder"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Personal}
              isBlog={false}
              title="Personal portfolio website"
              description="It is my personal portfolio website for showcasing all my skill set and my contact details."
              ghLink="https://github.com/durgaprasad9848/personal_portfolio"
             />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
