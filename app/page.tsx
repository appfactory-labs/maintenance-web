import { DownloadButtons } from "@/components/download-buttons";
import { PhoneFrame } from "@/components/phone-frame";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { appConfig } from "@/lib/app-config";

const features = [
  {
    title: "Manage multiple vehicles",
    copy: "Keep cars, trucks, motorcycles, family vehicles, and work vehicles separated with their own service history."
  },
  {
    title: "Record every service",
    copy: "Log oil changes, tire rotations, inspections, repairs, mileage, dates, costs, and notes."
  },
  {
    title: "See what is coming due",
    copy: "Create maintenance reminders by date or mileage so important service tasks stay visible."
  }
];

const serviceTypes = [
  "Oil changes",
  "Tire rotations",
  "Brake checks",
  "Battery service",
  "Inspections",
  "Custom repairs"
];

const steps = [
  {
    title: "Add your vehicle",
    copy: "Start with the car, truck, motorcycle, or family vehicle you want to track."
  },
  {
    title: "Log the work",
    copy: "Save what was done, when it happened, mileage, cost, and any notes you want to remember."
  },
  {
    title: "Set the next reminder",
    copy: "Track recurring care by date or mileage and keep your service record clean."
  }
];

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="shell hero-grid">
            <div className="hero-copy fade-up">
              <h1>{appConfig.appName}</h1>
              <p>{appConfig.tagline}</p>
              <p className="hero-description">
                {appConfig.description}
              </p>
              <DownloadButtons />
            </div>
            <div className="fade-up-delay">
              <PhoneFrame />
            </div>
          </div>
        </section>

        <section className="section feature-section" id="features" aria-labelledby="features-heading">
          <div className="shell">
            <div className="section-heading">
              <h2 id="features-heading">Car care records without the clutter.</h2>
              <p>
                Maintenance Log gives everyday drivers a clear place to remember what was done,
                what it cost, and when the next service is due.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-mark" aria-hidden="true" />
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section record-section" aria-labelledby="record-heading">
          <div className="shell record-layout">
            <div className="section-heading left">
              <h2 id="record-heading">Built for the maintenance you actually do.</h2>
              <p>
                Use it for routine care, repairs, inspections, used-car records, or keeping a
                family vehicle history you can check anytime.
              </p>
            </div>
            <div className="service-panel" aria-label="Supported service types">
              {serviceTypes.map((service) => (
                <div className="service-row" key={service}>
                  <span className="service-dot" aria-hidden="true" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section steps-section" aria-labelledby="steps-heading">
          <div className="shell">
            <div className="section-heading">
              <h2 id="steps-heading">A simple habit for every vehicle.</h2>
            </div>
            <div className="steps-list">
              {steps.map((step, index) => (
                <article className="step-row" key={step.title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="privacy-section" aria-labelledby="privacy-heading">
          <div className="shell privacy-inner">
            <div>
              <h2 id="privacy-heading">No account required.</h2>
              <p>
                Add your vehicle, log services, set reminders, and keep your maintenance history
                organized without a complicated setup.
              </p>
            </div>
            <div className="privacy-card">
              <p>Maintenance Log is a tracking and reminder tool. It does not provide mechanical diagnosis, roadside assistance, insurance advice, or professional repair guidance.</p>
            </div>
          </div>
        </section>

        <section className="section final-cta" aria-labelledby="final-heading">
          <div className="shell cta-inner">
            <h2 id="final-heading">Keep every service record easy to find.</h2>
            <p>
              Remember oil changes, tire rotations, brake checks, inspections, and repair history
              for every vehicle you manage.
            </p>
            <DownloadButtons compact />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
