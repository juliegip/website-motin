import React from "react";
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';
import { Typography } from "@mui/material";
import { ContactEmailProps } from "../../types";


export function ContactEmail({ name, phone, email, company, town, title, message}: ContactEmailProps) {

    return (
        <Html>
            <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px' }}>
                <h1 style={{ color: '#333', fontSize: '24px', marginBottom: '10px' }}>Nouveau message de {name} - {email} - {phone}</h1>
                <p style={{ color: '#666', fontSize: '16px', marginBottom: '5px' }}>Nom de la société: {company}</p>
                <p style={{ color: '#666', fontSize: '16px', marginBottom: '5px' }}>Ville: {town}</p>
                <p style={{ color: '#666', fontSize: '16px', marginBottom: '5px' }}>Titre du message: {title}</p>
                <p style={{ color: '#333', fontSize: '18px', marginBottom: '20px' }}>{message}</p>
                <Button href={`mailto:${email}`} style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>Répondre à {name}</Button>
            </div>
        </Html>
    );
}
