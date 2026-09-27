import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Welcome to Web Dev!</h1>
      <h3>Amey Kedar Mohile</h3>
      <h2>Labs</h2>
      <ul>
        <li><Link href="/labs/lab1" id="wd-lab1-link">Lab 1: HTML</Link></li>
        <li><Link href="/labs/lab2" id="wd-lab2-link">Lab 2</Link></li>
        <li><Link href="/labs/lab3" id="wd-lab3-link">Lab 3</Link></li>
        <li><Link href="/labs/lab4" id="wd-lab4-link">Lab 4</Link></li>
        <li><Link href="/labs/lab5" id="wd-lab5-link">Lab 5</Link></li>
        <li><Link href="/" id="wd-kambaz-index-link">Kambaz</Link></li>
      </ul>
      <a href="https://github.com/ameymohile/webdev-client" id="wd-github">
        My GitHub repo
      </a>
    </div>
  );
}
