import React from 'react';
import { List, ListItem, Card, CardContent, Typography } from '@mui/material';

type Post = {
  id: bigint;
  title: string;
  body: string;
  author: string;
  timestamp: bigint;
};

type PostListProps = {
  posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => (
        <ListItem key={post.id.toString()}>
          <Card sx={{ width: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                By {post.author}
              </Typography>
              <Typography variant="body2">
                {post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}
              </Typography>
            </CardContent>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;
