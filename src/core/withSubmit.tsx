import React from 'react'
// import { useTheme } from 'react-jss'
import { FormConsumer, getValues, formIsInvalid } from '../.'
import {
  fieldsData,
  fieldData,
  // textLabels,
  // errorNotificationFunc,
  setValue,
  submit,
  // theme as themeI,
} from '../typings'


type ExtraSubmitProps = {
  submit: submit,
}

function withSubmit<T>(
  Component: React.ComponentType<T & ExtraSubmitProps>,
) {
  // const theme: themeI = useTheme()
  // eslint-disable-next-line react/display-name
  return (props: T) =>
  <FormConsumer>
    {({ fieldsData, setValue }: { fieldsData: fieldsData, setValue: setValue }) =>
      <Component
        {...props}
        submit={(e, callback, reset) => {
          e.preventDefault()
          if (formIsInvalid(fieldsData)) {
            // Trigger valdiation check of all fields to prevent submitting before debounce etc.
            Object.entries(fieldsData).forEach(([key, data]) => {
              const { value, required, type } = data as fieldData
              setValue(key, value, required, { type })
            })
            // TODO: Turn back the suppressErrorMessage prop support on TS.
            // if (!props.suppressErrorMessage && theme?.errorNotificationFunc && theme.textLabels?.formInvalid) {
            //   theme.errorNotificationFunc(theme.textLabels.formInvalid)
            // }
          } else {
            callback && callback(getValues(fieldsData))
            reset && setValue()
          }
        }}
      />
    }
  </FormConsumer>
}

export default withSubmit