export default function Step({
  step,
  onSub,
  onAdd,
}: {
  step: number;
  onSub?: (step: number) => void;
  onAdd?: (step: number) => void;
}) {
  return (
    <div>
      {onSub && (
        <button type="button" onClick={() => onSub(-1)}>
          sub
        </button>
      )}

      <div>{step}</div>
      {onAdd && (
        <button type="button" onClick={() => onAdd(1)}>
          add
        </button>
      )}
    </div>
  );
}
