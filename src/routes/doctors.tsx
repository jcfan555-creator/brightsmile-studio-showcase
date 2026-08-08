import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/doctors")({
  component: DoctorsPage,
});

function DoctorsPage() {
  return null;
}
