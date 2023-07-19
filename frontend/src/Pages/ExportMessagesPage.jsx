import React, { useState } from 'react';
import Papa from 'papaparse';
import { requestData } from '../services/requests';
import { Button, Input, Form } from '../Styles/ExportMessagesPage';
import { formatDate } from '../helper/helper';

const ExportMessagesPage = () => {
    const [user, setUser] = useState('');
    const [csvData, setCsvData] = useState('');
    const [messages, setMessages] = useState([]);
    const [erro, setErro] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await requestData(`/messages/${user}`)
            if (data.messages) {
                const messagesFormated = data.messages.map((message) => ({
                    user: message.isUser ? user : 'ChatBot',
                    text: message.text,
                    date: formatDate(message.date)
                }))
                const csv = Papa.unparse(messagesFormated, {
                    header: true,
                    delimiter: ';',
                });
                setMessages(messagesFormated)
                setCsvData(csv)
            };

        } catch (error) {
            setErro(true)
        }

    };

    const handleDownload = async (e) => {
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mensagens.csv';
        a.click();
        URL.revokeObjectURL(url);
    };

    if (erro) {
        return (<>
            <p>Something went wrong, please refresh the page.</p>
        </>)
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Digite o nome do usuário"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <Button type="submit">Buscar Mensagens</Button>
            </Form>
            {csvData && (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Usuário</th>
                                <th>Mensagem</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message, index) => (
                                <tr key={index}>
                                    <td>{message.user}</td>
                                    <td>{message.text}</td>
                                    <td>{message.date.toString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Button onClick={handleDownload}>Baixar como CSV</Button>
                </>
            )}
        </>
    );
};

export default ExportMessagesPage;