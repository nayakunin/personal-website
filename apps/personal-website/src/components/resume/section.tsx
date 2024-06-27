export type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: SectionProps) => (
  <section>
    <h3 className="text-center text-lg underline">{title}</h3>
    {children}
  </section>
);
