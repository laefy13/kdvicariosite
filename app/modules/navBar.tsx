import '/public/css/global.css';
import Title from './title';
import { useState } from 'react';
import NavLink from './navLink';
export default function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const setMobileMenuFalse = () => {
    setMobileMenuOpen(false);
  };
  return (
    <nav
      className={`absolute left-0 right-0 top-0 z-50 bg-yellow-500   ${
        isMobileMenuOpen ? '' : ''
      }`}
      style={{ backgroundColor: '#F0A500' }}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-10">
        <Title
          title="KARLOS"
          size={2}
          mb={0}
          color="white"
          additional="text-center"
        />
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-black dark:focus:ring-white"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMobileMenuOpen ? '' : 'hidden'
          }`}
          id="navbar-default"
        >
          <ul
            className="mt-4 flex flex-col rounded-lg border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-yellow-500"
            style={{ backgroundColor: '#F0A500' }}
          >
            <li>
              <NavLink
                falseFunc={setMobileMenuFalse}
                endRef="#workexperience"
                title="Work Experience"
              />
            </li>
            <li>
              <NavLink
                falseFunc={setMobileMenuFalse}
                endRef="#certifications"
                title="Certifications"
              />
            </li>
            <li>
              <NavLink
                falseFunc={setMobileMenuFalse}
                endRef="#projects"
                title="School Works"
              />
            </li>
            <li>
              <NavLink
                falseFunc={setMobileMenuFalse}
                endRef="#education"
                title="Education"
              />
            </li>
            <li>
              <NavLink
                falseFunc={setMobileMenuFalse}
                endRef="#skills"
                title="Skills"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
