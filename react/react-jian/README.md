## 组件重新渲染的情况
- state props
- 地址：react-router
- context

## 优化：减少重新渲染
1.shouLdcomponentupdate写逻辑决定组件到底要不要渲染

- 如果state,props对比过后没有任何变化，那么是不需要重新渲染的