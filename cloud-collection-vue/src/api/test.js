import service from '@/utils/axios-request.js';

export default {
    hello() {
        return service.get('/hello');
    },
    testPost() {
        return service.post('/test-post');
    }
}


