import classNames from 'classnames';
import styles from './top-deals.module.scss';
import { Card } from '../card/card';
import Pasta1Jpg from '../../assets/pasta1.jpg';
import Pasta2Jpg from '../../assets/pasta2.jpg';
import SaladJpg from '../../assets/salad.jpg';
import ShakeJpg from '../../assets/shake.jpg';
import ItalianJpg from '../../assets/italian.jpg';

export interface TopDealsProps {
    className?: string;
}

export const TopDeals = ({ className }: TopDealsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <h2 className={styles.header1}>Today&apos;s Top Deals</h2>
                <div className={styles.cards}>
                    <Card imageUrl={Pasta1Jpg}>Pasta</Card>
                    <Card imageUrl={Pasta2Jpg}>Flower Pasta</Card>
                    <Card imageUrl={SaladJpg}>Salad</Card>
                    <Card imageUrl={ShakeJpg}>Milk Shakes</Card>
                    <Card imageUrl={ItalianJpg}>Italian Foods</Card>
                </div>
            </div>
        </div>
    );
};
