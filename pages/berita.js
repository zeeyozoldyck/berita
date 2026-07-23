import React, { useState } from 'react';
import Link from 'next/link';
import { Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

export default function Berita() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <Title level={2}>Latest News</Title>
      <Paragraph>
        deskripsi.
      </Paragraph>
      <Paragraph>
        deskripsi.
      </Paragraph>

      {showMore && (
        <Paragraph>
          deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi deskripsi.
        </Paragraph>
      )}

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <Button type="primary" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Read Less' : 'Read More'}
        </Button>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
