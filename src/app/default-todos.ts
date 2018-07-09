import { Todoclass } from './todoclass';

export const Default_Todo: Todoclass[] = [
    {todoname: `feed dog`,
    editable: false,
    created: new Date(Date.now()),
    checked: false,
    priority: 1,
    repeat: 3},
    {todoname: `go to burger joint`,
    created: new Date(Date.now()),
    editable: false,
    checked: false,
    priority: 4,
    repeat: 9},
]