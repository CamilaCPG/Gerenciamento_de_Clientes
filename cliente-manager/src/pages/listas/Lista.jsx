import { useState } from "react";
import { Link } from "react-router-dom";

export default function Lista() {
    const [query, setQuery] = useState("");

    // MOCK — trocamos depois pela API
    const clientes = [
        { id: 1, nome: "Ana Souza", idade: 28 },
        { id: 2, nome: "Bruno Lima", idade: 33 },
        { id: 3, nome: "Carla Dias", idade: 22 },
    ];

    const filtrados = clientes.filter((c) =>
        c.nome.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <main className="px-6 sm:px-10 pb-16 mt-48">
            {/* Botão cadastrar (acima do card) */}
            <div className="mb-3">
                <Link
                    to="/cadastrar"
                    className="inline-block bg-[#F6DBD2] text-[#8D6A5E] px-5 py-1.5 rounded-md shadow-[0_8px_24px_rgba(141,106,94,0.12)] hover:brightness-95 transition"
                >
                    Cadastrar
                </Link>
            </div>

            {/* Card da lista */}
            <section
                className="rounded-xl border border-[#F6DBD2] bg-white/90 backdrop-blur
                    shadow-[0_20px_50px_rgba(141,106,94,0.12)] p-5 sm:p-6"
            >
                {/* Campo de pesquisa */}
                <div>
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Pesquisar cliente..."
                        className="w-full rounded-md bg-[#F6DBD2]/40 px-4 py-2 outline-none
                        border border-[#F6DBD2] shadow-[0_8px_24px_rgba(141,106,94,0.10)]
                        placeholder:text-[#8D6A5E]/60"
                    />
                </div>

                {/* Cabeçalho Nome / Idade — agora abaixo da busca */}
                <div className="grid grid-cols-2 text-[#8D6A5E] font-medium px-1 mt-4">
                    <span>Nome</span>
                    <span className="text-right sm:text-center">Idade</span>
                </div>

                {/* Lista — imediatamente abaixo da busca */}
                <ul className="mt-3 space-y-3">
                    {filtrados.map((c) => (
                        <li
                            key={c.id}
                            className="rounded-md border border-[#F6DBD2] bg-white
                    shadow-[0_6px_16px_rgba(141,106,94,0.10)] overflow-hidden"
                        >
                            <Link
                                to={`/clientes/${c.id}`}
                                className="grid grid-cols-2 items-center px-4 py-2.5
                                text-[#8D6A5E] transition-all duration-200
                                hover:bg-[#F6DBD2]/60 hover:shadow-[0_10px_24px_rgba(141,106,94,0.16)]
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8D6A5E]/30"
                            >
                                <span>{c.nome}</span>
                                <span className="text-right sm:text-center">{c.idade}</span>
                            </Link>
                        </li>
                    ))}
                    {filtrados.length === 0 && (
                        <li className="text-center text-[#8D6A5E]/60 py-6">
                            Nenhum cliente encontrado.
                        </li>
                    )}
                </ul>
            </section>
        </main>
    );
}