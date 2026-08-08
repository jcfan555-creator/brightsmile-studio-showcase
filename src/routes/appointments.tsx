import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/appointments")({
  component: AppointmentsPage,
});

function AppointmentsPage() {
  return null;
}
