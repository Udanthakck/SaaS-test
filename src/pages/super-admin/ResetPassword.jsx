import AuthContainer from '../../components/common/auth/Auth';
import OTP from '../../components/common/auth/OTP/OTP';

const SupAdminResetPassword = () => {
    return (
        <>
            <AuthContainer>
                <OTP 
                    user='superadmin'
                />
            </AuthContainer>
        </>
    );
    
    
};

export default SupAdminResetPassword;