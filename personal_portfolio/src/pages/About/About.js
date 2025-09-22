import React from 'react';
import { Row, Col, Typography, Card, Progress, Image } from 'antd';
import { 
  TrophyOutlined, 
  BookOutlined, 
  RocketOutlined,
  } from '@ant-design/icons';
import './About.scss';

const { Title, Paragraph } = Typography;

const About = () => {
  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'Node', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'Python', level: 82 },
    { name: 'HTML/CSS', level: 92 },
    { name: 'Tensorflow - Keras', level: 78 },
    { name: 'Pytorch', level: 80 },
    { name: 'MongoDB', level: 75 },
  ];

  const experience = [
    {
      year: '2025-Present',
      title: 'Software Developer',
      company: 'ThoughtClan Technologies.',
      description: 'Learning and working on various web development projects using React and Node Js.',
    },
    {
      year: '2025',
      title: 'ML Developer And Maintainance Operator Intern',
      company: 'Bharat Electronics Limited - BEL',
      description: 'Developed and maintained multiple client projects with modern web technologies.',
    },
    {
      year: '2023-2024',
      title: 'ML Intern',
      company: 'Varcons Technologies Pvt Ltd',
      description: 'Worked on machine learning models and data analysis projects to derive insights and improve performance.',
    }
  ];

      const education = [
    {
      degree: 'Bachelor of Engineering (BE)',
      field: 'Computer Science & Engineering',
      institution: 'SJB Institute of Technology, Bangalore',
      year: '2021 - 2025',
      grade: 'CGPA: 9.1/10',
    },
    {
      degree: 'Higher Secondary Education (PUC)',
      field: 'Science (PCMB)',
      institution: 'Mahesh PU College, Bangalore',
      year: '2019 - 2021',
      grade: 'Percentage: 89%',
    }

  ];


  return (
    <div className="about-page">
      <section className="about-hero">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={10}>
            <Image
              src="profile_image.jpg"
              alt="About Lokesh Bhaskar"
              preview={false}
              className="about-image"
            />
          </Col>
          <Col xs={24} md={14}>
            <div className="about-content">
              <Title level={1}>About Me</Title>
              <Paragraph className="intro-text">
                I'm a passionate Full Stack Developer aiming to develop digital solutions that make a difference.
                I specialize in React.js and Node, building scalable applications that deliver 
                exceptional user experiences.
              </Paragraph>
              <Paragraph>
                My journey in tech started with a curiosity leaning towards machine learning and web development.
                Till now, I've worked on various projects ranging from dynamic web applications to 
                machine learning models, always eager to learn and adapt to new technologies.
              </Paragraph>
              <Paragraph>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </section>

      <section className="education-section">
        <Title level={2} className="section-title">Education</Title>
        <Row gutter={[24, 24]}>
          {education.map((edu, index) => (
            <Col xs={24} md={8} key={index}>
              <Card className="education-card">
                <Title level={4}>{edu.degree}</Title>
                <Paragraph className="education-field">{edu.field}</Paragraph>
                <Paragraph className="institution">{edu.institution}</Paragraph>
                <Paragraph className="education-year">{edu.year}</Paragraph>
                <Paragraph className="education-grade">{edu.grade}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="skills-section">
        <Title level={2} className="section-title">Technical Skills</Title>
        <Row gutter={[24, 24]}>
          {skills.map((skill, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card className="skill-card">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <Progress 
                  percent={skill.level} 
                  showInfo={false}
                  strokeColor={{
                    '0%': '#1890ff',
                    '100%': '#52c41a',
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </section>

    <section className="experience-section">
      <Title level={2} className="section-title">Experience</Title>

      <div className="experience-list">
        {experience.map((exp, index) => (
          <Card key={index} className="experience-card">
            <div className="experience-year">{exp.year}</div>
            <Title level={4}>{exp.title}</Title>
            <Paragraph className="company">{exp.company}</Paragraph>
            <Paragraph>{exp.description}</Paragraph>
          </Card>
        ))}
      </div>
    </section>


      <section className="achievements-section">
        <Title level={2} className="section-title">Achievements</Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <Card className="achievement-card">
              <BookOutlined className="achievement-icon" />
              
              <Title level={4}>2 Research Papers</Title>
              <Paragraph>Published papers on Dermatology and Social Media pattern Analysis</Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="achievement-card">
              <RocketOutlined className="achievement-icon" />
              <Title level={4}>Open Source</Title>
              <Paragraph>Active contributor to various open source projects and datasets through web-scraping</Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="achievement-card">
              
              <TrophyOutlined className="achievement-icon" />
              <Title level={4}>Coding Competitions</Title>
              <Paragraph>Won in 2 coding contests featuring DSA skills</Paragraph>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default About;