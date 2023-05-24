import Chart from './chart';
import adherence1 from './adherence1.json';
import adherence3 from './adherence3.json';
import adherence4 from './adherence4.json';
import adherence5 from './adherence5.json';
import calculateAdherence from './calculateAdherence';

let site1 = calculateAdherence(adherence1);
let site2 = calculateAdherence(adherence3);
let site3 = calculateAdherence(adherence4);
let site4 = calculateAdherence(adherence5);
const allSites = { ...site1, ...site2, ...site3, ...site4 };

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-12 p-4">
      <div className="col-span-2 h-60 font-mono">
        <h1 className="text-3xl text-center ">Trend of Daily Reports</h1>
        <Chart data={allSites} color="text-purple-400" />
        <main className="mt-4 flex flex-wrap gap-8 justify-center">
          <div>
            <h2 className="text-2xl mt-4">What is going on here?</h2>
            <p className="mt-2 max-w-prose font-serif">
              This is data from a TB treatment adherence app that I work on.
              Every line represents a patient. The x-axis is time (180 days),
              and the y-axis is adherence. I thought that I would see a downward
              trend in adherence over time, but instead I got a piece of art. To
              me, this shows that each patient has their own unique journey, and
              that we can not make assumptions about who will be successfully
              adherent and who will not. I have listened to interviews with
              certain patients, and it is very moving to hear what motivates
              them to continue taking their medication. This graph makes me
              wonder if certain patients found inspiration halfway through their
              treatment and decided to push through the difficulties.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mt-4">Technical Process</h2>
            <p className="mt-2 max-w-prose font-serif">
              I used D3, vanilla SVG, and react server components to create the
              chart. My team has a graph that currently renders this information
              (in a different way) on our internal dashboard, but it takes ~3.5
              seconds to load all of this data on every load/refresh. Since all
              of the lines are computed and rendered on the server, there is no
              JavaScript needed to be sent to the browser in order to render
              this info and a reload costs nothing. I also wanted to build
              something that is responsive to different screen widths so test
              that as well if you would like.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mt-4">Next steps</h2>
            <p className="mt-2 max-w-prose font-serif">
              My teammates say that the graph is a bit confusing to read. But
              art is subjective. I would like to add clear markers for each
              axis, but I do not really know what else. Many graphs that I have
              seen like this have a hover component, but I want to keep this a
              pure server side component.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
