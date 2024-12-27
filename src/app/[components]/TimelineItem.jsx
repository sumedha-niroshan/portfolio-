export default function TimelineItem({ role, period, location, points }) {
    return (
      <div className="relative pl-8 mb-8">
        <div className="absolute mt-3 left-0 w-4 h-4 bg-blue-500 rounded-full"></div>
        <h2 className="text-2xl font-semibold">{role}</h2>
        <p className="text-sm text-gray-400">{period}</p>
        <p className="text-sm text-gray-400 mb-4">{location}</p>
        <ul className="list-disc pl-5 space-y-2">
          {points.map((point, index) => (
            <li key={index} className="text-gray-300">
              {point}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  