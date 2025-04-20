import "./Post.css";
import { useParams } from "react-router-dom";
import posts from "json/db.json";
import PostModelo from "components/PostModelo";
import Markdown from "react-markdown";

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    return <h1>Post não encontrado...</h1>;
  }

  return (
    <PostModelo fotoCapa={`/posts/${post.id}/capa.png`} titulo={post.titulo}>
      <div className="post-markdown-container">
        <Markdown>{post.texto}</Markdown>
      </div>
    </PostModelo>
  );
}
