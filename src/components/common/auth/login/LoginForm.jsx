import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Eye, EyeOff, AlertCircle } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ user }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (value==='') {
      e.target.setCustomValidity('empty value');
    }else {
      e.target.setCustomValidity(''); 
    }
    // For checkbox, we need to handle the checked property
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const REGEX = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;

    if ((formData.email==='') || (!REGEX.test(formData.email))){
      newErrors.email = 'emailErr1';
      emailInput.setCustomValidity('email invalid.');
      valid = false;
    // }else if (false) {
      // TODO API fetch emailErr2
    } else {
      emailInput.setCustomValidity('');
    }

    if (!formData.password) {
      newErrors.password = 'passwordErr';
      valid = false;
      passwordInput.setCustomValidity('password invalid.');
    } else {
      passwordInput.setCustomValidity('');
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO API call
      console.log('Form submitted', formData);
    }
  };

  const gotoSignup = () => {
    navigate('/admin/signup');
  }

  const gotoResetPassword = () => {
    validateForm();
    if (errors.email === '') {
      navigate('/admin/password-reset', {state: {email:formData.email}});
    }
    
  }

  return (
    <div className="container-sm mx-auto min-w-120 space-y-8">
      <div className="space-y-2">
        <h2>
          {t(user === 'admin' ? 'loginPage.titles.loginAdmin' : 'loginPage.titles.loginSuperAdmin')}
        </h2>
        <h3 className="text-txt-sub sub-heading">
          {t('loginPage.titles.loginSubText')}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="group relative form-group flex flex-col space-y-1.5 w-full">
          <label htmlFor="email" className="form-label capitalize text-txt-label">
            {t('loginPage.titles.email')}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="peer input-field"
            placeholder={t('loginPage.titles.inputFieldText') + t('loginPage.titles.email')}
          />
          <div className="invisible peer-invalid:visible input-icon">
            <AlertCircle />
          </div>
          {errors.email !== '' &&
            <p className="invisible peer-invalid:visible input-err">
              {t('loginPage.validations.'+errors.email)}
            </p>
          }
          {/* <p className="invisible peer-invalid:visible input-err">
            {errors.email}
          </p> */}
        </div>

        <div className="group relative form-group flex flex-col space-y-1.5 w-full">
          <label htmlFor="password" className="form-label capitalize text-txt-label">
            {t('loginPage.titles.password')}
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="peer input-field"
            placeholder={t('loginPage.titles.inputFieldText') + t('loginPage.titles.password')}
          />
          <div className="input-icon" onClick={togglePasswordVisibility}>
            {showPassword ? <Eye /> : <EyeOff />}
          </div>
          {errors.password !== '' &&
            <p className="invisible peer-invalid:visible input-err">
              {t('loginPage.validations.'+errors.password)}
            </p>
          }
          {/* <p className="invisible peer-invalid:visible input-err">
            {errors.password}
          </p> */}
        </div>

        <div className="relative items-center form-group flex flex-row justify-between space-y-1.5 w-full">
          <div className="flex flex-row items-center gap-x-2 text-txt-label">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className="chkbox"
            />
            <label htmlFor="rememberMe" className="form-label">
              {t('loginPage.titles.rememberMe')}
            </label>
          </div>
          <button
            type="button"
            className="hlink-txt"
            onClick={gotoResetPassword}
          >
            {t('loginPage.titles.forgot') + ' ' + t('loginPage.titles.password') + '?'}
          </button>
        </div>

        <div className="form-group flex flex-col w-full">
          <button type="submit" className="submit-btn">
            {t('loginPage.titles.login')}
          </button>
        </div>

        
        {user === "admin" &&
          <div className='relative items-center form-group flex flex-row w-full gap-x-1 text-txt-label'>
            <label htmlFor="signUp" className="form-label">
              {t('loginPage.titles.noAccount')}
            </label>
            <button
              type='button'
              id='signUp'
              name='signUp'
              className='hlink-txt'
              onClick={gotoSignup}
            >
              {t('loginPage.titles.signUp')}
            </button>
          </div>
        }
        
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  user: PropTypes.string.isRequired,
};

export default LoginForm;


// TODO connect API
// ? Maybe use react-hook-form for better version