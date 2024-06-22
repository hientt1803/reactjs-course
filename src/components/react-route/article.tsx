// import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import "../../styles/main.module.scss";

type ArticleType = {
  id: number;
  name: string;
};

const ArticlePage = () => {
  const [articles] = useState<ArticleType[] | never>(
    useLoaderData() as ArticleType[]
  );

  return (
    <div>
      {articles &&
        articles?.map((article: ArticleType) => (
          <li key={article.id}>{article.name}</li>
        ))}
    </div>
  );
};

export default ArticlePage;
