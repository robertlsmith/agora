import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  )
}

/* This is a Layout component, which seems to be unique to Gatsby.
   It's supposed to be good for headers and footers, so look into it. */