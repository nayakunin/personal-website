type HeaderProps = {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  tg: string;
  linkedin: string;
};

export const Header = ({
  email,
  linkedin,
  location,
  name,
  phone,
  tg,
  title,
}: HeaderProps) => (
  <header className="flex flex-row justify-between">
    <div>
      <h1 className="text-3xl font-bold">{name}</h1>
      <h2 className="text-xl">{title}</h2>
    </div>
    <div className="xl:text-right">
      <p>
        <a className="underline" href={`tel:${phone}`}>
          {phone}
        </a>
      </p>
      <p>
        <a className="underline" href={`mailto:${email}`}>
          {email}
        </a>
      </p>
      <p>{location}</p>
      <p>
        <a className="underline" href={`https://t.me/${tg}`}>
          Telegram
        </a>
      </p>
      <p>
        <a className="underline" href={linkedin}>
          LinkedIn
        </a>
      </p>
    </div>
  </header>
);
