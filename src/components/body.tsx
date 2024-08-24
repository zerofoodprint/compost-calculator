interface ContainerProps {
  children: React.ReactNode;
}

export function Body({ children }: ContainerProps) {
  return (
    <section className="flex flex-col items-start gap-8">{children}</section>
  );
}
