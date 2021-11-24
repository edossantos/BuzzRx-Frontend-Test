const topDrugs = [
  {
    id: 1,
    position: 10,
    drugName: 'Lipitor',
  },
  {
    id: 2,
    position: 2,
    drugName: 'Propecia',
  },
  {
    id: 3,
    position: 1,
    drugName: 'Viagra',
  },
  {
    id: 4,
    position: 4,
    drugName: 'Norvasc',
  },
  {
    id: 5,
    position: 6,
    drugName: 'singulair',
  },
  {
    id: 6,
    position: 5,
    drugName: 'Prilosec',
  },
  {
    id: 7,
    position: 7,
    drugName: 'Zoloft',
  },
  {
    id: 8,
    position: 3,
    drugName: 'Glucophage',
  },
  {
    id: 9,
    position: 9,
    drugName: 'Lisinopril',
  },
  {
    id: 10,
    position: 1,
    drugName: 'Albuterol Sulfate',
  },
];

function sorter(a, b) {
  // console.log("a.position", a.position, a.drugName)
  // console.log("b.position", b.position, b.drugName)
  return a.position - b.position;
}

const sortArr = (arr) => {
  return arr.sort(sorter);
};
const copyOfTopDrugs = sortArr(topDrugs);

// export default topDrugs;
export default copyOfTopDrugs
