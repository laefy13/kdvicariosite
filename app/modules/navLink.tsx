
interface NavLinkProps {
  falseFunc: () => void;
  title: string;
  endRef: string;
}
export default function NavLink({ falseFunc, endRef, title }: NavLinkProps) {
  return (
    <a
      onClick={falseFunc}
      href={endRef}
      className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-black dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-black md:dark:hover:bg-transparent md:dark:hover:text-black"
    >
      {title}
    </a>
  );
}
