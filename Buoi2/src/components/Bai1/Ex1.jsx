import { useState } from "react";

const Ex1 = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Donald Trump",
    },
  });

  const handleClick = () => {
    setGame({
      id: 1,
      player: {
        name: "Joe Biden",
      },
    });
  };


  return (
    <div>
      <h2>Player: {game.player.name}</h2>
      <button onClick={handleClick}>Đổi tên</button>
    </div>
  );
};

export default Ex1;