


const URL = process.env.REACT_APP_URL;

export const peopleLoader = async ({params}) => {
    const response = await fetch(`${URL}/people`);
    const person = await response.json();
    return person;
}
export const personLoader = async ({params}) => {
    const response = await fetch(`${URL}/people/${params.id}`);
    const person = await response.json();
    return person;
}

