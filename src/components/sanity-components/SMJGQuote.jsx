const SMJGQuote = (props) => {
  return (
    <div class="text-gray-600 bg-gray-200 px-16 py-8 my-8">
      <Show when={props.data.quote}>
        <div class="text-left text-5xl ">&ldquo;</div>
        <div class="text-right text-4xl  ">{props.data.quote}</div>
        <Show when={props.data.attribution}>
          <div class="text-right opacity-80 pt-4">{props.data.attribution}</div>
        </Show>
      </Show>
    </div>
  );
};

export default SMJGQuote;
