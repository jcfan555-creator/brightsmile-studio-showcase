import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/patient-stories")({
  component: PatientStoriesPage,
});

function PatientStoriesPage() {
  return null;
}
