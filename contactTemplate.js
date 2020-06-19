const ContactTemplate = `
<!DOCTYPE html>
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
        background-color: green;
        color: white;
        margin: 0;
    }
</style>

<body>
    <div class="wrapper">
        <h1>Contact Request</h1>
        <span>Name: {{name}}</span>
        <span>Phone: {{phone}}</span>
        <span>Message: {{message}}</span>
    </div>

</body>

</html>`;
module.exports = ContactTemplate;