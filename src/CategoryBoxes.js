import SubCategoryBoxes from './SubCategoryBoxes.js';

function CategoryBoxes(props) {
  return (
    <>
      {props.optionsObj.map(options => <SubCategoryBoxes options={options} />)}
    </>
  );
}

export default CategoryBoxes;
