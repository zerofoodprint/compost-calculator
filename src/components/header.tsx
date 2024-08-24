interface HeaderProps {
  children?: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

export function Header({ children, title, subtitle }: HeaderProps) {
  return (
    <div className="flex flex-col items-start gap-3">
      <h2 className="block text-xl font-medium">{title}</h2>
      <p className="max-w-[65ch] font-normal">{subtitle}</p>
      {children}
    </div>
  );
}
