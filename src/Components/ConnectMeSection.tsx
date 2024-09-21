import { socials } from '../data'

const ConnectMeSection = () => {
  return (
<section id="connect">
          <h2> Let's Connect</h2>
          <div className="socials">
            {socials.map((x) => (
              <a href={x.link}>
                <img src={x.src} alt={x.alt} />
              </a>
            ))}
          </div>
        </section>  )
}

export default ConnectMeSection