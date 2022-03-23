import RootStore from './RootStore.store'

const storeProvider = RootStore.create({
    contents: [
        {
            id: '1',
            title: 'Title',
            description: 'Some more text',
            seen: false,
            notes: '',
        },
        {
            id: '2',
            title: 'Title 2',
            description: 'Some more text',
            seen: false,
            notes: '',

        },
        {
            id: '3',
            title: 'Title 3',
            description: 'Some more text',
            seen: false,
            notes: '',

        },
        {
            id: '4',
            title: 'Title 4',
            description: 'Some more text',
            seen: true,
            notes: 'First',

        }
    ]
})

export default storeProvider