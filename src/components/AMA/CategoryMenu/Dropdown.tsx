import React from 'react';
import styled from 'styled-components/macro';
import categories from '../../../categories';
import SelectWrapper from '../shared/form/SelectWrapper';

const Dropdown = styled.select`
  border: none;
  border-radius: 0;
  width: 100%;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.foreground};
  font-size: 15px;
  color: ${(props) => props.theme.normalText};
  appearance: none;
`;

class CategoryMenuDropdown extends React.Component<any, any, any> {
  mapCategories = () =>
    ['all', ...categories].map((category, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <option key={index} value={category}>
        {category}
      </option>
    ));

  handleOnChange = (event: any) => {
    const newCategory = event.target.value;
    const { category, history } = this.props;
    if (newCategory !== category) {
      const url = category === 'all' ? '/ama/' : `/ama/a/${category}`;
      history.push(url);
    }
  };

  render() {
    const { category } = this.props;
    return (
      <SelectWrapper flex>
        <Dropdown value={category} onChange={this.handleOnChange}>
          {this.mapCategories()}
        </Dropdown>
      </SelectWrapper>
    );
  }
}

export default CategoryMenuDropdown;
