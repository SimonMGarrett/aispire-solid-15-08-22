import { urlFor } from '../../local-functions/imageManagement';

const SMJGImage = (props) => {
  return (
    <div class="my-8">
      <img src={urlFor(props.data.image.asset._ref).url()} alt={props.data.figureCaption} />
      <p class="italic font-serif text-sm text-left py-2">{props.data.figureCaption}</p>
    </div>
  );
};

export default SMJGImage;
