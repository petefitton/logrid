import SingleBox from './SingleBox.js';

// {people: ["A", "B", "C"]},

function SubCategoryBoxes(props) {
  return (
    <>
        {props.options.map(option => <SingleBox option={option} />)}
    </>
  );
}

export default SubCategoryBoxes;
