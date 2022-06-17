const { json } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const data = require("./users/users.js");

const app = express();
const PORT = process.env.PORT || 5000;
// const publicDirPath = path.join(__dirname, "../public");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(json());

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);
//some other code

// app.use(express.static(publicDirPath));

// * Get all users or all accounts
app.get("/api/:dir", (req, res) => {
  res.status(200).send(data.loadData(req.params.dir));
});
// * Get user or account by ID
app.get("/api/:dir/:id", (req, res) => {
  const users = data.loadData(req.params.dir);
  const user = users.filter((u) => u.id == req.params.id);
  res.status(200).send(user);
});
// * Get Filtered users by thier money (above or bellow query)
app.get("/totalMoney", (req, res) => {
  const users = data.filterUsers(parseInt(req.query.money), req.query.isAbove);
  // console.log(chalk.yellow.inverse(typeof req.query));
  //   console.log(users);
  res.status(200).send(users);
  //   res.status(200).send(typeof req.query.money);
});

app.post("/admin/newAccount", (req, res) => {
  const newUser = req.body;
  data.addUser(newUser);
  res.status(200).send(data.loadData("users"));
});

app.put("/admin/deposite-witherdaw/users", (req, res) => {
  const isValidDeposit = data.depositOrWitherdawMoney(req.body.accountId, req.body.money, req.body.otherId);
  const users = data.loadData("users");
  const user = users.find((u) => u.accounts.includes(req.body.accountId));
  const otheruser = users.find((u) => u.accounts.includes(req.body.otherId));

  isValidDeposit
    ? res.status(200).send([user, otheruser])
    : res.status(200).send("Account id not found in active accounts...");
});

app.put("/admin/update/credit", (req, res) => {
  const isValid = data.updateCredit(req.body.accountId, req.body.credit);
  const accounts = data.loadData("accounts");
  const account = accounts.find((a) => a.accountId === req.body.accountId);
  isValid ? res.status(200).send(account) : res.status(200).send("Canot update non active account");
});

// * Step to connect heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log("Server is On-Air on port ", PORT);
});
