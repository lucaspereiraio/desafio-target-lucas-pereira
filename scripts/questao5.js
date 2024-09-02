function mostrarSolucao() {
  const solucao =
    "1- Ligue o primeiro interruptor e deixe-o ligado por alguns minutos." +
    " 2- Após alguns minutos, desligue o primeiro interruptor e ligue o segundo." +
    " 3- Imediatamente, vá para a sala das lâmpadas." +
    " 4- A lâmpada que está acesa é controlada pelo segundo interruptor." +
    " 5- Toque nas outras duas lâmpadas: a que estiver quente é controlada pelo primeiro interruptor (que foi ligado anteriormente e depois desligado)." +
    " 6- A lâmpada que estiver fria e apagada é controlada pelo terceiro interruptor.";

  document.getElementById("solucaoCinco").textContent = solucao;
}
