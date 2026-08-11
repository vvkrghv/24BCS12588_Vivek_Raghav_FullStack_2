import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const [rates, setRates] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState(0);

  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch(
          `https://open.er-api.com/v6/latest/${from}` 
        );
        const data = await res.json();

        setRates(data.rates);
        setCurrencies(Object.keys(data.rates));
      } catch (err) {
        console.log(err);
      }
    }

    fetchRates();
  }, [from]);

  useEffect(() => {
    if (rates[to]) {
      setResult((amount * rates[to]).toFixed(2));
    }
  }, [amount, to, rates]);

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>Currency Converter</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
      />

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={{ flex: 1, padding: "10px" }}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{ flex: 1, padding: "10px" }}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <h3>
        {amount} {from} = {result} {to}
      </h3>
    </div>
  );
}

export default App;