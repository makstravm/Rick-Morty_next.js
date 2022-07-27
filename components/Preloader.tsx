import Image from "next/image";
import loader from "public/loader.gif";

const Preloader = () => (
  <div className="preloader">
    <Image src={loader} alt="loader" />
  </div>
);

export default Preloader;
