import btcImg1 from "../assets/image/btc1.jpg";
import btcImg2 from "../assets/image/btc2.jpg";
import btcImg3 from "../assets/image/btc3.jpg";
import btcImg4 from "../assets/image/btc4.jpg";

const cards = [
  {
    title: "Bitcoin 1",
    description:
      "Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a blockchain.",
    image: btcImg1,
    id: 1,
  },
  {
    title: "Bitcoin 2",
    description:
      "Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a blockchain.",
    image: btcImg2,
    id: 2,
  },
  {
    title: "Bitcoin 3",
    description:
      "Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a blockchain.",
    image: btcImg3,
    id: 3,
  },
  {
    title: "Bitcoin 4",
    description:
      "Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a blockchain.",
    image: btcImg4,
    id: 4,
  },
];

const Content = () => {
  return (
    <main className="main-wrapper">
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card-box">
            <span>
              <img src={card.image} alt="crypto" />
            </span>
            <h1>{card.title}</h1>
            <h4>{card.description}</h4>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Content;
