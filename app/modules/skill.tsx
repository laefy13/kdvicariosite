import Title from './title';

interface SkillProps {
  title: string;
  percentage: number;
  color: string;
}

export default function Skill({ title, percentage, color }: SkillProps) {
  const colorArray = ['red', 'indigo', 'green', 'purple'];
  let percentageClassName;

  if (colorArray.includes(color)) {
    percentageClassName = `h-2.5 rounded-full bg-${color}-600 dark:bg-${color}-500`;
  } else {
    percentageClassName = `h-2.5 rounded-full bg-${color}-600`;
  }
  return (
    <div>
      <Title title={`${title}`} size={2} mb={1} color="white" />
      <div
        className={`mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700`}
      >
        <div
          className={percentageClassName}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
