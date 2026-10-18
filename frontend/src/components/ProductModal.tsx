
import { useEffect, useRef, useState } from "react";
import type { Product } from "../types/Product";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const [purchaseMessage, setPurchaseMessage] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  function handleDecrease() {
    setQuantity((previousQuantity) =>
      Math.max(1, previousQuantity - 1)
    );
    setPurchaseMessage("");
  }

  function handleIncrease() {
    setQuantity((previousQuantity) => previousQuantity + 1);
    setPurchaseMessage("");
  }

  function handleBuy() {
    const unitText = quantity === 1 ? "unidade" : "unidades";

    setPurchaseMessage(
      `Demonstração: ${quantity} ${unitText} selecionada(s). Nenhum pedido foi realizado.`
    );
  }

  return (
    <dialog
      ref={dialogRef}
      className="product-modal"
      aria-labelledby="product-modal-title"
      onClose={onClose}
    >
      <button
        type="button"
        className="product-modal__close"
        aria-label="Fechar modal"
        onClick={() => dialogRef.current?.close()}
      >
        ×
      </button>

      <div className="product-modal__content">
        <div className="product-modal__image-wrapper">
          <img
            className="product-modal__image"
            src={product.photo}
            alt={product.productName}
          />
        </div>

        <div className="product-modal__info">
          <h2 id="product-modal-title">
            {product.productName}
          </h2>

          <strong className="product-modal__price">
            {priceFormatter.format(product.price)}
          </strong>

          <p className="product-modal__description">
            {product.descriptionShort}
          </p>

          <button
            type="button"
            className="product-modal__details"
            aria-expanded={showDetails}
            aria-controls="product-modal-extra"
            onClick={() => setShowDetails((previous) => !previous)}
          >
            {showDetails
              ? "Ocultar detalhes"
              : "Veja mais detalhes do produto >"}
          </button>

          {showDetails && (
            <p
              id="product-modal-extra"
              className="product-modal__extra"
            >
              O catálogo disponibiliza nome, descrição resumida
              e preço. Não foram fornecidas especificações
              adicionais para este produto.
            </p>
          )}

          <div className="product-modal__actions">
            <div className="product-modal__quantity">
              <button
                type="button"
                aria-label="Diminuir quantidade"
                onClick={handleDecrease}
                disabled={quantity === 1}
              >
                −
              </button>

              <span>{String(quantity).padStart(2, "0")}</span>

              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="product-modal__buy"
              onClick={handleBuy}
            >
              COMPRAR
            </button>
          </div>

          {purchaseMessage && (
            <p
              className="product-modal__notice"
              role="status"
            >
              {purchaseMessage}
            </p>
          )}
        </div>
      </div>
    </dialog>
  );
}
