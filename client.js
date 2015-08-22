var client = net.connect({port: PORT}, function() {
    console.log('connected to server');
    client.write('world!\r\n');
});

client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});

client.on('end', function(){
  console.log('disconnected from server');
});