const consoles = ["PC", "PS5", "XBOX", "NINTENDO", "ATARI"];

export default function Home() {
  return (
    <ul>
      {consoles.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
