export default function ActivityTimelineLine({
  isStart,
}: {
  isStart: boolean
}) {
  const strokeColor = '#BBBBBB'
  const strokeWidth = 2

  const startLine = (
    <svg
      width="16"
      height="42"
      viewBox="0 0 16 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="8"
        y1="16"
        x2="8"
        y2="36"
        stroke={strokeColor}
        stroke-width={strokeWidth}
      />
      <circle
        cx="8"
        cy="8"
        r="7"
        stroke={strokeColor}
        stroke-width={strokeWidth}
      />
    </svg>
  )

  const runningLine = (
    <svg
      width="2"
      height="42"
      viewBox="0 0 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="42"
        stroke={strokeColor}
        stroke-width={strokeWidth}
      />
    </svg>
  )

  return (
    <span className="mr-3 flex w-5 justify-center">
      {isStart ? startLine : runningLine}
    </span>
  )
}
