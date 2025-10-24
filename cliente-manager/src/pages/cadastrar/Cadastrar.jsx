// Formulario.jsx
import React from "react";

function Formulario() {
    return (
        <div className="min-h-screen bg-linear-to-b from-[#FFF8F5] to-[#FDEFE9] text-[#8D6A5E] font-sans flex flex-col items-center py-8">

            {/* Cabeçalho */}
            <header className="w-full flex flex-col items-center mb-6">
                <nav className="bg-[#F6DBD2] shadow-md rounded-full px-10 py-2 flex gap-8 text-sm font-medium text-[#8D6A5E]">
                    <button className="hover:text-[#D49B8A] transition">Início</button>
                    <button className="hover:text-[#D49B8A] transition">Clientes</button>
                    <button className="hover:text-[#D49B8A] transition">Serviços</button>
                </nav>

                <h1 className="mt-6 text-base tracking-wide font-semibold text-center">
                    FICHA DE ANAMNESE, FACIAL E CORPORAL
                </h1>
            </header>

            <main className="w-full max-w-5xl flex flex-col gap-5">
                {/* INFORMAÇÕES PESSOAIS */}
                <section className="bg-white border border-[#F0D9D4] shadow-md rounded-xl px-6 pt-5 pb-4">
                    <div className="bg-[#F6DBD2] inline-block px-4 py-1 rounded-t-md text-xs font-semibold mb-4">
                        INFORMAÇÕES PESSOAIS
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 grid grid-cols-2 gap-3">
                            <input type="text" placeholder="Nome" className="border border-[#F0D9D4] rounded px-3 py-2" />
                            <input type="date" className="border border-[#F0D9D4] rounded px-3 py-2" />
                            <input type="text" placeholder="Telefone" className="border border-[#F0D9D4] rounded px-3 py-2" />
                            <input type="text" placeholder="CEP" className="border border-[#F0D9D4] rounded px-3 py-2" />
                            <input type="text" placeholder="Estado" className="border border-[#F0D9D4] rounded px-3 py-2" />
                            <input type="text" placeholder="Cidade" className="border border-[#F0D9D4] rounded px-3 py-2" />
                            <input type="text" placeholder="Bairro" className="border border-[#F0D9D4] rounded px-3 py-2" />
                            <input type="text" placeholder="Rua" className="border border-[#F0D9D4] rounded px-3 py-2" />
                            <input type="text" placeholder="Número" className="border border-[#F0D9D4] rounded px-3 py-2" />
                            <input type="text" placeholder="Complemento" className="border border-[#F0D9D4] rounded px-3 py-2" />
                        </div>

                        <div className="flex-1">
                            <textarea
                                placeholder="Informações Adicionais"
                                className="border border-[#F0D9D4] rounded p-3 w-full h-full resize-none"
                            ></textarea>
                        </div>
                    </div>
                </section>

                {/* AVALIAÇÃO */}
                <section className="bg-white border border-[#F0D9D4] shadow-md rounded-xl px-6 pt-5 pb-4">
                    <div className="bg-[#F6DBD2] inline-block px-4 py-1 rounded-t-md text-xs font-semibold mb-4">
                        AVALIAÇÃO
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Perguntas Sim/Não */}
                        <div className="flex flex-col gap-2">
                            <label>Utiliza Lentes de contato?</label>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-1"><input type="radio" name="lentes" /> Sim</label>
                                <label className="flex items-center gap-1"><input type="radio" name="lentes" /> Não</label>
                            </div>

                            <label>Tem Epilepsia ou convulsões?</label>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-1"><input type="radio" name="epilepsia" /> Sim</label>
                                <label className="flex items-center gap-1"><input type="radio" name="epilepsia" /> Não</label>
                            </div>

                            <label>Tem Intestino Regulador?</label>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-1"><input type="radio" name="intestino" /> Sim</label>
                                <label className="flex items-center gap-1"><input type="radio" name="intestino" /> Não</label>
                            </div>
                        </div>

                        {/* Perguntas abertas */}
                        <div className="flex flex-col gap-2">
                            <label>Teve tratamento facial anterior?</label>
                            <input type="text" className="border border-[#F0D9D4] rounded px-3 py-1" />
                            <label>Toma água com frequência?</label>
                            <input type="text" className="border border-[#F0D9D4] rounded px-3 py-1" />
                            <label>Ingere bebidas alcoólicas?</label>
                            <input type="text" className="border border-[#F0D9D4] rounded px-3 py-1" />
                            <label>Tem boa qualidade de sono?</label>
                            <input type="text" className="border border-[#F0D9D4] rounded px-3 py-1" />
                        </div>
                    </div>

                    {/* Avaliação de Pele */}
                    {/* Avaliação de Pele */}
                    <div className="grid md:grid-cols-2 gap-2">
                        <div className="flex flex-col gap-2">
                            <label>Oleosidade:</label>
                            <div className="flex gap-3 flex-wrap">
                                {["Alípica", "Lipídica", "Normal", "Seborreica"].map((item) => (
                                    <label key={item} className="flex items-center gap-1">
                                        <input type="radio" name="oleosidade" /> {item}
                                    </label>
                                ))}
                            </div>

                            <label>Espessura da pele:</label>
                            <div className="flex gap-3 flex-wrap">
                                {["Espessa", "Fina", "Muito Fina"].map((item) => (
                                    <label key={item} className="flex items-center gap-1">
                                        <input type="radio" name="espessura" /> {item}
                                    </label>
                                ))}
                            </div>

                            <label>Fototipo:</label>
                            <div className="flex gap-3 flex-wrap">
                                {[1, 2, 3, 4].map((num) => (
                                    <label key={num} className="flex items-center gap-1">
                                        <input type="radio" name="fototipo" /> {num}
                                    </label>
                                ))}
                            </div>

                            <label>Hidratação:</label>
                            <div className="flex gap-3 flex-wrap">
                                {["Desidratada", "Normal"].map((item) => (
                                    <label key={item} className="flex items-center gap-1">
                                        <input type="radio" name="hidratacao" /> {item}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-[#E9C7BE] text-[#8D6A5E] px-6 py-2 rounded-lg font-medium shadow hover:bg-[#E0B8AC] transition"
                        >
                            Salvar Informações
                        </button>
                    </div>
                </section>

                {/* AGENDAMENTOS */}
                {/* --- AGENDAMENTOS (comentado) ---
    <section className="border border-[#F0D9D4] rounded-lg p-4 shadow-sm bg-[#FFFDFB]">
        <h2 className="text-[#8D6A5E] font-semibold text-sm bg-[#F0D9D4] px-3 py-1 rounded mb-3 inline-block">
        AGENDAMENTOS
        </h2>
        ... (todo o conteúdo removido temporariamente)
    </section>
    --- */}
            </main>
        </div>
    );
}
export default Formulario;
