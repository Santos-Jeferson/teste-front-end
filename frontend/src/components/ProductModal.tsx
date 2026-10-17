import { useEffect, useRef } from "react";
import type { Product } from '../types/Product';

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

    useEffect(() => {
        const dialog = dialogRef.current;

        if (dialog && !dialog.open) {
            dialog.showModal();
        }
    }, []);

    return (
        <dialog ref={dialogRef} className="product-modal" aria-labelledby="modal-title" onClose={onClose} >

            <button type="button" className="product-modal__close" aria-label="Fechar detalhes" onClick={() => dialogRef.current?.close()} autoFocus>
                {"×"}
            </button>

            <div className="product-modal__content">
                <img src={product.photo} alt={product.productName} />

                <div className="product-modal__info">
                    <h2 id="modal-title">{product.productName}</h2>

                    <p>{product.descriptionShort}</p>

                    <strong>
                        {priceFormatter.format(product.price)}
                    </strong>
                </div>
            </div>
        </dialog>
    );
}