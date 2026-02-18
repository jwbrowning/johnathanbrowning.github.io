interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px", lineHeight: 1.6 }}>
      {children}
    </div>
  )
}
