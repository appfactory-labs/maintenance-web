import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { appConfig } from "@/lib/app-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${appConfig.fullAppName}.`
};

const sections = [
  {
    title: "What Maintenance Log Is For",
    body: [
      "Maintenance Log is a vehicle maintenance tracker that helps you record service history, repairs, reminders, mileage, costs, and notes for vehicles you manage."
    ]
  },
  {
    title: "Information You May Enter",
    body: [
      "You may choose to enter vehicle details, service records, mileage, service dates, costs, reminders, notes, and related maintenance information.",
      "The app does not require you to create an account to use the core tracking features."
    ]
  },
  {
    title: "Local App Data",
    body: [
      "Some information may be stored on your device to provide the app's core features, including your vehicles, service history, and reminders."
    ]
  },
  {
    title: "Support Requests",
    body: [
      "If you submit the support form, we use the information you provide only to review and respond to your support request."
    ]
  },
  {
    title: "Notifications",
    body: [
      "If you enable notifications, they are used for maintenance reminders selected by you. You can manage notification permissions through your device settings."
    ]
  },
  {
    title: "Purchases",
    body: [
      "If purchases or subscriptions are added, billing is handled by Apple or Google. We do not receive your full payment card details from those app stores."
    ]
  },
  {
    title: "Data Sharing",
    body: [
      "Personal data is not sold. We may share information only when needed to operate support, comply with legal obligations, or protect the app and its users."
    ]
  },
  {
    title: "Your Choices",
    body: [
      "You can choose what you enter into the app, update or delete vehicle records where the app provides those controls, and manage notifications from your device settings."
    ]
  },
  {
    title: "Changes",
    body: [
      "We may update this policy as the app changes. The effective date will be updated when the policy is revised."
    ]
  },
  {
    title: "Contact",
    body: ["Contact us through the support form."]
  }
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains how Maintenance Log handles information for vehicle maintenance records, reminders, service history, and support requests."
      sections={sections}
    />
  );
}
