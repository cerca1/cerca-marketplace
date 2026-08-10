"use client";

import { useState } from "react";
import "./styles.css";

const categories = [
  ["🚗", "Vehículos"], ["🏠", "Inmuebles"], ["📱", "Tecnología"],
  ["🛋️", "Hogar"], ["🔧", "Herramientas"], ["👕", "Ropa"],
  ["⚽", "Deportes"], ["🐶", "Mascotas"], ["🏪", "Comercios"]
];

const products = [
  { title: "Volkswagen Gol Trend 2015", price: "$6.200.000", location: "Firmat, Santa Fe", tag: "DESTACADO", emoji: "🚗" },
  { title: "Honda Wave 110S 2023", price: "$1.800.000", location: "Firmat, Santa Fe", tag: "DESTACADO", emoji: "🏍️" },
  { title: "iPhone 13 128GB", price: "$680.000", location: "Firmat, Santa Fe", tag: "", emoji: "📱" },
  { title: "Casa en venta — 3 dormitorios", price: "$65.000.000", location: "Firmat, Santa Fe", tag: "", emoji: "🏠" },
  { title: "Sofá 3 cuerpos", price: "$350.000", location: "Firmat, Santa Fe", tag: "", emoji: "🛋️" },
  { title: "Taladro profesional", price: "$95.000", location: "Firmat, Santa Fe", tag: "", emoji: "🔧" }
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Firmat, Santa Fe");
  const [favorites, setFavorites] = useState([]);
  const [showPublish, setShowPublish] = useState(false);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <header className="header">
        <div className="logo"><span>●</span> cerca</div>
        <div className="tagline">Comprá y vendé<br/>cerca tuyo</div>
        <div className="search">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="¿Qué estás buscando?" />
          <button>🔎</button>
        </div>
        <div className="location">📍 {location}</div>
        <div className="header-links">♡ Favoritos &nbsp; ◌ Mensajes &nbsp; 👤 Perfil</div>
      </header>

      <section className="hero">
        <div>
          <h1>Comprá y vendé <strong>cerca tuyo</strong></h1>
          <p>Miles de productos en Firmat y la zona.</p>
          <button className="primary" onClick={() => setShowPublish(true)}>Publicá gratis</button>
        </div>
        <div className="hero-art">📱</div>
      </section>

      <section>
        <h2>Categorías destacadas</h2>
        <div className="categories">
          {categories.map(([icon, name]) => (
            <button key={name} className="category" onClick={() => setSearch(name)}>
              <span>{icon}</span><b>{name}</b><small>Ver publicaciones</small>
            </button>
          ))}
        </div>
      </section>

      <section>
        <div className="section-title"><h2>Publicaciones destacadas</h2><span>{filtered.length} resultados</span></div>
        <div className="grid">
          {filtered.map((p, i) => (
            <article className="card" key={p.title}>
              {p.tag && <label>{p.tag}</label>}
              <button className="heart" onClick={() => setFavorites(f => f.includes(i) ? f.filter(x => x !== i) : [...f, i])}>
                {favorites.includes(i) ? "♥" : "♡"}
              </button>
              <div className="product-img">{p.emoji}</div>
              <div className="card-body">
                <h3>{p.title}</h3><strong>{p.price}</strong>
                <p>📍 {p.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="benefits">
        <div><b>🛡️ Compras más seguras</b><span>Calificá y mirá la reputación del vendedor.</span></div>
        <div><b>📍 Cerca tuyo</b><span>Encontrá lo que buscás en tu ciudad o zona.</span></div>
        <div><b>💬 Chat</b><span>Hablá con compradores y vendedores.</span></div>
        <div><b>🏷️ Destacá</b><span>Llegá a más personas y vendé más rápido.</span></div>
      </section>

      <footer>© 2026 Cerca · Comprá y vendé cerca tuyo · Firmat, Santa Fe</footer>

      {showPublish && (
        <div className="modal-bg" onClick={() => setShowPublish(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setShowPublish(false)}>×</button>
            <h2>Publicá gratis</h2>
            <input placeholder="¿Qué vendés?" />
            <input placeholder="Precio" />
            <textarea placeholder="Descripción"></textarea>
            <button className="primary">Continuar</button>
            <small>En esta primera versión no se realizan pagos.</small>
          </div>
        </div>
      )}
    </main>
  );
}
