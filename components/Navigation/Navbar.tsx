import React from 'react'

import { useActiveWallet } from "@lens-protocol/react-web"
import { LoginButton } from "@/components/Auth/LoginButton"
import { LogoutButton } from "@/components/Auth/LogoutButton"

export function Navbar() {
  const { data: wallet, loading } = useActiveWallet()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <p className="mr-6">You are logged-in with {wallet?.address}</p>
      {loading ? <p className="mr-6">Loading...</p> : <div className="mr-6">{wallet ? <LogoutButton /> : <LoginButton />}</div>}
    </nav>
  )
}
