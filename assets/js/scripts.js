// Año en footer
const y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();

// Menú móvil
const btn = document.getElementById("btnMenu");
const mobile = document.getElementById("mobileMenu");
if (btn && mobile) btn.addEventListener("click", () => mobile.classList.toggle("hidden"));

// Resaltar sección activa en navbar
const links = document.querySelectorAll(".nav-link");
const targets = [...links].map(a => document.querySelector(a.getAttribute("href")));
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    const id = `#${entry.target.id}`;
    const link = document.querySelector(`.nav-link[href="${id}"]`);
    if (link) link.classList.toggle("active", entry.isIntersecting);
  });
},{rootMargin:"-45% 0px -50% 0px", threshold:0.01});
targets.filter(Boolean).forEach(sec => obs.observe(sec));

// Respeta "reducir movimiento": si el usuario prefiere menos animación, usa PNG
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll("picture > source[type='image/gif']").forEach(src=>{
    const img = src.parentElement.querySelector("img");
    if (img) img.src = img.getAttribute("src"); // ya es PNG
  });
}
