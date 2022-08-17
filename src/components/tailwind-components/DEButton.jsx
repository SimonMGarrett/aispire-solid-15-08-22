/**
 * Usage:
 *
 * @param outline - if present, will make the button an outline; if not, will be solid.
 * @param size - base | sm | xs
 * @param bgColor - the background color, e.g. 'bg-gray-500'
 * @param borderColor - the border color, e.g. 'border-gray-500'
 * @param content - the content in the button (like slot content)
 * @param clickAction - the action to initiate onClick
 * @returns
 */

const DEButton = (props) => {
  const baseClasses = 'rounded cursor-pointer border-2 transition active:opacity-90 active:scale-95 ';
  const solid = `text-white ${props.bgColor} ${props.borderColor} `;
  const outline = `text-gray-800 bg-transparent ${props.borderColor} `;
  const normalSize = 'px-3 py-2 ';
  const smallSize = 'px-2 py-1 ';
  const tinySize = 'px-1 py-0 ';

  const classes =
    baseClasses +
    (props.outline === true ? outline : solid) +
    (props.size === 'xs' ? tinySize : props.size === 'sm' ? smallSize : normalSize) +
    props.extraClasses;

  return <button class={classes} onClick={props.clickAction || null} innerHTML={props.content}></button>;
};

export default DEButton;
