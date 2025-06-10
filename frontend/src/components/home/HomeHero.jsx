const scrollToShop = () => {
    const section = document.querySelector("#computer-plans")
    section.scrollIntoView({ behavior: 'smooth' })
}
const HomeHero = () => {
    return(
        <>
            <header className="home__hero background__primary">
                <div className="home__hero__image">
                    <div>
                        <h1>WE SPEAK <span>PERFORMANCE</span></h1>
                        <p>Custom-built for unbeatable <span>speed</span> and <span>reliability</span></p>
                    </div>
                    <button onClick={() => scrollToShop()}>
                        Shop Now
                    </button>
                </div>
            </header>
        </>
    )
}

export default HomeHero