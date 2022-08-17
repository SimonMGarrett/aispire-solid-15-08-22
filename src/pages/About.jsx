import { createResource, createMemo } from 'solid-js';
import ContentBlock from '../components/sanity-components/ContentBlock';
import { fetchPageHere } from '../local-functions/getPage';
import { urlFor } from '../local-functions/imageManagement';

const About = () => {
  // This PAGE
  const [page] = createResource('about', fetchPageHere);

  const imgUrl = createMemo(() => {
    if (page && page() && 'mainImg' in page()) {
      return urlFor(page().mainImg).url();
    }
    return '';
  });

  return (
    <div class="wrapper block lg:flex space-between py-8 w-full lg:w-3/5 mx-auto">
      <Show when={typeof page() !== 'undefined'}>
        <div class="mr-8 w-1/2 lg:w-2/5 xl:w-1/5 mb-12">
          <img
            class="image w-full aspect-auto"
            src={imgUrl() + '?w=250&h=293'}
            alt="Simon MJ Garrett"
            width="218"
            height="258"
          />
        </div>

        <div class="text ml-8 w-10/12 lg:w-3/5 xl:w-4/5 text-gray-500 dark:text-gray-500">
          <h1 class="mb-8">{page().title}</h1>

          <ContentBlock data={page().pageContentRows[0]} />
        </div>
      </Show>
    </div>
  );
};

export default About;
