const filterClients = (list, search = true) => {
    if (!Array.isArray(list)) return [];
    return list.filter(b => (search) ? b.balance > 0 : b.balance <= 0);
}

export default filterClients;