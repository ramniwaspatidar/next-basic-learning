import Link from "next/link";

export default function CommonLayoutLogin({ children }) {
  return (
    <div>
      <ul>
        <li>
          <h4>Common Tab</h4>
        </li>
        <li>
          <Link href={"/login/fb"}>FB</Link>
        </li>
        <li>
          <Link href={"/login/gmail"}>Gmail</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
