import React from 'react';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Certifique-se de que o CSS do Bootstrap está importado
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Certifique-se de que o JS do Bootstrap está importado

const PostCard = (props) => {
    return (
        <div className="post">
            <img
                className="capa"
                src={`/IMG/posts/${props.post.id}/capa.png`}
                alt="Imagem de capa do post"
            />
            <h2 className="titulo">{props.post.titulo}</h2> 

            <div className='container__botoes'>
                <a className='ancora' href={props.post.URL} target="_blank" rel="noopener noreferrer">Link site</a> 
                <button 
                    className='btn__saibaMais' 
                    type="button" 
                    data-bs-toggle="modal" 
                    data-bs-target={`#modal-${props.post.id}`}>
                    Saiba mais
                </button>
            </div>


           {/* Modal */}
            <div 
                className="modal fade" 
                id={`modal-${props.post.id}`} 
                tabIndex="-1" 
                aria-labelledby={`modalLabel-${props.post.id}`} 
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`modalLabel-${props.post.id}`}>Detalhes do Post</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className='texto__modal'>{props.post.texto}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
