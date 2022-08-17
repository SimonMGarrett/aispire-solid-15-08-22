import ContentBlock from './ContentBlock';

const SMJGTextPlusImage = (props) => {
  // Convert props._ref to url using sanity
  const urlObj = window.globalData.urlFor(props.data.image.asset._ref);
  const textClasses = 'text-xl text-gray-700 p-8';

  return (
    <div class="flex">
      <Show when={props.data.imageOnRight === false}>
        <div class={textClasses}>
          <ContentBlock data={props.data.text} />
        </div>
      </Show>

      <div class="my-8">
        <img src={urlObj.url()} alt={props.data.title} />
        <p class="italic font-serif text-sm text-left py-2">{props.data.figureCaption}</p>
      </div>

      <Show when={props.data.imageOnRight === true}>
        <div class={textClasses}>
          <ContentBlock data={props.data.text} />{' '}
        </div>
      </Show>
    </div>
  );
};

export default SMJGTextPlusImage;
