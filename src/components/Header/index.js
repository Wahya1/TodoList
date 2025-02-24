import { connect } from "react-redux";
import Header from "./component";
const mapStateToProps =(store) => {
    console.log({store})
    return {name:store.name, lastname: store.lastname}
}

const HeaderContainer = connect(mapStateToProps, null)(Header); 
export default HeaderContainer ;

