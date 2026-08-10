import { useState } from "react"; 

export default function Home() {
  const [search, setSearch] = useState("");

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
      name: "Auto usado",
      price: "$8.500.000",
      location: "Firmat, Santa Fe",
      category: "Vehículos",
      icon: "🚗",
    },
    {
      name: "Casa en venta",
      price: "$65.000.000",
      location: "Firmat, Santa Fe",
      category: "Inmuebles",
      icon: "🏠",
    },
    {
      name: "Celular",
      price: "$450.000",
      location: "Firmat, Santa Fe",
      category: "Electrónica",
      icon: "📱",
    },
    {
      name: "Juego de herramientas",
      price: "$120.000",
      location: "Firmat, Santa Fe",
      category: "Herramientas",
      icon: "🔧",
    },
    {
      name: "Sillón",
      price: "$280.000",
      location: "Firmat, Santa Fe",
      category: "Hogar",
      icon: "🛋️",
    },
    {
      name: "Bicicleta",
      price: "$350.000",
      location: "Firmat, Santa Fe",
      category: "Otros",
      icon: "🚲",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f6f8",
        fontFamily: "Arial, sans-serif",
        color: "#222",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontWeight: "800",
              color: "#111827",
            }}
          >
            cerca
          </div>

          <div style={{ flex: 1, position: "relative" }}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="¿Qué estás buscando?"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "15px 20px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </div>

          <button
            style={{
              background: "#111827",
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "14px 20px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            + Publicar
          </button>

          <button
            style={{
              background: "white",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
              padding: "13px 18px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Ingresar
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          background: "#111827",
          color: "white",
          padding: "65px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#374151",
              padding: "8px 14px",
              borderRadius: "30px",
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            🏪 El marketplace de tu zona
          </div>

          <h1
            style={{
              fontSize: "48px",
              margin: "10px 0",
              fontWeight: "800",
            }}
          >
            Encontrá lo que buscás.
            <br />
            Cerca tuyo.
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#d1d5db",
              maxWidth: "650px",
              margin: "20px auto 30px",
              lineHeight: "1.6",
            }}
          >
            Comprá, vendé y encontrá productos y servicios de personas y
            comercios cerca de vos.
          </p>

          <button
            style={{
              background: "white",
              color: "#111827",
              border: "none",
              borderRadius: "10px",
              padding: "15px 28px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            🔎 Explorar publicaciones
          </button>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "45px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "25px",
          }}
        >
          Categorías
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "15px",
          }}
        >
          {categories.map((category) => (
            <div
              key={category.name}
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "22px 10px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                {category.icon}
              </div>

              <div style={{ fontWeight: "600" }}>{category.name}</div>
            </div>
          ))}
        </div>

        {/* PUBLICACIONES */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "55px",
            marginBottom: "25px",
          }}
        >
          <h2 style={{ fontSize: "28px", margin: 0 }}>
            Publicaciones destacadas
          </h2>

          <button
            style={{
              border: "none",
              background: "transparent",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Ver todas →
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  height: "170px",
                  background: "#eef0f3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "70px",
                }}
              >
                {product.icon}
              </div>

              <div style={{ padding: "18px" }}>
                <div
                  style={{
                    color: "#6b7280",
                    fontSize: "13px",
                    marginBottom: "7px",
                  }}
                >
                  {product.category}
                </div>

                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: "19px",
                  }}
                >
                  {product.name}
                </h3>

                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    marginBottom: "10px",
                  }}
                >
                  {product.price}
                </div>

                <div
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                  }}
                >
                  📍 {product.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PUBLICAR */}
        <section
          style={{
            marginTop: "60px",
            background: "#e5e7eb",
            borderRadius: "20px",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>
            ¿Tenés algo para vender?
          </h2>

          <p
            style={{
              color: "#4b5563",
              fontSize: "17px",
            }}
          >
            Publicalo en Cerca y encontrá compradores de tu zona.
          </p>

          <button
            style={{
              background: "#111827",
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "15px 28px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            + Publicar gratis
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          background: "#111827",
          color: "white",
          textAlign: "center",
          padding: "45px 20px",
          marginTop: "30px",
        }}
      >
        <div style={{ fontSize: "28px", fontWeight: "800" }}>cerca</div>

        <p style={{ color: "#9ca3af" }}>
          Comprá y vendé cerca tuyo.
        </p>

        <p
          style={{
            color: "#6b7280",
            fontSize: "13px",
            marginTop: "25px",
          }}
        >
          © 2026 Cerca. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
