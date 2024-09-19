// dashboard/not-found.tsx

export default function DashboardNotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">404 - Dashboard Page Not Found</h1>
        <p className="mt-4 text-lg">Sorry, the page youre looking for in the dashboard does not exist.</p>
        <a href="/dashboard" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md">
          Go Back to Dashboard
        </a>
      </div>
    );
  }
  