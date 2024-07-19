import './post.css';
import PostModelo from "../../componentes/components aboute me/PostModelo";
import fotoBanner from '../../assets/Foto-banner-1.png';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import posts from '../../json/post.json';

const Post = () => {
    const parametros = useParams();
    const post = posts.find((p) => p.id === Number(parametros.id));

    if (!post) {
        return <p>Post não encontrado!</p>;
    }

    return (
        <PostModelo
            fotoCapa={fotoBanner}
            titulo={post.titulo}  
        >
            <div className='container__elementos'>
                <div className="post-markdown-container">
                    <ReactMarkdown className='texto'>{post.texto}</ReactMarkdown>  
                </div>
            </div>
        </PostModelo>
    );
}

export default Post;
