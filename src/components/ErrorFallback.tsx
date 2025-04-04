interface ErrorFallbackProps {
  error: Error;
}

export function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white p-4">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h2>
        <pre className="text-sm bg-black/50 p-4 rounded overflow-auto">
          {error.message}
        </pre>
      </div>
    </div>
  );
}
