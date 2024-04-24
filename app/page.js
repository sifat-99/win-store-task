import Image from "next/image";

import { Roboto } from "next/font/google";
import Banner from "./Components/Banner/Banner";

const roboto = Roboto({
  weight: ["100","300", "400","500", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
     <Banner />
    </main>
  );
}
