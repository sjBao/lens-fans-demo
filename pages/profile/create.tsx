import React, { useState } from 'react'
import { isValidHandle, useCreateProfile } from '@lens-protocol/react-web';

export default function CreateProfile() {

  const [handle, setHandle] = useState<string>('');

  const { execute: create, error, isPending } = useCreateProfile();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!handle) return;
    await create(handle);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Let&apos;s create your profile:</div>
      <div className="relative mb-3">
        <input type="text" className="w-full px-4 py-2 rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" value={handle} onChange={(e) => setHandle(e.target.value)} />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Create Profile
      </button>
    </main>
  )
}
