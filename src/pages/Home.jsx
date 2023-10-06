import Content from '../components/Content'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Mainpic from "../json/Main_pic.json";
import Vegetable from "../json/Vegetable.json"


export default function Home() {
    return(
        <div className="container">
    <Header />
    <Content Main_pic={Mainpic} Vegetable={Vegetable}/>
    <Footer />
    </div> 
    
    );

}