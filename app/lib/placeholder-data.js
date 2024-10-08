// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

const { randomUUID } = require("crypto");

// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const products = [
  { id: randomUUID(), category_id: '72046814-612f-4baf-8021-a431049f0c8f', name: 'Torta 25tb. Chá Revelação',  description: 'Abertura Colorida Rosa, Azul, Verde – Composição : 25 tubos de 37mm – Altura média alcançada : 30 metros Classe : C', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null},
  { id: randomUUID(), category_id: '72046814-612f-4baf-8021-a431049f0c8f', name: 'Torta Zenit',  description: 'Abertura Colorida Rosa, Azul, Verde – Composição : 25 tubos de 37mm – Altura média alcançada : 30 metros Classe : C', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null},
  { id: randomUUID(), category_id: '72046814-612f-4baf-8021-a431049f0c8f', name: 'Torta Show da Virada',  description: 'Efeito Vertical e Leque , Diversos efeitos e Cores ( Show Pirotécnico ) – Composição: 82 tubos de 37mm, 26 de 44mm, 30 de 63,5mm e 19 de 75,2mm – Duração aproximada: 240 segundos', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null},
  { id: randomUUID(), category_id: '72046814-612f-4baf-8021-a431049f0c8f', name: 'Torta Acustica', description: '160 Tubos de 37mm efeito Reta/W – 1,50min. Caixa com 1 unidade', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
  { id: randomUUID(),  category_id: '34fbd51a-4571-4d2d-8ecb-adb799ad5c06', name: 'Foguete Sensação Mix',  description: 'Foguete Colorido com Bombas Coloridas com Tubo de 1,7″ (44 mm) / Altura média alcançada: 25 metros / Classe: C / Embalagem: Caixa com 06 Peças', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null},
  { id: randomUUID(),  category_id: '34fbd51a-4571-4d2d-8ecb-adb799ad5c06', name: 'Foguete Chorão Colorido',  description: 'Foguete Colorido com Bombas Chorrão com Tubo de 1,7″ (44 mm) / Altura média alcançada: 25 metros / Classe: C / Embalagem: Caixa com 06 Peças', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null},
  { id: randomUUID(),  category_id: '34fbd51a-4571-4d2d-8ecb-adb799ad5c06', name: 'Foguete Crack com Show de Cores',  description: 'Foguete Colorido que sobe estalando e abre uma Bomba Colorida em cada Tubo de 1,5″ (37 mm) / Altura média alcançada: 25 / Metros / Classe: C / Embalagem: Caixa com 06 Peças', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null},
  { id: randomUUID(),  category_id: 'c8425d44-4d3a-4755-84ad-56bd0e3e70a3', name: 'Rojão de Vara Colorido',  description: '', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null},
  { id: randomUUID(),  category_id: 'c8425d44-4d3a-4755-84ad-56bd0e3e70a3', name: 'Rojão de Vara Folha seca',  description: '', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null},
  { id: randomUUID(),  category_id: '0c76c001-7560-4b8e-80df-1fa84ffe1db4', name: 'Fumaça Colorida Bastão 37 mm',  description: 'Bastão de Fumaça Colorida de 1,5″ (37 mm) / Tempo de aproximado: 20 a 30 Segundos / Cores Disponíveis: Azul, Rosa, Amarelo, Branco, Violeta, Laranja, Preto, Vermelho, Verde / Classe : B / ***Para uso externo***', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null},
  { id: randomUUID(),  category_id: '0c76c001-7560-4b8e-80df-1fa84ffe1db4', name: 'Fumaça Colorida Bastão 20 mm',  description: 'Bastão de Fumaça Colorida de 3/4″ (20 mm) / Tempo de aproximado: 20 a 30 Segundos / Cores Disponíveis: Azul, Amarelo, Branco,  Verde / Classe : B / Valor Unitário R$ 10,000 / Para uso externo', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null},
  { id: randomUUID(),  category_id: '0c76c001-7560-4b8e-80df-1fa84ffe1db4', name: 'Fumaça de lata',  description: 'Lata de Fumaça Colorida de 3″/ Tempo de aproximado: 20 a 30 Segundos / Cores Disponíveis: Azul, Rosa, Amarelo, Branco, Violeta, Laranja, Preto, Vermelho, Verde / Classe : B. Para uso externo', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null},
  { id: randomUUID(),  category_id: 'd85a0ea9-be70-4698-9eb9-3e242be78b08', name: 'Girândola 3600 Cores',  description: 'Aberturas Coloridas – Composição : 144 Tubos de 1,5″ (37 mm) Tempo de duração aproximada : 2,5 Minutos – Altura média alcançada : 30 metros Classe : D Embalagem : Caixa com 1 Peça', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null},
]

// { id: randomUUID(), cateogry_id: '', name: '', description: '', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
// { id: randomUUID(), cateogry_id: '', name: '', description: '', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
// { id: randomUUID(), cateogry_id: '', name: '', description: '', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
// { id: randomUUID(), cateogry_id: '', name: '', description: '', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
// { id: randomUUID(), cateogry_id: '', name: '', description: '', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
// { id: randomUUID(), cateogry_id: '', name: '', description: '', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
// { id: randomUUID(), cateogry_id: '', name: '', description: '', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
// { id: randomUUID(), cateogry_id: '', name: '', description: '', cost_price: 0, sales_price: 0, embed: '', image_url: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
const categories = [
  { id: '72046814-612f-4baf-8021-a431049f0c8f', name: 'Tortas', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
  { id: 'a5221f27-ead1-42da-97ce-8a465889b0ff', name: 'Baixo ruído', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
  { id: 'd85a0ea9-be70-4698-9eb9-3e242be78b08', name: 'Girândolas', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
  { id: '0c76c001-7560-4b8e-80df-1fa84ffe1db4', name: 'Fumaças', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
  { id: '3c29a2b1-a367-4dfa-9966-f3f65bc53c3c', name: 'Chá revelação', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
  { id: 'cb730513-2bce-4c9a-8b15-098c4485adc6', name: 'Infanto juvenil', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
  { id: '02846b27-5d47-414e-840e-b819e06ee4d3', name: 'Lança papéis', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
  { id: 'ee703884-c7f5-4b10-b735-5a8e1fda21b6', name: 'Velas', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
  { id: 'c8425d44-4d3a-4755-84ad-56bd0e3e70a3', name: 'Rojões de vara', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
  { id: '34fbd51a-4571-4d2d-8ecb-adb799ad5c06', name: 'Monotiros', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), deleted: null },
]
module.exports = {
  users,
  customers,
  invoices,
  revenue,
  products,
  categories
};
