export default function Languages({ lang }: { lang: string[] }) {
  return (
    <ul>
      {lang.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
