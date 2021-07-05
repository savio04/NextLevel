import { ValidationError } from 'yup'

interface Errors {
  [key:string]: string
}

export default function getValidationErrors(err:ValidationError){

  const validationsErrors: Errors = {}

  err.inner.forEach(err => {
    validationsErrors[err.path as string] = err.message
  })
  
  return validationsErrors
}
