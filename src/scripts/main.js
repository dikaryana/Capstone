import data from 'DATA.json';
const data = () => {
    const searchElement = document.querySelector("searchcity");
    const buttonSearchElement = document.querySelector("searchButtoncity");
    const onButtonSearchClicked = () => {
        data.searchCulture(searchcity.value)
            .then(renderResult)
            .catch(fallbackResult)
    };


    buttonSearchcity.addEventListener("click", onButtonSearchClicked);
};
export default data;