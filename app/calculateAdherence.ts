interface Adherence {
  [key: string]: string[];
}

interface AdherenceInfo {
  date: number;
  value: number;
}

interface Result {
  [key: string]: AdherenceInfo[];
}

export default function calculateAdherence(adherence: Adherence): Result {
  const result: Result = {};
  for (let key in adherence) {
    let daysTaken = 0;
    result[key] = adherence[key].map((value, index) => {
      if (value === 'taken') {
        daysTaken++;
      }
      return {
        date: index,
        value: daysTaken / (index + 1),
      };
    });
  }

  return result;
}

// execute function to create a cleaned data version in a new json
// depending on the site
// fs
