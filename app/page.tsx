import Chart from './chart';
import test from './test.json';
import adherence5 from './adherence5.json';
import calculateAdherence from './calculateAdherence';

let result = calculateAdherence(adherence5);
for (let [key, value] of Object.entries(result)) {
  console.log(value);
}

export const revalidate = 0;

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-12 p-4">
      <div className="col-span-2 h-60">
        <Chart data={test} />
      </div>
    </div>
  );
}
