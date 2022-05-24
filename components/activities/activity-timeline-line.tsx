export default function ActivityTimelineLine({
  isStart,
}: {
  isStart: boolean
}) {
  const startLine = (
    <svg
      width="16"
      height="42"
      viewBox="0 0 16 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="8" y1="16" x2="8" y2="26" stroke="#BBBBBB" stroke-width="2" />
      <circle cx="8" cy="8" r="7" stroke="#A7A7A7" stroke-width="2" />
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
        y1="-3.53854e-08"
        x2="1"
        y2="42"
        stroke="#BBBBBB"
        stroke-width="2"
      />
    </svg>
  )

  return (
    <span className="mr-3 flex w-5 justify-center">
      {isStart ? startLine : runningLine}
    </span>
  )
}
