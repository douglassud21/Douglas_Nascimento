gsap.registerPlugin(ScrollTrigger);

// Animação para a linha do tempo
gsap.to(".timeline-items", {
  xPercent: -100 * (document.querySelectorAll(".timeline-item").length - 1), // move a linha do tempo para a esquerda
  scrollTrigger: {
    trigger: ".timeline", // Quando o usuário começar a rolar a seção
    start: "top top", // Começar quando a linha do tempo atingir o topo da tela
    end: "+=300%", // A duração da animação, aumentando ainda mais a distância da animação
    scrub: 3, // Suaviza a animação e diminui ainda mais a velocidade (quanto maior o número, mais lento)
    pin: ".timeline", // Fixar a seção de linha do tempo
    pinSpacing: false, // Impede que o pin adicione espaçamento extra
    markers: false, // Não mostrar marcadores de depuração
    smooth: true, // Rolagem suave
  },
});
