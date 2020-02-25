# Node-event-saga
A custom implementation of the SAGA pattern using event driven architecture, created within a single nodejs process.

In this scenario the event bus is a **Event Emitter** into a nodejs process, in more complex project the bus will be sqs or sns in AWS.
This project are only node.js modules and a scaffolding for more realistics scenarios will be necesary to add an api rest interface.

### **Events diagram**
In this diagram I show how a transaction is done through different messages. For each operation two types of SUCCESS and FAIL messages are issued, in the case of FAIL status updates are applied to maintain consistency.

<img src="https://github.com/damiancipolat/Node-event-saga/blob/master/doc/Saga%20payment-Architecture.png?raw=true" width="800px"/>

#### Note:
For this example, I will use for mock the Order, Notification and Payment service the web mocky.io to make fake but real request.

### Events dictionary
Events name with description.

- **ORDER_CREATED**: Initial event of the payment flow.
- **ORDER_CREATED_SUCCESS**: Sucess order creation event.
- **ORDER_CREATED_FAIL**: Order creaation error.
- **PAYMENT_FAIL**: Error in process payment.
- **PAYMENT_SUCCESS**: Payment succeffull.
- **FLOW_END**: Send email with the bill and finish the flow.

#### To run:

```sh
npm install
node app.js
```
