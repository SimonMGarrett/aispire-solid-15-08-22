import { createResource } from 'solid-js';
import ContentBlock from '../components/sanity-components/ContentBlock';
import Plausible from 'plausible-tracker';
import { fetchPageHere } from '../local-functions/getPage';

const Contact = () => {
  const sanity = window.globalData.sanity;
  const { trackEvent } = Plausible();

  // This PAGE
  const [page] = createResource('contact', fetchPageHere);
  return (
    <div class="block lg:flex">
      <div className="map-wrapper w-full lg:w-1/2 mt-10 px-4 lg:px-12 lg:mr-0">
        <iframe
          class="w-full border-none"
          height="650"
          seamless="true"
          scrolling="no"
          frameborder="0"
          draggable="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-5.081176757812501%2C51.184508061068165%2C-0.8624267578125001%2C52.889020448995225&amp;layer=mapnik"
          style="border: none"
        ></iframe>
      </div>

      <Show when={typeof page() !== 'undefined'}>
        <div class="w-full mr-4 lg:w-1/2">
          <div className="p-8 lg:pl-0">
            <h1 class="mb-8">{page().title}</h1>

            <ContentBlock data={page().pageContentRows[0]} />

            <div class="pt-4 pb-8 mt-0">
              <form
                class="rounded shadow p-8 bg-white"
                action="https://submit-form.com/lG8M7vob"
                method="POST"
                data-botpoison-public-key="pk_4dfdb517-1035-42b6-bbbd-af3d42bc0784"
              >
                <div className="form-control mb-4">
                  <label for="name" class="label">
                    <span class="label-text text-gray-700 font-semibold">Name</span>
                  </label>
                  <input
                    class="input dark:bg-white dark:border-gray-300 text-gray-600 w-full max-w-xs"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required="true"
                  />
                </div>

                <div className="form-control mb-4">
                  <label for="email" class="label">
                    <span class="label-text text-gray-700 font-semibold">Email (so I can reply to you)</span>
                  </label>
                  <input
                    class="input dark:bg-white dark:border-gray-300 text-gray-600 w-full max-w-xs"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required="true"
                  />
                </div>

                <div className="form-control mb-4">
                  <label for="message" class="label">
                    <span class="label-text text-gray-700 font-semibold">Message</span>
                  </label>
                  <textarea
                    class="input dark:bg-white dark:border-gray-300 text-gray-600 w-full max-w-xs h-32"
                    id="message"
                    name="message"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>

                <button class="btn-smg btn-blue-500" type="submit" onClick={trackEvent('contact')}>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Contact;
