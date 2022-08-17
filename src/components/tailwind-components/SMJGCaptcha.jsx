import SMGBeltCheckboxes from './SMGBeltCheckboxes';

/*!
UNFINISHED
Create a new BNBCaptcha that has ten circle, square, and triangle elements and you have to click, in an order, the @cancelled(22-08-12 23:02)
  correct three. Only the human can see that they've been scrolled to the chosen items. Then click one of ten "I'm not @cancelled(22-08-12 23:02)
  a robot" checkboxes. This should be a 1:10,000 chance of getting it right randomly. @cancelled(22-08-12 23:02)
  Then release it to the community for feedback (scary) + write about it on my blog. @cancelled(22-08-12 23:02)
*/

const SMJGCaptcha = (props) => {
  const numberOfElements = 10;

  const wrapperClasses = 'overflow-x-scroll';

  return (
    <div>
      <SMGBeltCheckboxes name="circle" tickedElem="✅" untickedElem="🔲"></SMGBeltCheckboxes>
      <SMGBeltCheckboxes name="triangle" tickedElem="✅" untickedElem="🔲"></SMGBeltCheckboxes>
      <SMGBeltCheckboxes name="square" tickedElem="✅" untickedElem="🔲"></SMGBeltCheckboxes>
    </div>
  );
};

export default SMJGCaptcha;
