const addNewClient = (arr) => {
    let newArr = [...arr];
    let newClient = {...arr[0]};

    for (let key in newClient) {
        if (typeof newClient[key] === "string") newClient[key] = "";
        if (typeof newClient[key] === "number" && key !== "id") newClient[key] = 0;
    }

    newClient.id = arr[arr.length - 1].id + 10;
    newArr.push(newClient);

    return newArr;
}

export default addNewClient;