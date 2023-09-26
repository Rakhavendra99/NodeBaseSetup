export default (router, routes) => {

    return routes.map(route => {
        const middleWare = route.middleware || [];
        switch (route.type) {
            case "GET":
                return router.get(route.path, ...middleWare, route.method);
            case "POST":
                return router.post(route.path, ...middleWare, route.method);
            case "PUT":
                return router.put(route.path, ...middleWare, route.method);
            case "DELETE":
                return router.delete(route.path, ...middleWare, route.method);
        }
    })
}