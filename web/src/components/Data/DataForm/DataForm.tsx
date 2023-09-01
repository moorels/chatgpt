import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditDataById, UpdateDataInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormData = NonNullable<EditDataById['data']>

interface DataFormProps {
  data?: EditDataById['data']
  onSave: (data: UpdateDataInput, id?: FormData['id']) => void
  error: RWGqlError
  loading: boolean
}

const DataForm = (props: DataFormProps) => {
  const onSubmit = (data: FormData) => {
    props.onSave(data, props?.data?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormData> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="data"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Data
        </Label>

        <TextField
          name="data"
          defaultValue={props.data?.data}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="data" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DataForm
