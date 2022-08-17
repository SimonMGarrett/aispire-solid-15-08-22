import Highlight from 'solid-highlight';
import 'highlight.js/styles/base16/oceanicnext.css';

const SMJGCodeBlock = (props) => {
  return (
    <div class="mb-4">
      <div class="overflow-x-auto">
        <Show when={props.data.filename}>
          <div class="text-right text-white text-xs bg-gray-600 opacity-70 px-2 py-0.5">{props.data.filename}</div>
        </Show>

        <Highlight autoDetect={false} language={props.data.codeType}>
          {props.data.code}
        </Highlight>
      </div>
    </div>
  );
};

export default SMJGCodeBlock;
