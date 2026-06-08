import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { appConfig } from "@/lib/app-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${appConfig.fullAppName}.`
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: [
      "By using Maintenance Log, you agree to these terms. If you do not agree, do not use the app."
    ]
  },
  {
    title: "App Purpose",
    body: [
      "Maintenance Log is a vehicle tracking and reminder tool for service records, maintenance history, costs, mileage, notes, and upcoming service tasks."
    ]
  },
  {
    title: "Important Limits",
    body: [
      "Maintenance Log does not provide mechanical diagnosis, emergency roadside assistance, insurance advice, legal advice, or professional repair guidance.",
      "Always follow your vehicle manufacturer's recommendations and consult a qualified mechanic when needed."
    ]
  },
  {
    title: "User Responsibilities",
    body: [
      "You are responsible for the information you enter, the service decisions you make, and how you use reminders or records from the app.",
      "Use the app lawfully and only for your own personal or permitted vehicle tracking."
    ]
  },
  {
    title: "Purchases and Subscriptions",
    body: [
      "If purchases or subscriptions are added, payments are handled by Apple or Google where applicable. Subscription terms, cancellation options, and renewal details will be provided through the relevant app store flow."
    ]
  },
  {
    title: "Refunds",
    body: [
      "Where purchases are handled by Apple or Google, refunds are handled by Apple or Google according to their policies."
    ]
  },
  {
    title: "Intellectual Property",
    body: [
      "The app, website, design, text, branding, and related materials are owned by App Factory Labs or its licensors. You may not copy, modify, distribute, or use them except as allowed by these terms."
    ]
  },
  {
    title: "Disclaimer of Warranties",
    body: [
      "The app and website are provided as available, without warranties of any kind. We do not promise uninterrupted access, error-free operation, or any particular vehicle maintenance outcome."
    ]
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the fullest extent allowed by law, App Factory Labs will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of the app or website."
    ]
  },
  {
    title: "Changes to Terms",
    body: [
      "We may update these terms as the app changes. Continued use of the app after changes means you accept the updated terms."
    ]
  },
  {
    title: "Contact",
    body: ["Contact us through the support form."]
  }
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms explain the rules for using Maintenance Log and the website."
      sections={sections}
    />
  );
}
