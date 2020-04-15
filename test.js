var unirest = require("unirest");

var req = unirest("POST", "https://githubdimashirokovv1.p.rapidapi.com/getUser");

req.headers({
	"x-rapidapi-host": "GithubdimashirokovV1.p.rapidapi.com",
	"x-rapidapi-key": "2d1d2e6e45msh44a214b100088e7p16bdf2jsn4a9ede6bd1e7",
	"content-type": "application/x-www-form-urlencoded"
});

req.form({});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});