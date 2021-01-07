import React from 'react';
import styled from 'styled-components';
import RadioGroupOption from './Option';

const RadioGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  input[type='radio'] {
    display: none;
  }
`;

function handleClick(
  e: { preventDefault: () => void },
  value: any,
  fn: (arg0: any) => void
) {
  e.preventDefault();
  fn(value);
}

const renderOptions = (field: {
  options: any[];
  input: { value: any; onChange: any };
}) => {
  return field.options.map((option: { value: any }, key: any) => (
    <RadioGroupOption
      {...option}
      active={field.input.value === option.value}
      onClick={(e: any) => handleClick(e, option.value, field.input.onChange)}
      // eslint-disable-next-line react/no-array-index-key
      key={key}
    />
  ));
};

const RadioGroup = ({ field }: any) => (
  <RadioGroupWrapper>{renderOptions(field)}</RadioGroupWrapper>
);

export default RadioGroup;
