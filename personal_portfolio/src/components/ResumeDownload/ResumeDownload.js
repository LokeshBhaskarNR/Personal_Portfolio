
import React, { useState } from 'react';
import { Button, message, Space, Dropdown } from 'antd';
import { 
  DownloadOutlined, 
  EyeOutlined, 
  FileOutlined,
  CloudDownloadOutlined 
} from '@ant-design/icons';

const ResumeDownload = ({ 
  resumePath = '/assets/documents/Lokesh_B_Resume.pdf',
  fileName = 'Lokesh_B_Resume.pdf',
  showViewOption = true,
  showDropdown = false 
}) => {
  const [downloading, setDownloading] = useState(false);

  const handleDirectDownload = async () => {
    try {
      setDownloading(true);
      
      const response = await fetch(resumePath, { method: 'HEAD' });
      if (!response.ok) {
        throw new Error('Resume file not found');
      }

      const link = document.createElement('a');
      link.href = resumePath;
      link.download = fileName;
      link.target = '_blank';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      message.success('Resume download started!');
    } catch (error) {
      console.error('Download error:', error);
      message.error('Failed to download resume. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  const handleFetchDownload = async () => {
    try {
      setDownloading(true);
      
      const response = await fetch(resumePath);
      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      message.success('Resume downloaded successfully!');
    } catch (error) {
      console.error('Download error:', error);
      message.error('Failed to download resume. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  const handleViewResume = () => {
    try {
      window.open(resumePath, '_blank', 'noopener,noreferrer');
      message.info('Opening resume in new tab...');
    } catch (error) {
      console.error('View error:', error);
      message.error('Failed to open resume. Please try again.');
    }
  };

  const handleExternalDownload = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const menuItems = [
    {
      key: 'download',
      label: 'Download PDF',
      icon: <DownloadOutlined />,
      onClick: handleDirectDownload,
    },
    {
      key: 'view',
      label: 'View Online',
      icon: <EyeOutlined />,
      onClick: handleViewResume,
    },
    {
      key: 'google-drive',
      label: 'Google Drive',
      icon: <CloudDownloadOutlined />,
      onClick: () => handleExternalDownload('https://drive.google.com/file/d/1EqV1gbgyYAemVIcsYB9AjQ04n-aFxUyu/view?usp=sharing'),
    },
  ];

  if (showDropdown) {
    return (
      <Dropdown
        menu={{ items: menuItems }}
        placement="bottomLeft"
        trigger={['click']}
      >
        <Button 
          size="large" 
          icon={<FileOutlined />}
          loading={downloading}
        >
          Resume Options
        </Button>
      </Dropdown>
    );
  }

  return (
    <Space direction="vertical" size="small">
      <Space size="large">
        <Button 
          size="large" 
          icon={<DownloadOutlined />}
          onClick={handleDirectDownload}
          loading={downloading}
          className="secondary-btn"
        >
          Download Resume
        </Button>
        
        {showViewOption && (
          <Button 
            type="link" 
            onClick={handleViewResume}
            icon={<EyeOutlined />}
            size="small"
          >
            View Online
          </Button>
        )}
      </Space>
    </Space>
  );
};

export default ResumeDownload;