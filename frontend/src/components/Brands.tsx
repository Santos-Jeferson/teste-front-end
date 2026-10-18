const brands = [1, 2, 3, 4, 5];

export function Brands () {
    return (
        <section className="brands" aria-labellebdy="brands-title">

            <h2 id="brands-title">Navegue por marcas</h2>

            <ul className="brands__list">
                {brands.map((brand) => (
                    <li className="brands__item" key={brand}>
                        <img 
                        src="/assets/logo.svg" 
                        alt="Ecoverse" 
                        width="117" 
                        height="35" 
                        loading="lazy" 
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}