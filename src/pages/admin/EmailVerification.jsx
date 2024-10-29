import { useTranslation } from 'react-i18next';
import AuthContainer from '../../components/common/auth/Auth';
import OTP from '../../components/common/auth/OTP/OTP';

const AdminEmailVerify = () => {
const { t } = useTranslation();

    return (
        <>
            <AuthContainer>
                <OTP
                    title={t('loginPage.titles.email')+' '+t('OTPPage.titles.verification')}
                />
            </AuthContainer>
        </>
    );
    
    
};

export default AdminEmailVerify;