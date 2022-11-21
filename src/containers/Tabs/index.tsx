import { useContext } from "react"
import { ctx } from "../../context"
import { StateInterface } from "../../globalTypes";
import { getCurrentInfo } from "./utils";
import { useNavigate } from "react-router-dom";
const Tabs: React.FC = (): JSX.Element => {
  const state = useContext(ctx) as StateInterface;
  const data = getCurrentInfo(state);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/nopage`)
  }
  return(
    <div>
    {state?.current !== "nopage" && <section className="tabs">
     <article>
        <img src={data.image} alt={state?.current} />
        <p contentEditable >{`${state?.current}.${data.extension}`}</p>
        <hr />
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>  
    </article>
    </section>
  }
 </div>
  )
}

export { Tabs }