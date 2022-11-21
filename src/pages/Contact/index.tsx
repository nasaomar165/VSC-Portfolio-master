import Github from "../../assets/icons/github.png";
import Twitter from "../../assets/icons/twitter.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Stackoverflow from "../../assets/icons/stackoverflow.png";
import { data } from "../../data";

const Contact: React.FC = (): JSX.Element => {
  return (
    <article className="contact">

      <section className="contact__content">

        <div className="contact__text">
          <h2>Get in touch!</h2>
          <p>
            I am always looking for new challenging and exciting opportunities. So, don't hesitate sending me an email.
          </p>
          <p>
            Following me on my media to keep track of me!
          </p>
        </div>

        <div className="contact__media">
          {data.linkedin &&
          <a target="_blank" rel="noreferrer" href={data.linkedin} className="contact__media--linkedin" title="Linkedin">
            <img src={Linkedin} alt="" />
          </a>
          }
          {data.github &&
          <a target="_blank" rel="noreferrer" href={data.github} className="contact__media--github" title="Github">
            <img src={Github} alt="" />
          </a>
          }
          {data.twitter &&
          <a target="_blank" rel="noreferrer" href={data.twitter} className="contact__media--twitter" title="Twitter">
            <img src={Twitter} alt="" />
          </a>
          }
          {data.stackoverflow &&
          <a target="_blank" rel="noreferrer" href={data.stackoverflow} className="contact__media--stackoverflow" title="Stack  Overflow">
            <img src={Stackoverflow} alt="" />
          </a>
          }
        </div>
          <div className="contactme">
            <a className="contact__email-cta" href={`mailto:${data.email}`}>
              Say Hi!
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Contact</title><g id="mail"><path d="M29,6H3L2.92,6a.78.78,0,0,0-.21,0l-.17.07a.65.65,0,0,0-.15.1.67.67,0,0,0-.15.14l-.06.06a.36.36,0,0,0,0,.09,1.08,1.08,0,0,0-.08.19A1.29,1.29,0,0,0,2,6.9S2,7,2,7V25a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V7A1,1,0,0,0,29,6ZM16,14.81,6.2,8H27.09ZM4,24V8.91l11.43,7.91,0,0a1.51,1.51,0,0,0,.18.09l.08,0A1.09,1.09,0,0,0,16,17h0a1,1,0,0,0,.41-.1l.07,0,0,0L28,9.79V24Z"/></g></svg>
            </a>
            <a className="contact__whats-cta" rel="noreferrer" target={'_blank'} href={data.whatsapp}>
              Say Hi!
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
            </a>
          </div>

        <span>
          Designed and built by <a target="_blank" rel="noreferrer" href={data.github} title={data.name}>{data.name}</a>.
        </span>
      </section>

    </article>
  )
}

export { Contact }