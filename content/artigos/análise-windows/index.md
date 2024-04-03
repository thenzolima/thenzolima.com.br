+++
title= "Atualmente, o Windows é um bom sistema?"
date= 2023-02-12
draft= false
tags= ["Windows","Análise"]
categories= ["Sistemas"]
author= "Enzo Lima"
description= 'Uma análise sincera do sistema.'
+++

*Texto editado em: 26/08/2023*

---

Uma amiga que usa Ubuntu já comentou que às vezes tem gatilhos de migrar para o Windows, mas não soube explicar o motivo. E eu já tive esse mesmo sentimento.

No ano passado, fui para o sistema da Microsoft pelo menos umas três vezes. Apesar do sentimento de nostalgia, sempre acontecia o mesmo: Eu acabava voltando para alguma distro em menos de uma semana ou até no mesmo dia.

A ficha logo caia que eu não precisava do Windows, ou que o Linux não estava mais me satisfazendo, era apenas meu lado distro-hopper atacando.

Então decidi me desafiar a usar o sistema da Microsoft como minha ferramenta principal de trabalho e uso geral. Nesse artigo irei documentar:

- Os acertos e falhas do sistema.

- O que me faz preferir o pinguim.

- Uma breve conclusão sobre essa rixa de sistema operacionais.

Para essa experiência, usei o Windows 10 e 11, já que meu intuito é fazer uma crítica geral.

## Debloat e Instalação de Programas

