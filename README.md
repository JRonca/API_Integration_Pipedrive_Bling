<h1  align="center">API Integration Pipedrive and Bling</h1>

<p  align="center">Uma API que realiza integração entre o Pipedrive, Bling e mongoDB</p>

<p  align="center">
<a  href="#use">Como Usar</a> •
<a  href="#features">Features</a> 
</p>
<hr/>
<h2 id="use" align="center">Como Usar</h2>

```bash
# Clone o repositório
$ git clone https://github.com/JRonca/api_integration_pipedrive_bling.git

# Acesse a pasta do projeto
$ cd api_integration_pipedrive_bling

# Instale as dependencias
$ yarn

# OBS.: crie um .env com suas variáveis ambientes usando o .env.example como guia

# Execute o servidor em modo de desenvolvimento
$ yarn dev
```


<h2 id="features" align="center">Features</h2>

- [x] Busca de oportunidades com status won no Pipedrive e inserindo as mesmas como pedido no Bling
- [x] Uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.
- [x] Endpoint para trazer os dados consolidados da collection do MongoDB.
- [ ] Testes
