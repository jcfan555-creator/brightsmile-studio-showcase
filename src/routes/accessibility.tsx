import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/accessibility")({
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return null;
}
