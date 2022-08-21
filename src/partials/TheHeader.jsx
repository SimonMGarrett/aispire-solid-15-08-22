import { NavLink } from '@solidjs/router';

const AppHeader = () => {
  // --HTML --

  return (
    <header class="header-wrapper shadow-sm bg-white border-b border-stone-200 pb-4">
      <div class="logo mt-4 subpixel-antialiased cursor-pointer text-left md:text-center text-[44px] md:text-[56px] font-thin tracking-[12px] pl-8 md:pl-0 pt-8 pb-4 text-gray-700">
        <NavLink href="/?" class="text-inherit flex justify-start md:justify-center hover:bg-transparent border-none">
          <img class="h-12 lg:h-16" src="/images/logo-large.png" alt="Aispire Logo" />
        </NavLink>
      </div>

      <div class="strapline hidden lg:visible lg:block text-gray-500 text-center text-lg tracking-[4px] uppercase font-light subpixel-antialiased mb-4">
        Artificial Intelligence &nbsp;.&nbsp; Machine Learning &nbsp;.&nbsp; Data Science
      </div>

      <nav class="navbar block md:flex justify-center md:justify-center px-4 w-full lg:w-4/5 mx-auto">
        {/* -- LINKS -- */}
        <div class="inline-block uppercase text-sm font-light tracking-[1px] lg:flex px-0 md:px-2 mx-0 lg:mx-2 mb-4 md:mb-0">
          <div class="flex ">
            <NavLink class="header-link" href="/" end={true}>
              Home
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
  );
};

export default AppHeader;
