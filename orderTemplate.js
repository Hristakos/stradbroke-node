const OrderTemplate = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    span {
        background-color: dodgerblue;
        line-height: 80px;
        color: white;
    }

    .wrapper {
        display: grid;
        margin: 0 20%;
    }

    h1 {
        text-align: center;
        background-color: red;
        color: white;
        margin: 0;
    }
</style>

<body>
    <div class="wrapper">
        <h1>Order Request </h1>
        <span>Company: {{company}}</span>
        <span>Name: {{name}}</span>
        <span>Phone: {{phone}}</span>
        <span> Product: {{product}} </span>
        <span>Quantity: {{quantity}}</span>
        <span>Message: {{message}}</span>
    </div>

</body>

</html>`;
module.exports = OrderTemplate;