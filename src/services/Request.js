class RequestByFetch {
	#toURL(/** @type String  */ rawURL, params = {}) {
		const url = rawURL.startsWith("/")
			? new URL(`${process.env.REACT_APP_SERVER}${rawURL}`)
			: new URL(`${process.env.REACT_APP_SERVER}/${rawURL}`);

		if (params)
			Object.keys(params).forEach((key) =>
				url.searchParams.append(key, params[key])
			);

		return url;
	}

	async post(url, body, authorization, contentType = "application/json") {
		return await fetch(this.#toURL(url), {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": contentType,
				Authorization: authorization,
			},
			body: typeof body == "string" ? body : JSON.stringify(body),
		}).then(async (data) => await data.json());
	}

	async get(url, params = {}, authorization, contentType) {
		return await fetch(this.#toURL(url, params), {
			mode: "cors",
			headers: {
				"Content-Type": contentType,
				Authorization: authorization,
			},
		}).then(async (data) => await data.json());
	}
}

export default new RequestByFetch();
