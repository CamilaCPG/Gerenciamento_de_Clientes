import React, { useState } from "react";

export default function Formulario() {
    const [form, setForm] = useState({
        nome: "",
        dataNascimento: "",
        telefone: "",
        cep: "",
        estado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        complemento: "",
        informacoesAdicionais: "",
        utilizaLentes: false,
        epilepsiaConvulsoes: false,
        intestinoRegulador: false,
        tratamentoFacialAnterior: "",
        tomaAguaFrequente: "",
        ingereBebidasAlcoolicas: "",
        boaQualidadeSono: "",
        oleosidade: "",
        espessuraPele: "",
        fototipo: "",
        hidratacao: "",
        dataRegistro: new Date().toISOString(),
    });

    const [status, setStatus] = useState({ message: "", type: "" });

    // Atualiza campos genéricos
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "radio" ? value : type === "checkbox" ? checked : value,
        }));
    };

    // Função para enviar à API
const handleSubmit = async () => {
    setStatus({ message: "Enviando dados...", type: "loading" });

    try {
        const dados = {
            ...form,
            utilizaLentes: !!form.utilizaLentes,
            epilepsiaConvulsoes: !!form.epilepsiaConvulsoes,
            intestinoRegulador: !!form.intestinoRegulador,
            dataRegistro: new Date().toISOString()
        };

        console.log("Enviando JSON:", JSON.stringify(dados, null, 2));

        const resposta = await fetch("http://localhost:5295/api/Clientes/Adicionar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados),
        });

        const texto = await resposta.text();

        if (!resposta.ok) {
            console.error("Erro no POST:", resposta.status, texto);
            throw new Error(`Erro ao salvar cliente. Código: ${resposta.status}`);
        }

        console.log("Sucesso:", texto);
        setStatus({ message: "Cliente cadastrado com sucesso!", type: "success" });

        setForm({
            nome: "",
            telefone: "",
            cep: "",
            estado: "",
            cidade: "",
            bairro: "",
            rua: "",
            numero: "",
            complemento: "",
            informacoesAdicionais: "",
        });
    } catch (err) {
        console.error("Erro no envio:", err);
        setStatus({ message: err.message, type: "error" });
    }
};




    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FFF8F5] to-[#FDEFE9] text-[#8D6A5E] font-sans flex flex-col items-center py-8">
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
                            {[
                                ["nome", "Nome", "text"],
                                ["dataNascimento", "", "date"],
                                ["telefone", "Telefone", "text"],
                                ["cep", "CEP", "text"],
                                ["estado", "Estado", "text"],
                                ["cidade", "Cidade", "text"],
                                ["bairro", "Bairro", "text"],
                                ["rua", "Rua", "text"],
                                ["numero", "Número", "text"],
                                ["complemento", "Complemento", "text"],
                            ].map(([name, placeholder, type]) => (
                                <input
                                    key={name}
                                    name={name}
                                    type={type}
                                    placeholder={placeholder}
                                    value={form[name]}
                                    onChange={handleChange}
                                    className="border border-[#F0D9D4] rounded px-3 py-2"
                                />
                            ))}
                        </div>

                        <div className="flex-1">
                            <textarea
                                name="informacoesAdicionais"
                                value={form.informacoesAdicionais}
                                onChange={handleChange}
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
                            {[
                                ["utilizaLentes", "Utiliza Lentes de contato?"],
                                ["epilepsiaConvulsoes", "Tem Epilepsia ou convulsões?"],
                                ["intestinoRegulador", "Tem Intestino Regulador?"],
                            ].map(([name, label]) => (
                                <div key={name}>
                                    <label>{label}</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name={name}
                                                value={true}
                                                onChange={handleChange}
                                            />{" "}
                                            Sim
                                        </label>
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name={name}
                                                value={false}
                                                onChange={handleChange}
                                            />{" "}
                                            Não
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Perguntas abertas */}
                        <div className="flex flex-col gap-2">
                            {[
                                ["tratamentoFacialAnterior", "Teve tratamento facial anterior?"],
                                ["tomaAguaFrequente", "Toma água com frequência?"],
                                ["ingereBebidasAlcoolicas", "Ingere bebidas alcoólicas?"],
                                ["boaQualidadeSono", "Tem boa qualidade de sono?"],
                            ].map(([name, label]) => (
                                <div key={name}>
                                    <label>{label}</label>
                                    <input
                                        name={name}
                                        value={form[name]}
                                        onChange={handleChange}
                                        type="text"
                                        className="border border-[#F0D9D4] rounded px-3 py-1 w-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Avaliação de Pele */}
                    <div className="grid md:grid-cols-2 gap-2 mt-3">
                        <div className="flex flex-col gap-2">
                            {[
                                ["oleosidade", "Oleosidade", ["Alípica", "Lipídica", "Normal", "Seborreica"]],
                                ["espessuraPele", "Espessura da pele", ["Espessa", "Fina", "Muito Fina"]],
                                ["fototipo", "Fototipo", ["1", "2", "3", "4"]],
                                ["hidratacao", "Hidratação", ["Desidratada", "Normal"]],
                            ].map(([name, label, options]) => (
                                <div key={name}>
                                    <label>{label}:</label>
                                    <div className="flex gap-3 flex-wrap">
                                        {options.map((opt) => (
                                            <label key={opt} className="flex items-center gap-1">
                                                <input
                                                    type="radio"
                                                    name={name}
                                                    value={opt}
                                                    onChange={handleChange}
                                                />{" "}
                                                {opt}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="bg-[#E9C7BE] text-[#8D6A5E] px-6 py-2 rounded-lg font-medium shadow hover:bg-[#E0B8AC] transition"
                        >
                            Salvar Informações
                        </button>
                    </div>

                    {status.message && (
                        <p
                            className={`text-sm mt-3 ${
                                status.type === "success"
                                    ? "text-green-600"
                                    : status.type === "error"
                                    ? "text-red-500"
                                    : "text-[#8D6A5E]"
                            }`}
                        >
                            {status.message}
                        </p>
                    )}
                </section>
            </main>
        </div>
    );
}
