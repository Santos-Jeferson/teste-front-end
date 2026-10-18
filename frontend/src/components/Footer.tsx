const footerGroups = [
    {
        title: "Institucional",
        items: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
    },
    {
        title: "Ajuda",
        items: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
    },
    {
        title: "Termos",
    items: ["Termos e Condições", "Política de Privacidade", "Troca e Devolução"],
    },
];

const socialNetworks = [
    { name: "Instagram", icon:"/assets/instagram.svg"},
    { name: "Facebook", icon:"/assets/facebook.svg"},
    { name: "LinkedIn", icon:"/assets/linkedin.svg"},
];

export function Footer () {
    return (
        <footer className="site-footer">
            <div className="site-footer__main">
                <div className="site-footer__inner">
                    <div className="site-footer__about">
                        <img
                        className="site-footer__logo"
                        src="/assets/logo.svg"
                        alt="Econverse"
                        width="164"
                        height="49" 
                        />

                        <p className="site-footer__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>

                        <ul className="site-footer__social" aria-label="Redes sociais">
                            {socialNetworks.map((network) => (
                                <li key={network.name}>
                                    <img
                                    src={network.icon}
                                    alt={network.name}
                                    width="24"
                                    height="24" 
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="site-footer__divider" aria-hidden="true" />

                    <div className="site-footer__columns">
                        {footerGroups.map((group) => (
                            <section className="site-footer__column" key={group.title}>
                                <h3>{group.title}</h3>

                                <ul>
                                    {group.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>
            </div>

            <div className="site-footer__bottom">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </footer>
    );
}