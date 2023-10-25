const dns = require('dns');  
dns.lookup('www.techdotbit.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
}); 
  console.log('get server:', dns.getServers());  

  dns.resolve4('www.techdotbit.com', (err, addresses) => {  
    if (err) throw err;  
    console.log(`resolve4: ${JSON.stringify(addresses)}`);  
    addresses.forEach((a) => {  
      dns.reverse(a, (err, hostnames) => {  
        if (err) {  
          throw err;  
        }  
        console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);  
      });  
    });  
  });   