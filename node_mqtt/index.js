var mysql = require('mysql');

//var moment = require("moment");

var con = mysql.createConnection({
  host: "raspberrypi.local",
  database : "teste",
  user: "root",
  password: "root",
});

con.connect(function(err) {
  console.log("Tentando conexão!");
  if (err) throw err;
  console.log("Conectado!");
  con.end();
});

 /*
function insereDados(msg){
  var dataAtual = new Date();
  var dia = dataAtual.getDate();
  var mes = (dataAtual.getMonth() + 1);
  var ano = dataAtual.getFullYear();
  var horas = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  var segundos = dataAtual.getSeconds();
  var agora = ano + "-" + mes + "-" + dia + " " + horas + ":" + minutos + ":" + segundos ;
  console.log(agora);

  var databrasilminutos = moment().format("YYYY-MM-DD hh:mm:ss");
  console.log(databrasilminutos); //será mostrado 27-11-2020 22:00:00

  //var sql = "INSERT INTO sensor (`temperatura`,`time`) VALUES ('"+msg+"','"+agora+"');";
  var sql = "INSERT INTO sensor (`temperatura`) VALUES ('"+msg+"');";

  con.query(sql, function (err, result){
    if (err) throw err;
    console.log("gravou dados em teste!");
  });
};

/*

const options = {
    clientId:"mqttjs01",
    username:"admin",
    password:"admin1234",
    clean:true
  };

const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://servidorgtronic.tk', options)

client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      //client.publish('presence', 'Hello mqtt')
      console.log("Subescrito no topico \"presence\"!")
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  insereDados(message.toString());
  console.log(message.toString())
  //client.end()
})
*/