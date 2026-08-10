export default function Home() {
  const categories = [
    "Vehículos",
    "Inmuebles",
    "Electrónica",
    "Hogar",
    "Ropa",
    "Herramientas",
    "Servicios",
    "Otros",
  ];

  const products = [
    {
      name: "Publicá tu producto",
      price: "Gratis",
      category: "Empezá a vender",
      emoji: "📦",
    },
    {
      name: "Encontrá productos cerca",
      price: "Fácil y rápido",
      category: "Comprá local",
      emoji: "📍",
    },
    {
      name: "Vendé sin complicaciones",
      price: "Llegá a más personas",
      category: "Para vendedores",
      emoji: "💰",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
        color: "#222",
      }}
    >
      {/* ENCABEZADO */}
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e5e5",
          padding: "16px 6%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            fontSize: "32px",
            fontWeight: "800",
            color: "#111",
          }}
        >
          cerca
        </div>

        <div
          style={{
            flex: "1",
            maxWidth: "600px",
            minWidth: "250px",
          }}
        >
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            style={{
              width: "100%",
              padding: "14px 18px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <button
            style={{
              background: "transparent",
              border: "1px solid #222",
              padding: "10px 16px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Ingresar
          </button>

          <button
            style={{
              background: "#222",
              color: "#fff",
              border: "none",
              padding: "11px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Publicar
          </button>
        </div>
      </header>

      {/* UBICACIÓN */}
      <section
        style={{
          background: "#fff",
          padding: "12px 6%",
          borderBottom: "1px solid #eee",
          color: "#555",
        }}
      >
        📍 Productos cerca tuyo
      </section>

      {/* PRESENTACIÓN */}
      <section
        style={{
          padding: "60px 6%",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              margin: "0 0 15px",
              lineHeight: "1.1",
            }}
          >
            Comprá y vendé
            <br />
            cerca tuyo.
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#666",
              maxWidth: "650px",
              lineHeight: "1.5",
            }}
          >
            Encontrá productos, servicios y oportunidades cerca de donde
            estás. Publicá gratis y conectá con compradores de tu zona.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "25px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "#222",
                color: "#fff",
                border: "none",
                padding: "14px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Explorar productos
            </button>

            <button
              style={{
                background: "#fff",
                color: "#222",
                border: "1px solid #222",
                padding: "14px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Quiero vender
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section
        style={{
          padding: "40px 6%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "28px" }}>Categorías</h2>

        <div
          style={{
            display: "
