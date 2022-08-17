import { createSignal } from 'solid-js';

const PLine = (props) => {
  // asdfasd
  const baseClasses =
    'absolute bg-stone-200 border border-dashed border-pink-700 opacity-50 transition-all ease-in-out ';
  const verticalBaseClasses = 'w-0 p-px h-full scale-[0.99] ';
  const horizontalBaseClasses = 'h-0 p-px w-full scale-[0.99]';
  const transitionDuration = 500;

  const [position, setPosition] = createSignal('50%');

  setInterval(() => {
    setPosition(parseInt((Math.random() * props.range + props.offset) * 100) + '%');
  }, 510);

  if (props.orientation === 'x-axis') {
    return (
      <div
        class={baseClasses + verticalBaseClasses}
        style={{ left: position(), 'transition-duration': `${transitionDuration}ms` }}
      />
    );
  }

  return (
    <div
      class={baseClasses + horizontalBaseClasses}
      style={{ top: position(), 'transition-duration': `${transitionDuration}ms` }}
    />
  );
};

export default PLine;
