/* eslint-disable react/prop-types */

const Link = ({route}) => {
    const { path, name } = route;
    return (
        <a href
        ={path}>{name}</a>
    );
};

export default Link;