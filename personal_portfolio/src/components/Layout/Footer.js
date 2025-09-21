import React from 'react';
import { Layout, Space, Button } from 'antd';
import { 
  GithubOutlined, 
  LinkedinOutlined,  
  MailOutlined, 
  InstagramFilled
} from '@ant-design/icons';
import './Footer.scss';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h4>Lokesh Bhaskar</h4>
          <p>Full Stack Developer passionate about creating amazing web experiences</p>
        </div>
        
        <Space size="large" className="social-links">
          <Button
            type="text"
            icon={<GithubOutlined />}
            href="https://github.com/LokeshBhaskarNR"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          />
          <Button
            type="text"
            icon={<LinkedinOutlined />}
            href="'https://www.linkedin.com/in/lokesh-bhaskar-4113ab2a4/'"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          />
          <Button
            type="text"
            icon={<InstagramFilled />}
            href="https://www.instagram.com/lokesh__b__/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          />
          <Button
            type="text"
            icon={<MailOutlined />}
            href="mailto:lokesh.bhaskarnr@gmail.com"
            className="social-link"
          />
        </Space>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Lokesh Bhaskar. All rights reserved.</p>
      </div>
    </AntFooter>
  );
};

export default Footer;