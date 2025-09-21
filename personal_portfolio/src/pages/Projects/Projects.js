import React, { useState } from 'react';
import { Row, Col, Card, Button, Tag, Input, Select, Typography, Image } from 'antd';
import { 
  GithubOutlined, 
  EyeOutlined, 
  SearchOutlined,
  FilterOutlined 
} from '@ant-design/icons';
import './Projects.scss';

const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;
const { Meta } = Card;

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Rare Dermatology Skin Disease Detection',
      description: 'A web application that uses machine learning to identify rare skin diseases from images, providing users with potential diagnoses and information.',
      image: 'dermaevolve_img.png',
      category: 'mobile',
      technologies: ['CNN', 'Streamlit', 'SQLite', 'Tensorflow', 'Keras'],
      github: 'https://github.com/LokeshBhaskarNR/DermaEvolve---An-Advanced-Skin-Disease-Predictor.git',
      demo: 'https://dermaevolve.streamlit.app/',
      featured: true,
    },
    {
      id: 3,
      title: 'Kannada Speaker Conversation Transcription And Speaker Reocgnition',
      description: 'A Flask application that allows users to upload or record Kannada conversations and automatically identifies speakers, transcribes audio to text with timestamps, and supports real-time addition of new speakers.',
      image: 'kannada_img.png',
      category: 'desktop',
      technologies: ['Flask', 'Python', 'Machine Learning', 'WebRTC'],
      github: 'https://github.com/LokeshBhaskarNR/Kannada_Speaker_Conversation_Transcription_And_Speaker_Reocgnition.git',
      featured: true,
    },
    {
      id: 2,
      title: 'Generic Audio Classifier',
      description: 'A powerful audio classification application using state-of-the-art deep learning models to accurately classify various audio types, including animals, speech, and environmental sounds.',
      image: 'gac_app_img.png',
      category: 'mobile',
      technologies: ['CNN', 'Streamlit', 'Pytorch', 'Librosa'],
      github: 'https://github.com/LokeshBhaskarNR/Generic-Audio-Classifier.git',
      demo: 'https://gacapp.streamlit.app/',
      featured: false,
    },
    {
      id: 4,
      title: 'Audio-Visual Verification System',
      description: 'The Audio-Visual Verification System is an advanced media analysis tool that verifies whether audio content matches visual content in images and videos. Using machine learning and AI, it detects mismatches between audio and visual elements, helping to identify potentially misleading or manipulated media.',
      image: 'gac_proof_img.jpg',
      category: 'mobile',
      technologies: ['YOLO', 'Imagga API', 'CNN', 'SQLite'],
      github: 'https://github.com/LokeshBhaskarNR/Generic-Audio-Classifier-Proofing.git',
      demo: 'https://gacproof.streamlit.app/',
      featured: true,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with dark/light mode.',
      image: 'portfolio_img.png',
      category: 'web',
      technologies: ['React', 'Sass', 'Ant Design'],
      github: 'https://github.com/LokeshBhaskarNR/Personal_Portfolio.git',
      featured: false,
    },
    {
      id: 6,
      title: 'Social Media Sentiment Analysis',
      description: 'A web app that analyzes social media posts to determine public sentiment on various topics using NLP techniques.',
      image: 'https://www.mentionlytics.com/wp-content/uploads/2022/12/Mentionlytics-Sentiment-Analysis-Feature.png',
      category: 'web',
      technologies: ['Vader', 'Flask', 'Scikit-learn', 'Heroku'],
      github: 'https://github.com/LokeshBhaskarNR/Social-Media-Sentiment-Analysis.git',
      featured: false,
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Applications' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'desktop', label: 'Desktop Apps' },
  ];

  const technologies = [
    'all', 'React', 'Sass', 'Ant Design', 'Flask', 'Python', 
    'CNN', 'Streamlit', 'SQLite', 'Tensorflow', 'Keras', 'Pytorch', 'Librosa', 
    'YOLO', 'Imagga API', 'Scikit-learn', 'Heroku'
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesTech = selectedTech === 'all' || 
                       project.technologies.some(tech => 
                         tech.toLowerCase().includes(selectedTech.toLowerCase())
                       );
    
    return matchesSearch && matchesCategory && matchesTech;
  });

  const featuredProjects = filteredProjects.filter(project => project.featured);

  return (
    <div className="projects-page">
      <section className="projects-header">
        <Title level={1}>My Projects</Title>
        <Paragraph className="projects-description">
          Here's a collection of projects I've worked on, showcasing different 
          technologies and problem-solving approaches.
        </Paragraph>
      </section>

      <section className="projects-filters">
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={12} md={8}>
            <Search
              placeholder="Search projects..."
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              allowClear
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Select
              value={selectedCategory}
              onChange={setSelectedCategory}
              style={{ width: '100%' }}
              suffixIcon={<FilterOutlined />}
            >
              {categories.map(cat => (
                <Option key={cat.value} value={cat.value}>
                  {cat.label}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Select
              value={selectedTech}
              onChange={setSelectedTech}
              style={{ width: '100%' }}
              placeholder="Technology"
            >
              {technologies.map(tech => (
                <Option key={tech} value={tech}>
                  {tech === 'all' ? 'All Technologies' : tech}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
      </section>

      {featuredProjects.length > 0 && (
        <section className="featured-projects">
          <Title level={2}>Featured Projects</Title>
          <Row gutter={[24, 24]}>
            {featuredProjects.map(project => (
              <Col xs={24} lg={12} key={project.id}>
                <Card
                  className="project-card featured"
                  cover={
                    <Image
                      alt={project.title}
                      src={project.image}
                      preview={false}
                      className="project-image"
                    />
                  }
                  actions={[
                    <Button
                      type="text"
                      icon={<GithubOutlined />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        Github Code
                    </Button>,
                    <Button
                      type="text"
                      icon={<EyeOutlined />}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </Button>,
                  ]}
                >
                  <Meta
                    title={project.title}
                    description={project.description}
                  />
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <Tag key={tech} color="blue">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      )}

      <section className="all-projects">
        <Title level={2}>All Projects ({filteredProjects.length})</Title>
        <Row gutter={[24, 24]}>
          {filteredProjects.map(project => (
            <Col xs={24} sm={12} lg={8} key={project.id}>
              <Card
                className="project-card"
                cover={
                  <Image
                    alt={project.title}
                    src={project.image}
                    preview={false}
                    className="project-image"
                  />
                }
                actions={[
                  <Button
                    type="text"
                    icon={<GithubOutlined />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Code
                  </Button>,
                  <Button
                    type="text"
                    icon={<EyeOutlined />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </Button>,
                ]}
              >
                <Meta
                  title={project.title}
                  description={project.description}
                />
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <Tag key={tech} color="blue">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <Title level={4}>No projects found</Title>
            <Paragraph>Try adjusting your search criteria.</Paragraph>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;