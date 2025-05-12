const HomeBody = () => {
    return (
        <>
        <section className="home__main">
            <div className="home__information__card__container">
                <div className="information__card pro">
                    <h1>Why <span>Sahntek</span></h1>
                    <ul>
                        <li>Custom-Built to Your Exact Specifications</li>
                        <li>Fully Upgradable Systems</li>
                        <li>24/7 Dedicated Customer Support</li>
                        <li>Optimized for Performance</li>
                        <li>Expert Assembly</li>
                    </ul>
                </div>
            </div>
            <div className="home__information__card__container ">
                <div className="information__card con">
                    <h1>Other <span>Companies</span></h1>
                    <ul>
                        <li>Limited Customization Options</li>
                        <li>Inconsistent Assembly Quality</li>
                        <li>24/7 Dedicated Customer Support</li>
                        <li>Not Optimized for Your Specific Needs</li>
                        <li>Non Expert Assembly</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default HomeBody