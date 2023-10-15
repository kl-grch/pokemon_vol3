import "./loader.scss";
import pokeball from "public/images/pokeball.svg";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="loader">
      <Image
        src={pokeball}
        alt="pokeball"
        width={50}
        height={50}
      />
    </div>
  );
}
