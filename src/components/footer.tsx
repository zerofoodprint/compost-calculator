interface FooterProps {
  children: React.ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className="flex flex-col items-start gap-8">
      <div className="flex gap-3">{children}</div>
    </footer>
  );
}
