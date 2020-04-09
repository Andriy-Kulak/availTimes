import React from 'react'

const TableHeader = ({ data = [] }) => (
  <thead>
    <tr>
      {data.map((name) => (
        <th key={name}>{name}</th>
      ))}
    </tr>
  </thead>
)
export default TableHeader
