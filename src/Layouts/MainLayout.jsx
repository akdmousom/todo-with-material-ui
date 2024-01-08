import PropTypes from 'prop-types'
import Navigation from '../Components/Shared/NavigationBar/Navigation';


const MainLayout = ({ children, setDarkMode, darkMode }) => {
    
    return (
        <>
        <Navigation setDarkMode={setDarkMode} darkMode={darkMode}/>
           
            {children}

        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node,
    setDarkMode: PropTypes.func,
    darkMode: PropTypes.bool,
}

export default MainLayout;