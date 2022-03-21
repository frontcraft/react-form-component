import React from 'react'

export type value = any

export type setValue = (
  name?: string,
  value?: value,
  mandatory?: boolean | undefined,
  options?: anyObject,
) => void

export type checkboxValue = boolean | string

export type option = string | { label: React.ReactNode, value: string }

export type options = option[]

export type validation = 'error' | 'success' | null

export type anyObject = { [key: string]: any }

export type fieldData = {
  value: value,
  mandatory: boolean,
  help: string,
  validation: validation,
  type?: string,
}

export type fieldsData = {} | {
  [key: string]: fieldData,
}

export type textLabels = {
  formInvalid: string,
  mandatoryField:string,
  minChars: string,
  passwordInvalid: string,
  emailInvalid: string,
  urlInvalid: string,
  phoneInvalid: string,
  postCodeInvalid: string,
  addMore: string,
}

export type errorNotificationFunc = (message: string) => void

export type customValidationFunction = (value: value, type: string) => boolean

export interface fullTheme {
  sizes: {
    inputHeight: number,
    inputWidth: number | string,
    inputGutterBottom: number,
    inputSidePaddings: number,
    labelGutterBottom: number,
    narrowInputWidth: number,
    inlineLabelWidth: number,
    borderRadius: number,
    borderWidth: number,
    rowGutter: number,
    formActionsDistance: number,
    onlyBottomBorder: boolean,
    largeInputExtraHeight: number,
    prefixExtraSpacing: number,
  },
  colors: {
    accent: string,
    inputText: string,
    inputBorder: string,
    inputBg: string,
    inputFocusShadow: string,
    label: string,
    fill: string,
    placeholder: string,
    success: string,
    error: string,
  },
  typography: {
    inputFontSize: number,
    inputFontWeight: string,
    labelFontSize: number,
    labelFontWeight: string,
    helpFontSize: number,
  },
  breakpoints: {
    xs: number | string,
    sm: string,
    md: string,
    lg: string,
  },
  textLabels: textLabels,
  toastContainerProps: object,
  errorNotificationFunc: errorNotificationFunc,
  customValidationFunction: customValidationFunction,
}

export interface themeOverrides {
  sizes?: {
    inputHeight?: number,
    inputWidth?: number | string,
    inputGutterBottom?: number,
    inputSidePaddings?: number,
    labelGutterBottom?: number,
    narrowInputWidth?: number,
    inlineLabelWidth?: number,
    borderRadius?: number,
    borderWidth?: number,
    rowGutter?: number,
    formActionsDistance?: number,
    onlyBottomBorder?: boolean,
    largeInputExtraHeight?: number,
    prefixExtraSpacing?: number,
  },
  colors?: {
    accent?: string,
    inputText?: string,
    inputBorder?: string,
    inputBg?: string,
    inputFocusShadow?: string,
    label?: string,
    fill?: string,
    placeholder?: string,
    success?: string,
    error?: string,
  },
  typography?: {
    inputFontSize?: number,
    inputFontWeight?: string,
    labelFontSize?: number,
    labelFontWeight?: string,
    helpFontSize?: number,
  },
  breakpoints?: {
    xs?: number | string,
    sm?: string,
    md?: string,
    lg?: string,
  },
  textLabels?: {
    formInvalid?: string,
    mandatoryField?:string,
    minChars?: string,
    passwordInvalid?: string,
    emailInvalid?: string,
    urlInvalid?: string,
    phoneInvalid?: string,
    postCodeInvalid?: string,
    addMore?: string,
  },
  toastContainerProps?: object,
  errorNotificationFunc?: errorNotificationFunc,
  customValidationFunction?: customValidationFunction,
}

export interface ControlLogicProps {
  addon?: React.ReactNode,
  children?: React.ReactNode,
  className?: string,
  disabled?: boolean,
  help?: React.ReactNode,
  initialValue?: any,
  inline?: boolean,
  inlineLabel?: boolean,
  label?: React.ReactNode,
  large?: boolean,
  name: string,
  narrow?: boolean,
  noBottomGutter?: boolean,
  mandatory?: boolean,
  type?: string,
  validation?: validation,
  [key: string]: any,
}

export interface FormControlProps {
  name: string,
  inlineLabel?: boolean,
  inline?: boolean,
  narrow?: boolean,
  large?: boolean,
  noBottomGutter?: boolean,
  validation: validation,
  disabled?: boolean,
  displayName: string,
  label?: React.ReactNode,
  help?: React.ReactNode,
  prefix?: React.ReactNode,
  suffix?: React.ReactNode,
  className?: string,
  children: React.ReactNode,
}

export type InputProps = {
  name: string,
  value: value,
  mandatory?: boolean,
  type?: string,
  validation?: validation,
  setValue: setValue,
  [key: string]: any,
}

export interface ControlLogicHook {
  formControlProps: FormControlProps,
  inputProps: InputProps,
}
