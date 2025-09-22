import { ConditionCard } from "./ConditionCard";

export function CurrentConditions() {
  return (
    <div>
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <ConditionCard key={index} />
        ))}
    </div>
  );
}
