import Chatbot from '../components/Common/chatbot/Chatbot';
import Header from '../Widgets/header';
import Banner from '../Widgets/banner';
import Branding from '../Widgets/branding';
import Benefits from '../Widgets/benefits';
import Footer from '../Widgets/footer';


const Dashboard = () => {

    return (
        <div>
            <Header />
            <Banner />
            <Branding />
            <Benefits />
            <Chatbot />
            <Footer style={{paddingTop:'20px'}}/>
        </div>
    )
}

export default Dashboard
