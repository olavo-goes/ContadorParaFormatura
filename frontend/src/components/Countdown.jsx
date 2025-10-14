import React, { useEffect, useState } from "react";

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div style={styles.container}>
      <h2>Contagem regressiva para a formatura</h2>
      <div style={styles.timer}>
        <div><span>{timeLeft.days}</span><p>Dias</p></div>
        <div><span>{timeLeft.hours}</span><p>Horas</p></div>
        <div><span>{timeLeft.minutes}</span><p>Minutos</p></div>
        <div><span>{timeLeft.seconds}</span><p>Segundos</p></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "sans-serif",
  },
  timer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "10px",
  },
};

export default Countdown;