A primeira coisa que eu faço quando instalo qualquer Windows é atualizá-lo e fazer um debloat, removendo a telemetria, o cortana e softwares que não uso. Para isso, uso um [software](https://christitus.com/one-tool-for-everything/) feito pelo Chris Tech Titus com o intuito de facilitar esse processo.

{{< youtube id="vXyMScSbhk4" >}}

Para instalá-lo, basta abrir o powershell como administrador e executar o seguinte comando:

```
irm christitus.com/win | iex
```

Após esse processo, costumo baixar todos os programas que eu uso (apesar do software do Chris ter uma interface gráfica dedicada a instalação de diversos programas, prefiro fazer esse processo manualmente no Windows).

Nunca tive grandes problemas em instalar algo. Esse é um dos pontos positivos do sistema, instalações onde basta apertar alguns botões são bastante intuitivas.

Geralmente, as distribuições linux mais populares costumam implementar lojas de apps. Além de possuir um acervo de softwares, algumas também conseguem instalar programas baixados externamente. Isso faz com que a instalação de softwares seja tão prática e eficaz quanto no Windows.

A Gnome Software vem se destacando cada vez mais nesse nicho. Em atualizações recentes, a ferramenta vem apresentando uma interface mais amigável e sólida para usuários leigos (o que não impede de usuários avançados usufruírem de uma experiência gráfica também).

![gnome](img/gnome.png)

Esse cenário no Windows é um pouco diferente. A Microsoft Store deixa a desejar em aspectos como velocidade de download e aplicativos duvidosos em sua biblioteca. Além de eu não gostar do formato sem diretório que os programas são baixados.

## Interface

Mesmo sendo nativamente pouco customizável, o Windows continua sendo um destaque em relação a interface. Por ocupar mais da metade do mercado de sistemas operacionais, ele cumpre seu papel em ser intuitivo para todos. Não deixa de ter pontos negativos, mas nada é perfeito.

Tanto que, diversas distros possuem uma interface semelhante a do Windows para facilitar a vida de quem está entrando por agora no mundo Linux.

Um problema que “foi melhorado” no Windows 11 mas acaba sendo bastante notável no Windows 10 é o menu iniciar. Apesar de ser muito superior ao seu antecessor (pior erro do Windows 8), continua tendo o mesmo problema de poluição visual, em grande parte por conta dos programas que nem estão instalados no computador e aparecem mesmo assim.

No Windows 11 tem esse mesmo problema, mas com um design menos “agressivo”:

![comparacao](img/comparacao.webp)

## Otimização

O debloat para mim é regra. O Windows 10 e 11 consome muito recursos do computador e mesmo assim são vendidos em dispositivos com processadores atom ou celeron com 4gb RAM, apesar de - com muito esforço - ambos sistemas conseguirem carregar a área de trabalho em computadores menos potentes, está longe de ser o ideal para o uso de qualquer pessoa.

Se alguém está em busca de um computador para uso geral, criação de documentos e estudos, mas está com a grana apertada, sugiro 3 opções:

- Comprar um Chromebook

- Comprar um desses notebooks e trocar o sistema por uma distro Linux otimizada e intuitiva

- Comprar um tablet com um kit de teclado e mouse bluetooth

Usar o sistema para digitar algum documento com o spotify em segundo plano já é o suficiente para usar 70% de 8gb de ram do seu computador.

É fato que os recursos do computador são feitos para ser usados, e geralmente essa memória usada está como cache. Mas não muda o fato disso ser fruto de um sistema mal otimizado com uso exagerado de hardware. Não importa o quão caro for o seu computador, ele terá problemas em relação a desempenho.

## Drivers e Compatibilidade

Na primeira transição do Linux para Windows, tive a ideia de baixar o [driver booster](https://www.iobit.com/pt/driver-booster.php) para evitar problemas em relação a dependências de drivers. Infelizmente, deu bastante errado.

Logo após as atualizações feitas pelo software, meu trackpad e bluetooth pararam de funcionar. Então cheguei à conclusão que não fazer nada além de usar o Windows Update era o suficiente para eu ter uma boa experiência de compatibilidade. 

Muitos usuários sabem que nem sempre foi assim (por isso a existência de softwares de terceiros com essa função). Cada vez mais distros Linux vem trazendo esse conforto com melhorias nos drivers genéricos, além de algumas oferecerem uma versão do sistema específico para placas da NVIDIA, como o [Pop OS](https://pop.system76.com/).

## Segurança e Privacidade

A existência da maioria dos ransomwares para Windows é fruto de falhas de seguranças, e por ser um sistema proprietário, o suporte para reparos dessas falhas depende somente deles (apesar das iniciativas de Bug Hunt da Microsoft, continua sendo um grande problema).

Acredito no seguinte dilema: “O melhor antivírus é o usuário”. Então se o usuário não entrar em sites duvidosos, não baixar programas que pedem para desativar o antivírus durante a instalação ou não acreditar que existe uma bela mãe a poucos quilômetros dele, não tem muito com o que se preocupar em relação a segurança no sistema.

O Windows Defender é uma boa ferramenta para rastreamento de vírus. Observem que não disse a melhor, nem a mais funcional, mas acho improvável que o usuário casual precise de algo a mais além dele. Mas caso alguém queira outra opção, recomendo o [malwarebyte](https://br.malwarebytes.com/).

Não podemos ser tão parcial em relação à privacidade no sistema, sua telemetria faz com que qualquer ação que você faça seja capturada e registrada pela Microsoft.

O software do Chris possui uma opção onde desativa parte dessa telemetria, mas o próprio diz que isso acaba sendo um fator “melhor que nada”. Como a telemetria está presente em todo sistema, caso haja a tentativa de remover algo mais a fundo, é certeiro a obtenção de problemas.

## Atualizações

Não é novidade pra ninguém que as atualizações no Windows são problemáticas - muito menos algo de agora. Desde do Windows 96 havia pop-ups alertando a existência de algum update, e isso foi apenas o começo do que veríamos pela frente nas versões futuras do sistema.

A busca por atualizações pode acontecer a qualquer momento e quando acontece é perceptível a queda de desempenho e o alto uso de disco. Até os usuários leigos já procuram como desabilitar essas atualizações, o que pode trazer consequências como a falta de correção de falhas de segurança. O que é meio irônico, pois quando você atualiza também pode gerar mais falhas.

A grande demanda por atualizações no sistema é resultado do posicionamento da Microsoft em relação ao Windows.

Por tratá-lo como um serviço, um dos argumento da empresa é que as atualizações contínuas são para acompanhar a evolução de hardwares para não haver falhas de compatibilidade ou segurança, além de oferecer um sistema atualizado para o cliente sem que ele pague mais uma bagatela de dinheiro.

Compreendo esse posicionamento, mas não deixo de achar falho.

Há algum tempo atrás era quase um milagre você ligar o Windows 10 e não aparecer o aviso de “Atualizando o Sistema. Por favor não desligue o computador”.

Mas para minha surpresa, durante o período que usei essa versão para o artigo, não tive nenhum problema em relação ao tópico. Isso se dá pela estabilidade que o sistema adquiriu com o tempo. Também é importante ressaltar que a Microsoft já deu data para o [fim do suporte](https://learn.microsoft.com/pt-br/lifecycle/announcements/windows-10-22h2-end-of-support-update) do sistema.

Por outro lado, não posso dizer o mesmo do seu sucessor. Houve poucas vezes onde liguei o Windows 11 e não havia o aviso, se tornando algo extremamente abusivo. Se essa situação é um incômodo para quem usa SSD, imagina para quem ainda está no HDD.

## Softwares by Microsoft

Nativamente, o sistema vem com diversos softwares que podem ser bastante úteis para quem quiser usufruir do ecossistema da Microsoft. Mas a maioria são mal otimizados e bastante limitados em suas funções comparado a outras opções gratuitas com o mesmo intuito.

Quem tem (ou já teve) Windows instalado em HDD, sabe que pode demorar até um minuto para abrir alguma mídia (principalmente fotos). Isso é culpa do software com essa função, portanto, uma solução simples é baixar outro software como o [nomacs](https://github.com/nomacs/nomacs) para substituí-lo.

Felizmente, existem exceções. [PowertToys](https://learn.microsoft.com/pt-br/windows/powertoys/) é um software gratuito e open-source desenvolvido pela Microsoft que vem ganhando cada vez mais reconhecimento, e não é à toa. Ele consiste em ser um leque de utilitários bastante funcionais e intuitivos.

![powertoys](img/powertoys.png)

Outra exceção é o [WSL](https://learn.microsoft.com/pt-br/windows/wsl/install), que pode facilitar a vida de muitos desenvolvedores que trabalham com linux mas preferem o windows. Não irei me aprofundar muito no assunto por nunca ter utilizado a ferramenta, mas vale a menção.

Caso queira saber mais sobre, recomendo [esse artigo](https://www.makeuseof.com/pros-cons-windows-subsystem-for-linux/) e esse vídeo do Diolinux:

{{< youtube id="o1_E4PBl30s" >}}

## Conclusão

Respondendo o título deste artigo: Depende.

Nessa rixa de sistemas operacionais, quem acaba se beneficiando não é o usuário que escolhe apenas um e odeia o resto, e sim quem usufrui e domina todas as opções e reconhece os méritos de cada uma delas.

O Windows continua sendo eficaz em uso profissional e casual. Entretanto, vem perdendo força por conta dos problemas citados.Opções de softwares livres como o Linux Mint vem sendo cada vez mais atrativa para usuários leigos pela acessibilidade e desempenho.

Vale ressaltar que se o usuário se sente confortável usando o Windows, não tem porque trocar. Apesar de ainda valer a pena experimentar outros sistemas.

---

Espero que tenha curtido a leitura. Não deixe de compartilhar para alguém próximo que pode se beneficiar lendo isso.
