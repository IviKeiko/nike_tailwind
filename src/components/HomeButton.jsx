import { chevronUp } from "../assets/icons";

const HomeButton = () => {
  return (
    <a href="/">
      <img
        src={chevronUp}
        alt="home"
        className="bg-coral-red stroke-slate-500 rounded-full fixed bottom-0 right-0 mb-5 mr-2"
        width={34}
        height={34}
      />
    </a>
  );
};
export default HomeButton;
