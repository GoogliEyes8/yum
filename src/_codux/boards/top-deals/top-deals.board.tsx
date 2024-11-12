import { createBoard } from '@wixc3/react-board';
import { TopDeals } from '../../../components/top-deals/top-deals';

export default createBoard({
    name: 'TopDeals',
    Board: () => <TopDeals />,
    isSnippet: false,
    environmentProps: {
        windowWidth: 1249.113092671254,
        windowHeight: 367.6666666666667,
    },
});
