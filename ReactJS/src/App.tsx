import React, { useState } from "react";
import './main.global.css'
import { Layout } from './shared/Layout'
import { hot } from 'react-hot-loader/root'
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList/CardsList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postContext";
import CommentContext from "./shared/context/commentContext";

function AppComponent() {
  const [commentValue, setCommentValue] = useState('');
  const [token] = useToken();
  console.log(token);

  const CommentProvider = CommentContext.Provider;

  return (
    <CommentProvider value={{
      value: commentValue,
      onChange: setCommentValue,
    }}>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <Layout>
            <Header />
            <Content>
              <PostsContextProvider>
                <CardsList />
              </PostsContextProvider>
            </Content>
          </Layout>
        </UserContextProvider>
      </tokenContext.Provider>
    </CommentProvider> 
  );
}

export const App = hot(() => <AppComponent />);
