import './Post.css';
import { getPost } from "../PostsComponent/PostsData";
import { useParams } from "react-router-dom";

function Post() {
  let params = useParams();
  let post = getPost(parseInt(params.postId));

  return (
    <div className="Post">
      <b>Post ID :</b> { post.id }
      <br />
      <b>Post title :</b> { post.title }
      <br />
      <b>Post content :</b> { post.content }
    </div>
  );
}

export default Post;