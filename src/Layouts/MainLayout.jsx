import PropTypes from 'prop-types'
import Navigation from '../Components/Shared/NavigationBar/Navigation';


const MainLayout = ({ children }) => {
    return (
        <>
        <Navigation/>
           
            {children}

        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node
}

export default MainLayout;