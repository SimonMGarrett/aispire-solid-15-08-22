import { createSignal, onMount } from 'solid-js';
import { useNavigate } from '@solidjs/router';

const SMJGHero = (props) => {
  let heroRef;
  const [clickPath, setClickPath] = createSignal(function() {
    true;
  });

  const navigate = useNavigate();
  const navToPath = (path) => {
    navigate(path);
  };

  onMount(() => {
    // Set the background image
    if (props.data.bgImage && props.data.bgImage !== '') {
      const urlObj = window.globalData.urlFor(props.data.bgImage.asset._ref);
      heroRef.style.backgroundImage = `url('${urlObj.url(props.data.bgImage)}`;
    }
    // Set the background color
    if (props.data.bgColor && props.data.bgColor !== '') {
      heroRef.style.backgroundColor = `${props.data.bgColor}`;
    }
  });

  return (
    <div ref={heroRef} class="flex flex-col content-center justify-center w-full p-16 my-8 rounded-sm">
      <div class="title mx-auto text-5xl font-black text-white text-center drop-shadow-lg mb-8">{props.data.title}</div>
      <div class="lead-para mx-auto text-2xl text-gray-100 text-center drop-shadow-lg my-8">{props.data.leadPara}</div>
      <Show when={props.data.ctaButtonText && props.data.ctaButtonText !== '' && props.data.ctaNavigationPath !== ''}>
        <button class="btn-smg btn-gray-500 drop-shadow-lg" onClick={() => navToPath(props.data.ctaNavigationPath)}>
          {props.data.ctaButtonText}
        </button>
      </Show>
    </div>
  );
};

export default SMJGHero;
