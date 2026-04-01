import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

export function usePostsData() {
  const [posts, setPosts] = useState([]);
  const token = useContext(tokenContext)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });

        setPosts(response.data.data.children);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return posts;
}