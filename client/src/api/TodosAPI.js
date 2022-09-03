const TodosAPI = {

    getData() {
        return fetch(process.env.VUE_APP_TODOS_API_URL + "todos",
            {
                method: "GET"
            });
    },

    postData(someID) {
        return fetch(process.env.VUE_APP_TODOS_API_URL + "todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: someID })
        })
    }

}

export {TodosAPI};
