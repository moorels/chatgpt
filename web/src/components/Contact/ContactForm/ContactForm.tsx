import type { EditContactById, UpdateContactInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormContact = NonNullable<EditContactById['contact']>

interface ContactFormProps {
  contact?: EditContactById['contact']
  onSave: (data: UpdateContactInput, id?: FormContact['id']) => void
  error: RWGqlError
  loading: boolean
}

const ContactForm = (props: ContactFormProps) => {
  const onSubmit = (data: FormContact) => {
    props.onSave(data, props?.contact?.id)
  }

  return (
    <div className="rw-form-wrapper ">
      <Form<FormContact> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper "
          titleClassName="rw-form-error-title "
          listClassName="rw-form-error-list "
        />

        <Label
          name="name "
          className="rw-label text-white"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.contact?.name}
          className="rw-input text-black"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="company"
          className="rw-label text-white"
          errorClassName="rw-label rw-label-error"
        >
          Company
        </Label>

        <TextField
          name="company"
          defaultValue={props.contact?.company}
          className="rw-input text-black"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />

        <FieldError name="company" className="rw-field-error " />

        <Label
          name="email"
          className="rw-label text-white"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.contact?.email}
          className="rw-input text-black"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="phone"
          className="rw-label text-white"
          errorClassName="rw-label rw-label-error"
        >
          Phone
        </Label>

        <TextField
          name="phone"
          defaultValue={props.contact?.phone}
          className="rw-input text-black"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />

        <FieldError name="phone" className="rw-field-error" />

        <Label
          name="product"
          className="rw-label text-white"
          errorClassName="rw-label rw-label-error"
        >
          Product
        </Label>

        <TextField
          name="product"
          defaultValue={props.contact?.product}
          className="rw-input text-black"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />

        <FieldError name="product" className="rw-field-error" />

        <Label
          name="message"
          className="rw-label text-white"
          errorClassName="rw-label rw-label-error"
        >
          Message
        </Label>

        <TextField
          name="message"
          defaultValue={props.contact?.message}
          className="rw-input text-black"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />

        <FieldError name="message" className="rw-field-error" />

        <div className="rw-button-group ">
          <Submit
            disabled={props.loading}
            className="rw-button  bg-slate-500 text-white"
          >
            Send
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ContactForm
