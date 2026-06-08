import Link from "next/link";
import { appConfig } from "@/lib/app-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="footer-brand" href="/">
            <img className="footer-icon" src={appConfig.iconPath} alt="" />
            <span>{appConfig.appName}</span>
          </Link>
          <p className="footer-text">
            A simple vehicle maintenance log for service records, reminders, and car care tasks.
          </p>
        </div>
        <div>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href={appConfig.privacyPath}>Privacy</Link>
            <Link href={appConfig.termsPath}>Terms</Link>
            <Link href={appConfig.supportPath}>Support</Link>
          </nav>
          <p className="copyright">
            © 2026 {appConfig.company}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
