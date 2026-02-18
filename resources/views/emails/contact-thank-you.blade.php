<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Thank You</title>
</head>
<body>

    <h2>Thank You for Contacting Us</h2>

    <p>Dear {{ $contact->name }} {{ $contact->last_name }},</p>

    <p>
        Thank you for reaching out to us. Our team has received your inquiry and will get back to you shortly.
    </p>

    <p><strong>Your Details:</strong></p>

    <ul>
        <li>Email: {{ $contact->email }}</li>
        <li>Phone: {{ $contact->phone }}</li>
        <li>Interested In: {{ $contact->interested_in }}</li>
        <li>Final Application: {{ $contact->final_application }}</li>
    </ul>

    <p>Best Regards,<br>NEICO Team</p>

</body>
</html>
