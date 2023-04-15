import React from 'react'
import { useActiveProfile } from '@lens-protocol/react-web';
import Link from 'next/link';

export default function Profile() {
  const { data: activeProfile, error, loading } = useActiveProfile();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {
        activeProfile ?
          <pre>Profile: {JSON.stringify(activeProfile)}</pre> :
          <Link href="profile/create">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Become a creator
            </button>
          </Link>
      }
    </main>
  )
}
