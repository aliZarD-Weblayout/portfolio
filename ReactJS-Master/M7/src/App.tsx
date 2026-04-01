import React from "react";
import './main.global.css'
import { Layout } from './shared/Layout'
import { hot } from 'react-hot-loader/root'
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList/CardsList";

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent)
