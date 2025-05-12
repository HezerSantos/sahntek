const HomeComputerPlans = () => {
    return(
        <>
            <section className="home__computer__plans">
                <div>
                    <div className="home__computer__card basic">
                        <div>
                            <h1>
                                Everyday <span>Essentials</span>
                            </h1>
                            <p>
                                Reliable <span>Performance</span> for <span>Daily Use</span>
                            </p>
                        </div>
                        <ul>
                            <li>
                                <p>
                                    Fast Startup and <span>Multitasking</span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Great for <span>Browsing</span> and <span>Searching</span>  
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>Affordable</span> and easy to maintain
                                </p>
                            </li>
                            <li className="basic__price">
                                $300 - $700
                            </li>
                        </ul>

                        <button className="basic__price">
                            Explore
                        </button>
                    </div>
                    <div className="home__computer__card medium">
                        <div>
                            <h1>
                                Performance <span>Essentials</span>
                            </h1>
                            <p>
                                Step up you <span>Game</span> with <span>Boost</span>
                            </p>
                        </div>
                        <ul>
                            <li>
                                <p>
                                    <span>High-Speed</span> processors and <span>Storage</span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>Gaming</span> and <span>Editing</span> with <span>Ease</span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>Perfect</span> for <span>Professionals</span>
                                </p>
                            </li>
                            <li className="medium__price">
                                $700 - $1,500
                            </li>
                        </ul>

                        <button className="medium__price">
                            Explore
                        </button>
                    </div>
                    <div className="home__computer__card advanced">
                        <div>
                            <h1>
                                <span>Ultimate</span> Experience
                            </h1>
                            <p>
                                <span>Top-tier Power</span> for <span>Demanding</span> Tasks
                            </p>
                        </div>
                        <ul>
                            <li>
                                <p>
                                    Best Performance with Premium
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>Stunning</span> graphics and <span>Fast</span> memory
                                </p>
                            </li>
                            <li>
                                <p>
                                    Bulit for <span>Intensive</span> gaming
                                </p>
                            </li>
                            <li className="advanced__price">
                                $1,500 - $3,000
                            </li>
                        </ul>

                        <button className="advanced__price">
                            Explore
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeComputerPlans