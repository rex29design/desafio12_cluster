const express = require("express")
const numCPUs = require("os").cpus().length

const app = express()
const PORT = parseInt(process.argv[2]) || 8080

app.get("/data", (req, res) => {
    console.log(`Port ${PORT}, ${new Date().toLocaleTimeString()}`);
    res.send(`Server express
    <span style="color:violet;">(Nginx)</span> on ${PORT}
    <b>PID ${process.pid}</b> - Number of cores in this CPU: ${numCPUs}
    `)
})

app.listen(PORT, err => {
    if(err) console.log(err);

    console.log(`Server express ${PORT} - PID ${process.pid}`);
})

// Guardé la configuración de clusters con 'pm2 save' y se restaura con 'pm2 resurrect'
// Adjunto captura de termina con clusters y nginx 