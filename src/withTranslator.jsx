import React from "react";
import {connect} from "react-redux";
import {dataEng} from "./data-english";
import {dataUkr} from "./data-ukr";


const withTranslator = (WrappedComponent, componentName, flagL) =>{
    // ...и возвращает другой компонент...
    const componentN = componentName;
    //const {flagL} = this.props;
    console.log('flag', flagL);
    class NewComponent extends React.Component {

        render() {

            console.log('props', this.props);

            const data = flagL ? dataEng : dataUkr;

            console.log('name', componentN);

            console.log('data', data);

            const fields = data[componentN];

            console.log('fields', fields);

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

const rand = withConnect(withTranslator);
export default rand;



