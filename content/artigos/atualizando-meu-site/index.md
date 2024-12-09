+++
title= 'Atualizando meu site.'
date= 2024-04-08
draft= false
description= "Transformando meu site em algo dinâmico" 
+++

Comecei a desenvolver o meu site pessoal em maio do ano passado. Utilizei somente HTML e CSS para construí-lo e o [Github Pages](https://pages.github.com/) para fazer o deploy. Ele passou por diversas alterações com o passar do tempo, nelas fui reduzindo a quantidade de texto e imagens com o objetivo de ser algo minimalista.

Só que não durou muito e comecei a sentir que precisava de algo a mais. Nessa época eu já publicava alguns artigos no [Medium](https://medium.com/), mas eu gostaria que eles fossem publicados em um espaço feito por mim. foi aí que desenvolvi um [jardim digital](https://maggieappleton.com/garden-history).

Usei o framework [Hugo](https://gohugo.io/) para desenvolvê-lo, a proposta de conteúdos em Markdown poderem ser a base do site me interessou bastante por eu já escrever os artigos nessa linguagem. Só que eu sabia muito pouco da ferramenta, e isso me deixava bastante inseguro em relação a manutenção do projeto, mas continuei fazendo mesmo assim.

Ficar mantendo o site principal e o jardim, em espaços e tecnologias diferentes, demandava um pouco mais de trabalho, mas eu preferia assim do que arriscar fazer algo para melhorar isso.

Foi então que recentemente recebi um e-mail de uma pessoa dizendo que tinha gostado de como os projetos estavam alinhados e me pediu indicações de como começar a fazer também. Esse feedback era o que eu precisava para ir além.

Pode parecer irônico um "elogio" servir para a mudança completa de um projeto, mas o fato de ter a opinião de alguém que me conheceu por causa desses sites acabou me dando um gás para além de ajudá-lo, me ajudar também.

Foi aí que aproveitei o mês de março, no qual entrei em um recesso, para desenvolver algo mais sólido e centralizado. Eu tinha as seguintes propostas:

- Juntar tudo em um lugar só;

- Melhorar o UI/UX;

- Dinamizar o conteúdo.

A jornada pela melhoria da interface me ensinou bastante coisa. A ideia inicial era fazer uma sidebar inspirado no site do [Brian Lovin](https://brianlovin.com/). Entretanto, comecei a me sentir limitado usando o componente com o passar do desenvolvimento. Então cancelei a ideia.

Em relação às cores, usei de referência o design system [Atomize](https://atomizedesign.com/) para deixar de usar pretos e brancos sólidos (#FFF e #000).

Além da interface, tive o desafio de aprender a mexer definitivamente no Hugo, sem usar temas de terceiros, criando uma estrutura do zero.

Para quem só quer publicar seus conteúdos de maneira descompromissada, é melhor usar os temas disponíveis no próprio site do framework. Eles me serviram por muito tempo. Optei por fazer algo personalizado pois estava se tornando um empecilho manter os projetos separados, como dito anteriormente.

Graças a [esse vídeo](https://www.youtube.com/watch?v=6BRZ-yHjYwo), não demorei muito para fazer o escopo do projeto. Grande parte do tempo foi dedicado em otimizações relacionadas às mídias e a responsividade do novo site - sendo a produção da navbar uma das coisas mais divertidas de fazer por conta do segundo fator.

Nas últimas etapas do projeto, aprendi a usar o  `{{range}}`  para gerar os meus projetos dinamicamente, sem que eu precisasse colocar tudo ali manualmente.

Por exemplo, no início eu tinha feito a section dos projetos manualmente alí. Quando comecei a usar o `{{range}}`, além de diminuir o código em 1/3, a atualização não requer mais a alteração na estrutura do projeto, basta eu atualizar o database em `.yaml`.

#### Section dinâmica (HTML e GO):

```html {id="codeblock" lineNos=inline tabWidth=2}
<section class="projetos">
    <h2>Projetos</h2>
        <div class="card-grid">
            {{ range .Site.Data.projects.data }}
                {{ partial "card" . }}
            {{ end }}
            <a class="card next" href="">
                <p>O próximo pode ser o seu!</p>
            </a>
        </div>  
</section>
```

#### Database (YAML):

```yaml {lineNos=inline tabWidth=2}
data:
  - title: "Scot Scot"
    img: "/img/scotscot.png"
    url: "https://www.thenzolima.com.br/scotscot/"
  - title: "Posterpack"
    img: "/img/poster.png"
    url: "https://www.thenzolima.com.br/posterpack/"
  - title: "Luz, Câmera e Cinema"
    img: "/img/camera.png"
    url: "https://www.thenzolima.com.br/LCC/"
```

O layout final me agradou bastante. Agora, além de ter uma manutenção mais tranquila, tenho total controle da interface, o que antes era uma das minhas principais limitações.

Se você estiver com receio de aprender alguma coisa por achar muito difícil, trace um roadmap que atenda aos seus objetivos e comece.

Use (moderadamente) a inteligência artificial ao seu favor, você não será "menos inteligente" por isso.

O repositório deste site está disponível no [Github](https://github.com/thenzolima/thenzolima.com.br).

---

Espero que você tenha gostado do texto. Não deixe de comentar e compartilhar com outras pessoas que têm interesse neste assunto.
