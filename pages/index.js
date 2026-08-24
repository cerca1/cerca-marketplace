import { useEffect, useState } from "react"; 
import { createClient } from "@supabase/supabase-js";

export default function Home() {
  const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
  const [search, setSearch] = useState("");
  const [clientId] = useState(() => {
  if (typeof window === "undefined") return "";

  let id = localStorage.getItem("cerca_client_id");

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("cerca_client_id", id);
  }

  return id;
});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Otros");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  

  useEffect(() => {
  if (!clientId) return;

  const guardarUsuario = async () => {
    const { data, error } = await supabase
      .from("USUARIOS")
      .upsert(
        { CLIENT_ID: clientId },
        { onConflict: "CLIENT_ID" }
      )
      .select();

    if (error) {
      console.error("ERROR USUARIOS:", error);
    } else {
      console.log("USUARIO GUARDADO:", data);
    }
  };

  guardarUsuario();
}, [clientId]);
const [likes, setLikes] = useState(() => {
  if (typeof window !== "undefined") {
    const savedLikes = localStorage.getItem("likes");
    return savedLikes ? JSON.parse(savedLikes) : {};
  }
  return {};
});  const [showFavorites, setShowFavorites] = useState(false);
  const [likeCounts, setLikeCounts] = useState({});
  useEffect(() => {
  const loadLikeCounts = async () => {
    const { data, error } = await supabase
      .from("likes")
      .select("product_name");

    if (error) {
      console.error("Error cargando Me gusta:", error);
      return;
    }

    const counts = {};

    data.forEach((like) => {
      counts[like.product_name] =
        (counts[like.product_name] || 0) + 1;
    });

    setLikeCounts(counts);
  };

  loadLikeCounts();
}, []);
  const [showLikes, setShowLikes] = useState(false);
  useEffect(() => {
  const savedFavorites = localStorage.getItem("favorites");
  if (savedFavorites) {
    setFavorites(JSON.parse(savedFavorites));
  }
}, []);

useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);
  const [publishedProducts, setPublishedProducts] = useState(() => {
  
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("publishedProducts");
    return saved ? JSON.parse(saved) : [];
  }
  return [];
});
  useEffect(() => {
  localStorage.setItem(
    "publishedProducts",
    JSON.stringify(publishedProducts)
  );
}, [publishedProducts]);
  useEffect(() => {
  localStorage.setItem("likes", JSON.stringify(likes));
}, [likes]);
 const categories = [
  {
    name: "Vehículos",
icon: "🚗",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Inmuebles",
    icon: "🏠",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Electrónica",
    icon: "📱",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Hogar",
    icon: "🛋️",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ropa",
    icon: "👕",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Herramientas",
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Servicios",
    icon: "🛠️",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Otros",
    icon: "📦",
    image: "https://images.unsplash.com/photo-1586528116493-da8b2e3b4c8a?auto=format&fit=crop&w=500&q=80",
  },
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
  const synonymGroups = [
  ["auto", "coche", "vehiculo", "vehículo", "automovil", "automóvil"],
  ["celular", "celulares", "telefono", "teléfono", "movil", "móvil"],
  ["casa", "vivienda", "hogar", "inmueble", "inmuebles"],
  ["ropa", "vestimenta", "indumentaria"],
  ["herramienta", "herramientas"],
  ["mueble", "muebles"],
  ["moto", "motocicleta", "motocicletas"],
  ["camion", "camión", "camioneta", "pickup"],
  ["bicicleta", "bicicletas", "bici"],
];

return (
  <>    {selectedProduct && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.55)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      padding: "20px",
    }}
    onClick={() => setSelectedProduct(null)}
  >
    <div
      style={{
        background: "white",
        width: "100%",
        maxWidth: "500px",
        maxHeight: "90vh",
        overflowY: "auto",
        borderRadius: "18px",
        padding: "25px",
        boxSizing: "border-box",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setSelectedProduct(null)}
        style={{
          float: "right",
          border: "none",
          background: "#f3f4f6",
          borderRadius: "50%",
          width: "35px",
          height: "35px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        ×
      </button>

      {selectedProduct.image ? (
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "14px",
            marginBottom: "20px",
          }}
        />
      ) : (
        <div
          style={{
            height: "180px",
            background: "#eef0f3",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "70px",
            marginBottom: "20px",
          }}
        >
          {selectedProduct.icon || "📦"}
        </div>
      )}

      <div
        style={{
          color: "#6b7280",
          fontSize: "14px",
          marginBottom: "8px",
        }}
      >
        {selectedProduct.category}
      </div>

      <h2 style={{ margin: "0 0 12px", fontSize: "26px" }}>
        {selectedProduct.name}
      </h2>

      <div
        style={{
          fontSize: "24px",
          fontWeight: "700",
          marginBottom: "15px",
        }}
      >
        {selectedProduct.price}
      </div>

      <div
        style={{
          fontSize: "16px",
          marginBottom: "15px",
        }}
      >
        📍 {selectedProduct.location}
      </div>
<a
href={"tel:" + selectedProduct.phone}
>
📞 Llamar: {selectedProduct.phone}</a>
<a
  href={"https://wa.me/" + selectedProduct.phone}
  target="_blank"
  rel="noreferrer"
>
  💬 WhatsApp
</a>
<button
  onClick={() => {
    const exists = favorites.some(
      (item) => item.name === selectedProduct.name
    );

    if (exists) {
      setFavorites(
        favorites.filter(
          (item) => item.name !== selectedProduct.name
        )
      );
    } else {
      setFavorites([...favorites, selectedProduct]);
    }
  }}
  style={{
    marginTop: "15px",
    padding: "10px 16px",
    borderRadius: "10px",
    border: "1px solid #f59e0b",
    background: favorites.some(
      (item) => item.name === selectedProduct.name
    )
      ? "#f59e0b"
      : "white",
    color: favorites.some(
      (item) => item.name === selectedProduct.name
    )
      ? "white"
      : "#f59e0b",
    fontWeight: "700",
    cursor: "pointer",
  }}
>
  {favorites.some(
    (item) => item.name === selectedProduct.name
  )
    ? "⭐ En favoritos"
    : "☆ Agregar a favoritos"}
</button>
      {selectedProduct.description && (
        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            paddingTop: "15px",
            marginTop: "15px",
            lineHeight: "1.6",
          }}
        >
          <strong>Descripción</strong>
<p style={{ margin: "8px 0 0", color: "#4b5563", fontSize: "15px" }}>{selectedProduct.description}</p>        </div>
      )}
    </div>
  </div>
)}
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
          background: "white",
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
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }}
>
  <div
    style={{
      width: "24px",
      height: "24px",
      background: "#FFC400",
      borderRadius: "50% 50% 50% 0",
      transform: "rotate(-45deg)",
      position: "relative",
      flexShrink: 0,
    }}
  >
    <div
      style={{
        width: "8px",
        height: "8px",
        background: "white",
        borderRadius: "50%",
        position: "absolute",
        top: "8px",
        left: "8px",
      }}
    />
  </div>

  <div
    style={{
      fontSize: "34px",
      fontWeight: "900",
      color: "#111827",
      letterSpacing: "-1.5px",
    }}
  >
    cerca
  </div>

  <div
    style={{
      fontSize: "11px",
      fontWeight: "700",
      lineHeight: "1.15",
      color: "#111827",
      width: "110px",
    }}
  >
    Comprá y vendé
    <br />
    cerca tuyo
  </div>
</div>
          <div style={{ flex: 1, position: "relative" }}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="¿Qué estás buscando?"
              style={{
                width: "100%",
                boxSizing: "border-box",
                background: "white",
padding: "14px 55px 14px 20px",
                borderRadius: "14px",
border: "2px solid #e5e7eb",
                outline: "none",
              }}
            />
              <button
  type="button"
  onClick={() => setSearch(search)}
  style={{
    position: "absolute",
    right: "5px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "38px",
    height: "38px",
    border: "none",
    borderRadius: "10px",
    background: "#FFC400",
    color: "#111827",
    cursor: "pointer",
    fontSize: "18px",
  }}
