import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff, AlertCircle } from 'react-feather';
import PropTypes from 'prop-types';

const SignupForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    companyName: '',
    companyEmail: '',
    brNumber: '',
    companyLogo: null,
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // For file input
    });
    setErrors({ ...errors, [name]: '' }); // Reset error for the field
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};
    let valid = true;

    if (!formData.companyName) {
      newErrors.companyName = 'This field cannot be empty';
      valid = false;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!formData.companyEmail || !emailRegex.test(formData.companyEmail)) {
      newErrors.companyEmail = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.brNumber) {
      newErrors.brNumber = 'Please enter a valid BR number';
      valid = false;
    }

    if (!formData.companyLogo) {
      newErrors.companyLogo = 'Please upload a company logo';
      valid = false;
    }

    if (!formData.password || formData.password.length < 8 || !/\d/.test(formData.password) || !/[!@#$%^&*]/.test(formData.password)) {
      newErrors.password = 'Password must be 8-16 characters and contain both numbers and special characters';
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password and confirm password does not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (API call, etc.)
      console.log('Form data', formData);
    }
  };

  return (
    <div className="container-sm mx-auto space-y-8">
      <h2>Sign up</h2>
      <p>Create your company account</p>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Company Name */}
        <div className="form-group">
          <label htmlFor="companyName">Company Name*</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter company name"
          />
          {errors.companyName && <p className="input-error">{errors.companyName}</p>}
        </div>

        {/* Company Email */}
        <div className="form-group">
          <label htmlFor="companyEmail">Company Email*</label>
          <input
            type="email"
            name="companyEmail"
            id="companyEmail"
            value={formData.companyEmail}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter company email"
          />
          {errors.companyEmail && <p className="input-error">{errors.companyEmail}</p>}
        </div>

        {/* BR Number */}
        <div className="form-group">
          <label htmlFor="brNumber">Company BR Number*</label>
          <input
            type="text"
            name="brNumber"
            id="brNumber"
            value={formData.brNumber}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter business registration number"
          />
          {errors.brNumber && <p className="input-error">{errors.brNumber}</p>}
        </div>

        {/* Company Logo */}
        <div className="form-group">
          <label htmlFor="companyLogo">Company Logo*</label>
          <input
            type="file"
            name="companyLogo"
            id="companyLogo"
            onChange={handleInputChange}
            accept=".png, .jpg, .jpeg"
            className="input-file"
          />
          {errors.companyLogo && <p className="input-error">{errors.companyLogo}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Create a password"
          />
          <div className="toggle-password" onClick={togglePasswordVisibility}>
            {showPassword ? <Eye /> : <EyeOff />}
          </div>
          {errors.password && <p className="input-error">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <p className="input-error">{errors.confirmPassword}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Create Account</button>
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  user: PropTypes.string,
};

export default SignupForm;
