import Image from "next/image";
import Hero from "./component/home/Hero";
import KnowUs from "./component/home/KnowUs";
import Accommodations from "./component/home/Accommodations";
import Treat from "./component/home/Treat";
import Features from "./component/home/Features";
import Event from "./component/home/Event";
import Upcoming from "./component/home/Upcoming";

export default function Home() {
  return (
    <>
    <Hero />
    <KnowUs />
    <Accommodations />
    <Treat />
    <Event />
    <Features />
    <Upcoming />
    </>
  );
}
