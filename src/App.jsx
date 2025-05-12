import React from "react";
import { useState, useEffect } from "react";
import './style.css'; // Add this line

export default function App() {
  const [rektCount, setRektCount] = useState(2345);

  useEffect(() => {
    const interval = setInterval(() => {
      setRektCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ color: 'red', fontSize: '3rem' }}>$MRYA – Meme Rekt You Again</h1>
      <p style={{ marginTop: 10 }}>
        The coin of the people rekt by the people. Powered by memes, revenge, and $MRYA.
      </p>
      <div style={{ marginTop: 20, fontSize: '1.2rem', color: '#38bdf8' }}>
        Traders already rekt: {rektCount.toLocaleString()}
      </div>
      <div style={{ marginTop: 30 }}>
        <button style={{
          background: 'red',
          color: 'white',
          padding: '10px 20px',
          fontSize: '1.2rem',
          borderRadius: '12px',
          marginRight: '1rem'
        }}>
          Buy $MRYA
        </button>
        <button style={{
          border: '2px solid #38bdf8',
          background: 'transparent',
          color: '#38bdf8',
          padding: '10px 20px',
          fontSize: '1.2rem',
          borderRadius: '12px'
        }}>
          Join Telegram
        </button>
      </div>
    </div>
  );
}
