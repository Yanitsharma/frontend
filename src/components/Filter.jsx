const Filter=({handleClick})=>{
  return <>
  <div className="filter">
    <p>Filter by categories</p>
    <button type="button" className="btn1 btn-light butto" onClick={()=>{handleClick("CP")}}>CP</button>
    <button type="button" className="btn1 btn-light butto">DSA</button>
    <button type="button" className="btn1 btn-light butto">Maths</button>
    <button type="button" className="btn1 btn-light butto">Physics</button>
    <button type="button" className="btn1 btn-light butto">Chemistry</button>
    <button type="button" className="btn1 btn-light butto">SDE</button>
    </div>
  </>
}
export default Filter;