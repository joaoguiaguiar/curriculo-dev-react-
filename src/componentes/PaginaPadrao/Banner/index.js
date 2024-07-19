import styles from './Banner.module.css';
import logo__banner from '../../../assets/logo.png'


const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Hello World</h1>
                <p className={styles.paragrafo}>
                    Meu nome é João Guilherme e sou estudante de Análise e Desenvolvimento de Sistemas. 
                     Tenho me dedicado ao desenvolvimento web e estou animado para compartilhar meus projetos e 
                     habilidades com você. Meu objetivo é me tornar  um desenvolvedor full-stack, combinando conhecimentos sólidos em front-end e back-end para criar soluções inovadoras. Vamos explorar juntos o mundo da tecnologia!
                </p>
                </div>

                <div className={styles.imagens}>
                    <img
                        className={styles.logo}
                        src={logo__banner} 
                        alt='Foto logo curriculo'
                    />
                </div>
          
        </section>
    );
};

export default Banner;
