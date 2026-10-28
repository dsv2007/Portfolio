export default function Loading() {
  return (
    <main
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <div
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-4 border-line border-t-blue"
      />
      <span className="sr-only">Loading</span>
    </main>
  );
}