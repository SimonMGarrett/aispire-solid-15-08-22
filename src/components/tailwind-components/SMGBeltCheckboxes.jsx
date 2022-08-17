// SMG as in submachine gun belt. And my initials. Ha-har.

/*!
UNFINISHED
Create a new BNBCaptcha that has ten circle, square, and triangle elements and you have to click, in an order, the @cancelled(22-08-12 23:02)
  correct three. Only the human can see that they've been scrolled to the chosen items. Then click one of ten "I'm not @cancelled(22-08-12 23:02)
  a robot" checkboxes. This should be a 1:10,000 chance of getting it right randomly. @cancelled(22-08-12 23:02)
  Then release it to the community for feedback (scary) + write about it on my blog. @cancelled(22-08-12 23:02)
*/

const SMGBeltCheckboxes = (props) => {
  // some props unpacked here
  const name = props.name;
  const tickedElem = props.tickedElem;
  const untickedElem = props.untickedElem;

  // TODO - show only the chosen box through the wrapper making it easy for the user, and hard for the bot.
  // TODO - when a box is ticked, return (via a set<OBJECT> function) which numbered box was ticked.

  return (
    <div className="checkboxes-wrapper">
      <div className="checkboxes flex justify-start">
        <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} fallback={<div>Loading...</div>}>
          {(item) => (
            <div>
              <label for={`cb-${item}`} class="hidden">
                Checkbox
              </label>
              <input id={`cb-${item}`} class={`checkbox-${name}`} type="checkbox" name={`${name}-${item}`}></input>
            </div>
          )}
        </For>
      </div>

      {/* Tells the user what the item is, if they're a little slow */}
      <label className={`${name}-label`}>Circle</label>
    </div>
  );
};

export default SMGBeltCheckboxes;
