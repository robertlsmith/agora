import React from "react"
import Navbar from "../components/Navbar";

import "firebase/auth"
import AuthProvider from "../context/auth";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        {children}
      </div>
    </main>
  )
}

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)