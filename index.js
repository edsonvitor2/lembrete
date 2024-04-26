// Defina uma função assíncrona para encapsular o código
async function sendMessage() {
    const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message";

    try {
        const response = await fetch(GZAPPY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'user_token_id': '9295339e-ed3f-4067-aacf-0001d8ec2889'
            },
            body: JSON.stringify({
                instance_id: 'GMJ60NC61FTBT7HBI1RSV80B',
                instance_token: '6bbb28e0-599c-451e-82ad-dba1b98b5f12',
                message: ["Olá, tudo bem?", "Você tem um novo agendamento marcado, Sr Cliente"],
                phone: ["+5562995729379"]
            })
        });

        const data = await response.json();
        console.log(data);
        // { msg: 'Messages sent' }

    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
    }
}

// Chame a função assíncrona para iniciar o envio da mensagem
sendMessage();
