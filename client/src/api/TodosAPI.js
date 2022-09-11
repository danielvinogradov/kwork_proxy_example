const TodosAPI = {

    getData() {
        return fetch(process.env.VUE_APP_TODOS_API_URL + "todos",
            {
                method: "GET"
            });
    },

    postData({ title, body, userId }) {
        return fetch(process.env.VUE_APP_TODOS_API_URL + "todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, body, userId })
        })
    }

}

export {TodosAPI};
