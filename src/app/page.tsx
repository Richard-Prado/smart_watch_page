import Image from "next/image";
import { ArrowDownIcon, HeartIcon, BoltIcon, SwatchIcon, UserCircleIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <header className="bg-white/60 backdrop-blur-md flex md:h-16 items-center justify-between text-black w-full px-10">
        <h1 className="text-2xl font-bold w-full text-center md:w-auto">Smart Watch</h1>
        <nav className="hidden md:block">
          <ul className="gap-4 flex">
            <li><a className="hover:text-gray-400" href="#Home">Inicio</a></li>
            <li><a className="hover:text-gray-400" href="#SaibaMais">Saiba Mais</a></li>
            <li><a className="hover:text-gray-400" href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex w-full flex-col items-center justify-between sm:items-start ">
        <section id="Home" className="relative h-200 w-full">
          <Image
          src="/Images/heroImage.png" 
          alt="SmartWatch Moderno"
          fill
          priority
          className="w-full h-full object-cover"/>

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-start md:justify-center text-center text-white px-16 py-4 md:py-0">
            {/* BLOCO PC */}
            <div className="text-center inset-0 flex flex-col items-center">
              <h1 className="font-bold text-4xl md:text-6xl drop-shadow-xl">
                O Futuro no seu pulso
              </h1>
              <p className="mt-4 max-w-full text-white/90 hidden md:block">
                Um smartwatch inteligente, moderno e feito para o seu ritmo.
              </p>

              <a className="w-fit rounded-full bg-white text-black p-3 my-2 cursor-pointer hover:bg-gray-300 shadow-2xl active:scale-95 hidden md:flex">
                SAIBA MAIS
                <ArrowDownIcon className="h-6 w-6 text-black animate-bounce"></ArrowDownIcon>
              </a>
            </div>
            
            {/* BLOCO MOBILE */}
            <div className="mt-auto md:hidden pb-5">
              <p className="max-w-full my-5  text-white/90 md:hidden">
                Um smartwatch inteligente, moderno e feito para o seu ritmo.
              </p>
              <a href="#SaibaMais" className="w-fit rounded-full bg-white text-black p-2 my-2 cursor-pointer hover:bg-gray-300 shadow-2xl active:scale-95 md:hidden">
                SAIBA MAIS
              </a>
            </div>
          </div>
        </section>

        <h2 className="text-black w-full text-center pt-5 font-bold text-5xl">Beneficios</h2>

        <section className="w-full gap-10 p-6 flex flex-col md:flex-row justify-center items-center" id="SaibaMais">  
          <div className="h-53 w-60 text-center border border-neutral-800 rounded-2xl p-5 flex flex-col items-center gap-3 bg-white">
            <HeartIcon className="h-10 w-10 text-red-600" />

            <p className="font-semibold text-neutral-900">
              Monitoramento Inteligente
            </p>

            <p className="text-sm text-neutral-600">
              Acompanhe batimentos, sono e atividades físicas em tempo real.
            </p>
          </div>

          <div className="h-53 w-60 text-center border border-neutral-800 rounded-2xl p-5 flex flex-col items-center gap-3 bg-white">
            <BoltIcon className="h-10 w-10 text-yellow-600" />

            <p className="font-semibold text-neutral-900">
              Feito para o seu ritmo
            </p>

            <p className="text-sm text-neutral-600">
              Performance estável para acompanhar sua rotina do início ao fim do dia.
            </p>
          </div>

          <div className="h-53 w-60 text-center border border-neutral-800 rounded-2xl p-5 flex flex-col items-center gap-3 bg-white">
            <SwatchIcon className="h-10 w-10 text-blue-600" />

            <p className="font-semibold text-neutral-900">
              Design que conecta
            </p>

            <p className="text-sm text-neutral-600">
              Visual moderno com integração total ao seu smartphone.
            </p>
          </div>
        </section>
        <hr className="border w-full bg-black"/>
        <section className="w-full flex flex-col items-center gap-6 py-16 bg-zinc-50">
          <h1 className="text-center text-8xl text-black font-bold">Como Funciona</h1>
          <h2  className="text-5xl md:text-6xl font-bold text-blue-600">Conecte</h2>
          <ArrowDownIcon className="h-10 w-10 text-blue-400 animate-bounce"></ArrowDownIcon>
          <h2 className="text-5xl md:text-6xl font-bold text-yellow-500">Use</h2>
          <ArrowDownIcon className="h-10 w-10 text-yellow-400 animate-bounce"></ArrowDownIcon>
          <h2 className="text-5xl md:text-6xl font-bold text-green-600">Evolua</h2>
        </section>
        <section id="contato" className="bg-gray-500 w-full flex ">
          <div className="w-1/3 hidden justify-center items-center md:flex">
            <UserCircleIcon className="w-2/3"></UserCircleIcon>
          </div>
          <div className="bg-zinc-200 w-full text-black">
            <form className="p-10 flex flex-col gap-2">
              <h2 className="text-black font-bold text-4xl">Contato</h2>
              <hr className="border text-black"/>

              <div className="flex flex-col gap-1 md:w-1/2">
                <label htmlFor="name">
                  nome:
                </label>
                <input id="name" type="text" placeholder="seu nome"
                className="border border-neutral-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"/>
              </div>

              <div className="flex flex-col gap-1 md:w-1/2">
                <label htmlFor="email">
                  email:
                </label>
                <input id="email" type="email" placeholder="seu@email.com"
                className="border border-neutral-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"/>
              </div>

              <button type="submit" className="md:w-3xs mt-4 bg-black text-white rounded-full py-3 hover:bg-neutral-800 transition active:scale-95">
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full bg-neutral-900 text-neutral-400 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-md text-center md:text-left">
            SmartWatch — Projeto fictício para portfólio
          </p>

          <p className="text-md">
            Next.js • React • Tailwind CSS
          </p>

          <p className="text-md">
            © {new Date().getFullYear()} Richard Prado
          </p>

        </div>
      </footer>
    </div>
  );
}
