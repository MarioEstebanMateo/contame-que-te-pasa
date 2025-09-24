// Test simple de la API
const testData = {
  problem: "No puedo levantarme temprano por las mañanas",
};

fetch("http://localhost:3002/api/solve-problem", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(testData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("✅ API Response:", data);
  })
  .catch((error) => {
    console.error("❌ API Error:", error);
  });

console.log("🧪 Enviando test a la API...");
