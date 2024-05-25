import { format } from 'date-fns';

export type SectionHeaderProps = {
  title: string;
  subtitle: string;
  location: string;
  dateFrom: Date;
  dateTo?: Date;
};

export const SectionHeader = ({
  title,
  subtitle,
  location,
  dateFrom,
  dateTo,
}: SectionHeaderProps) => {
  const dateTemplate = 'MMMM yyyy';

  const dateFromFormatted = format(dateFrom, dateTemplate);
  const dateToFormatted = dateTo ? format(dateTo, dateTemplate) : 'Present';

  return (
    <header className="flex justify-between">
      <div>
        <h3>
          <strong>{title}</strong>
        </h3>
        <h4>{subtitle}</h4>
      </div>
      <div>
        <p>{location}</p>
        <p>
          {dateFromFormatted} - {dateToFormatted}
        </p>
      </div>
    </header>
  );
};
