import React from "react";
import Post from "./Post";

const DUMMY_DATA = [
  {
    id: "123",
    username: "Adi",
    userImg:
      "https://static8.depositphotos.com/1057741/1041/i/950/depositphotos_10415184-stock-photo-golden-retriever-dog-sitting-on.jpg",
    img: "https://links.papareact.com/jjm",
    caption: "Work and become a Solidity developer",
  },
  {
    id: "546",
    username: "Jake",
    userImg:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1743&q=80",
    img: "https://links.papareact.com/jjm",
    caption: "Work and become a Solidity developer",
  },
];

const Posts = () => {
  return (
    <div>
      {DUMMY_DATA.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          id={post.id}
          img={post.img}
          userImg={post.userImg}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
