function contarLetraA() {
  const str = document.getElementById("stringInput").value;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      count++;
    }
  }

  document.getElementById(
    "contagemResultado"
  ).textContent = `A letra "a" aparece ${count} vezes na string.`;
}
