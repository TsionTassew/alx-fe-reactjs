import ChiefCard from "./ChiefCard";

export default function ChiefSection() {
  const chief = [
    {
      name: "Fasika Shirkabu",
      img: "img/top-chief/img_1.jpg",
      cuisine: "Thank you, Mom, for your endless love, strength, and belief in me."
    },
    {
      name: "Biruk Tassew",
      img: "img/top-chief/img_2.jpg",
      cuisine: "Heartfelt thanks to my older brother for guiding me through every struggle and helping bring this website to life."
    },
    {
      name: "Tinsae Tassew",
      img: "img/top-chief/img_3.jpg",
      cuisine: "Grateful to my little brother for cheering me on and keeping me motivated through it all."
    },
    {
      name: "Abnet Tassew",
      img: "img/top-chief/img_4.jpg",
      cuisine: "Special thanks to my big brother for always being there and appreciating me through every step."
    },
  ];

  return (
    <div className="section chief">
      <h1 className="title">Special Thanks</h1>
      <div className="top-chief-container">
        {chief.map(ch => <ChiefCard key={ch.name} chief={ch} />)}
      </div>
    </div>
  );
}
