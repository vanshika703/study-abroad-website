import NavbarComponent from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="absolute top-20 left-10 sm:top-48 sm:left-52 z-10 border-l-4 border-[#FDBF00] pl-10">
        <h1 className="text-2xl sm:text-5xl font-medium text-white">Study Abroad</h1>
        <h3 className="sm:text-xl text-white my-2">Anything, anywhere with the experts</h3>
        <button className="px-4 py-2 border-2 bg-[#FDBF00] rounded text-white my-4 text-sm font-medium">
          Book a consultation
        </button>
      </div>
    </div>
  );
};

export default Home;
