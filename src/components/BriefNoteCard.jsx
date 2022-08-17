import { createMemo } from 'solid-js';
import { urlFor } from '../local-functions/imageManagement';

const BriefNoteCard = (props) => {
  const imgUrl = createMemo(() => {
    if (props && props.post && 'mainImg' in props.post) {
      return urlFor(props.post.mainImg).url();
    }
    return '';
  });

  return (
    <article
      class="post-detail flex justify-between bg-white w-[150px] p-4 rounded shadow cursor-pointer mb-4"
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
        <Show when={props.post.mainImg}>
          <div
            class="
              block
            "
          >
            <img src={imgUrl() + '?w=150'} alt={props.post.title} />
          </div>
        </Show>

        {/* Heading */}
        <div class="headline text-gray-800 font-bold mt-3 mb-1 text-sm leading-[1.225]" itemprop="name headline">
          {props.post.title}
        </div>
      </div>
    </article>
  );
};

export default BriefNoteCard;
