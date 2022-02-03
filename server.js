const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  "/users": "/644/users/?_embed=comments&_embed=sessions",
  "/users/:id": "/644/users/:id?_embed=comments&_embed=sessions",
  "/tattooists": "/644/users?isTattooists=true&_embed=comments&_embed=sessions",
  "/comments": "/644/comments/?_expand=tattooists",
  "/allsessions/:id": "/644/sessions/?userId=:id",
  "/portifolio/:id": "/644/portifolio/?userId=:id",
  depositions: 644,
  sessions: 644,
  tattooists: 644,
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port::", port);

/* A senha do Kenzinho é 123456 */
