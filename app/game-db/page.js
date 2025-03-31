// Home Page
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main>
      <Header />
      <h1>Welcome to GameDB</h1>
      <Footer />
    </main>
  );
}
