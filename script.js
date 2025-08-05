
let attempts = 0;
const correctKey = "abc123fakeseedxyz987654321";

function tryHack() {
    const input = document.getElementById("keyInput").value;
    const result = document.getElementById("result");
    attempts++;
    document.getElementById("attempts").textContent = attempts;

    if (input === correctKey) {
        result.innerHTML = "🔒 Tranzacție blocată: Wallet-ul este protejat cu Guardian 2FA.";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Cheie greșită. Wallet-ul este protejat.";
        result.style.color = "red";
    }
}
