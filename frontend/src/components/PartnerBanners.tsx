const banners = ["partner-one", "partner-two"];

export function PartnerBanners() {
    return(
        <section className="partner-banner" aria-label="Destaques de parceiros">

            {banners.map((banner) => (
            <article className="partner-banner" key={banner}>

                <img className="parner-banner__image"
                src="/assets/partner-banner.png"
                alt=""
                loading="lazy" />

                <div className="partner-banner__content">
                    <h2>Parceiros</h2>
                
                    <p>Lorem ipsum dolor sit amet, consectetur</p>  

                    <span className="partner-banner__cta">
                    CONFIRA
                    </span> 
                </div>
            </article>
        ))}
        </section>
    );
}