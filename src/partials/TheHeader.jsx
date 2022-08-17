import BNBIcon from '../components/BNBIcon.jsx';
import { mdiFacebook, mdiLinkedin, mdiGithub } from '@mdi/js';
import { createSignal, createEffect } from 'solid-js';
import { NavLink, useNavigate } from '@solidjs/router';
import { getTags } from '/src/local-functions/getTags';

const AppHeader = (props) => {
  const icons = {
    mdiFacebook,
    mdiLinkedin,
    mdiGithub,
  };

  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = createSignal(false);
  const [tags, setTags] = createSignal([]);

  const doSearch = (event) => {
    event.preventDefault();
    const searchTerms = event.target.querySelector('input').value;
    props.setSearchStr(searchTerms);
    navigate('/');
  };

  createEffect(async () => {
    const tagsResults = await getTags();

    clog('tagsResults', [tagsResults]);
    setTags(tagsResults);
  });

  // --HTML --

  return (
    <div class="header-wrapper shadow-sm bg-white pb-2 border-b border-slate-200">
      <header class="tramlined">
        <div class="logo mt-4 subpixel-antialiased cursor-pointer text-left md:text-center text-[44px] md:text-[56px] font-thin tracking-[12px] pl-8 md:pl-0 pt-8 pb-4 text-gray-700">
          <NavLink href="/?" class="text-inherit flex justify-center">
            <img src="/images/logo-large.png" alt="Aispire Logo" />
          </NavLink>
        </div>

        <div class="strapline hidden lg:visible lg:block text-gray-500 text-center text-xl tracking-[4px] uppercase font-light subpixel-antialiased mb-12">
          Artificial Intelligence &nbsp;.&nbsp; Machine Learning &nbsp;.&nbsp; Data Science
        </div>

        <nav class="navbar block md:flex justify-center md:justify-center px-4 w-full lg:w-4/5 mx-auto">
          {/* -- LINKS -- */}
          <div class="inline-block uppercase text-sm font-light tracking-[1px] lg:flex px-0 md:px-2 mx-0 lg:mx-2 mb-4 md:mb-0">
            <div class="flex ">
              <NavLink class="header-link" href="/about">
                What we do
              </NavLink>

              <NavLink class="header-link" href="/about">
                About
              </NavLink>

              <NavLink class="header-link" href="/contact">
                Contact
              </NavLink>
            </div>
          </div>
        </nav>
      </header>

      {/* TAGS MODAL */}
      <div id="tags-modal" class={modalOpen() ? 'modal modal-open' : 'modal'}>
        <div class="modal-box">
          <h3 class="font-bold text-lg text-white">Choose a tag to search by</h3>
          <p class="py-4 text-gray-200">
            <Show when={tags().length > 0} fallback={<div>-- No tags found --</div>}>
              <For each={tags()}>
                {(tag) => {
                  return (
                    <div
                      class="inline-block my-1 mr-2 px-2 py-1 rounded-lg bg-gray-200 text-black cursor-pointer"
                      onClick={() => {
                        const tt = tag.tagText;
                        const form = document.querySelector('#jsSearchForm');
                        document.querySelector('[name=searchTerms]').value = tt;
                        const fakeEvent = {
                          preventDefault: () => true,
                          target: form,
                        };
                        doSearch(fakeEvent);
                      }}
                    >
                      {tag.tagText}
                    </div>
                  );
                }}
              </For>
            </Show>
          </p>

          <div
            class="modal-action"
            role="button"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <label for="my-modal" class="btn-smg btn-blue-500">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
