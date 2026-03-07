import { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/")
      .then((res) => res.json())
      .then((data) => {
        const list = data.messages.personalized;
        const rand = Math.round(Math.random() * list.length);
        setQuote(list[rand]);
      });
  }, []);

  return (
    <div>
      <h2>Ramdom Quote</h2>
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
