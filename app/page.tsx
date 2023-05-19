import Chart from "./chart";

const test = [
  {
    date: 1,
    value: 1,
  },
  {
    date: 2,
    value: 0.5,
  },
  {
    date: 3,
    value: 0.6666666666666666,
  },
  {
    date: 4,
    value: 0.5,
  },
  {
    date: 5,
    value: 0.4,
  },
  {
    date: 6,
    value: 0.5,
  },
  {
    date: 7,
    value: 0.5714285714285714,
  },
  {
    date: 8,
    value: 0.5,
  },
  {
    date: 9,
    value: 0.5555555555555556,
  },
  {
    date: 10,
    value: 0.5,
  },
  {
    date: 11,
    value: 0.45454545454545453,
  },
  {
    date: 12,
    value: 0.4166666666666667,
  },
  {
    date: 13,
    value: 0.46153846153846156,
  },
  {
    date: 14,
    value: 0.42857142857142855,
  },
  {
    date: 15,
    value: 0.4666666666666667,
  },
  {
    date: 16,
    value: 0.5,
  },
  {
    date: 17,
    value: 0.5294117647058824,
  },
  {
    date: 18,
    value: 0.5555555555555556,
  },
  {
    date: 19,
    value: 0.5263157894736842,
  },
  {
    date: 20,
    value: 0.55,
  },
  {
    date: 21,
    value: 0.5714285714285714,
  },
  {
    date: 22,
    value: 0.5909090909090909,
  },
  {
    date: 23,
    value: 0.6086956521739131,
  },
  {
    date: 24,
    value: 0.625,
  },
  {
    date: 25,
    value: 0.64,
  },
  {
    date: 26,
    value: 0.6538461538461539,
  },
  {
    date: 27,
    value: 0.6666666666666666,
  },
  {
    date: 28,
    value: 0.6785714285714286,
  },
  {
    date: 29,
    value: 0.6896551724137931,
  },
  {
    date: 30,
    value: 0.7,
  },
  {
    date: 31,
    value: 0.7096774193548387,
  },
  {
    date: 32,
    value: 0.71875,
  },
  {
    date: 33,
    value: 0.696969696969697,
  },
  {
    date: 34,
    value: 0.7058823529411765,
  },
  {
    date: 35,
    value: 0.7142857142857143,
  },
  {
    date: 36,
    value: 0.7222222222222222,
  },
  {
    date: 37,
    value: 0.7297297297297297,
  },
  {
    date: 38,
    value: 0.7105263157894737,
  },
  {
    date: 39,
    value: 0.717948717948718,
  },
  {
    date: 40,
    value: 0.725,
  },
  {
    date: 41,
    value: 0.7317073170731707,
  },
  {
    date: 42,
    value: 0.7380952380952381,
  },
  {
    date: 43,
    value: 0.7209302325581395,
  },
  {
    date: 44,
    value: 0.7272727272727273,
  },
  {
    date: 45,
    value: 0.7333333333333333,
  },
  {
    date: 46,
    value: 0.7391304347826086,
  },
  {
    date: 47,
    value: 0.7446808510638298,
  },
  {
    date: 48,
    value: 0.7291666666666666,
  },
  {
    date: 49,
    value: 0.7346938775510204,
  },
  {
    date: 50,
    value: 0.74,
  },
  {
    date: 51,
    value: 0.7450980392156863,
  },
  {
    date: 52,
    value: 0.75,
  },
  {
    date: 53,
    value: 0.7547169811320755,
  },
  {
    date: 54,
    value: 0.7592592592592593,
  },
  {
    date: 55,
    value: 0.7636363636363637,
  },
  {
    date: 56,
    value: 0.7678571428571429,
  },
  {
    date: 57,
    value: 0.7719298245614035,
  },
  {
    date: 58,
    value: 0.7758620689655172,
  },
  {
    date: 59,
    value: 0.7796610169491526,
  },
  {
    date: 60,
    value: 0.7833333333333333,
  },
  {
    date: 61,
    value: 0.7868852459016393,
  },
  {
    date: 62,
    value: 0.7903225806451613,
  },
  {
    date: 63,
    value: 0.7936507936507936,
  },
  {
    date: 64,
    value: 0.796875,
  },
  {
    date: 65,
    value: 0.8,
  },
  {
    date: 66,
    value: 0.803030303030303,
  },
  {
    date: 67,
    value: 0.8059701492537313,
  },
  {
    date: 68,
    value: 0.8088235294117647,
  },
  {
    date: 69,
    value: 0.8115942028985508,
  },
  {
    date: 70,
    value: 0.8142857142857143,
  },
  {
    date: 71,
    value: 0.8169014084507042,
  },
  {
    date: 72,
    value: 0.8194444444444444,
  },
  {
    date: 73,
    value: 0.8082191780821918,
  },
  {
    date: 74,
    value: 0.8108108108108109,
  },
  {
    date: 75,
    value: 0.8,
  },
  {
    date: 76,
    value: 0.8026315789473685,
  },
  {
    date: 77,
    value: 0.8051948051948052,
  },
  {
    date: 78,
    value: 0.7948717948717948,
  },
  {
    date: 79,
    value: 0.7974683544303798,
  },
  {
    date: 80,
    value: 0.8,
  },
  {
    date: 81,
    value: 0.8024691358024691,
  },
  {
    date: 82,
    value: 0.8048780487804879,
  },
  {
    date: 83,
    value: 0.8072289156626506,
  },
  {
    date: 84,
    value: 0.8095238095238095,
  },
  {
    date: 85,
    value: 0.8117647058823529,
  },
  {
    date: 86,
    value: 0.813953488372093,
  },
  {
    date: 87,
    value: 0.8160919540229885,
  },
  {
    date: 88,
    value: 0.8181818181818182,
  },
  {
    date: 89,
    value: 0.8202247191011236,
  },
  {
    date: 90,
    value: 0.8222222222222222,
  },
  {
    date: 91,
    value: 0.8241758241758241,
  },
  {
    date: 92,
    value: 0.8260869565217391,
  },
  {
    date: 93,
    value: 0.8279569892473119,
  },
  {
    date: 94,
    value: 0.8297872340425532,
  },
  {
    date: 95,
    value: 0.8315789473684211,
  },
  {
    date: 96,
    value: 0.8333333333333334,
  },
  {
    date: 97,
    value: 0.8350515463917526,
  },
  {
    date: 98,
    value: 0.8367346938775511,
  },
  {
    date: 99,
    value: 0.8383838383838383,
  },
  {
    date: 100,
    value: 0.84,
  },
  {
    date: 101,
    value: 0.8316831683168316,
  },
  {
    date: 102,
    value: 0.8235294117647058,
  },
  {
    date: 103,
    value: 0.8252427184466019,
  },
  {
    date: 104,
    value: 0.8269230769230769,
  },
  {
    date: 105,
    value: 0.8285714285714286,
  },
  {
    date: 106,
    value: 0.8301886792452831,
  },
  {
    date: 107,
    value: 0.8317757009345794,
  },
  {
    date: 108,
    value: 0.8333333333333334,
  },
  {
    date: 109,
    value: 0.8348623853211009,
  },
  {
    date: 110,
    value: 0.8272727272727273,
  },
  {
    date: 111,
    value: 0.8198198198198198,
  },
  {
    date: 112,
    value: 0.8125,
  },
  {
    date: 113,
    value: 0.8053097345132744,
  },
  {
    date: 114,
    value: 0.7982456140350878,
  },
  {
    date: 115,
    value: 0.7913043478260869,
  },
  {
    date: 116,
    value: 0.7844827586206896,
  },
  {
    date: 117,
    value: 0.7777777777777778,
  },
  {
    date: 118,
    value: 0.7711864406779662,
  },
  {
    date: 119,
    value: 0.7647058823529411,
  },
  {
    date: 120,
    value: 0.7583333333333333,
  },
  {
    date: 121,
    value: 0.7520661157024794,
  },
  {
    date: 122,
    value: 0.7459016393442623,
  },
  {
    date: 123,
    value: 0.7398373983739838,
  },
  {
    date: 124,
    value: 0.7338709677419355,
  },
  {
    date: 125,
    value: 0.728,
  },
  {
    date: 126,
    value: 0.7222222222222222,
  },
  {
    date: 127,
    value: 0.7165354330708661,
  },
  {
    date: 128,
    value: 0.7109375,
  },
  {
    date: 129,
    value: 0.7054263565891473,
  },
  {
    date: 130,
    value: 0.7,
  },
  {
    date: 131,
    value: 0.6946564885496184,
  },
  {
    date: 132,
    value: 0.6893939393939394,
  },
  {
    date: 133,
    value: 0.6842105263157895,
  },
  {
    date: 134,
    value: 0.6791044776119403,
  },
  {
    date: 135,
    value: 0.674074074074074,
  },
  {
    date: 136,
    value: 0.6691176470588235,
  },
  {
    date: 137,
    value: 0.6642335766423357,
  },
  {
    date: 138,
    value: 0.6594202898550725,
  },
  {
    date: 139,
    value: 0.6546762589928058,
  },
  {
    date: 140,
    value: 0.65,
  },
  {
    date: 141,
    value: 0.6453900709219859,
  },
  {
    date: 142,
    value: 0.6408450704225352,
  },
  {
    date: 143,
    value: 0.6363636363636364,
  },
  {
    date: 144,
    value: 0.6319444444444444,
  },
  {
    date: 145,
    value: 0.6275862068965518,
  },
  {
    date: 146,
    value: 0.6232876712328768,
  },
  {
    date: 147,
    value: 0.6190476190476191,
  },
  {
    date: 148,
    value: 0.6148648648648649,
  },
  {
    date: 149,
    value: 0.610738255033557,
  },
  {
    date: 150,
    value: 0.6066666666666667,
  },
  {
    date: 151,
    value: 0.6026490066225165,
  },
  {
    date: 152,
    value: 0.5986842105263158,
  },
  {
    date: 153,
    value: 0.5947712418300654,
  },
  {
    date: 154,
    value: 0.5909090909090909,
  },
  {
    date: 155,
    value: 0.5870967741935483,
  },
  {
    date: 156,
    value: 0.5833333333333334,
  },
  {
    date: 157,
    value: 0.5796178343949044,
  },
  {
    date: 158,
    value: 0.5759493670886076,
  },
  {
    date: 159,
    value: 0.5723270440251572,
  },
  {
    date: 160,
    value: 0.56875,
  },
  {
    date: 161,
    value: 0.5652173913043478,
  },
  {
    date: 162,
    value: 0.5617283950617284,
  },
  {
    date: 163,
    value: 0.558282208588957,
  },
  {
    date: 164,
    value: 0.5548780487804879,
  },
  {
    date: 165,
    value: 0.5515151515151515,
  },
  {
    date: 166,
    value: 0.5481927710843374,
  },
  {
    date: 167,
    value: 0.5449101796407185,
  },
  {
    date: 168,
    value: 0.5416666666666666,
  },
  {
    date: 169,
    value: 0.5384615384615384,
  },
  {
    date: 170,
    value: 0.5352941176470588,
  },
  {
    date: 171,
    value: 0.5321637426900585,
  },
  {
    date: 172,
    value: 0.5290697674418605,
  },
  {
    date: 173,
    value: 0.5260115606936416,
  },
  {
    date: 174,
    value: 0.5229885057471264,
  },
  {
    date: 175,
    value: 0.52,
  },
  {
    date: 176,
    value: 0.5170454545454546,
  },
  {
    date: 177,
    value: 0.5141242937853108,
  },
  {
    date: 178,
    value: 0.5112359550561798,
  },
  {
    date: 179,
    value: 0.5083798882681564,
  },
  {
    date: 180,
    value: 0.5055555555555555,
  },
  {
    date: 181,
    value: 0.5027624309392266,
  },
];

