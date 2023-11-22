import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <section className="flex items-center h-screen relative px-[30px] lg:px-[60px]">
        <Header />
        <h1 className="overflow-hidden text-heading font-bold text-[45px] leading-[100%] xl:text-[120px] 2xl:text-[150px] xl:leading-[120px] 2xl:leading-[140px] uppercase mb-16 text-white">
          Fullstack <br /><span className="ml-10 md:ml-14">Developer</span> 
        </h1>
      </section>
    </main>
  );
}
