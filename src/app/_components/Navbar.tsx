import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href="/"> Soraya Gherras</Link>
      <ul>
        <li>Portfolio</li>
        <li>A propos</li>
        <li>Livre blanc </li>
        <li>Contact </li>
      </ul>
    </nav>
  )
}

export default Navbar;
