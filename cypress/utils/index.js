


// random email function is the functon for random email

export const randomEmail = () => {
    return (
        Math.random()
            .toString(36)
            .substr(2, 7) + '@vivifyacademy.com'
    );
}