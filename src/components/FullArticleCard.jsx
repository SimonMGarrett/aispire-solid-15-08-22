import Tags from '/src/components/Tags';
import { createMemo } from 'solid-js';
import { urlFor } from '../local-functions/imageManagement';

const FullArticleCard = (props) => {
  const imgUrl = createMemo(() => {
    if (props.post && props.post && 'mainImg' in props.post) {
      return urlFor(props.post.mainImg).url();
    }
    return '';
  });

  return (
    <article
      class="post-detail flex justify-between bg-white w-[300px] p-4 rounded shadow cursor-pointer"
      itemscope
      itemtype="https://schema.org/BlogPosting"
      onMouseDown={(event) => {
        const elem = event.target.closest('.post-detail');
        elem.classList.add('scale-95');
      }}
      onMouseUp={(event) => {
        const elem = event.target.closest('.post-detail');
        elem.classList.remove('scale-95');
      }}
    >
      <div class="post-body">
        <div
          class="
            block
          "
        >
          <img src={imgUrl() + '?w=300'} alt={props.post.title} />
        </div>

        <Tags tags={props.post.tags} />

        {/* Heading */}
        <div class="headline font-black text-gray-900 text-2xl mt-4 mb-1" itemprop="name headline">
          {props.post.title}
        </div>

        {/* Lead */}
        <div class="subtitle text-gray-600 text-lg mb-4">{props.post.subtitle}</div>
      </div>
    </article>
  );
};

export default FullArticleCard;
