import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Comment {
  data: {
    body: string;
  };
}

interface RedditCommentsProps {
  postId: string;
}

interface RedditResponse {
  map(arg0: (comment: { data: { body: string; }; }) => { data: { body: string; }; }): Comment[];
  children: RedditResponse;
  data: {
    children?: {
      data: {
        body: string;
      };
    }[];
  };
}


const RedditComments: React.FC<RedditCommentsProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<RedditResponse> = await axios.get(
          `http://api.reddit.com/r/subreddit/comments/${postId}`,
          {
            headers: {
              'User-Agent': 'your_app_name/0.1',
            },
          }
        );

        // Выводим данные в консоль для отладки
        console.log('Response Data:', response.data);

        if (response.data && response.data.data.children) {
          const formattedComments: Comment[] = response.data.data.children.map(
            (comment: { data: { body: string } }) => ({
              data: { body: comment.data.body },
            })
          );
          setComments(formattedComments);
        } else {
          console.error('Ошибка при выполнении запроса::', response.data);
        }                     
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <div>
      <h2>Комментарии к посту {postId}</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.data.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default RedditComments;
