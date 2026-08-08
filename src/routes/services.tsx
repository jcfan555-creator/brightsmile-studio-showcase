import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  return null;
}
