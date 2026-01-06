interface AlertMessageProps {
  type: "error" | "success";
  message: string;
}

export function AlertMessage({ type, message }: AlertMessageProps) {
  const className =
    type === "error"
      ? "bg-destructive/10 text-destructive border border-destructive/30"
      : "bg-primary/10 text-primary border border-primary/30";

  return (
    <div className={`${className} rounded-lg px-4 py-3 text-sm shadow-sm`}>
      {message}
    </div>
  );
}
