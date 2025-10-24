import Header from "../../components/Header/Header.jsx";
import logo from "./images/logo.png";

function Home() {
    return (
        <>
            <main className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-brand-bg1 via-brand-bg2 to-brand-bg3">
                {/* Logo central (placeholder) */}
                <div className="flex flex-col items-center justify-center grow">
                    <div className="w-[360px] h-[360px] flex items-center justify-center ">
                        <div className="text-center">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>
                </div>

                {/* Rodapé com degradê suave pra base rosada */}
                <div className="w-full h-48 bg-linear-to-b from-transparent to-brand-bg3" />
            </main>
        </>
    );
} export default Home;
