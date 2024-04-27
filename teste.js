// Altere a forma de importar o 'node-fetch' para uma importação dinâmica usando 'import()'
    const XLSX = require('xlsx');
    const moment = require('moment');
    const cron = require('node-cron');

    const dados = [
        { nome:"Lucas Bernardino de Castro" , dataNascimento: "27/04" , filial: "Caldas Novas"}, //"16/09"
        { nome:"Samuel Martins Brasil" , dataNascimento: "15/02" ,  filial: "Caldas Novas"},
        { nome:"Adriana Matos Mourao Fernandes" , dataNascimento: "22/07" ,  filial: "Goiania"},
        { nome:"Alline Pacheco De Almeida" , dataNascimento: "17/01" ,  filial: "Caldas Novas"},
        { nome:"Amanda Beatriz Rosa Alves Teixeira" , dataNascimento: "29/03" ,  filial: "Goiania"},
        { nome:"Andressa Magalhaes Santos" , dataNascimento: "29/11" ,  filial: "Goiania"},
        { nome:"Angela Maria Santos Silva" , dataNascimento: "29/09" ,  filial: "Caldas Novas"},
        { nome:"Anna Laura de Oliveira" , dataNascimento: "06/02" ,  filial: "Goiania"},
        { nome:"Beatriz Salles Rodrigues" , dataNascimento: "03/04" ,  filial: "Caldas Novas"},
        { nome:"Bruno Estevão Pereira Mendonça" , dataNascimento: "12/07" ,  filial: "Caldas Novas"},
        { nome:"Carine Xavier de Jesus Santos" , dataNascimento: "27/07" ,  filial: "Goiania"},
        { nome:"Carlos Daniel Santos Silva" , dataNascimento: "30/06" ,  filial: "Caldas Novas"},
        { nome:"Cintia Freitas Peixoto" , dataNascimento: "15/04" ,  filial: "Rio Verde"},
        { nome:"Daniel Silvestre do Nascimento" , dataNascimento: "09/04" ,  filial: "Caldas Novas"},
        { nome:"Danilo Rodrigues De Oliveira" , dataNascimento: "19/05" ,  filial: "Goiania"},
        { nome:"Darlethi Horrana Alves Borba Santos" , dataNascimento: "25/08" ,  filial: "Goiania"},
        { nome:"David Xavier de Andrade" , dataNascimento: "07/12" ,  filial: "Goiania"},
        { nome:"Deuzimar Soares da Silva" , dataNascimento: "25/09" ,  filial: "Goiania"},
        { nome:"Deyvid Henry Fonseca De Jesus" , dataNascimento: "31/10" ,  filial: "Rio Verde"},
        { nome:"Edson Vitor De Sousa" , dataNascimento: "30/12" ,  filial: "Goiania"},
        { nome:"Eiza Carla Genesio De Lima" , dataNascimento: "21/12" ,  filial: "Goiania"},
        { nome:"Emilly Aparecida Araujo De Oliveira" , dataNascimento: "31/12" ,  filial: "Caldas Novas"},
        { nome:"Erivan Cardoso Alves" , dataNascimento: "30/06" ,  filial: "Caldas Novas"},
        { nome:"Felipe Porto Sousa Rêgo" , dataNascimento: "29/12" ,  filial: "Caldas Novas"},
        { nome:"Flavio Ferreira Da Silva" , dataNascimento: "05/10" ,  filial: "Goiania"},
        { nome:"Francisco Gustavo Alves Gomes" , dataNascimento: "10/09" ,  filial: "Caldas Novas"},
        { nome:"Francisco Sildeni da Silva" , dataNascimento: "14/08" ,  filial: "Goiania"},
        { nome:"Gabriel da Silva Campos" , dataNascimento: "10/06" ,  filial: "Caldas Novas"},
        { nome:"Gabriel Goncalves Monteiro" , dataNascimento: "15/02" ,  filial: "Caldas Novas"},
        { nome:"Gabriel Rodrigues da Silva" , dataNascimento: "22/10" ,  filial: "Goiania"},
        { nome:"Gabrielly Ferreira Da Silva Gomes" , dataNascimento: "06/12" ,  filial: "Goiania"},
        { nome:"Gabryella Bueno Do Carmo" , dataNascimento: "20/11" ,  filial: "Rio Verde"},
        { nome:"Guilherme Almeida Gomes" , dataNascimento: "30/11" ,  filial: "Caldas Novas"},
        { nome:"Guilherme Dos Santos Mota" , dataNascimento: "28/05" ,  filial: "Caldas Novas"},
        { nome:"Guilherme Henrique Dias Do Nascimento Cardoso" , dataNascimento: "30/05" ,  filial: "Goiania"},
        { nome:"Ieska Mendes Pereira" , dataNascimento: "31/01" ,  filial: "Goiania"},
        { nome:"Isabella Araujo de Oliveira" , dataNascimento: "25/04" ,  filial: "Goiania"},
        { nome:"Isadora Martins Dos Santos" , dataNascimento: "29/10" ,  filial: "Rio Verde"},
        { nome:"Joane Araujo Falcao" , dataNascimento: "05/07" ,  filial: "Goiania"},
        { nome:"João Carlos Ferreira de Carvalho" , dataNascimento: "28/12" ,  filial: "Rio Verde"},
        { nome:"Joao Gabriel Sousa e Silva" , dataNascimento: "13/03" ,  filial: "Caldas Novas"},
        { nome:"João Lucas Gonçalves Guimarães" , dataNascimento: "12/06" ,  filial: "Caldas Novas"},
        { nome:"Julia Camila Vieira Reis" , dataNascimento: "01/05" ,  filial: "Caldas Novas"},
        { nome:"Julia Dias Faria" , dataNascimento: "27/11" ,  filial: "Goiania"},
        { nome:"Kaike Gomes Cruvinel" , dataNascimento: "20/01" ,  filial: "Caldas Novas"},
        { nome:"Kaique Moraes Yosimura" , dataNascimento: "09/07" ,  filial: "Caldas Novas"},
        { nome:"Karoliny Braz De Souza Teixeira Vieira" , dataNascimento: "14/02" ,  filial: "Goiania"},
        { nome:"Karyna Souza Dias Ferreira" , dataNascimento: "06/06" ,  filial: "Rio Verde"},
        { nome:"Kauã Gabriell Ferreira Rodrigues" , dataNascimento: "04/11" ,  filial: "Rio Verde"},
        { nome:"Kauane Camilly de Lima" , dataNascimento: "09/01" ,  filial: "Caldas Novas"},
        { nome:"Kayo Manoel Silva de Oliveira" , dataNascimento: "08/09" ,  filial: "Goiania"},
        { nome:"Leticia Gabrielly Vieira Nunes Machado" , dataNascimento: "16/07" ,  filial: "Caldas Novas"},
        { nome:"Luan De Castro Silva" , dataNascimento: "29/07" ,  filial: "Goiania"},
        { nome:"Luan Oliveira Lima" , dataNascimento: "07/11" ,  filial: "Caldas Novas"},
        { nome:"Lucas Martins Fagundes" , dataNascimento: "29/07" ,  filial: "Caldas Novas"},
        { nome:"Luciana Pereira De Miranda" , dataNascimento: "27/06" ,  filial: "Goiania"},
        { nome:"Luciano de Moraes Perrin" , dataNascimento: "10/08" ,  filial: "Goiania"},
        { nome:"Lucilene Pereira de Franca" , dataNascimento: "18/02" ,  filial: "Goiania"},
        { nome:"Lucilene Pereira de Franca" , dataNascimento: "18/02" ,  filial: "Caldas Novas"},
        { nome:"Lucyelle Barbosa Menezes" , dataNascimento: "25/08" ,  filial: "Caldas Novas"},
        { nome:"Luiz Henrique Santos de Moraes" , dataNascimento: "23/03" ,  filial: "Caldas Novas"},
        { nome:"Luiz Renato Silva Fonseca" , dataNascimento: "09/11" ,  filial: "Rio Verde"},
        { nome:"Maria Alves Cortico Costa" , dataNascimento: "22/11" ,  filial: "Goiania"},
        { nome:"Maria Eduarda Andrade Silva" , dataNascimento: "11/12" ,  filial: "Rio Verde"},
        { nome:"Maria Eduarda Pereira da Mata" , dataNascimento: "20/05" ,  filial: "Goiania"},
        { nome:"Maria Gabriela dos Santos Paiva" , dataNascimento: "14/01" ,  filial: "Caldas Novas"},
        { nome:"Maria Luiza Gonçalves Arantes" , dataNascimento: "23/10" ,  filial: "Caldas Novas"},
        { nome:"Marinalda Lima Alencar" , dataNascimento: "04/10" ,  filial: "Caldas Novas"},
        { nome:"Mayara Rodrigues de Oliveira" , dataNascimento: "05/09" ,  filial: "Caldas Novas"},
        { nome:"Micaelly Estefanny Vieira Reis" , dataNascimento: "10/04" ,  filial: "Caldas Novas"},
        { nome:"Michelle Victoria Santana De Oliveira" , dataNascimento: "09/04" ,  filial: "Goiania"},
        { nome:"Miquéias da Silva Oliveira" , dataNascimento: "22/11" ,  filial: "Caldas Novas"},
        { nome:"Pedro Henrique dos Santos Marques" , dataNascimento: "09/01" ,  filial: "Caldas Novas"},
        { nome:"Rafael Costa de Oliveira" , dataNascimento: "21/12" ,  filial: "Goiania"},
        { nome:"Raquel Ramos Valverde Cipriano" , dataNascimento: "27/08" ,  filial: "Goiania"},
        { nome:"Ronie Von Alves da Silva" , dataNascimento: "04/02" ,  filial: "Goiania"},
        { nome:"Sarah Gabriela Araújo da Silva" , dataNascimento: "10/07" ,  filial: "Caldas Novas"},
        { nome:"Sheila Cristina Honorato Silva" , dataNascimento: "02/10" ,  filial: "Goiania"},
        { nome:"Soniele dos Santos Brito" , dataNascimento: "20/01" ,  filial: "Goiania"},
        { nome:"Tatiane Silva Xavier" , dataNascimento: "02/12" ,  filial: "Goiania"},
        { nome:"Thaynara Araujo Silva" , dataNascimento: "18/12" ,  filial: "Goiania"},
        { nome:"Thiago Borges Rodrigues" , dataNascimento: "23/09" ,  filial: "Caldas Novas"},
        { nome:"Vania Aparecida Dos Santos Eleodoro" , dataNascimento: "18/08" ,  filial: "Goiania"},
        { nome:"Vinicius Ferreira Da Cruz" , dataNascimento: "21/09" ,  filial: "Caldas Novas"},
        { nome:"Vinicius Martins Sousa" , dataNascimento: "18/05" ,  filial: "Goiania"},
        { nome:"Vitoria Carolline Faustino de Jesus" , dataNascimento: "19/08" ,  filial: "Goiania"},
        { nome:"Vitória Lima Gonçalves" , dataNascimento: "19/11" ,  filial: "Rio Verde"},
        { nome:"Willy dos Santos de Castro" , dataNascimento: "26/03" ,  filial: "Caldas Novas"},
        { nome:"Wilton Da Silva" , dataNascimento: "26/12" ,  filial: "Goiania"},
        { nome:"Yanne Vitoria Nogueira Amador" , dataNascimento: "30/08" , filial: "Caldas Novas"}
        ];
        

        async function sendMessage() {
            console.log('Chamando função de envio de mensagem');
        
            const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message";
        
            try {
                const today = moment().format('DD/MM'); // Obtém a data de hoje (mês-dia)
        
                // Verificar cada aniversariante
                for (const pessoa of dados) {
                    const { nome, dataNascimento ,filial} = pessoa;
                    
                    // Dividir a dataNascimento em mês e dia
                    const partes = dataNascimento.split('/');
                    if (partes.length !== 2) {
                        console.log(`Data de nascimento inválida para ${nome}: ${dataNascimento}`);
                        continue; // Pular este registro se a data estiver incorreta
                    }
                    
                    const [mes, dia] = partes;
                    const dataFormatada = `${mes.padStart(2, '0')}/${dia.padStart(2, '0')}`;
                    if (dataFormatada === today) {
                        // É aniversário da pessoa hoje, enviar mensagem
                        const { default: fetch } = await import('node-fetch');
        
                        const response = await fetch(GZAPPY_URL, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'user_token_id': '9295339e-ed3f-4067-aacf-0001d8ec2889'
                            },
                            body: JSON.stringify({
                                instance_id: 'GMJ60NC61FTBT7HBI1RSV80B',
                                instance_token: '6bbb28e0-599c-451e-82ad-dba1b98b5f12',
                                message: `Bom Dia, Hoje é aniversário de ${nome} de ${filial}`,
                                phone: "+5562995729379" // Número de telefone do destinatário
                            })
                            
                        });
                        console.log(`Bom Dia, Hoje é aniversário de ${nome} de ${filial}`);
                        const responseData = await response.json();
                        console.log(responseData);
                        // { msg: 'Messages sent' }
                    }
                }
            } catch (error) {
                console.error('Erro ao processar aniversariantes:', error);
            }
        }
        
        sendMessage();
        
    //setInterval(sendMessage, 10000);

    