interface TitleProps {
  title: string;
  size: number;
  mb?: number;
  color?: string;
  additional?: string;
  id?: string;
}
function hTitle({ title, mb, size, color, additional, id }: TitleProps) {
  return (
    <h1
      className={`mb-${mb} text-${size}xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-${color}  sm:text-${
        size - 1
      }xl md:text-${size}xl  lg:text-${size}xl ${additional}`}
      id={id}
    >
      {title}
    </h1>
  );
}
export default function Title({
  title,
  size,
  mb,
  additional,
  color,
  id,
}: TitleProps) {
  const additionalClass = additional ? ` ${additional}` : '';
  const titleArray = title.split('<>');
  return (
    <div className={additionalClass}>
      {titleArray.map((singleTitle, index) => (
        <span key={index}>
          {hTitle({
            title: singleTitle,
            mb,
            size,
            color,
            additional: additionalClass,
            id,
          })}
        </span>
      ))}
    </div>
  );
}
