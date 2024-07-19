import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
    return (
        <div className="post">
            <a className='ancora' href={props.post.URL} target="_blank" rel="noopener noreferrer">
                <img
                    className="capa"
                    src={`/IMG/posts/${props.post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />
                 <h2 className="titulo">{props.post.titulo}</h2> 
              </a>

            <Link className='btnSaibaMais' to={`/posts/${props.post.id}`}>Saiba mais</Link>
           
        </div>

    );
}

export default PostCard;