import express from 'express';
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//----Uri    ------  params----- --query filter
//locahost:3000/[something else]?filter=ids

app.get("/:name", (req, res) => {
   const { name } = req.params

    res.send(`Hello there ${name}`);

})


// crate a  new get 

app.get("/tasks/all-tasks", (req, res) => {
  const tasks = ["School work with Anouk", "Set Schedule", " Answer coleen"];

  res.status(200).send(tasks);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`We be listening on port $(port)`);
});