import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const artigos = await getCollection('artigos');
  return rss({
    title: 'thenzolima',
    description: 'Textos por Enzo Lima',
    site: context.site,
    items: artigos.map((postagem) => ({
      title: postagem.data.titulo,
      pubDate: postagem.data.dataPub,
      description: postagem.data.descricao,
      link: `/artigos/${postagem.slug}/`,
    })),
  });
}