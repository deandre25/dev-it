import React, { useState } from 'react';
import './App.css';

function App() {
  const [concurrency, setConcurrency] = useState('');
  const [started, setStarted] = useState(false);
  const [responses, setResponses] = useState([]);

  const startRequests = async () => {
    if (!concurrency || isNaN(concurrency) || concurrency < 1 || concurrency > 100) {
      alert('Please enter a valid concurrency limit (between 1 and 100)');
      return;
    }

    setStarted(true);
    const requestsPerSecond = concurrency;
    const delayBetweenRequests = 1000 / requestsPerSecond;
    const totalRequests = 1000;

    for (let i = 1; i <= totalRequests; i++) {
      await sendRequest(i);
      await new Promise(resolve => setTimeout(resolve, delayBetweenRequests));
    }

    setStarted(false);
  };

  const sendRequest = async (index) => {
    try {
      const response = await fetch(`/api?index=${index}`);
      if (!response.ok) {
        throw new Error('Server Error: ' + response.status);
      }
      const responseData = await response.text();
      setResponses(prevResponses => [...prevResponses, responseData]);
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <div className="App">
      <h1>Client-Server Data Fetch</h1>
      <label htmlFor="concurrency">Concurrency Limit:</label>
      <input
        id="concurrency"
        type="number"
        min="1"
        max="100"
        value={concurrency}
        onChange={(e) => setConcurrency(e.target.value)}
        disabled={started}
      />
      <button onClick={startRequests} disabled={started}>Start</button>
      <ul>
        {responses.map((response, index) => (
          <li key={index}>{response}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
