import { NsGraph, uuidv4 } from '@antv/xflow'

// NodeConfig
const NODE_COMMON_PROPS = {
  width: 160,
  height: 32,
} as const
// NodeConfig
const EDGE_COMMON_PROPS = {
  attrs: {
    line: {
      targetMarker: {
        name: 'block',
        width: 4,
        height: 8,
      },
      strokeDasharray: '',
      stroke: '#A2B1C3',
      strokeWidth: 1,
    },
  },
} as const

// mock data
export const getGraphData = () => {
  const nodes: NsGraph.INodeConfig[] = [
    {
      id: 'node1',
      label: '算法节点-1',
      ...NODE_COMMON_PROPS,
      menuItems: ['动态渲染的MenuItem '],
    },
    {
      id: 'node2',
      label: '算法节点-2',
      ...NODE_COMMON_PROPS,
      menuItems: ['动态渲染的MenuItem ', '动态渲染的MenuItem '],
    },
    {
      id: 'node3',
      label: '算法节点-3',
      ...NODE_COMMON_PROPS,
      menuItems: ['动态渲染的MenuItem ', '动态渲染的MenuItem ', '动态渲染的MenuItem '],
    },
    {
      id: 'node4',
      label: '算法节点-4',
      ...NODE_COMMON_PROPS,
      menuItems: [],
    },
  ]
  const edges: NsGraph.IEdgeConfig[] = [
    {
      id: uuidv4(),
      source: 'node1',
      target: 'node2',
      sourcePortId: 'node1-output-1',
      targetPortId: 'node2-input-1',
      ...EDGE_COMMON_PROPS,
    },
    {
      id: uuidv4(),
      source: 'node1',
      target: 'node3',
      sourcePortId: 'node1-output-1',
      targetPortId: 'node3-input-1',
      ...EDGE_COMMON_PROPS,
    },
    {
      id: uuidv4(),
      source: 'node1',
      target: 'node4',
      sourcePortId: 'node1-output-1',
      targetPortId: 'node4-input-1',
      ...EDGE_COMMON_PROPS,
    },
  ]
  return {
    nodes: nodes,
    edges: edges,
  } as NsGraph.IGraphData
}
