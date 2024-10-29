import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import OTPInput from "react-otp-input";
import { useState } from "react";

const OTP = ({ title }) => {
    const { t } = useTranslation();
    const location = useLocation();
    const {email} = location.state || {};
    const [otp, setOtp] = useState('');
    const [isIncorrect, setIsIncorrect ] = useState(false);

    const handleResend = () => {
        // TODO 
    }

    const handleOtpChange = (value) => {
        setOtp(value);

        if (value.length === 6) {
            setIsIncorrect(true);
            // TODO
            console.log(otp)
        } else {
            setIsIncorrect(false); 
        }
    }

    const handleOtpPaste = () => {
        // TODO validate when all 6 are full
    }

    return (
        <div className="container-sm mx-auto min-w-120 space-y-8">
            <div className="space-y-2">
                <h2 className=" capitalize">
                    {title}
                </h2>
                <h3 className="text-txt-sub sub-heading">
                    {t('OTPPage.titles.resetSubText')+' '+email}
                </h3>
            </div>
            <div className="flex flex-col space-y-4 w-full">
                <OTPInput
                    value={otp}
                    id='otpInput'
                    onChange={handleOtpChange}
                    onPaste={handleOtpPaste}
                    numInputs={6}
                    renderInput={(props) => <input 
                            {...props} 
                        />}
                    inputStyle={`appearance-none border-b size-12 font-sans font-light text-2xl text-center text-txt-def focus:outline-none ${
                        isIncorrect ? 'border-txt-err text-txt-err' : 'border-txt-def text-txt-def'
                    }`}
                    inputType="number"
                    containerStyle='w-full'
                    renderSeparator={<div className="size-3"></div>}
                    skipDefaultStyles={true}
                />
                {isIncorrect && 
                    <p className=" input-err">
                        {t('OTPPage.validations.resetErr')}
                    </p>
                }
            </div>
            <div className='relative items-center flex flex-row w-full gap-x-1 text-txt-label'>
            <label htmlFor="resend" className="form-label">
              {t('OTPPage.titles.notRecieve')}
            </label>
            <button
              type='button'
              id='resend'
              name='resend'
              className='hlink-txt'
              onClick={handleResend}
            >
              {t('OTPPage.titles.resend')}
            </button>
          </div>
        </div>
      );
}

OTP.propTypes = {
    title: PropTypes.string.isRequired,
  };
  

export default OTP;