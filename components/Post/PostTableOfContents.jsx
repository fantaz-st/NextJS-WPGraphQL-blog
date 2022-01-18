import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';

import { Typography, Box, Card } from '@mui/material';

const PostTableOfContents = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    let contentsArr = [];
    var elements = document.getElementsByTagName('h2');
    for (var i = 0, len = elements.length; i < len; i++) {
      contentsArr.push({ id: i, text: elements[i].textContent, tag: elements[i].attributes.id.value });
    }
    setContents(contentsArr);
  }, []);

  // if (!contents) return <p>No table of contents</p>;

  return (
    <Layout>
      {contents.length > 0 && (
        <>
          <Typography variant="theme-h3">Table Of Contents</Typography>
          <Card variant="toc" sx={{ margin: '2rem 0' }}>
            {contents.map((el, i) => (
              <Box key={el.id} my="1rem">
                <Link href={`#${el.tag}`} passHref>
                  <Typography variant="theme-link-m-alt">{`${i + 1}.    ${el.text}`}</Typography>
                </Link>
              </Box>
            ))}
          </Card>
        </>
      )}
    </Layout>
  );
};

export default PostTableOfContents;
