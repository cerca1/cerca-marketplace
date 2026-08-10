export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      padding: "60px 8%",
      background: "#f5f5f5",
      minHeight: "100vh"
    }}>
      <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
        cerca
      </h1>

      <h2>Encontrá lo que buscás cerca tuyo.</h2>

      <p style={{ fontSize: "20px", color: "#666" }}>
        Marketplace para comprar y vender productos cerca tuyo.
      </p>

      <button style={{
        marginTop: "20px",
        padding: "14px 24px",
        border: 0,
        borderRadius: "8px",
        background: "#111",
        color: "white",
        fontWeight: "bold"
      }}>
        Explorar productos
      </button>
    </main>
  );
}
