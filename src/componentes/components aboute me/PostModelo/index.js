import styles from './PostModelo.module.css'

const PostModelo = ({ fotoCapa, titulo }) => {
    return (
        <section className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            >
            </div>

            <div className={styles.container__titulo}>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>
            </div>
        </section>
    )
}

export default PostModelo
