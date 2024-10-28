'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();

  // Optional: Redirect to another page after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard/election-results/akwa-ibom'); // Redirect to the homepage or any other route
    }, 2); // 3-second delay before redirecting

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [router]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting you to the homepage in 3 seconds...</p>
    </div>
  );
}
