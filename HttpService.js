import axios from 'axios';

class HttpService {
    constructor() {
        this.http = axios.create({
            headers: {"Content-Type": "application/json"},
            responseType: 'json'
        });
    }

    doGet(route, transformResponse) {
        return this.http
            .get(route)
            .then(result => {
                if (transformResponse) {
                    return transformResponse(result.data)
                }
                return result.data
            });
    }

    doDelete(route, transformResponse) {
        return this.http
            .delete(route)
            .then(result => {
                if (transformResponse) {
                    return transformResponse(result.data)
                }
                return result.data
            });
    }

    doPost(route, request) {
        return this.http
            .post(route, JSON.stringify(request))
            .then(result => result.data);
    }

    doPut(route, request) {
        return this.http
            .put(route, JSON.stringify(request))
            .then(result => result.data);
    }

    sendFile(route, file) {
        let fd = new FormData();
        fd.append('file', file);
        //fd.append('receptId', receptId);
        return this.http
            .post(route, fd, {
                headers: {'Content-Type': 'multipart/form-data'}
            })
            .then(result => result.data);
    }

    // sendMultipartFile(route, file) {
    //     const formData = new FormData();
    //     formData.append('file', file)
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     }
    //     return  post(route, formData, config)
    // }
}

export default new HttpService();