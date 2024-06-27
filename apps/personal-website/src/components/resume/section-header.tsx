export type SectionHeaderProps = {
  title: string;
  subtitle: string;
  location: string;
  dateFrom: string;
  dateTo?: string;
};

export const SectionHeader = ({
  title,
  subtitle,
  location,
  dateFrom,
  dateTo = 'Present',
}: SectionHeaderProps) => (
  <header className="mb-2 flex justify-between">
    <div>
      <h3>
        <strong>{title}</strong>
      </h3>
      <h4>{subtitle}</h4>
    </div>
    <div className="text-end">
      <p>{location}</p>
      <p>
        {dateFrom} - {dateTo}
      </p>
    </div>
  </header>
);
