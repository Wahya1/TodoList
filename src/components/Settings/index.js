import { connect } from "react-redux";
import { updateprofile } from "../../redux/profileReducer/action";
import Settings from "./component";

const mapStateToProps =(store) => {
    console.log({store})   ;
    return {name:store.name, lastname: store.lastname};

}

const mapDispatchToProps ={
  updateprofile
}
const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings); 
export default SettingsContainer ;

