import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {dataEng} from "./data-english";
import {dataUkr} from "./data-ukr";


const withTranslator = (WrappedComponent, componentName) =>{
    // ...и возвращает другой компонент...
    class NewComponent extends React.Component {
        render() {
            const data = this.props.flagL ? dataUkr : dataEng;
            const fields = data[componentName];
            return <WrappedComponent fields={fields} {...this.props} />;
        }
    }
    return NewComponent;
};
const mapSateToProps = (state) => ({
    flagL: state.headerReducer.englishOn,
    ukrOn: state.headerReducer.ukrOn
});
const withConnect = connect(mapSateToProps, null);

export default compose(
    withConnect,
    withTranslator
);


