export default function Home() {
  const categories = [
    { name: "Vehículos", icon: "🚗" },
    { name: "Inmuebles", icon: "🏠" },
    { name: "Electrónica", icon: "📱" },
    { name: "Hogar", icon: "🛋️" },
    { name: "Ropa", icon: "👕" },
    { name: "Herramientas", icon: "🔧" },
    { name: "Servicios", icon: "🛠️" },
    { name: "Otros", icon: "📦" },
  ];

  const products = [
    {
      name: "Publicá tu producto",
      price: "Gratis",
      category: "Empezá a vender",
      icon: "➕",
    },
    {
      name: "Encontrá productos cerca",
      price: "Fácil y rápido",
      category: "Compra local",
      icon: "📍",
    },
    {
      name: "Vendé a personas de tu zona",
      price: "Sin complicaciones",
      category: "Venta local",
      icon: "🤝",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f6f8",
        fontFamily: "Arial, sans-serif",
        color: "#171717",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "16px 6%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: "800",
              letterSpacing: "-1px",
            }}
          >
            cerca
          </div>
          <div style={{ fontSize: "12px", color: "#777" }}>
            Comprá y vendé cerca tuyo
          </div>
        </div>

        <div
          style={{
            flex: "1",
            maxWidth: "600px",
            minWidth: "250px",
            position: "relative",
          }}
        >
          <input
            placeholder="¿Qué estás buscando?"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "15px 20px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "16px",
              outline: "none",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "12px 18px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Ingresar
          </button>

          <button
            style={{
              padding: "12px 18px",
              borderRadius: "10px",
              border: "none",
              background: "#111",
              color: "#fff",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Publicar
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          padding: "60px 6%",
          background: "#111",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "7px 12px",
              background: "#2b2b2b",
              borderRadius: "20px",
              fontSize: "13px",
              marginBottom: "18px",
            }}
          >
            📍 Marketplace local
          </div>

          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 68px)",
              lineHeight: "1",
              margin: "0 0 20px",
              letterSpacing: "-3px",
            }}
          >
            Encontrá lo que buscás.
            <br />
            <span style={{ color: "#bdbdbd" }}>Cerca tuyo.</span>
          </h1>

          <p
            style={{
              fontSize: "19px",
              color: "#cfcfcf",
              maxWidth: "650px",
              lineHeight: "1.5",
            }}
          >
            Comprá, vendé y descubrí productos y servicios de personas y
            negocios de tu zona.
          </p>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                padding: "15px 25px",
                border: "none",
                borderRadius: "10px",
                background: "#fff",
                color: "#111",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Explorar productos →
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section style={{ padding: "45px 6%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "22px",
          }}
        >
          <div>
            <h2 style={{ margin: 0, fontSize: "28px" }}>
              Categorías
            </h2>
            <p style={{ color: "#777", marginTop: "7px" }}>
              Explorá lo que hay cerca tuyo
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "12px",
          }}
        >
          {categories.map((category) => (
            <button
              key={category.name}
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "22px 12px",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "30px", marginBottom: "9px" }}>
                {category.icon}
              </div>
              <div style={{ fontWeight: "700", fontSize: "14px" }}>
                {category.name}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* PUBLICIDAD / DESTACADO */}
      <section style={{ padding: "0 6% 45px" }}>
        <div
          style={{
            background: "#e9e9e9",
            borderRadius: "18px",
            padding: "35px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#666",
                marginBottom: "8px",
              }}
            >
              ¿TENÉS ALGO PARA VENDER?
            </div>

            <h2 style={{ margin: "0 0 10px", fontSize: "30px" }}>
              Publicalo en Cerca.
            </h2>

            <p style={{ margin: 0, color: "#666" }}>
              Llegá a compradores de tu zona.
            </p>
          </div>

          <button
            style={{
              padding: "15px 24px",
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Publicar producto
          </button>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section style={{ padding: "0 6% 60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>
          Empezá en Cerca
        </h2>

        <p style={{ color: "#777", marginBottom: "25px" }}>
          Todo lo que podés hacer en nuestra plataforma.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "25px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "14px",
                  background: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "27px",
                  marginBottom: "18px",
                }}
              >
                {product.icon}
              </div>

              <div
                style={{
                  color: "#777",
                  fontSize: "13px",
                  marginBottom: "6px",
                }}
              >
                {product.category}
              </div>

              <h3 style={{ margin: "0 0 10px", fontSize: "19px" }}>
                {product.name}
              </h3>

              <strong style={{ fontSize: "16px" }}>
                {product.price}
              </strong>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#111",
          color: "#fff",
          padding: "30px 6%",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "24px", fontWeight: "800" }}>
          cerca
        </div>

        <p style={{ color: "#aaa", marginBottom: 0 }}>
          Comprá y vendé cerca tuyo.
        </p>
      </footer>
    </main>
  );
}
