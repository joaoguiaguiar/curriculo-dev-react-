import styles from './Information.module.css';

const Informaçoes = () => {
    return (
        <div className={styles.container__elementos}>
            <h3 className={styles.subtitulo}></h3>

            <p className={styles.paragrafo}>
                Sou estudante do 4º semestre de Análise e Desenvolvimento de Sistemas na UDF, com foco em desenvolvimento web e tenho como meta me tornar um dev full stack. Atualmente, estou concentrado na biblioteca React. Durante o curso, tenho trabalhado em projetos práticos que não apenas fortalecem meu conhecimento, mas também me proporcionam experiência aplicada em situações reais. Ao longo dessa jornada acadêmica, adquiri conhecimentos em áreas como modelagem e criação de bancos de dados usando MySQL Workbench, sistemas operacionais, engenharia de software e linguagens de programação como PHP, Python, Java e JavaScript. Destas, me identifiquei especialmente com JavaScript devido à sua maneira interessante de trabalhar nas páginas web, por isso comecei estudando inicialmente o desenvolvimento front-end. Além disso, faço cursos na Alura para fortalecer ainda mais meu aprendizado.
            </p>

            <p className={styles.paragrafo}>
                Nos últimos meses, tive a satisfação de concluir e vender meu primeiro site para um cliente, o que foi algo muito bom para o meu conhecimento. Este projeto foi um marco importante na minha trajetória e reforçou meu compromisso em entregar soluções de alta qualidade. Esse projeto foi feito totalmente por mim, desde o levantamento de requisitos até o resultado. Atualmente, sou responsável pela manutenção desse site por um contrato de 12 meses.
            </p>

            <p className={styles.paragrafo}>
                Referente às minhas habilidades em desenvolvimento web, possuo uma base sólida em HTML, CSS, Bootstrap e JavaScript. Sou capaz de criar páginas web seguindo a estrutura semântica, desenvolver formulários e tabelas, e trabalho bem com dimensões utilizando Flexbox e Grid. Em relação ao JavaScript, domino a manipulação de elementos com o DOM, manipulação de localStorage, validação e reconhecimento de voz, tratamento de dados utilizando APIs, e tenho um grande conhecimento em métodos de array. Além disso, sei criar requisições GET e POST, realizar validação de formulários e tenho experiência com programação orientada a objetos. Atualmente, estou focado em aprender React, e planejo seguir para o Node.js, assim trabalhando diretamente com o servidor.
            </p>
            
            <p className={styles.paragrafo}>
                Acredito que minhas habilidades em desenvolvimento web me tornam apto a contribuir significativamente para os desafios das empresas.
            </p>
        
        </div>
    );
}

export default Informaçoes;
