import React from 'react';
import { Row, Col, Card, Form, Input, Button, Typography, Space, message } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  SendOutlined,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined
} from '@ant-design/icons';
import './Contact.scss';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form submitted:', values);
    message.success('Message sent successfully! I\'ll get back to you soon.');
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Please check your form inputs and try again.');
  };

  const contactInfo = [
    {
      icon: <MailOutlined />,
      label: 'Email',
      value: 'lokesh.bhaskarnr@gmail.com',
      link: 'mailto:lokesh.bhaskarnr@gmail.com',
    },
    {
      icon: <PhoneOutlined />,
      label: 'Phone',
      value: '+91 73376 49759',
      link: 'tel:+917337649759',
    },
    {
      icon: <EnvironmentOutlined />,
      label: 'Location',
      value: 'Bengaluru, Karnataka, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <GithubOutlined />,
      name: 'GitHub',
      url: 'https://github.com/LokeshBhaskarNR',
    },
    {
      icon: <LinkedinOutlined />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lokesh-bhaskar-4113ab2a4/',
    },
    {
      icon: <InstagramOutlined />,
      name: 'Instagram',
      url: 'https://www.instagram.com/lokesh__b__/',
    },
  ];

  return (
    <div className="contact-page">
      <section className="contact-header">
        <Title level={1}>Get In Touch</Title>
        <Paragraph className="contact-description">
          I'm always interested in hearing about new opportunities and exciting projects. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </Paragraph>
      </section>

      <Row gutter={[48, 48]}>
        <Col xs={24} lg={14}>
          <Card className="contact-form-card">
            <Title level={3}>Send Me a Message</Title>
            <Form
              form={form}
              name="contact"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
              size="large"
            >
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your first name!',
                      },
                      {
                        min: 2,
                        message: 'First name must be at least 2 characters!',
                      },
                    ]}
                  >
                    <Input placeholder="John" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your last name!',
                      },
                      {
                        min: 2,
                        message: 'Last name must be at least 2 characters!',
                      },
                    ]}
                  >
                    <Input placeholder="Doe" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                  {
                    type: 'email',
                    message: 'Please enter a valid email address!',
                  },
                ]}
              >
                <Input placeholder="john.doe@example.com" />
              </Form.Item>

              <Form.Item
                name="subject"
                label="Subject"
                rules={[
                  {
                    required: true,
                    message: 'Please input a subject!',
                  },
                  {
                    min: 5,
                    message: 'Subject must be at least 5 characters!',
                  },
                ]}
              >
                <Input placeholder="Project Collaboration" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[
                  {
                    required: true,
                    message: 'Please input your message!',
                  },
                  {
                    min: 10,
                    message: 'Message must be at least 10 characters!',
                  },
                ]}
              >
                <TextArea
                  rows={6}
                  placeholder="Tell me about your project or just say hello..."
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SendOutlined />}
                  size="large"
                  className="submit-button"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={10}>
          <div className="contact-info">
            <Card className="contact-info-card">
              <Title level={3}>Contact Information</Title>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <div className="contact-label">{info.label}</div>
                      {info.link ? (
                        <a href={info.link} className="contact-value">
                          {info.value}
                        </a>
                      ) : (
                        <div className="contact-value">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </Space>
            </Card>

            <Card className="social-links-card">
              <Title level={4}>Follow Me</Title>
              <Space size="large">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    type="text"
                    icon={social.icon}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    title={social.name}
                  />
                ))}
              </Space>
            </Card>

            <Card className="availability-card">
              <Title level={4}>Availability</Title>
              <Paragraph>
                I'm currently <span className="status available">available</span> for 
                freelance projects and full-time opportunities. Feel free to reach out!
              </Paragraph>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;