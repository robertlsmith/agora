import React from "react"
import Navbar from "../components/Navbar";

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