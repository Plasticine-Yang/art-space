import type { RouteRecordRaw } from 'vue-router';

export const collectionDetailRoutes = <RouteRecordRaw[]>[
  // 藏品详情路由
  {
    path: '/collection-detail/:id',
    name: 'CollectionDetail',
    component: () => import('@/views/collection-detail/index.vue'),
  },
];
