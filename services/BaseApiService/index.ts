import ky from 'ky';

interface  ApiKey { "API-KEY" : string }

class BaseApiService {
    public readonly api = ky.create({ prefixUrl: 'https://jsonplaceholder.typicode.com/' })
    private readonly apiKey: string = 'key';
    public readonly header: ApiKey = { "API-KEY" : this.apiKey };
}

export default BaseApiService

