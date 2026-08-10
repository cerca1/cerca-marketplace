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
      name: "Auto usado",
      price: "$8.500.000",
      category: "Vehículos",
      icon: "🚗",
    },
    {
      name: "Casa en venta",
      price: "$65.000.000",
      category: "Inmuebles",
      icon: "🏠",
    },
    {
      name: "Celular",
      price: "$450.000",
      category: "Electrónica",
      icon: "📱",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        color: "#171717",
        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e5e5",
          padding: "18px 6%",
          display: "flex",
          alignItems: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: "120px" }}>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "900",
              letterSpacing: "-1px",
            }}
          >
            cerca
          </div>

          <div
            style={{
              fontSize: "12px",
              color: "#777",
              marginTop: "-3px",
            }}
          >
            Comprá y vendé cerca tuyo
          </div>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "250px",
            maxWidth: "650px",
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
              fontSize: "15px",
              outline: "none",
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
              background: "white",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "12px 18px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Ingresar
          </button>

          <button
            style={{
              background: "#111",
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "13px 20px",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            + Publicar
          </button>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section
          style={{
            padding: "55px 6%",
          }}
        >
          <div
            style={{
              background: "#111",
              color: "white",
              borderRadius: "24px",
              padding: "65px 7%",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "#2a2a2a",
                padding: "8px 13px",
                borderRadius: "30px",
                fontSize: "13px",
                marginBottom: "20px",
              }}
            >
              📍 Marketplace local
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 7vw, 76px)",
                lineHeight: "0.98",
                margin: "0",
                maxWidth: "850px",
                letterSpacing: "-4px",
              }}
            >
              Encontrá lo que buscás.
              <br />
              Cerca tuyo.
            </h1>

            <p
              style={{
                color: "#cfcfcf",
                fontSize: "18px",
                lineHeight: "1.5",
                maxWidth: "650px",
                marginTop: "25px",
              }}
            >
              Comprá, vendé y descubrí productos y
              servicios de personas y negocios de tu
              zona.
            </p>

            <button
              style={{
                marginTop: "20px",
                background: "white",
                color: "#111",
                border: "none",
                padding: "15px 23px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: "800",
                cursor: "pointer",
              }}
            >
              Explorar productos →
            </button>
          </div>
        </section>

        {/* CATEGORÍAS */}
        <section
          style={{
            padding: "10px 6% 50px",
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "8px",
            }}
          >
            Categorías
          </h2>

          <p
            style={{
              color: "#777",
              marginBottom: "30px",
            }}
          >
            Explorá lo que hay cerca tuyo
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "14px",
            }}
          >
            {categories.map((category) => (
              <div
                key={category.name}
                style={{
                  background: "white",
                  border: "1px solid #e5e5e5",
                  borderRadius: "16px",
                  padding: "22px 10px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
              >
                <div
                  style={{
                    fontSize: "34px",
                    marginBottom: "10px",
                  }}
                >
                  {category.icon}
                </div>

                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  {category.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VENTA */}
        <section
          style={{
            padding: "10px 6% 50px",
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "35px",
              border: "1px solid #e5e5e5",
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
                  color: "#777",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                ¿TENÉS ALGO PARA VENDER?
              </div>

              <h2
                style={{
                  margin: "8px 0",
                  fontSize: "30px",
                }}
              >
                Publicalo en Cerca.
              </h2>

              <p
                style={{
                  color: "#777",
                  margin: 0,
                }}
              >
                Llegá a compradores de tu zona.
              </p>
            </div>

            <button
              style={{
                background: "#111",
                color: "white",
                border: "none",
                borderRadius: "10px",
                padding: "15px 24px",
                fontWeight: "800",
                cursor: "pointer",
              }}
            >
              Publicar producto
            </button>
          </div>
        </section>

        {/* PRODUCTOS */}
        <section
          style={{
            padding: "10px 6% 70px",
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ fontSize: "32px" }}>
            Productos destacados
          </h2>

          <p style={{ color: "#777" }}>
            Algunas publicaciones que podés encontrar en
            Cerca.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
              marginTop: "25px",
            }}
          >
            {products.map((product) => (
              <div
                key={product.name}
                style={{
                  background: "white",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid #e5e5e5",
                }}
              >
                <div
                  style={{
                    height: "150px",
                    background: "#eeeeee",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "55px",
                  }}
                >
                  {product.icon}
                </div>

                <div style={{ padding: "20px" }}>
                  <div
                    style={{
                      color: "#888",
                      fontSize: "12px",
                      marginBottom: "8px",
                    }}
                  >
                    {product.category}
                  </div>

                  <h3
                    style={{
                      margin: "0 0 12px",
                      fontSize: "18px",
                    }}
                  >
                    {product.name}
                  </h3>

                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "900",
                    }}
                  >
                    {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          background: "#111",
          color: "white",
          padding: "45px 6%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            fontWeight: "900",
          }}
        >
          cerca
        </div>

        <p
          style={{
            color: "#aaa",
            marginBottom: 0,
          }}
        >
          Comprá y vendé cerca tuyo.
        </p>

        <p
          style={{
            color: "#666",
            fontSize: "12px",
            marginTop: "25px",
          }}
        >
          © 2026 Cerca. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
