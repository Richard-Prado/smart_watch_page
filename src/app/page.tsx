import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col items-center pt-16 justify-between sm:items-start ">
        <section className="relative h-[800] w-full">
          <Image
          src="/images/heroImage.png" 
          alt="SmartWatch Moderno"
          fill
          priority
          className="w-full h-full object-cover"/>

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-start justify-between md:justify-center text-center text-white px-16 py-4 md:py-0">
            <div className="text-center inset-0 flex flex-col">
              <h1 className="font-bold text-4xl md:text-6xl drop-shadow-xl">
                O Futuro no seu pulso
              </h1>
              <p className="mt-4 max-w-full text-white/90 hidden md:block">
                Um smartwatch inteligente, moderno e feito para o seu ritmo.
              </p>
            </div>

            <p className="mt-auto max-w-full text-white/90 md:hidden">
              Um smartwatch inteligente, moderno e feito para o seu ritmo.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
