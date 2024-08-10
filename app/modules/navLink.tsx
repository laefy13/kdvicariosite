interface NavLinkProps {
  falseFunc: () => void;
  title: string;
  endRef: string;
  target?: string;
}
export default function NavLink({
  falseFunc,
  endRef,
  title,
  target,
}: NavLinkProps) {
  return (
    <a
      onClick={falseFunc}
      href={endRef}
      target={target}
      className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-black dark:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-black"
    >
      {title}
    </a>
  );
}
