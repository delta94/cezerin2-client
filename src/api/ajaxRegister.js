export default class AjaxRegister {
	constructor(client) {
		this.client = client;
	}

	retrieve(data) {
		return this.client.post(`/register`, data);
	}
}
