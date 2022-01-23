import { fetchMdxFromDisk, processMdx } from '@toastdotdev/mdx';
import numberedFootnotes from 'remark-numbered-footnotes';
import identifyFootnoteContainers from 'rehype-identity-footnote-containers';

export const sourceData = async ({ setDataForSlug }) => {
  const files = await fetchMdxFromDisk({ directory: './content' });

  const allPostMeta = await Promise.all(
    files.map(async ({ filename, file: content }) => {
      const { content: compiledMdx, data } = await processMdx(content, {
        filepath: filename,
        remarkPlugins: [numberedFootnotes],
        rehypePlugins: [
          identifyFootnoteContainers,
        ],
      });

      await setDataForSlug(`/${data.exports.meta.slug}`, {
        component: {
          mode: 'source',
          value: compiledMdx,
        },
        data: { ...data.exports.meta, type: 'post' },
      });

      return {
        ...data.exports.meta,
        type: 'post',
      };
    }),
  );

  const posts = allPostMeta.sort((a, b) => {
    const da = new Date(a.date).getTime();
    const db = new Date(b.date).getTime();

    return db - da;
  });

  await setDataForSlug('/', {
    data: { posts },
  });

  return;
};