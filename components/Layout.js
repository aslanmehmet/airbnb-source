

{/* TODO: Layout */}



import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';
import QuotsPopup from '../components/QuotsPopup';
import Header from './Header';

const Layout = (props) => (
<div>
    <Header />
    <Navbar />
    {props.children}
    <Footer />
    <QuotsPopup />
</div>
);

export default Layout;