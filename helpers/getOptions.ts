interface nutrients {
  protein: number;
  fat: number;
  ch: number;
}

const getOptions = (nutrient: string, nutrients: nutrients) => {
  return {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      height: 110,
      width: 110,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
      },
    },
    series: [
      {
        name: '',
        colors: ['#000000', '#a10109'],
        lineWidth: 1,
        states: {
          hover: {
            enabled: false,
          },
        },
        enableMouseTracking: false,
        data: [
          {
            y: nutrients.protein,
            color: nutrient === 'protein' ? '#a10109' : '#000000',
            selected: nutrient === 'protein',
            sliced: nutrient === 'protein',
          },
          {
            y: nutrients.fat,
            color: nutrient === 'fat' ? '#a10109' : '#000000',
            selected: nutrient === 'fat',
            sliced: nutrient === 'fat',
          },
          {
            y: nutrients.ch,
            color: nutrient === 'carbhyd' ? '#a10109' : '#000000',
            selected: nutrient === 'carbhyd',
            sliced: nutrient === 'carbhyd',
          },
        ],
      },
    ],
  };
};

export default getOptions;
