import logo from '../images/logo.png'

export default function Header(){
    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo" />
            <h3> mytravel journal. </h3>
        </div>
    );
}