import Showdown from 'showdown';

export type MdxProps = {
  children: string;
};

const mdxConverter = new Showdown.Converter();

export const Mdx = ({ children }: MdxProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: mdxConverter.makeHtml(children) }}
    />
  );
};
