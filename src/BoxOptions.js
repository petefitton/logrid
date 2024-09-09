import "./BoxOptions.css";

function BoxOptions() {
  return (
    <div>
      <div class="grid-marker-container" style={{top: "153.891px", left: "186.891px", display: "block"}}>
        <div class="gm-row" row="0" style={{height: "30px"}}>
            <span class="gm-cell gm-cell-blank" row="0" col="0" style={{width: "30px", height: "30px", lineHeight: "30px", backgroundColor: "white", borderLeft: "1px solid black"}}></span>
        </div>
        <div class="gm-row" row="1" style={{height: "30px"}}>
            <span class="gm-cell gm-cell-o" row="1" col="0" style={{width: "30px", height: "30px", lineHeight: "30px", backgroundColor: "green", borderLeft: "1px solid black"}}>O</span>
        </div>
        <div class="gm-row" row="2" style={{height: "30px"}}>
            <span class="gm-cell gm-cell-x" row="2" col="0" style={{width: "30px", height: "30px", lineHeight: "30px", backgroundColor: "red", borderLeft: "1px solid black"}}>X</span>
        </div>
      </div>
    </div>
  );
}

export default BoxOptions;
