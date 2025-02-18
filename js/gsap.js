// Animação para o texto
gsap.from(".text_hero span", {
  duration: 1,
  opacity: 0,
  y: -50,
  delay: 0.5,
  ease: "power2.out",
});

gsap.from(".text_hero h1", {
  duration: 1,
  opacity: 0,
  y: -50,
  delay: 1,
  ease: "power2.out",
});

gsap.from(".text_hero h2", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.2,
  delay: 1.5,
  ease: "power2.out",
});

gsap.from(".text_hero p", {
  duration: 1,
  opacity: 0,
  y: 30,
  delay: 2,
  ease: "power2.out",
});

// Animação para o botão
gsap.fromTo(".button_hero a", {
  opacity: 0,  // Começa invisível
  y: 50,       // Começa 50px abaixo
}, {
  duration: 1,
  opacity: 1,  // Vai para opacidade 1
  y: 0,        // Vai para a posição original
  delay: 2.5,  // Atraso antes de começar
  ease: "power2.out",  // Efeito de easing
});

// Animação para os ícones
gsap.from(".icons_hero img", {
  duration: 1,
  opacity: 0,
  x: -50,
  stagger: 0.3,
  delay: 3,
  ease: "power2.out",
});














































