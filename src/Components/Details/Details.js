import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post/Post";
import Comment from "../Comment/Comment";
import authors from "../../Author";
import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SendIcon from "@material-ui/icons/Send";
import ShareIcon from "@material-ui/icons/Share";


const Details = () => {

  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  //start css style part
  const style = {
    outline: "none",

    borderRadius: "30px",
    border: "1px solid lightgray",
    width: "100%",
    height: "40px",
    marginLeft: "10px",
    marginTop: "10px",
    paddingLeft: "20px",
  };
  const imgStyle = {
    width: "50px",
    borderRadius: "50%",
  };
  const commentBox = {
    display: "flex",
    width: "100%",
    marginBottom: "50px",
  };
  const buttonStyle = {
    borderRadius: "25%",
    margin: "10px 10px 0 5px",
    height: "40px",
    color: "gray",
    border: "1px solid lightgray",
    padding: "1px 3px",
  };
  const socialIcons = {
    width: 600,
    display: "flex",
    justifyContent: "space-between",
  };
 //end css style part

  return (
    <div className="container">
      <Post post={post}>
        <div style={socialIcons}>
          <div style={{ display: "flex" }}>
            <ThumbUpAltOutlinedIcon />
            <b style={{ marginLeft: "5px" }}>Like</b>
          </div>
          <div style={{ display: "flex" }}>
            <ChatBubbleOutlineIcon />
            <b style={{ marginLeft: "5px" }}>Comment</b>
          </div>
          <div style={{ display: "flex" }}>
            <ShareIcon />
            <b style={{ marginLeft: "5px" }}>Share</b>
          </div>
        </div>
      </Post>
      <div style={commentBox}>
        <img
          style={imgStyle}
          src="https://scontent.fdac8-1.fna.fbcdn.net/v/t1.0-9/79515135_10111007623880301_5111576226921709568_o.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=uHY0d2A1dAwAX8tjqCS&_nc_oc=AQnPRdGCfx79lla9EEaSC6i5v0gF6dYYaU68wLs_6CQVfU_E6maN7JLXU7M-r5IIhSo&_nc_ht=scontent.fdac8-1.fna&oh=40f5804bce900fd9c6d752aeaa413967&oe=5F78B907"
          alt=""
        />
        <input placeholder={`Write a comment...`} style={style}></input>{" "}
        <SendIcon style={buttonStyle} fontSize="large" />
      </div>

      {comments.map((comment, i) => {
        const author = authors[Math.floor(Math.random() * authors.length)];
        return (
          <Comment key={comment.id} comment={comment} author={author}></Comment>
        );
      })}
      
    </div>
  );
};

export default Details;
//Project Owner : https://github.com/masudrana08
