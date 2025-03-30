// Home Page
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Game Database</h1>
      <Link href={"/game-db/favorites"}>My Favorites</Link>
    </main>
  );
}
