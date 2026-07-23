"use client";
import React from 'react';
import Link from 'next/link';
import { Button, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <Title level={2}>Home Page</Title>
      <Paragraph>Welcome to Home.</Paragraph>
      <div style={{ marginTop: '20px' }}>
        <Link href="/berita">
          <Button type="primary">Latest News</Button>
        </Link>
      </div>
    </div>
  );
}