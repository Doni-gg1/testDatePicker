import React from 'react';
import i18n from "./i18n";
import Datepicker from './Components/datepicker'
import { withTranslation } from 'react-i18next';



class App extends React.Component{
    constructor(props){
        super(props);

        this.changeLanguage = this.changeLanguagess.bind(this);
    }
    changeLanguagess(ln){
        return () => {
            i18n.changeLanguage(ln);
        }
        
    }
    render(){
        const {t} = this.props
        return (
            <>
            <button onClick={this.changeLanguagess('ru')}>ru</button>
            <button onClick={this.changeLanguagess('kg')}>kg</button>
            <h4>{t("greeteng")}</h4>
                <Datepicker/>
            </>
        );
    }
}



export default withTranslation()(App);