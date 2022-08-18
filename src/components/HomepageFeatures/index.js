import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Registrate en Agile Innova Academy',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Al ingresar a nuestra comunidad de Agile Innova Academy quedarás inscrito oficialmente al Explorer Course y podrás acceder a nuestro canal oficial de Slack
      </>
    ),
  },
  {
    title: 'Estudia el contenido del Explorer Course',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Prepara y estudia el contenido del Explorer Course de manera autónoma e ingresa a los "Live Workshops" semanales con nuestros Agiler Experts
      </>
    ),
  },
  {
    title: 'Realiza el Explorer Challenge',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Al registrarte en Agile Innova Academy vas a tener acceso al "Explorer Challenge", en este evaluamos los conceptos que aprendiste en el curso y es tu carta de entrada para GANARTE una BECA en nuestra Academia.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
