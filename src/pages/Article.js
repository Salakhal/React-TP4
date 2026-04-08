import React from 'react';
import ArticleDetail from '../components/ArticleDetail';

const Article = ({ articles, onLike }) => {
  return (
    <div className="container">
      <ArticleDetail donnees={articles} actionLike={onLike} />
    </div>
  );
};

export default Article;