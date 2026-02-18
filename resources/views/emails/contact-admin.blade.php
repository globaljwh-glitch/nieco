<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Inquiry</title>
</head>
<body>

    <h2>New Contact Form Submission</h2>

    <ul>
        <li>Name: {{ $contact->name }} {{ $contact->last_name }}</li>
        <li>Email: {{ $contact->email }}</li>
        <li>Phone: {{ $contact->phone }}</li>
        <li>Company: {{ $contact->company_name }}</li>
        <li>Address: {{ $contact->street }}, {{ $contact->city }}, {{ $contact->state }} - {{ $contact->zip_code }}, {{ $contact->country }}</li>
        <li>Interested In: {{ $contact->interested_in }}</li>
        <li>Use of Product: {{ $contact->use_of_product }}</li>
        <li>Final Application: {{ $contact->final_application }}</li>
    </ul>

</body>
</html>
