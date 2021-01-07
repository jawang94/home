import React from 'react';
import { Field } from 'redux-form';
import categories from '../../../categories';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

const postTypes = [
  {
    label: 'link',
    value: 'link',
  },
  {
    label: 'text',
    value: 'text',
  },
];

class CreatePostForm extends React.Component<any, any, any> {
  componentDidUpdate(_prevProps: any, _prevState: any, _snapshot: any) {
    const { token, post, history } = this.props;
    if (!token) history.push('/ama/');
    if (post) history.push(`/ama/a/${post.category}/${post.id}`);
  }

  onSubmit = (post: any) => this.props.attemptCreatePost(post);

  mapCategories = () =>
    categories.map(
      (category: any, index: string | number | null | undefined) => (
        // eslint-disable-next-line react/no-array-index-key
        <option key={index} value={category}>
          {category}
        </option>
      )
    );

  render() {
    return (
      <Form
        loading={this.props.isFetching}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        wide
      >
        <Field
          name="type"
          label="type"
          type="radiogroup"
          component={renderField}
          options={postTypes}
        />
        <Field
          name="category"
          label="category"
          type="select"
          component={renderField}
        >
          {this.mapCategories()}
        </Field>
        <Field name="title" label="title" type="text" component={renderField} />
        {this.props.form.values.type === 'link' && (
          <Field name="url" label="url" type="url" component={renderField} />
        )}
        {this.props.form.values.type === 'text' && (
          <Field
            name="text"
            label="text"
            type="textarea"
            component={renderField}
          />
        )}
        <SubmitButton type="submit">create post</SubmitButton>
      </Form>
    );
  }
}

export default CreatePostForm;
