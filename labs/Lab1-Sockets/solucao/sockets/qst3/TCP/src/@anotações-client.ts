/**
 * * client é uma instância do objeto net.Socket(),
 * * que representa o socket do cliente. Esse objeto
 * * será usado para interagir com o servidor.
 */

/**
 * * client.connect() estabelece uma conexão TCP com o servidor. Ele recebe três parâmetros:
 * *	- serverPort: a porta do servidor para conectar.
 * *	- "localhost": o endereço do servidor. Aqui, "localhost" indica que o servidor está sendo executado na mesma máquina.
 * *	- A função de callback que é executada quando a conexão é estabelecida com sucesso.
 */

/**
 * * O método client.write(message) envia a mensagem para o servidor.
 */

/**
 * * O evento "data" é acionado quando o cliente recebe dados do servidor.
 * * A função de callback é chamada com o parâmetro data, que contém os dados recebidos.
 */

/**
 * * A função data.toString() converte os dados recebidos de
 * * Buffer para string, e a mensagem é registrada no console.
 */

/**
 * * Após processar os dados recebidos, o método client.destroy() é
 * * chamado para fechar a conexão com o servidor. Isso significa
 * * que, após a resposta do servidor, o cliente encerrará a comunicação.
 */
