import Lifecycle from "../lifecycle/LifeCycle";
import Counter from "../hooks/Counter"
import Useselecthook from "../hooks/Useselecthook"
import UseStatehook from "../hooks/UseStatehook"
import UseEffecthook from "../hooks/UseEffecthook"

function Home(){
    return (
    <div>

        <h2>welcome Home page</h2>
        <Lifecycle />
        <Counter />
        <Useselecthook />
        <UseStatehook />
        <UseEffecthook />
    </div>
    )
}
export default Home;