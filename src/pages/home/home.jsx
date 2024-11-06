import NavBar from "../../components/navbar/NavBar.js";
import Forms from '../../components/forms/Forms.jsx';
import '../home/home.css'
function home(){
    return(
        <div className="main">
            <header>
                 <NavBar/>
            </header>
            <section id="forms-section">
                <div className="forms-container">
                    <div className="forms-content">
                        <Forms/>
                    </div>
                </div>
            </section>
            <section className="ofertas-section">
                <div className="ofertas-conatiner"></div>
            </section>

         
        </div>
    )
}
export default home;