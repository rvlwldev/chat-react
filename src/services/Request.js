class RequestByFetch {
	#token;

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

	setToken = (token) => (this.#token = token);

	post = async (url, body = {}, contentType = "application/json") =>
		await fetch(this.#toURL(url), {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": contentType,
				Authorization: this.#token,
			},
			body: typeof body == "string" ? body : JSON.stringify(body),
		})
			.then(async (data) => await data.json())
			.catch((err) => err);

	get = async (url, params = {}, contentType = "application/json") =>
		await fetch(this.#toURL(url, params), {
			mode: "cors",
			headers: {
				"Content-Type": contentType,
				Authorization: this.#token,
			},
		})
			.then(async (data) => await data.json())
			.catch((err) => err);
}

export default new RequestByFetch();
