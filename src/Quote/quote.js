import React, { useState, useEffect } from 'react';
import './quote-style.css';

export default function QuoteComponent() {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const category = 'experience';
      const apiKey = 'ymCbBE03nErvlKzbVx1/bQ==cOiHM9eT0XjlnLNn';

      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              'X-Api-Key': apiKey,
            },
          },
        );
        const data = await response.json();
        setQuote(data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data</p>;
  }

  return (
    <div className="quote">
      <h2>{quote.quote}</h2>
      <p>{quote.author}</p>
    </div>
  );
}
