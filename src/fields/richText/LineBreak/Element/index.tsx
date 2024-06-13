import React from 'react'




const BreackLineElement: React.FC<{
  attributes: any
  element: any
  children: React.ReactNode
}> = ({ attributes, children }) => (
  <div {...attributes}>
    {children}
  </div>
)
export default BreackLineElement
