const saveChanges = (prevInfo, newInfo) => {
    if (!Array.isArray(prevInfo)) return {...prevInfo, ...newInfo};
    let newList = [...prevInfo];
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === newInfo.id) newList[i] = {...newList[i], ...newInfo};
    }

    return newList;
};

export default saveChanges;