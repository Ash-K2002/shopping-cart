import PropTypes from 'prop-types';

export default function HomePage({setActive}){
    setActive(1);
    return(
        <>
        <h2>Homepage!!</h2>
        </>
    );
}

HomePage.propTypes={
    setActive:PropTypes.func,
}