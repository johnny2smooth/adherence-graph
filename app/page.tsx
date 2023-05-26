import Chart from "./chart";
import samo from "./samo-daily.json";
import adherence1 from "./adherence1.json";
import adherence3 from "./adherence3.json";
import adherence4 from "./adherence4.json";
import adherence5 from "./adherence5.json";
import calculateAdherence from "./calcDailyAdherence";

let site1 = calculateAdherence(adherence1);
let site2 = calculateAdherence(adherence3);
let site3 = calculateAdherence(adherence4);
let site4 = calculateAdherence(adherence5);
const allSites = { ...site1, ...site2, ...site3, ...site4 };

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-12 p-4">
      <div className="col-span-2 h-60">
        <Chart data={samo} color="text-purple-400" />
        {/* <Chart data={vaccarrezza} color="text-red-400" />
        <Chart data={peron} color="text-green-400" />
        <Chart data={cetrangolo} color="text-yellow-400" />
        <Chart data={paroissien} color="text-blue-400" /> */}
      </div>
    </div>
  );
}
