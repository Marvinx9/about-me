import "./Post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/db.json";
import PostModelo from "components/PostModelo";
import Markdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "components/PaginaPadrao";
import Recomendacoes from "components/Recomendacoes";

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    return <NaoEncontrada />;
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <Markdown>{post.texto}</Markdown>
              </div>
              <Recomendacoes atual={post.id} />
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
