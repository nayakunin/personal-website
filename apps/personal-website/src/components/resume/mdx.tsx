import Showdown from 'showdown';

import styles from './mdx.module.css';

export type MdxProps = {
  children: string;
};

const mdxConverter = new Showdown.Converter();

export const Mdx = ({ children }: MdxProps) => {
  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: mdxConverter.makeHtml(children) }}
    />
  );
};
