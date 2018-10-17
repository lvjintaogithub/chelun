import Vue from 'vue';
import VueRouter from 'vue-router';

const Index = () =>import('@/views/Index.vue');
const CarType = () =>import('@/views/CarType.vue');
const ColorType = () =>import('@/views/ColorType.vue');
const Detail = () =>import('@/views/Detail.vue');
const Img = () =>import('@/views/Img.vue');
const Quotation = () =>import('@/views/Quotation.vue');

Vue.use(VueRouter);

export default new VueRouter({
  routes:[{
    path: '/index',
    name: 'Index',
    component: Index
  }, {
    path: '/carType',
    name: 'CarType',
    component: CarType
  }, {
    path: '/colorType',
    name: 'ColorType',
    component: ColorType
  }, {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }, {
    path: '/img',
    name: 'Img',
    component: Img
  }, {
    path: '/quotation',
    name: 'Quotation',
    component: Quotation
  }, {
    path: '*',
    redirect: '/index'
  }]
});