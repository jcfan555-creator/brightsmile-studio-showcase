import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faqs")({
  component: FaqsPage,
});

function FaqsPage() {
  return null;
}
