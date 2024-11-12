import classNames from 'classnames';
import styles from './card.module.scss';
import SaladJpg from '../../assets/salad.jpg';

export interface CardProps {
    imageUrl?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Card = ({ imageUrl=SaladJpg,children="Yummy Salad",className }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={imageUrl} alt="" className={styles.img1} />
            <div className={styles.div1}>{children}</div>
        </div>
    );
};
