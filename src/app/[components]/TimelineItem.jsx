export default function TimelineItem({ role, period, location, points }) {
  return (
    <div className="relative pl-5 mb-8">
      <div className="absolute mt-3 left-0 w-3 h-3 bg-myblue rounded-full"></div>
      <h2 className="text-2xl font-semibold text-textcolor">{role}</h2>
      <p className="text-sm text-textcolor">{period}</p>
      <p className="text-sm text-myblue">{location}</p>
      <ul className="list-disc pl-5 space-y-2 mt-3">
        {points.map((point, index) => (
          <li
            key={index}
            className="text-sm md:text-base font-semibold md:font-normal text-textcolor"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
