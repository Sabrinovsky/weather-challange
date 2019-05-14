const data = [
  {
    day: "Domingo",
    max_temperature: "25",
    min_temperature: "16",
    max_rel_humidity: "15",
    monthDay: "01/02/2013"
  },
  {
    day: "Segunda",
    max_temperature: "28",
    min_temperature: "11",
    max_rel_humidity: "11",
    monthDay: "01/02/2013"
  },
  {
    day: "Terça",
    max_temperature: "28",
    min_temperature: "17",
    max_rel_humidity: "15",
    monthDay: "01/02/2013"
  },
  {
    day: "Quarta",
    max_temperature: "30",
    min_temperature: "20",
    max_rel_humidity: "12",
    monthDay: "01/02/2013"
  },
  {
    day: "Quinta",
    max_temperature: "25",
    min_temperature: "11",
    max_rel_humidity: "11",
    monthDay: "01/02/2013"
  },
  {
    day: "Sexta",
    max_temperature: "32",
    min_temperature: "19",
    max_rel_humidity: "14",
    monthDay: "01/02/2013"
  },
  {
    day: "Sábado",
    max_temperature: "28",
    min_temperature: "16",
    max_rel_humidity: "10",
    monthDay: "01/02/2013"
  }
];

const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

export default getData;
