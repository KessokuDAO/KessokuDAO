import { createWebHashHistory } from 'vue-router'

export const history = process.client ? createWebHashHistory() : null