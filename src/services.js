export const BASE_URL = 'https://mate-academy.github.io/phone-catalogue-static';

export let getAll = async () => {
    let response = await fetch(BASE_URL + '/api/phones.json');
    let phones = await response.json();
    return phones;
}
export let getById = (id) => {
    return fetch(BASE_URL + '/api/phones/' + id + '.json').then((response) => response.json());
};