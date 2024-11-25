import ButtonContainer from "../components/ButtonContainer";

import BG from "../assets/images/bg/home.png";

const DisplaySubheading = ({ text, rotation, x }) => {
  return (
    <p
      className={`text-gray font-gochiHand text-5xl ${
        rotation == "right" ? "rotate-6" : "-rotate-6"
      }`}
    >
      {text}
    </p>
  );
};

export default function App() {
  return (
    <div
      className="bg-dark w-screen h-screen pt-4"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="w-full px-40 flex justify-between">
        <ButtonContainer />
        <ButtonContainer />
      </header>

      <div className="text-center">
        <DisplaySubheading text="a compilation of" rotation="right" />
        <h1 className="font-pixelifySans text-[220px] font-extrabold text-purpleD leading-[10rem]">
          CIS1102N
        </h1>
        <DisplaySubheading text="portfolios." rotation="left" />
      </div>
    </div>
  );
}
