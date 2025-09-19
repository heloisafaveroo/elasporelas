
import React, { useState } from 'react';


const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setMessage({ text: 'As senhas não coincidem.', type: 'error' });
            return;
        }

        if (password.length < 6) {
            setMessage({ text: 'A senha deve ter pelo menos 6 caracteres.', type: 'error' });
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/register', { // Assuming this is your backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                setMessage({ text: 'Cadastro realizado com sucesso! Você começará a receber nossas atualizações.', type: 'success' });
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            } else {
                setMessage({ text: data.message || 'Erro ao cadastrar. Tente novamente.', type: 'error' });
            }
        } catch (error) {
            console.error('Erro:', error);
            setMessage({ text: 'Ocorreu um erro na rede. Tente novamente mais tarde.', type: 'error' });
        }
    };

    return (
        // Using a wrapper to center the content, similar to the modal
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '20px' }}>
            <div className="modal-content" style={{ position: 'relative', animation: 'none', display: 'block' }}>
                <h1>Receba Nossas Atualizações e Participe!</h1>
                <p>Ao se cadastrar, você receberá por e-mail todas as novidades do nosso site, informações sobre eventos futuros, e conteúdos exclusivos do "Elas por Elas". Mantenha-se conectada e faça parte da nossa comunidade!</p>
                
                <form id="cadastroFormModal" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="emailModal">E-mail:</label>
                        <input 
                            type="email" 
                            id="emailModal" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordModal">Criar Senha:</label>
                        <input 
                            type="password" 
                            id="passwordModal" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPasswordModal">Confirmar Senha:</label>
                        <input 
                            type="password" 
                            id="confirmPasswordModal" 
                            name="confirmPassword" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit" className="submit-btn">Cadastrar</button>
                    {message.text && <p className={`message ${message.type}`}>{message.text}</p>}
                </form>
            </div>
        </div>
    );
};

export default Cadastro;
