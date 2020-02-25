# Node-event-saga
A custom implementation of the SAGA pattern using event driven architecture, created within a single nodejs process.

### **Events diagram**
In this diagram I show how a transaction is done through different messages. For each operation two types of SUCCESS and FAIL messages are issued, in the case of FAIL status updates are applied to maintain consistency.

<img src="https://github.com/damiancipolat/Node-event-saga/blob/master/doc/Saga%20payment-Architecture.png?raw=true" width="800px"/>

The services retrieves config from json files stored in a s3 bucket.
