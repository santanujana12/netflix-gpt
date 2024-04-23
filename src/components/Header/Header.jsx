import NetFlixLogo from "../../utils/Logos/Netflix_Logo_PMS.png"

const Header = () =>{
    return (
      <div className="absolute px-8 py-2 bg-gradient-to-b from-slate-800">
        <img className="w-52" src={NetFlixLogo} alt="LogoImage" />
      </div>
    );
}

export default Header;