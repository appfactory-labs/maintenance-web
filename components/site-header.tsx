import Link from "next/link";
import { appConfig } from "@/lib/app-config";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="shell header-inner" aria-label="Main navigation">
        <Link className="brand-link" href="/">
          <img className="brand-icon" src={appConfig.iconPath} alt="" />
          <span>{appConfig.appName}</span>
        </Link>
        <div className="site-nav">
          <Link href={appConfig.privacyPath}>Privacy</Link>
          <Link href={appConfig.termsPath}>Terms</Link>
          <Link href={appConfig.supportPath}>Support</Link>
        </div>
      </nav>
    </header>
  );
}
