import { createContext, useState } from 'react'
import { Select } from 'antd'
const { Option } = Select

export interface selectOptionType {
  [keyName: string]: string | number
  value: string | number
}

interface SelectProps {
  optsData?: Array<selectOptionType>
  defaultValue?: any
}
function SelectDemo(props: SelectProps) {
  const { optsData, defaultValue } = props

  const renderOpts = () => {
    if (!optsData || !optsData.length) {
      return null
    }
    return optsData.map((i: any) => (
      <Option key={i.value} value={i.value}>
        {i.label}
      </Option>
    ))
  }
  return (
    <div>
      <Select defaultValue={defaultValue} style={{ width: '100%' }}>
        {renderOpts()}
      </Select>
    </div>
  )
}

export default SelectDemo
