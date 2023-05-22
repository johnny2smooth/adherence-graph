import Chart from './chart';
import test from './test.json';
import adherence1 from './adherence1.json';
import adherence3 from './adherence3.json';
import adherence4 from './adherence4.json';
import adherence5 from './adherence5.json';
import calculateAdherence from './calculateAdherence';

let vaccarrezza = calculateAdherence(adherence1);
let peron = calculateAdherence(adherence3);
let cetrangolo = calculateAdherence(adherence4);
let paroissien = calculateAdherence(adherence5);

export const revalidate = 0;

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-12 p-4">
      <div className="col-span-2 h-60">
        <Chart data={vaccarrezza} color="text-red-400" />
        <Chart data={peron} color="text-green-400" />
        <Chart data={cetrangolo} color="text-yellow-400" />
        <Chart data={paroissien} color="text-blue-400" />
      </div>
    </div>
  );
}
