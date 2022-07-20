import {observer} from 'mobx-react';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';

const DropdownComponent = (
  data: Object[],
  dropdownStyle,
  selectedTextStyle,
  placeholderStyle,
  placeholder,
  onChange,
) => {
  return (
    <Dropdown
      data={data}
      style={dropdownStyle}
      selectedTextStyle={selectedTextStyle}
      placeholderStyle={placeholderStyle}
      placeholder={placeholder}
      labelField="label"
      valueField="value"
      //   onChange={item => {
      //     // UserStore.setEmailBack(item.value);
      //   }}
      onChange={onChange}
    />
  );
};

export default observer(DropdownComponent);
