const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.method == "POST") {
      // Saving user data from the request
      let requestData = "";

      req.on("data", (data) => {
        requestData += data;
      });

      req.on("end", () => {
        const user = JSON.parse(requestData);

        if (req.url === "/register") {
          // Writing the new user to users.txt file
          fs.appendFileSync(
            "./users.txt",
            "\r\n" + user.username + ":" + user.password
          );
          res.writeHead(200);
          res.write("User registered successfully");
          res.end();
        } else if (req.url === "/login") {
          let found = false;

          // Reading users in users.txt file
          fs.readFile("./users.txt", (err, data) => {
            // Loop over users in users.txt
            data
              .toString()
              .split("\r\n")
              .forEach((u) => {
                const [username, password] = u.split(":");
                // If user exists with the right credentials
                // return logged in successfully with 200 status code
                if (user.username === username && user.password === password) {
                  found = true;
                  res.writeHead(200);
                  res.write("Logged in successfully");
                  res.end();
                }
              });

            // If user doesn't exist
            // return error
            if (!found) {
              res.writeHead(422);
              res.write("Wrong username or password");
              res.end();
            }
          });
        }
      });
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  })
  .listen(3000);
