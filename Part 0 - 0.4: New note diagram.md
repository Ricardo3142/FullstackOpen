SequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Enters note and clicks "Save"
    Browser->>Server: POST /new_note (form data)
    activate Server
    Server-->>Browser: 302 Redirect to /notes
    deactivate Server

    Browser->>Server: GET /notes
    activate Server
    Server-->>Browser: HTML document
    deactivate Server

    Browser->>Server: GET /main.css
    activate Server
    Server-->>Browser: CSS file
    deactivate Server

    Browser->>Server: GET /main.js
    activate Server
    Server-->>Browser: JavaScript file
    deactivate Server

    Note right of Browser: Browser executes JavaScript

    Browser->>Server: GET /data.json
    activate Server
    Server-->>Browser: JSON data (notes)
    deactivate Server

    Note right of Browser: Render notes on the page
