import PropTypes from 'prop-types'
import Navigation from '../Components/Shared/NavigationBar/Navigation';
import { AddButton } from '../Components/CustomComponents/CustomButton/CustomButton';

const MainLayout = ({ children }) => {
    return (
        <>
        <Navigation/>
           
            {children}

            <AddButton>Click Me</AddButton>

        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node
}

export default MainLayout;