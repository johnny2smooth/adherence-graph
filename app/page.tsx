import Chart from './chart';
import test from './test.json';

export const revalidate = 10;
export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-12 p-4">
      <div className="col-span-2 h-60">
        <Chart data={test} />
      </div>
    </div>
  );
}
