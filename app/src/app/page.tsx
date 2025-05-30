import Image from "next/image";

const Home = () => {
  return (
    <main>
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </main>
  );
};

export default Home;
