type DataItem = { date: number; value: number };
type WeeklyDataItem = { week: number; value: number };

function calcAdherenceWithInterval(
  data: Record<string, DataItem[]>,
  interval: number = 7
): Record<string, WeeklyDataItem[]> {
  const output: Record<string, WeeklyDataItem[]> = {};

  for (const key in data) {
    const weeklyData: WeeklyDataItem[] = [];
    const dailyData = data[key];
    let week = 0;
    let weeklySum = 0;
    let daysInWeek = 0;

    dailyData.forEach((item) => {
      // Calculate the current week
      const currentWeek = Math.floor(item.date / interval);

      if (currentWeek > week) {
        // Save average of previous week
        weeklyData.push({ week, value: weeklySum / daysInWeek });
        // Reset counters for new week
        week = currentWeek;
        weeklySum = item.value;
        daysInWeek = 1;
      } else {
        weeklySum += item.value;
        daysInWeek++;
      }
    });

    // Push the average for the last week
    if (daysInWeek > 0) {
      weeklyData.push({ week, value: weeklySum / daysInWeek });
    }

    output[key] = weeklyData;
  }

  return output;
}
