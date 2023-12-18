/** Database setup for BizTime. */

const { Client } = required("pg");

const client = new Client({
    connectionString: "postgresql:///biztime"
  });
  
  client.connect();
  
  
  module.exports = client;