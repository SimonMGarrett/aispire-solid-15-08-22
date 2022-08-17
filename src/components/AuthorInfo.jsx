const AuthorInfo = (props) => {
  return (
    <div class="authored flex justify-start">
      <div class="avatar opacity-80 relative top-[2px]">
        <div class="w-10 h-10 rounded-full">
          {/* NOTE: this is the only image that comes directly from the site rather than Sanity.io */}
          <img src="/images/Po-mini.jpeg" alt="Author image" width="40" height="40" />
        </div>
      </div>

      <div class="author pl-4 text-xs text-gray-600">
        <div class="author-text font-bold">Simon MJ Garrett</div>
        <div class="created">Created: {new Date(props.post._createdAt).toLocaleString()}</div>
        <Show when={props.showUpdated && props.post._updatedAt && props.post._updatedAt !== props.post._createdAt}>
          <div className="updated opacity-30">Updated: {new Date(props.post._updatedAt).toLocaleString()}</div>
        </Show>
      </div>
    </div>
  );
};

export default AuthorInfo;
