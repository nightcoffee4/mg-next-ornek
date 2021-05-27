import Link from "next/link";

import styles from "./nav.module.css";

function Navigation() {
  return (
    <div>
      <nav>
        <Link href="/">
          <a className={styles.link}>Anasayfa </a>
        </Link>
        <Link href="/about">
          <a style={{ color: "darkgreen" }}> Hakkımızda</a>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
