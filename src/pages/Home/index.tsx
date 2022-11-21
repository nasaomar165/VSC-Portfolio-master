import { useNavigate } from "react-router-dom"
import { ActionInterface } from "../../globalTypes"
import {data} from "../../data";
interface HomeProps {
  dispatch: React.Dispatch<ActionInterface>
}

const Home: React.FC<HomeProps> = ({ dispatch }): JSX.Element => {
  const navigate = useNavigate()

  const handleClick = (route: string) => {
    dispatch({ type: "ROUTE", payload: route })
    navigate(`/${route}`)
  }

  return(
    <article className="home">
      <section className="home__content">
        <span className="home__subtitle">Hi there!👋 My name is</span>

        <h2 className="home__name">{data.name}.</h2>

        <h1 className="home__brief">I build stuff for the web.</h1>

        <h3 className="home__description">
          I am a Computer Engineer focused on Web Development. Currently looking for a job 😀.
        </h3>

        <div className="home__ctas">
          <button onClick={() => handleClick("projects")}>
            View my work.
          </button>
          <button onClick={() => handleClick("contact")}>
            Contact me.
          </button>
        </div>
      </section>
    </article>
  )
}

export { Home }