import { mdiFacebook, mdiLinkedin, mdiGithub } from '@mdi/js';
import BNBIcon from '../components/BNBIcon';

const AppFooter = (props) => {
  const icons = {
    mdiFacebook,
    mdiLinkedin,
    mdiGithub,
  };

  const year = new Date().getFullYear();

  return (
    <footer
      class="
        block
        text-gray-700
        font-light
        w-full
        tracking-widest
        subpixel-antialiased
      "
    >
      <div class="block text-center w-full mt-8 mb-0">
        <span class="m-0 px-3 py-0 inline-block">
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/simon-garrett-768b0010/"
            class="footer-social-icon "
            title="linked-in"
          >
            <BNBIcon pathInfo={icons.mdiLinkedin} h="24" w="24" display="inline-block" />
          </a>
        </span>

        <span class="m-0 px-3 py-0 inline-block">
          <a
            rel="noopener"
            target="_blank"
            href="https://www.facebook.com/simonmgarrett/"
            class="footer-social-icon "
            title="facebook"
          >
            <BNBIcon pathInfo={icons.mdiFacebook} h="24" w="24" display="inline-block" />
          </a>
        </span>

        <span class="m-0 px-3 py-0 inline-block">
          <a
            rel="noopener"
            target="_blank"
            href="https://github.com/SimonMGarrett"
            class="footer-social-icon"
            title="github"
          >
            <BNBIcon pathInfo={icons.mdiGithub} h="24" w="24" display="inline-block" />
          </a>
        </span>
      </div>

      <div class="text-center text-gray-600 text-sm w-full lg:w-3/5 px-8 mx-auto pb-16 mb-0 py-8 opacity-70 uppercase">
        <p>
          &copy;{year} &nbsp;|&nbsp; Aispire Consulting &nbsp;|&nbsp; a&nbsp;
          <a class="external-link file:inline-block  border-b border-gray-200" href="https://bertramandbean.com">
            BERTRAM+BEAN
          </a>
          &nbsp;adventure
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
