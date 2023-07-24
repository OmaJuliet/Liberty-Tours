import "../../Styles/Home Page/subscribe.css";

const Subscribe = () => {
  return (
    <>
            <section className="subscribe">
                <section className="subscribe-inner">
                    <h1 className="subscribe-heading">Get latest updates about Liberty Tours</h1>
                    <p className="subscribe-lead">
                        Subscribe and stay updated on the latest news by subscribing to our newsletter.
                        <br />Get updates about interesting travel sites, bonus and unlimited offers, holidays sites and so much more.
                    </p>
                    <div className="subscribe-search">
                        <input
                            type="search"
                            className="search-input"
                            placeholder="Enter Your Email"
                            required
                        />
                        <button className="search-button" type="submit">Subscribe Now</button>
                    </div>
                </section>
            </section>
    </>
  )
}

export default Subscribe