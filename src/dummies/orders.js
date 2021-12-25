import { users } from './users.js';

export const orders = [
  {
    id: 1,
    amount: '65.94',
    date: 'November 01, 2021',
    status: 'Pending',
    buyer: users[0],
  },
  {
    id: 2,
    amount: '51.61',
    date: 'October 31, 2021',
    status: 'Pending',
    buyer: users[1],
  },
  {
    id: 3,
    amount: '40.32',
    date: 'October 30, 2021',
    status: 'Processed',
    buyer: users[2],
  },
  {
    id: 4,
    amount: '57.89',
    date: 'October 30, 2021',
    status: 'Canceled',
    buyer: users[3],
  },
  {
    id: 5,
    amount: '90.29',
    date: 'October 29, 2021',
    status: 'Processed',
    buyer: users[4],
  },
  {
    id: 6,
    amount: '94.93',
    date: 'October 29, 2021',
    status: 'Completed',
    buyer: users[5],
  },
  {
    id: 7,
    amount: '66.65',
    date: 'October 29, 2021',
    status: 'Completed',
    buyer: users[6],
  },
  {
    id: 8,
    amount: '65.52',
    date: 'October 27, 2021',
    status: 'Canceled',
    buyer: users[7],
  },
  {
    id: 9,
    amount: '74.66',
    date: 'October 26, 2021',
    status: 'Completed',
    buyer: users[8],
  },
  {
    id: 10,
    amount: '35.38',
    date: 'October 26, 2021',
    status: 'Completed',
    buyer: users[9],
  },
];

export const statuses = {
  Pending: 'yellow',
  Processed: 'blue',
  Completed: 'green',
  Canceled: 'gray',
};
