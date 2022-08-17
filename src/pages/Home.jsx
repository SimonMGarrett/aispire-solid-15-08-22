import { createSignal, createMemo, createResource } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import PCircle from '../components/pulsing-circles/PCircle';
import PLine from '../components/pulsing-circles/PLine';
import DEButton from '../components/tailwind-components/DEButton';
import { fetchPageHere } from '../local-functions/getPage';
import { urlFor } from '../local-functions/imageManagement';
import ContentBlock from '/src/components/sanity-components/ContentBlock';

const Home = () => {
  // comment
  const circles = [];
  for (let i = 0; i < 70; i++) {
    circles.push(<PCircle />);
  }

  const [gOfX, setGOfX] = createSignal([47.3]);

  setInterval(() => {
    setGOfX(Math.random() * 1000 - 500);
  }, 500);

  const navigate = useNavigate();

  const [page] = createResource('home', fetchPageHere);

  const imgUrl = createMemo(() => {
    clog('PAGE HOME', [page()]);
    if (page && page() && 'mainImg' in page()) {
      return urlFor(page().mainImg).url();
    }
    return '';
  });

  return (
    <div class="">
      <div className="hero mt-10">
        <div class="flex w-full bg-gradient-to-t from-stone-300 to-stone-100 h-[50vh] text-white">
          <div className="relative circles w-1/2 text-center h-full overflow-hidden ml-8">
            <div className="svm-equation opacity-90 text-left pl-4 pt-4 absolute top-0 left-0 font-serif text-gray-600">
              <p class="mb-0 pb-0">
                &nabla;<span class="italic">f(p)</span> = &nabla;<span class="italic">&lambda;g(p)</span>
              </p>
              <p>
                <span class="italic">g(x) = </span>
                {gOfX()}
              </p>
            </div>
            {circles}
            <PLine orientation="x-axis" range={0.5} offset={0} />
            <PLine orientation="x-axis" range={0.5} offset={0.5} />
            <PLine orientation="y-axis" range={0.5} offset={0} />
            <PLine orientation="y-axis" range={0.5} offset={0.5} />
          </div>

          <div className="rhs w-1/2 text-slate-800 pl-8 pr-4 md:pl-16 md:pr-16 lg:px-32 self-center content-center">
            <h1 className="heading mb-4">What Do We Do?</h1>

            {/* List of things we do */}
            <Show when={page && page()}>
              <ContentBlock data={page().pageContentRows[0]}></ContentBlock>
            </Show>
          </div>
        </div>
      </div>

      <div class="bg-stone-300 pt-4 border-b-2 border-black">&nbsp;</div>

      <div class="bg-[url('/images/data-blurred.png')] text-white text-left py-16 lg:py-48 px-12 lg:px-32 mb-16">
        <h2 className=" text-white mb-16 text-4xl">We focus on business needs + increasing profit.</h2>

        <div className="flex">
          <div class="text-gray-100 text-2xl w-full lg:w-1/2">
            {/* Further text */}
            <Show when={page && page()}>
              <ContentBlock data={page().pageContentRows[1]}></ContentBlock>
            </Show>

            <DEButton
              content="Contact us"
              bgColor="bg-blue-500"
              borderColor="border-blue-500"
              extraClasses="text-center mt-12"
              clickAction={() => navigate('/contact')}
            />
          </div>

          <div className="w-1/2 self-end content-end text-left pl-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
