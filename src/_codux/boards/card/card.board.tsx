import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card />,
    environmentProps: {
        windowBackgroundColor: '#668a56',
        windowWidth: 310.6666666666667,
        windowHeight: 378.6666666666667,
    },
    isSnippet: false,
});
