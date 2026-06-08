import { appConfig } from "@/lib/app-config";

export function PhoneFrame() {
  return (
    <div className="phone-stage" aria-label="Maintenance Log app home screen">
      <div className="phone-shell">
        <img
          className="phone-screen"
          src={appConfig.screenshotPath}
          alt="Maintenance Log garage screen showing vehicle count, total spent, last service date, and a Toyota Corolla service record."
        />
      </div>
    </div>
  );
}
