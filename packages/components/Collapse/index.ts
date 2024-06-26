import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'

import { withInstall } from '@yovy-ui/utils';

export const YoCollapse = withInstall(Collapse)
export const YoCollapseItem = withInstall(CollapseItem)

export * from './types'