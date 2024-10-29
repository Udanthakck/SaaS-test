import AuthContainer from '../../components/common/auth/Auth';
import LoginForm from '../../components/common/auth/login/LoginForm';

const SupAdminLogin = () => {
    return (
        <>
            <AuthContainer>
                <LoginForm user="superadmin"/>
            </AuthContainer>
        </>
    );
    
    
};

export default SupAdminLogin;