import React from 'react';
import { Row, Col, Button, Typography, Image } from 'antd';
import { Link } from 'react-router-dom';
import { 
  DownloadOutlined, 
  EyeOutlined, 
  CodeOutlined,
  RocketOutlined 
} from '@ant-design/icons';
import './Home.scss';

const { Title, Paragraph } = Typography;

const Home = () => {

    const handleResumeDownload = () => {

    const link = document.createElement('a');
    link.href = '/assets/documents/Lokesh_B_Resume.pdf';
    link.download = 'Lokesh_B_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResumeView = () => {
    window.open('/assets/documents/Lokesh_B_Resume.pdf', '_blank');
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={12} lg={14}>
            <div className="hero-content">
              <Title level={1} className="hero-title">
                Hi, I'm <span className="highlight">Lokesh Bhaskar</span>
              </Title>
              <Title level={2} className="hero-subtitle">
                Full Stack Developer And ML Enthusiast
              </Title>
              <Paragraph className="hero-description">
                I'm currently working as a Software Engineer at <a href="https://thoughtclan.com/" target="_blank" rel="noopener noreferrer">ThoughtClan Technologies</a>.
                I specialize in building high-quality web applications
                and exploring the latest in machine learning. 
                Let's create something amazing together!
              </Paragraph>

              <div className="resume-actions">
              
                <Button 
                  size="large" 
                  icon={<EyeOutlined />}
                  className="secondary-btn resume-download-btn"
                  block
                >
                  <Link to="/projects">View My Work</Link>
                </Button>
              
              
                <Button 
                  size="large" 
                  icon={<DownloadOutlined />}
                  onClick={handleResumeDownload}
                  className="secondary-btn resume-download-btn"
                  block
                >
                  Download Resume
                </Button>
                
                <Button 
                  type="link" 
                  onClick={handleResumeView}
                  icon={<EyeOutlined />}
                  size="small"
                  className="view-resume-link"
                >
                  View Resume Online
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={10}>
            <div className="hero-image">
              <Image
                src="profile_image.jpg"
                alt="Lokesh Bhaskar"
                preview={false}
                className="profile-image"
              />
            </div>
          </Col>
        </Row>
      </section>

      <section className="features-section">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <div className="feature-card">
              <div className="feature-icon">
                <CodeOutlined />
              </div>
              <Title level={4}>Machine Learning</Title>
              <Paragraph>
                Leveraging data-driven techniques to build intelligent
                systems that solve complex problems.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="feature-card">
              <div className="feature-icon">
                <RocketOutlined />
              </div>
              <Title level={4}>React Development</Title>
              <Paragraph>
                Building dynamic and responsive web applications
                using React.js and modern front-end technologies.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="feature-card">
              <div className="feature-icon">
                <EyeOutlined />
              </div>
              <Title level={4}>Problem Solving</Title>
              <Paragraph>
                Passionate about tackling challenges and finding
                innovative solutions through code.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <Title level={2}>Connect..! Collaborate..! Contribute..!</Title>
          <Paragraph>
            Lets get in touch to discuss exciting opportunities,
            innovative projects, or potential collaborations. 
            I'm always open to connecting with like-minded professionals.
          </Paragraph>
          <Button type="primary" size="large">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;