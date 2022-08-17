import { createSignal, createEffect } from 'solid-js';

const Tags = (props) => {
  const [tags, setTags] = createSignal([]);
  const searchForTag = (event, tagText) => {
    event.preventDefault();
  };

  createEffect(() => {
    if ('tags' in props) {
      setTags(props.tags);
    }
  });

  return (
    <div class="supertags w-full flex flex-wrap pt-2">
      <For each={tags()}>
        {(tag, indx) => (
          <div class="">
            <div
              class="badge bg-gray-400 text-white border-none mr-2 text-xs cursor-pointer transform scale-90"
              onClick={() => searchForTag(indx())}
            >
              {tag.tagText}
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default Tags;
