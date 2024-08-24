interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <article className="flex flex-col items-start gap-12">{children}</article>
  );
}
