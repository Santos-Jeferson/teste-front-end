const categories = [
    {name: "Tecnologia", image: "tecnologia.png"},
    {name: "Supermercado", image: "supermercado.png"},
    {name: "Bebidas", image: "bebidas.png"},
    {name: "Ferramentas", image: "ferramentas.png"},
    {name: "Saúde", image: "saude.png"},
    {name: "Esportes e Fitness", image: "esportes.png"},
    {name: "Moda", image: "moda.png"}, 
];

export function Categories() {
    return (
        <section className="categories" aria-label="Compre por categoria">
            <ul className="categories__list">
                {categories.map((category, index) => (
                    <li key={category.name} className={`category${index === 0 ? " category--featured" : ""}`} >

                        <div className="category__icon">
                            <img src={`/assets/categories/${category.image}`}
                            alt=""
                            width="61"
                            height="61"
                            />
                        </div>

                        <span className="category__name">
                            {category.name}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}