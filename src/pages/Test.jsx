import SMJGCodeBlock from '../components/sanity-components/SMJGCodeBlock';

// Some test code for SMJGCodeBlock
const code = `
import Highlight from 'solid-highlight';
import 'highlight.js/styles/base16/oceanicnext.css';

const SMJGCodeBlock = (props) => {
  return (
    <div class="mb-4">
      <div class="overflow-x-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
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

export default SMJGCodeBlock;`;

const Test = () => {
  // JUST FOR TESTING: it shouldn't ever be linked in to the rest of the site

  return (
    <div class="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto p-8">
      TEST PAGE
      <SMJGCodeBlock data={{ code: code, filename: 'file.js', codeType: 'js' }}></SMJGCodeBlock>
    </div>
  );
};

export default Test;
