import * as db from "../db/queries";

const displayContent = async function (req, res) {
  // log available usernames in the DB to the terminal.
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

const getNewForm = function (req, res) {
  // display a HTML form to the user with one username input text field
  // render the form
};

const postNewForm = async function (req, res) {
  //save the incoming username data to the DB
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};

export { displayContent, getNewForm, postNewForm };
