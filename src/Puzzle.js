import CategoryBoxes from './CategoryBoxes.js';

let testPuzzleGridBoxes = [
    ["A", "B", "C"],
    ["A", "B", "C"],
    ["A", "B", "C"],
]

let testPuzzleCategories = [
    "person",
    "places",
    "things",
]

function Puzzle() {
  return (
    <>
        {/* <xAxisLegend /> */}
        {/* <yAxisLegend /> */}
        <CategoryBoxes optionsObj={testPuzzleGridBoxes} />
    </>
  );
}

export default Puzzle;
