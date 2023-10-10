import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/explorer-course-ai/blog',
    component: ComponentCreator('/explorer-course-ai/blog', 'e11'),
    exact: true
  },
  {
    path: '/explorer-course-ai/blog/archive',
    component: ComponentCreator('/explorer-course-ai/blog/archive', '08b'),
    exact: true
  },
  {
    path: '/explorer-course-ai/blog/first-blog-post',
    component: ComponentCreator('/explorer-course-ai/blog/first-blog-post', 'e54'),
    exact: true
  },
  {
    path: '/explorer-course-ai/blog/long-blog-post',
    component: ComponentCreator('/explorer-course-ai/blog/long-blog-post', 'ab4'),
    exact: true
  },
  {
    path: '/explorer-course-ai/blog/mdx-blog-post',
    component: ComponentCreator('/explorer-course-ai/blog/mdx-blog-post', '03e'),
    exact: true
  },
  {
    path: '/explorer-course-ai/blog/tags',
    component: ComponentCreator('/explorer-course-ai/blog/tags', '117'),
    exact: true
  },
  {
    path: '/explorer-course-ai/blog/tags/docusaurus',
    component: ComponentCreator('/explorer-course-ai/blog/tags/docusaurus', '664'),
    exact: true
  },
  {
    path: '/explorer-course-ai/blog/tags/facebook',
    component: ComponentCreator('/explorer-course-ai/blog/tags/facebook', 'c69'),
    exact: true
  },
  {
    path: '/explorer-course-ai/blog/tags/hello',
    component: ComponentCreator('/explorer-course-ai/blog/tags/hello', 'cc0'),
    exact: true
  },
  {
    path: '/explorer-course-ai/blog/tags/hola',
    component: ComponentCreator('/explorer-course-ai/blog/tags/hola', '482'),
    exact: true
  },
  {
    path: '/explorer-course-ai/blog/welcome',
    component: ComponentCreator('/explorer-course-ai/blog/welcome', '6f3'),
    exact: true
  },
  {
    path: '/explorer-course-ai/challenge',
    component: ComponentCreator('/explorer-course-ai/challenge', 'd85'),
    exact: true
  },
  {
    path: '/explorer-course-ai/markdown-page',
    component: ComponentCreator('/explorer-course-ai/markdown-page', 'ffc'),
    exact: true
  },
  {
    path: '/explorer-course-ai/workshops',
    component: ComponentCreator('/explorer-course-ai/workshops', 'f84'),
    exact: true
  },
  {
    path: '/explorer-course-ai/docs',
    component: ComponentCreator('/explorer-course-ai/docs', '120'),
    routes: [
      {
        path: '/explorer-course-ai/docs/category/-html---css',
        component: ComponentCreator('/explorer-course-ai/docs/category/-html---css', 'af0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/category/-javascript',
        component: ComponentCreator('/explorer-course-ai/docs/category/-javascript', '580'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/category/-prework',
        component: ComponentCreator('/explorer-course-ai/docs/category/-prework', 'bff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/intro',
        component: ComponentCreator('/explorer-course-ai/docs/intro', '238'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/primeros-pasos/',
        component: ComponentCreator('/explorer-course-ai/docs/primeros-pasos/', '6e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/primeros-pasos/instalaciones',
        component: ComponentCreator('/explorer-course-ai/docs/primeros-pasos/instalaciones', '84d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/primeros-pasos/instrucciones-basicas-git',
        component: ComponentCreator('/explorer-course-ai/docs/primeros-pasos/instrucciones-basicas-git', '6cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/primeros-pasos/instrucciones-basicas-markdown',
        component: ComponentCreator('/explorer-course-ai/docs/primeros-pasos/instrucciones-basicas-markdown', 'd38'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-html/animaciones',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-html/animaciones', '5ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-html/bootstrap',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-html/bootstrap', 'a39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-html/conceptos-basicos',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-html/conceptos-basicos', '023'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-html/css-basico',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-html/css-basico', '576'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-html/diseño-responsive',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-html/diseño-responsive', '3ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-html/flex',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-html/flex', '342'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-html/formularios',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-html/formularios', '0e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-html/grid',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-html/grid', '95a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-html/html-css-basico',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-html/html-css-basico', 'de3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-html/html-css-intermedio',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-html/html-css-intermedio', '8be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-html/unidades-posicionamiento',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-html/unidades-posicionamiento', '8cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-js/arreglos',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-js/arreglos', '417'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-js/conceptos-basicos',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-js/conceptos-basicos', '45c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-js/dom',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-js/dom', '756'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-js/estructuras-ciclicas',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-js/estructuras-ciclicas', '2a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-js/estructuras-condicionales',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-js/estructuras-condicionales', 'b13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-js/estructuras-secuenciales',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-js/estructuras-secuenciales', 'e20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-js/eventos',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-js/eventos', '8c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-js/funciones',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-js/funciones', '74c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/explorer-course-ai/docs/tutorial-js/objetos',
        component: ComponentCreator('/explorer-course-ai/docs/tutorial-js/objetos', '306'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/explorer-course-ai/',
    component: ComponentCreator('/explorer-course-ai/', '0e2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
