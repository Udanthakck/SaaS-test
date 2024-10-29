import AuthContainer from '../../components/common/auth/Auth';
import SignupForm from '../../components/common/auth/signup/SignupForm';

const AdminSignup = () => {
    return (
        <>
            <AuthContainer>
                <SignupForm />
            </AuthContainer>
        </>
    );
    
    
};

export default AdminSignup;