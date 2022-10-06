import { writable } from "svelte/store";

const expenses = writable([
   {
      id: 1,
      amount: 10.9,
      paymentMethod: 'Cash',
      category: 'Food',
      date: '25 September 2022',
      details: 'Nasi Ayam'
   },
   {
      id: 2,
      amount: 6,
      paymentMethod: 'Online',
      category: 'Transport',
      date: '27 September 2022',
      details: 'Petrol'
   },
   {
      id: 3,
      amount: 39,
      paymentMethod: 'Wave',
      category: 'Shopping',
      date: '27 September 2022',
      details: 'Uniqlo Pants'
   },

]);

export default expenses;