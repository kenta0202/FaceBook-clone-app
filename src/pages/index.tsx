/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Layout from "components/Layout";
import { Header } from "components/Header";
import { getSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import React from "react";
import { Login } from "components/Login";
import { Sidebar } from "components/Sidebar";
import { Feed } from "components/Feed";
import { Widgets } from "components/Widgets";
import { db } from "../../firebase";

const IndexPage = ({ session, posts }) => {
  if (!session) return <Login />;

  return (
    <Layout title="FaceBook">
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //Get User
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: { session, posts: docs },
  };
};
