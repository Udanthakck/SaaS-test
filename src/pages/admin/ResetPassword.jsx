import { useTranslation } from 'react-i18next';
import AuthContainer from '../../components/common/auth/Auth';
import OTP from '../../components/common/auth/OTP/OTP';

const AdminResetPassword = () => {
const { t } = useTranslation();

    return (
        <>
            <AuthContainer>
                <OTP
                    title = {t('OTPPage.titles.reset')+' '+t('loginPage.titles.password')}
                />
            </AuthContainer>
        </>
    );
    
    
};

export default AdminResetPassword;