export const revalidate = 10;
export default function Home() {
  let sales = [
    { date: "2023-04-30T12:00:00.00+00:00", value: 200 },
    { date: "2023-05-01T12:00:00.00+00:00", value: 6 },
    { date: "2023-05-02T12:00:00.00+00:00", value: 8 },
    { date: "2023-05-03T12:00:00.00+00:00", value: 7 },
    { date: "2023-05-04T12:00:00.00+00:00", value: 10 },
    { date: "2023-05-05T12:00:00.00+00:00", value: 12 },
    { date: "2023-05-06T12:00:00.00+00:00", value: 4 },
  ];
  // let data = sales.map((d) => ({ ...d, date: new Date(d.date) }));

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-12 p-4">
      <div className="col-span-2 h-60">
        <Chart data={test} />
      </div>
    </div>
  );
}

// const testAdherence = [
//   {
//     date: 1,
//     value: 1,
//   },
//   {
//     date: 2,
//     value: 0.5,
//   },
//   {
//     daysInTreatment: 3,
//     currentAdherence: 0.6666666666666666,
//   },
//   {
//     daysInTreatment: 4,
//     currentAdherence: 0.5,
//   },
//   {
//     daysInTreatment: 5,
//     currentAdherence: 0.4,
//   },
//   {
//     daysInTreatment: 6,
//     currentAdherence: 0.5,
//   },
//   {
//     daysInTreatment: 7,
//     currentAdherence: 0.5714285714285714,
//   },
//   {
//     daysInTreatment: 8,
//     currentAdherence: 0.5,
//   },
//   {
//     daysInTreatment: 9,
//     currentAdherence: 0.5555555555555556,
//   },
//   {
//     daysInTreatment: 10,
//     currentAdherence: 0.5,
//   },
//   {
//     daysInTreatment: 11,
//     currentAdherence: 0.45454545454545453,
//   },
//   {
//     daysInTreatment: 12,
//     currentAdherence: 0.4166666666666667,
//   },
//   {
//     daysInTreatment: 13,
//     currentAdherence: 0.46153846153846156,
//   },
//   {
//     daysInTreatment: 14,
//     currentAdherence: 0.42857142857142855,
//   },
//   {
//     daysInTreatment: 15,
//     currentAdherence: 0.4666666666666667,
//   },
//   {
//     daysInTreatment: 16,
//     currentAdherence: 0.5,
//   },
//   {
//     daysInTreatment: 17,
//     currentAdherence: 0.5294117647058824,
//   },
//   {
//     daysInTreatment: 18,
//     currentAdherence: 0.5555555555555556,
//   },
//   {
//     daysInTreatment: 19,
//     currentAdherence: 0.5263157894736842,
//   },
//   {
//     daysInTreatment: 20,
//     currentAdherence: 0.55,
//   },
//   {
//     daysInTreatment: 21,
//     currentAdherence: 0.5714285714285714,
//   },
//   {
//     daysInTreatment: 22,
//     currentAdherence: 0.5909090909090909,
//   },
//   {
//     daysInTreatment: 23,
//     currentAdherence: 0.6086956521739131,
//   },
//   {
//     daysInTreatment: 24,
//     currentAdherence: 0.625,
//   },
//   {
//     daysInTreatment: 25,
//     currentAdherence: 0.64,
//   },
//   {
//     daysInTreatment: 26,
//     currentAdherence: 0.6538461538461539,
//   },
//   {
//     daysInTreatment: 27,
//     currentAdherence: 0.6666666666666666,
//   },
//   {
//     daysInTreatment: 28,
//     currentAdherence: 0.6785714285714286,
//   },
//   {
//     daysInTreatment: 29,
//     currentAdherence: 0.6896551724137931,
//   },
//   {
//     daysInTreatment: 30,
//     currentAdherence: 0.7,
//   },
//   {
//     daysInTreatment: 31,
//     currentAdherence: 0.7096774193548387,
//   },
//   {
//     daysInTreatment: 32,
//     currentAdherence: 0.71875,
//   },
//   {
//     daysInTreatment: 33,
//     currentAdherence: 0.696969696969697,
//   },
//   {
//     daysInTreatment: 34,
//     currentAdherence: 0.7058823529411765,
//   },
//   {
//     daysInTreatment: 35,
//     currentAdherence: 0.7142857142857143,
//   },
//   {
//     daysInTreatment: 36,
//     currentAdherence: 0.7222222222222222,
//   },
//   {
//     daysInTreatment: 37,
//     currentAdherence: 0.7297297297297297,
//   },
//   {
//     daysInTreatment: 38,
//     currentAdherence: 0.7105263157894737,
//   },
//   {
//     daysInTreatment: 39,
//     currentAdherence: 0.717948717948718,
//   },
//   {
//     daysInTreatment: 40,
//     currentAdherence: 0.725,
//   },
//   {
//     daysInTreatment: 41,
//     currentAdherence: 0.7317073170731707,
//   },
//   {
//     daysInTreatment: 42,
//     currentAdherence: 0.7380952380952381,
//   },
//   {
//     daysInTreatment: 43,
//     currentAdherence: 0.7209302325581395,
//   },
//   {
//     daysInTreatment: 44,
//     currentAdherence: 0.7272727272727273,
//   },
//   {
//     daysInTreatment: 45,
//     currentAdherence: 0.7333333333333333,
//   },
//   {
//     daysInTreatment: 46,
//     currentAdherence: 0.7391304347826086,
//   },
//   {
//     daysInTreatment: 47,
//     currentAdherence: 0.7446808510638298,
//   },
//   {
//     daysInTreatment: 48,
//     currentAdherence: 0.7291666666666666,
//   },
//   {
//     daysInTreatment: 49,
//     currentAdherence: 0.7346938775510204,
//   },
//   {
//     daysInTreatment: 50,
//     currentAdherence: 0.74,
//   },
//   {
//     daysInTreatment: 51,
//     currentAdherence: 0.7450980392156863,
//   },
//   {
//     daysInTreatment: 52,
//     currentAdherence: 0.75,
//   },
//   {
//     daysInTreatment: 53,
//     currentAdherence: 0.7547169811320755,
//   },
//   {
//     daysInTreatment: 54,
//     currentAdherence: 0.7592592592592593,
//   },
//   {
//     daysInTreatment: 55,
//     currentAdherence: 0.7636363636363637,
//   },
//   {
//     daysInTreatment: 56,
//     currentAdherence: 0.7678571428571429,
//   },
//   {
//     daysInTreatment: 57,
//     currentAdherence: 0.7719298245614035,
//   },
//   {
//     daysInTreatment: 58,
//     currentAdherence: 0.7758620689655172,
//   },
//   {
//     daysInTreatment: 59,
//     currentAdherence: 0.7796610169491526,
//   },
//   {
//     daysInTreatment: 60,
//     currentAdherence: 0.7833333333333333,
//   },
//   {
//     daysInTreatment: 61,
//     currentAdherence: 0.7868852459016393,
//   },
//   {
//     daysInTreatment: 62,
//     currentAdherence: 0.7903225806451613,
//   },
//   {
//     daysInTreatment: 63,
//     currentAdherence: 0.7936507936507936,
//   },
//   {
//     daysInTreatment: 64,
//     currentAdherence: 0.796875,
//   },
//   {
//     daysInTreatment: 65,
//     currentAdherence: 0.8,
//   },
//   {
//     daysInTreatment: 66,
//     currentAdherence: 0.803030303030303,
//   },
//   {
//     daysInTreatment: 67,
//     currentAdherence: 0.8059701492537313,
//   },
//   {
//     daysInTreatment: 68,
//     currentAdherence: 0.8088235294117647,
//   },
//   {
//     daysInTreatment: 69,
//     currentAdherence: 0.8115942028985508,
//   },
//   {
//     daysInTreatment: 70,
//     currentAdherence: 0.8142857142857143,
//   },
//   {
//     daysInTreatment: 71,
//     currentAdherence: 0.8169014084507042,
//   },
//   {
//     daysInTreatment: 72,
//     currentAdherence: 0.8194444444444444,
//   },
//   {
//     daysInTreatment: 73,
//     currentAdherence: 0.8082191780821918,
//   },
//   {
//     daysInTreatment: 74,
//     currentAdherence: 0.8108108108108109,
//   },
//   {
//     daysInTreatment: 75,
//     currentAdherence: 0.8,
//   },
//   {
//     daysInTreatment: 76,
//     currentAdherence: 0.8026315789473685,
//   },
//   {
//     daysInTreatment: 77,
//     currentAdherence: 0.8051948051948052,
//   },
//   {
//     daysInTreatment: 78,
//     currentAdherence: 0.7948717948717948,
//   },
//   {
//     daysInTreatment: 79,
//     currentAdherence: 0.7974683544303798,
//   },
//   {
//     daysInTreatment: 80,
//     currentAdherence: 0.8,
//   },
//   {
//     daysInTreatment: 81,
//     currentAdherence: 0.8024691358024691,
//   },
//   {
//     daysInTreatment: 82,
//     currentAdherence: 0.8048780487804879,
//   },
//   {
//     daysInTreatment: 83,
//     currentAdherence: 0.8072289156626506,
//   },
//   {
//     daysInTreatment: 84,
//     currentAdherence: 0.8095238095238095,
//   },
//   {
//     daysInTreatment: 85,
//     currentAdherence: 0.8117647058823529,
//   },
//   {
//     daysInTreatment: 86,
//     currentAdherence: 0.813953488372093,
//   },
//   {
//     daysInTreatment: 87,
//     currentAdherence: 0.8160919540229885,
//   },
//   {
//     daysInTreatment: 88,
//     currentAdherence: 0.8181818181818182,
//   },
//   {
//     daysInTreatment: 89,
//     currentAdherence: 0.8202247191011236,
//   },
//   {
//     daysInTreatment: 90,
//     currentAdherence: 0.8222222222222222,
//   },
//   {
//     daysInTreatment: 91,
//     currentAdherence: 0.8241758241758241,
//   },
//   {
//     daysInTreatment: 92,
//     currentAdherence: 0.8260869565217391,
//   },
//   {
//     daysInTreatment: 93,
//     currentAdherence: 0.8279569892473119,
//   },
//   {
//     daysInTreatment: 94,
//     currentAdherence: 0.8297872340425532,
//   },
//   {
//     daysInTreatment: 95,
//     currentAdherence: 0.8315789473684211,
//   },
//   {
//     daysInTreatment: 96,
//     currentAdherence: 0.8333333333333334,
//   },
//   {
//     daysInTreatment: 97,
//     currentAdherence: 0.8350515463917526,
//   },
//   {
//     daysInTreatment: 98,
//     currentAdherence: 0.8367346938775511,
//   },
//   {
//     daysInTreatment: 99,
//     currentAdherence: 0.8383838383838383,
//   },
//   {
//     daysInTreatment: 100,
//     currentAdherence: 0.84,
//   },
//   {
//     daysInTreatment: 101,
//     currentAdherence: 0.8316831683168316,
//   },
//   {
//     daysInTreatment: 102,
//     currentAdherence: 0.8235294117647058,
//   },
//   {
//     daysInTreatment: 103,
//     currentAdherence: 0.8252427184466019,
//   },
//   {
//     daysInTreatment: 104,
//     currentAdherence: 0.8269230769230769,
//   },
//   {
//     daysInTreatment: 105,
//     currentAdherence: 0.8285714285714286,
//   },
//   {
//     daysInTreatment: 106,
//     currentAdherence: 0.8301886792452831,
//   },
//   {
//     daysInTreatment: 107,
//     currentAdherence: 0.8317757009345794,
//   },
//   {
//     daysInTreatment: 108,
//     currentAdherence: 0.8333333333333334,
//   },
//   {
//     daysInTreatment: 109,
//     currentAdherence: 0.8348623853211009,
//   },
//   {
//     daysInTreatment: 110,
//     currentAdherence: 0.8272727272727273,
//   },
//   {
//     daysInTreatment: 111,
//     currentAdherence: 0.8198198198198198,
//   },
//   {
//     daysInTreatment: 112,
//     currentAdherence: 0.8125,
//   },
//   {
//     daysInTreatment: 113,
//     currentAdherence: 0.8053097345132744,
//   },
//   {
//     daysInTreatment: 114,
//     currentAdherence: 0.7982456140350878,
//   },
//   {
//     daysInTreatment: 115,
//     currentAdherence: 0.7913043478260869,
//   },
//   {
//     daysInTreatment: 116,
//     currentAdherence: 0.7844827586206896,
//   },
//   {
//     daysInTreatment: 117,
//     currentAdherence: 0.7777777777777778,
//   },
//   {
//     daysInTreatment: 118,
//     currentAdherence: 0.7711864406779662,
//   },
//   {
//     daysInTreatment: 119,
//     currentAdherence: 0.7647058823529411,
//   },
//   {
//     daysInTreatment: 120,
//     currentAdherence: 0.7583333333333333,
//   },
//   {
//     daysInTreatment: 121,
//     currentAdherence: 0.7520661157024794,
//   },
//   {
//     daysInTreatment: 122,
//     currentAdherence: 0.7459016393442623,
//   },
//   {
//     daysInTreatment: 123,
//     currentAdherence: 0.7398373983739838,
//   },
//   {
//     daysInTreatment: 124,
//     currentAdherence: 0.7338709677419355,
//   },
//   {
//     daysInTreatment: 125,
//     currentAdherence: 0.728,
//   },
//   {
//     daysInTreatment: 126,
//     currentAdherence: 0.7222222222222222,
//   },
//   {
//     daysInTreatment: 127,
//     currentAdherence: 0.7165354330708661,
//   },
//   {
//     daysInTreatment: 128,
//     currentAdherence: 0.7109375,
//   },
//   {
//     daysInTreatment: 129,
//     currentAdherence: 0.7054263565891473,
//   },
//   {
//     daysInTreatment: 130,
//     currentAdherence: 0.7,
//   },
//   {
//     daysInTreatment: 131,
//     currentAdherence: 0.6946564885496184,
//   },
//   {
//     daysInTreatment: 132,
//     currentAdherence: 0.6893939393939394,
//   },
//   {
//     daysInTreatment: 133,
//     currentAdherence: 0.6842105263157895,
//   },
//   {
//     daysInTreatment: 134,
//     currentAdherence: 0.6791044776119403,
//   },
//   {
//     daysInTreatment: 135,
//     currentAdherence: 0.674074074074074,
//   },
//   {
//     daysInTreatment: 136,
//     currentAdherence: 0.6691176470588235,
//   },
//   {
//     daysInTreatment: 137,
//     currentAdherence: 0.6642335766423357,
//   },
//   {
//     daysInTreatment: 138,
//     currentAdherence: 0.6594202898550725,
//   },
//   {
//     daysInTreatment: 139,
//     currentAdherence: 0.6546762589928058,
//   },
//   {
//     daysInTreatment: 140,
//     currentAdherence: 0.65,
//   },
//   {
//     daysInTreatment: 141,
//     currentAdherence: 0.6453900709219859,
//   },
//   {
//     daysInTreatment: 142,
//     currentAdherence: 0.6408450704225352,
//   },
//   {
//     daysInTreatment: 143,
//     currentAdherence: 0.6363636363636364,
//   },
//   {
//     daysInTreatment: 144,
//     currentAdherence: 0.6319444444444444,
//   },
//   {
//     daysInTreatment: 145,
//     currentAdherence: 0.6275862068965518,
//   },
//   {
//     daysInTreatment: 146,
//     currentAdherence: 0.6232876712328768,
//   },
//   {
//     daysInTreatment: 147,
//     currentAdherence: 0.6190476190476191,
//   },
//   {
//     daysInTreatment: 148,
//     currentAdherence: 0.6148648648648649,
//   },
//   {
//     daysInTreatment: 149,
//     currentAdherence: 0.610738255033557,
//   },
//   {
//     daysInTreatment: 150,
//     currentAdherence: 0.6066666666666667,
//   },
//   {
//     daysInTreatment: 151,
//     currentAdherence: 0.6026490066225165,
//   },
//   {
//     daysInTreatment: 152,
//     currentAdherence: 0.5986842105263158,
//   },
//   {
//     daysInTreatment: 153,
//     currentAdherence: 0.5947712418300654,
//   },
//   {
//     daysInTreatment: 154,
//     currentAdherence: 0.5909090909090909,
//   },
//   {
//     daysInTreatment: 155,
//     currentAdherence: 0.5870967741935483,
//   },
//   {
//     daysInTreatment: 156,
//     currentAdherence: 0.5833333333333334,
//   },
//   {
//     daysInTreatment: 157,
//     currentAdherence: 0.5796178343949044,
//   },
//   {
//     daysInTreatment: 158,
//     currentAdherence: 0.5759493670886076,
//   },
//   {
//     daysInTreatment: 159,
//     currentAdherence: 0.5723270440251572,
//   },
//   {
//     daysInTreatment: 160,
//     currentAdherence: 0.56875,
//   },
//   {
//     daysInTreatment: 161,
//     currentAdherence: 0.5652173913043478,
//   },
//   {
//     daysInTreatment: 162,
//     currentAdherence: 0.5617283950617284,
//   },
//   {
//     daysInTreatment: 163,
//     currentAdherence: 0.558282208588957,
//   },
//   {
//     daysInTreatment: 164,
//     currentAdherence: 0.5548780487804879,
//   },
//   {
//     daysInTreatment: 165,
//     currentAdherence: 0.5515151515151515,
//   },
//   {
//     daysInTreatment: 166,
//     currentAdherence: 0.5481927710843374,
//   },
//   {
//     daysInTreatment: 167,
//     currentAdherence: 0.5449101796407185,
//   },
//   {
//     daysInTreatment: 168,
//     currentAdherence: 0.5416666666666666,
//   },
//   {
//     daysInTreatment: 169,
//     currentAdherence: 0.5384615384615384,
//   },
//   {
//     daysInTreatment: 170,
//     currentAdherence: 0.5352941176470588,
//   },
//   {
//     daysInTreatment: 171,
//     currentAdherence: 0.5321637426900585,
//   },
//   {
//     daysInTreatment: 172,
//     currentAdherence: 0.5290697674418605,
//   },
//   {
//     daysInTreatment: 173,
//     currentAdherence: 0.5260115606936416,
//   },
//   {
//     daysInTreatment: 174,
//     currentAdherence: 0.5229885057471264,
//   },
//   {
//     daysInTreatment: 175,
//     currentAdherence: 0.52,
//   },
//   {
//     daysInTreatment: 176,
//     currentAdherence: 0.5170454545454546,
//   },
//   {
//     daysInTreatment: 177,
//     currentAdherence: 0.5141242937853108,
//   },
//   {
//     daysInTreatment: 178,
//     currentAdherence: 0.5112359550561798,
//   },
//   {
//     daysInTreatment: 179,
//     currentAdherence: 0.5083798882681564,
//   },
//   {
//     daysInTreatment: 180,
//     currentAdherence: 0.5055555555555555,
//   },
//   {
//     daysInTreatment: 181,
//     currentAdherence: 0.5027624309392266,
//   },
// ];
// const adherence = {
//   "4": [
//     "taken",
//     "notTaken",
//     "taken",
//     "notTaken",
//     "notTaken",
//     "taken",
//     "taken",
//     "notTaken",
//     "taken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "taken",
//     "notTaken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "notTaken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "notTaken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "notTaken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "notTaken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "notTaken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "notTaken",
//     "taken",
//     "notTaken",
//     "taken",
//     "taken",
//     "notTaken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "notTaken",
//     "notTaken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "taken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//     "notTaken",
//   ],
// };

// interface Adherence {
//   [key: string]: string[];
// }

// interface AdherenceInfo {
//   daysInTreatment: number;
//   currentAdherence: number;
// }

// interface Result {
//   [key: string]: AdherenceInfo[];
// }

// function calculateAdherence(adherence: Adherence): Result {
//   const result: Result = {};

//   for (let key in adherence) {
//     let daysTaken = 0;
//     result[key] = adherence[key].map((value, index) => {
//       if (value === "taken") {
//         daysTaken++;
//       }
//       return {
//         daysInTreatment: index + 1,
//         currentAdherence: daysTaken / (index + 1),
//       };
//     });
//   }

//   return result;
// }

// let result = calculateAdherence(adherence);
