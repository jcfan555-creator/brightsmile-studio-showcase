import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  return null;
}
