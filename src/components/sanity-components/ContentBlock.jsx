import blocksToHtml from '@sanity/block-content-to-html';

// `h` is a way to build HTML known as hyperscript
// See https://github.com/hyperhype/hyperscript for more info
const h = blocksToHtml.h;

// TODO - May need this at some point?
// const serializers = {
//   types: {
//     code: props => (
//       h('pre', {className: props.node.language},
//         h('code', props.node.code)
//       )
//     )
//   }
// }
//
// const el = blocksToHtml({
//   blocks: article.body,
//   serializers: serializers
// })

const ContentBlock = (props) => {
  const classes = props.data.classes;
  // This is all we currently do...
  return <div class={classes} innerHTML={blocksToHtml({ blocks: props.data.contentBlock })}></div>;
};

export default ContentBlock;
