
function toBronze(b, s, g, p) {
  return b + s*10 + g*100 + p*1000;
}

function fromBronze(total) {
  let p = Math.floor(total / 1000);
  total %= 1000;
  let g = Math.floor(total / 100);
  total %= 100;
  let s = Math.floor(total / 10);
  let b = total % 10;
  return {b, s, g, p};
}

let current = {b:0, s:0, g:0, p:0};

function add() {
  let b = parseInt(document.getElementById("bronze").value) || 0;
  let s = parseInt(document.getElementById("silver").value) || 0;
  let g = parseInt(document.getElementById("gold").value) || 0;
  let p = parseInt(document.getElementById("platinum").value) || 0;

  let total = toBronze(current.b, current.s, current.g, current.p)
            + toBronze(b, s, g, p);

  current = fromBronze(total);

  document.getElementById("result").innerText =
    `Result: ${current.p}P ${current.g}G ${current.s}S ${current.b}B`;
}

function save() {
  localStorage.setItem("money", JSON.stringify(current));
  alert("Saved!");
}

window.onload = () => {
  let saved = localStorage.getItem("money");
  if (saved) {
    current = JSON.parse(saved);
    document.getElementById("result").innerText =
      `Loaded: ${current.p}P ${current.g}G ${current.s}S ${current.b}B`;
  }
}
