import AuthContainer from '../../components/common/auth/Auth';
import LoginForm from '../../components/common/auth/login/LoginForm';

const AdminLogin = () => {
    return (
        <>
            <AuthContainer>
                <LoginForm user="admin"/>
            </AuthContainer>
        </>
    );
    
    
};

export default AdminLogin;