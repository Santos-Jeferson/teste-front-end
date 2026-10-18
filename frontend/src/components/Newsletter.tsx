import { useState } from "react";
import type { FormEvent } from "react";

export function Newsletter() {
    const [message, setMessage] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setMessage ("Formulário de demonstração. Nenhuma incrição foi enviada.");
    }

    return (
        <section className="newletter"
        aria-labelledby="newsletter-title">

            <div className="newsletter__inner">
                <div className="newsletter__content">
                    <h2 id="newsletter-title">
                        Inscreva-se na nossa newslatter
                    </h2>

                    <p>Assine a nossa newslatter e receba as novidade e conteúdos exclusivos a Econverse.</p>
                </div>

                <form className="newsletter__form" onSubmit={handleSubmit}>

                    <div className="newsletter__fields">
                        <label className="newsletter__sr-only" htmlFor="newsletter-name"> Nome </label>
                        <input
                        id="newsletter-name"
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                        autoComplete="name"
                        minLength={2}
                        required 
                        />
                        

                        <label className="newsletter_sr-only" htmlFor="newsletter-email"> E-mail </label>
                        <input
                        id="newsletter-email"
                        type="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        autoComplete="email"
                        required 
                        />

                        <button type="submit">
                            INSCREVER
                        </button>
                    </div>

                    <label className="newsletter__terms">
                        <input type="checkbox" required />
                        <span>Aceito os termos e condições</span>
                    </label>

                    {message && (
                        <p className="newsletter__message" role="status">
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}