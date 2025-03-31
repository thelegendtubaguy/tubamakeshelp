import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
    Img?: string;
    description: ReactNode;
    link: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Docs',
        link: './docs/intro',
        Img: require('@site/static/img/documentation.png').default,
        description: (
            <>
                Check out our open source documentation! Read about our process, materials used, and tips or tricks for making your models look their best.
            </>
        ),
    },
    {
        title: 'Discord Community',
        link: 'https://l.tubaguy.com/euGyp',
        Svg: require('@site/static/img/discord-icon.svg').default,
        description: (
            <>
                Join our community! We love highlighting all the work people put into finishing their models! This is also the best way to keep in touch with all things new at Tuba Makes!
            </>
        ),
    },
    {
        title: 'Get Help',
        link: 'mailto:help@tubamakes.com',
        Img: require('@site/static/img/contact.png').default,
        description: (
            <>
                Whether you've got a problem with your order, need to ask a question, or just want to talk about the weather, we're here for you!
            </>
        ),
    },
];

function Feature({ title, Svg, Img, description, link }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <a href={link}>
                    {Svg && <Svg className={styles.featureSvg} role="img" />}
                    {Img && <img src={Img} className={styles.featureImg} alt={title} />}
                </a>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
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
