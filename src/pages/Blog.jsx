import React from 'react';
import Article from '../components/ArticleBlog'
import imageArticle from '../img/ecole.png'

var titre="Titre test"
var contenu="Exemple contenu test"
const Blog = () => {
    return (
        <div>
            <Article image={imageArticle} title={titre} content={contenu}></Article>
        </div>
    );
};

export default Blog;