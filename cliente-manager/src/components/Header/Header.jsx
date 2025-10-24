function Header() {
    return (
        <>
            <header className="flex justify-center mt-6 fixed top-0 left-0 w-full">
                <nav className="bg-white/60 border border-[#D1AB9E] rounded-lg shadow-lg backdrop-blur-md">
                    <ul className="flex gap-20 px-8 py-3">
                        <li>
                            <a
                                href="/"
                                className="bg-[#F6DBD2] text-[#8D6A5E] font-medium px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-[#dfa89a] hover:shadow-md"
                            >
                                Início
                            </a>
                        </li>
                        <li>
                            <a
                                href="/clientes"
                                className="bg-[#F6DBD2] text-[#8D6A5E] font-medium px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-[#dba293] hover:shadow-md"
                            >
                                Clientes
                            </a>
                        </li>
                        <li>
                            <a
                                href="/servicos"
                                className="bg-[#F6DBD2] text-[#8D6A5E] font-medium px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-[#dba293] hover:shadow-md"
                            >
                                Serviços
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
