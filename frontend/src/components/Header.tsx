
const navigationItems = [
  "Todas Categorias",
  "Supermercado",
  "Livros",
  "Moda",
  "Lançamentos",
  "Ofertas do dia",
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__benefits">
        <span>
          <img src="/assets/shield.svg" alt="" />
          Compra <strong>100% segura</strong>
        </span>

        <span>
          <img src="/assets/truck.svg" alt="" />
          <strong>Frete grátis</strong> acima de R$ 200
        </span>

        <span>
          <img src="/assets/credit-card.svg" alt="" />
          <strong>Parcele</strong> suas compras
        </span>
      </div>

      <div className="site-header__main">
        <img
          className="site-header__logo"
          src="/assets/logo.svg"
          alt="Econverse"
        />

        <div className="site-header__search">
          <input
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />
          <img src="/assets/search.svg" alt="" />
        </div>

        <div className="site-header__actions" aria-hidden="true">
          <img src="/assets/other.svg" alt="" />
          <img src="/assets/heart.svg" alt="" />
          <img src="/assets/user.svg" alt="" />
          <img src="/assets/cart.svg" alt="" />
        </div>
      </div>

      <nav
        className="site-header__navigation"
        aria-label="Navegação principal"
      >
        <ul>
          {navigationItems.map((item) => (
            <li key={item}>
              <span className={item === "Ofertas do dia" ? "is-active" : ""}>
                {item}
              </span>
            </li>
          ))}

          <li className="site-header__subscription">
            <img src="/assets/crown.svg" alt="" />
            <span>Assinatura</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
