//Creating a server for our chat app

const net = require("net");
//Creating an array of all connections made
const arrayOfConnections = [];

const server = net.createServer((connection) => {
  //We have to set the encoding or else we won't be able to read the incoming messages
  connection.setEncoding("utf-8")
  // console.log(connection)
  arrayOfConnections.push(connection)
  // arrayOfConnections.push({id: arrayOfConnections.length, connection: connection})
  const broadcastToEveryoneElse = (data) => {
    for(const client of arrayOfConnections) {
      //We are checking for the reference of the object.
      //We don't want to repeat ourselves, and read our own messages
      //So we are checking to see if the client is not equal to the connection. This allows us to only send messages to everyone else.
      if(connection !== client) {
        client.write(`Client says:${data}`)
      }
    }
  }
  //One way communication
  // connection.on("data", (data) => {
  //   console.log(data)
  //   connection.write(`Someone said: ${data}`)
  // })
  //Upon the event of "data", we want to execute the callback
  //First argument is the type of event, the second is the code we want to execute
  connection.on("data", broadcastToEveryoneElse)
  //Console logging the amount of users in chat on the server side when another user pops in
  console.log("A new client came in", arrayOfConnections.length)
})

server.listen(3000, () => {
  console.log("I am listening")
})