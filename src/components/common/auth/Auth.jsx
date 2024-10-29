import PropTypes from "prop-types";
import LangToggleBtn from "../languageToggle/LangToggleBtn";

const AuthContainer = ({children}) => {
    return (
        <div className="min-h-screen max-h-screen flex">
            {/* Left Side - Image */}
            <div className="flex w-1/2 bg-right-1 bg-cover bg-auth">
                <div className="flex items-center justify-center w-full h-full">
                    {/* Logo and Title */}
                    <div className="text-center text-white flex items-center">
                        <img src="/logo_white.png" alt="DEX.ID Logo" className="mx-auto size-24 mr-6" />
                        <h1>DEX.ID</h1>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className=" w-1/2 items-center justify-center">
                <div id="header" className="fixed top-0 right-0 flex justify-end m-10">
                        <LangToggleBtn />   
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                    {children}
                </div>
                
            </div>
        </div>
    )
}

AuthContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthContainer;

// TODO: use columns-2