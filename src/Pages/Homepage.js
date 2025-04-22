import HomepageBanner from "../components/HomepageBanner";
import Specials from "../components/Specials/Specials";
import Testimonials from "../components/Testimonials/Testimonials";
import Chicago from "../components/Chicago";

const Homepage = () => {
    return (
        <main>
            <HomepageBanner />
            <Specials />
            <Testimonials />
            <Chicago />
        </main>
    )
}

export default Homepage;