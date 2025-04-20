import styles from "./Recomendacoes.module.css";
import posts from "json/db.json";
import PostCard from "components/PostCard";

export default function Recomendacoes({ atual }) {
  const selectPosts = (id) => {
    let recomendacoes = [];
    for (const post of posts) {
      if (post.id !== Number(id)) {
        recomendacoes.push(post);
        if (recomendacoes.length >= 4) {
          return recomendacoes;
        }
      }
    }
  };

  const posts_recomendados = selectPosts(atual);

  return (
    <div className={styles.recomendacoes}>
      <h1 className={styles.titulo}>Outros posts que você pode gostar:</h1>
      <ul className={styles.posts}>
        {posts_recomendados.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