>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="11" cy="11" r="7"></circle>
  <line x1="16.5" y1="16.5" x2="21" y2="21"></line>
</svg>
  </button>
          </div>


          
              <button
  onClick={() =>
    document.getElementById("favoritos")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  style={{
    background: "white",
    border: "none",
    borderRadius: "10px",
    padding: "13px 18px",
    fontWeight: "600",
    cursor: "pointer",
  }}
>
  ❤️ Favoritos
</button>
<button
  style={{
    background: "white",
    border: "none",
    padding: "13px 18px",
    fontWeight: "600",
    cursor: "pointer",
  }}
>
  💬 Mensajes
</button>


          <button
            style={{
              background: "white",
              border: "none",
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
    borderRadius: "18px",
    color: "white",
padding: "5px 20px",
width: "calc(100% - 500px)",
marginLeft: "260px",
    height: "250px",
overflow: "hidden",
boxSizing: "border-box", 
    position: "relative",
zIndex: 2,
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "35px",
      flexWrap: "nowrap",
transform: "translate(-20px, -40px) scale(0.8)",
      transformOrigin: "center",
    }}
  >
    <div
      style={{
        flex: "1 1 0",
        minWidth: "300px",
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
        📍 El marketplace de tu zona
      </div>

      <h1
        style={{
          fontSize: "30px",
          margin: "10px 0",
          fontWeight: "800",
          lineHeight: "1.1",
        }}
      >
        Comprá y vendé
        <br />
        <span style={{ color: "#facc15" }}>cerca tuyo</span>
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#d1d5db",
          maxWidth: "600px",
          margin: "20px 0 30px",
          lineHeight: "1.6",
        }}
      >
        Miles de productos, servicios y comercios cerca de vos.
      </p>

      <button
        style={{
          background: "#facc15",
          color: "#111827",
          border: "none",
          borderRadius: "10px",
          padding: "15px 28px",
          fontSize: "16px",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        Publicá gratis
      </button>

      <button
        style={{
          background: "transparent",
          color: "white",
          border: "none",
          marginLeft: "18px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        ▶️ ¿Cómo funciona?
      </button>
    </div>

    <div
      style={{
        flex: "0 0 250px",
        minWidth: "300px",
        height: "150px",
        borderRadius: "22px",
        overflow: "hidden",
        background: "#374151",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
        alt="Comprá y vendé cerca tuyo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
        <div
  style={{
    flex: "0 0 220px",
    height: "200px",
    borderRadius: "22px",
    overflow: "hidden",
    background: "white",
  }}
>
  <img
    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80"
    alt="Cerca en teléfono"
    style={{
      width: "60%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>
    <div
  style={{
    flex: "0 0 250px",
    background: "white",
    borderRadius: "22px",
    padding: "22px",
    color: "#111827",
  }}
>
  <h2 style={{ marginTop: 0 }}>
    ¿POR QUÉ ELEGIR CERCA?
  </h2>

  <p>📍 <strong>100% Local</strong></p>
  <p>Apoyá a compradores y vendedores de tu ciudad.</p>

  <p>⚡ <strong>Fácil y rápido</strong></p>
  <p>Publicá en menos de 2 minutos.</p>

  <p>🤝 <strong>Sin comisiones</strong></p>
  <p>Publicá gratis y vendé sin pagar comisión.</p>

  <p>🏪 <strong>Planes para comercios</strong></p>
  <p>Más herramientas, más ventas.</p>
</div>
  </div>
</section>

      {/* CATEGORÍAS */}
     <main
  style={{
    position: "relative",
    maxWidth: "1200px",
    margin: "auto",
padding: "10px 20px 45px",    display: "grid",
    marginTop: "-260px",
    gridTemplateColumns: "270px 1fr",
    gap: "40px",
  }}
>
<div
 style={{
   position: "relative",
left: "-60px",
  background: "white",
 
  width: "200px",
  borderRadius: "20px",
    border: "1px solid #e5e7eb",
    padding: "22px 18px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  }}
>
  <h2
    style={{
      fontSize: "18px",
      fontWeight: "800",
      margin: "0 0 18px 8px",
      color: "#111827",
    }}
  >
    CATEGORÍAS
  </h2>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    }}
  >
    {categories.map((category) => (
      <div
        key={category.name}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "8px 8px",
          borderRadius: "10px",
          cursor: "pointer",
          minHeight: "38px",
        }}
      >
        <div
          style={{
width: "30px",
height: "30px",
display: "flex",
alignItems: "center",
justifyContent: "center",
fontSize: "24px",
flexShrink: 0,
color: "#111827",
filter: "grayscale(1)",
          }}
        >
          {category.name === "Vehículos" && "🚗"}
          {category.name === "Inmuebles" && "⌂"}
          {category.name === "Electrónica" && "📱"}
          {category.name === "Hogar" && "🛋️"}
          {category.name === "Ropa" && "👕"}
          {category.name === "Herramientas" && "🛠️"}
          {category.name === "Servicios" && "⚙️"}
          {category.name === "Otros" && "•••"}
        </div>

        <div
          style={{
            fontSize: "15px",
            fontWeight: "600",
            color: "#111827",
          }}
        >
          {category.name}
        </div>
      </div>
    ))}
  </div>

  <div
    style={{
      marginTop: "18px",
      background: "#fff4c8",
      borderRadius: "14px",
      padding: "14px",
    }}
  >
    <div
      style={{
        fontSize: "15px",
        fontWeight: "800",
        color: "#111827",
      }}
    >
      Publicá gratis
    </div>

    <div
      style={{
        fontSize: "13px",
        color: "#4b5563",
        marginTop: "4px",
      }}
    >
      Vendé lo que ya no usás en minutos.
    </div>
  </div>
</div>
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
          {[...publishedProducts, ...products]

 .filter((product) =>
 (selectedCategory === "" || selectedCategory === "Todas" || product.category === selectedCategory) &&
  (
   product.name.toLowerCase().includes(search.toLowerCase()) ||
product.location.toLowerCase().includes(search.toLowerCase()) ||
product.category.toLowerCase().includes(search.toLowerCase()) ||
(search.toLowerCase().includes("celu") && (
  product.name.toLowerCase().includes("celular") ||
  product.name.toLowerCase().includes("telefono") ||
  product.name.toLowerCase().includes("teléfono") ||
  product.category.toLowerCase().includes("electrónica")
))
    ||
(search.toLowerCase().includes("coche") && (
  product.name.toLowerCase().includes("auto") ||
  product.name.toLowerCase().includes("coche") ||
  product.category.toLowerCase().includes("vehículo") ||
  product.category.toLowerCase().includes("vehiculos")
))
  )
)
  .map((product) => ( 
            <div
              key={product.name}
onClick={() => setSelectedProduct(product)}
             style={{
  background: "#ffffff",
  borderRadius: "16px",
  overflow: "hidden",
  border: "1px solid #e5e7eb",
  boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
  cursor: "pointer",
}}
            >
            
              <div
                style={{
height: "220px",                  background: "#eef0f3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
fontSize: "70px",               }}
              >
               {product.image ? (
  <img
    src={product.image}
    alt={product.name}
    style={{
      width: "100%",
      height: "220px",
      objectFit: "cover",
    }}
  />
) : (
  product.icon
)}
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
                    color: "#111827",
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
                  <button
onClick={async (e) => {
  e.stopPropagation();
  const { data: existingLike } = await supabase
    .from("likes")
    .select("id")
    .eq("product_name", product.name)
    .eq("client_id", clientId)
    .maybeSingle();

  if (existingLike) {
    await supabase
      .from("likes")
      .delete()
      .eq("id", existingLike.id);

    setLikes((prev) => ({
      ...prev,
      [product.name]: false,
    }));
  } else {
    await supabase
      .from("likes")
      .insert({
        product_name: product.name,
        client_id: clientId,
      });

    setLikes((prev) => ({
      ...prev,
      [product.name]: true,
    }));
  }
}}  style={{
    marginTop: "10px",
    background: "none",
    border: "none",
    fontSize: "22px",
    cursor: "pointer",
  }}
>
  {likes[product.name] ? "❤️" : "🤍"}

</button>
  <span style={{ fontSize: "14px", marginLeft: "5px" }}>
  {likes[product.name] ? 1 : 0} Me gusta
</span>
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
           onClick={() => setShowForm(!showForm)}
          >
            + Publicar gratis
          </button>
</section>

</main>

{showForm && (
  <section
    style={{
      maxWidth: "700px",
      margin: "40px auto",
      background: "white",
      padding: "30px",
      borderRadius: "16px",
      border: "1px solid #e5e7eb",
    }}
  >
    <h2>Publicar un producto</h2>

    <input
      placeholder="Título del producto"
value={title}
onChange={(e) => setTitle(e.target.value)}
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "14px",
        marginBottom: "15px",
        borderRadius: "10px",
        border: "1px solid #d1d5db",
      }}
    />

    <input
      placeholder="Precio"
value={price}
onChange={(e) => setPrice(e.target.value)}
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "14px",
        marginBottom: "15px",
        borderRadius: "10px",
        border: "1px solid #d1d5db",
      }}
    />

    <input
      placeholder="Ubicación"
value={location}
onChange={(e) => setLocation(e.target.value)}
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "14px",
        marginBottom: "15px",
        borderRadius: "10px",
        border: "1px solid #d1d5db",
      }}
    />
<input
  placeholder="Teléfono"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  style={{
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
  }}
/>
  <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  style={{
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
  }}
>
  {categories.map((cat) => (
  <option key={cat.name} value={cat.name}>
    {cat.name}
  </option>
))}
</select>
    <textarea
      placeholder="Descripción"
value={description}
onChange={(e) => setDescription(e.target.value)}
      rows="5"
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "14px",
        marginBottom: "15px",
        borderRadius: "10px",
        border: "1px solid #d1d5db",
      }}
    />
      <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }}
  style={{
    width: "100%",
    marginBottom: "15px",
  }}
/>

    <button
  onClick={() => {
const newProduct = {
  name: title,
  price: price,
  location: location,
  description: description,
  image: image,
  phone: phone,
category: category,  icon: "📦",
};

setPublishedProducts((prev) => [
  ...prev,
  newProduct,
]);

const savedProducts = JSON.parse(
  localStorage.getItem("publishedProducts") || "[]"
);

localStorage.setItem(
  "publishedProducts",
  JSON.stringify([...savedProducts, newProduct])
);

  setTitle("");
  setPrice("");
  setLocation("");
  setDescription("");
    setImage("");
    setCategory("Otros");
  setShowForm(false);
}}
      style={{
        background: "#111827",
        color: "white",
        border: "none",
        borderRadius: "10px",
        padding: "15px 25px",
        fontWeight: "700",
        cursor: "pointer",
      }}
    >
      Publicar
    </button>

    <button
      onClick={() => setShowForm(false)}
      style={{
        marginLeft: "10px",
        background: "white",
        color: "#111827",
        border: "1px solid #d1d5db",
        borderRadius: "10px",
        padding: "15px 25px",
        fontWeight: "700",
        cursor: "pointer",
      }}
    >
      Cancelar
    </button>
  </section>
)}
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
  <div style={{ fontSize: "28px", fontWeight: "800" }}>
    cerca
  </div>

  <p style={{ color: "#9ca3af" }}>
    Comprá y vendé cerca tuyo.
  </p>
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
</>
  );
}
