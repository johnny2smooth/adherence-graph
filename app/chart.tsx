import * as d3 from 'd3';
import { extent } from 'd3-array';
import { format } from 'date-fns';
import { CSSProperties } from 'react';

export default function Chart({
  data,
  color = 'text-blue-600',
}: {
  data: { [key: string]: { value: number; date: number }[] };
  color?: string;
}) {
  let allData = Object.values(data).flat();

  let xExtent = d3.extent(allData, (d) => d.date);
  let yExtent = d3.extent(allData, (d) => d.value);

  let xScale = d3
    .scaleTime()
    .domain(xExtent as [number, number])
    .range([0, 100]);
  let yScale = d3
    .scaleLinear()
    .domain(yExtent as [number, number])
    .range([100, 0]);

  let line = d3
    .line<{ value: number; date: number }>()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.value));

  // for each
  let lines = Object.keys(data)
    .map((key) => ({ key, d: line(data[key]) }))
    .filter((line) => line.d !== null);

  if (!lines.length) {
    return null;
  }

  return (
    <div
      className="@container relative h-[800px] w-full"
      style={
        {
          '--marginTop': '6px',
          '--marginRight': '8px',
          '--marginBottom': '25px',
          '--marginLeft': '25px',
        } as CSSProperties
      }
    >
      {/* X axis */}
      <svg
        className="absolute inset-0
          h-[calc(100%-var(--marginTop))]
          w-[calc(100%-var(--marginLeft)-var(--marginRight))]
          translate-x-[var(--marginLeft)]
          translate-y-[var(--marginTop)]
          overflow-visible
        "
      >
        {Object.values(data)[0].map((day, i) => (
          <g key={i} className="overflow-visible font-medium text-gray-500">
            <text
              x={`${xScale(day.date)}%`}
              y="100%"
              // textAnchor={
              //   i === 0 ? 'start' : i === data.length - 1 ? 'end' : 'middle'
              // }
              fill="currentColor"
              className="@sm:inline hidden text-sm"
            >
              {day.date}
            </text>
            <text
              x={`${xScale(day.date)}%`}
              y="100%"
              // textAnchor={
              //   i === 0 ? 'start' : i === data.length - 1 ? 'end' : 'middle'
              // }
              fill="currentColor"
              className="@sm:hidden text-xs"
            >
              {i % 10 === 0 && day.date}
            </text>
          </g>
        ))}
      </svg>

      {/* Y axis */}
      <svg
        className="absolute inset-0
          h-[calc(100%-var(--marginTop)-var(--marginBottom))]
          translate-y-[var(--marginTop)]
          overflow-visible
        "
      >
        <g className="translate-x-4">
          {yScale
            .ticks(8)
            .map(yScale.tickFormat(8, 'd'))
            .map((value, i) => (
              <text
                key={i}
                y={`${yScale(+value)}%`}
                alignmentBaseline="middle"
                textAnchor="end"
                className="text-xs tabular-nums text-gray-600"
                fill="currentColor"
              >
                {value}
              </text>
            ))}
        </g>
      </svg>

      {/* Chart area */}
      <svg
        className="absolute inset-0
          h-[calc(100%-var(--marginTop)-var(--marginBottom))]
          w-[calc(100%-var(--marginLeft)-var(--marginRight))]
          translate-x-[var(--marginLeft)]
          translate-y-[var(--marginTop)]
          overflow-visible
        "
      >
        <svg
          viewBox="0 0 100 100"
          className="overflow-visible"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          {yScale
            .ticks(8)
            .map(yScale.tickFormat(8, 'd'))
            .map((active, i) => (
              <g
                transform={`translate(0,${yScale(+active)})`}
                className="text-gray-700"
                key={i}
              >
                <line
                  x1={0}
                  x2={100}
                  stroke="currentColor"
                  strokeDasharray="6,5"
                  strokeWidth={0.5}
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            ))}

          {/* Line */}
          {lines.map((line, i) => (
            <path
              key={i}
              d={line.d || undefined}
              fill="none"
              className={`${color}`}
              stroke="currentColor"
              strokeWidth=".3"
              opacity=".5"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {/* Circles */}
          {/* {data.map((d) => (
            <path
              key={d.date.toString()}
              d={`M ${xScale(d.date)} ${yScale(d.value)} l 0.0001 0`}
              vectorEffect="non-scaling-stroke"
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
              stroke="currentColor"
              className="text-gray-400"
            />
          ))} */}
        </svg>
      </svg>
    </div>
  );
}
