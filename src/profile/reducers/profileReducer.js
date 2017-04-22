/* @flow */
'use strict'

import type { Action } from '../../actions'
import type { Profile } from '../types'

function getDefaultState (): Profile {
  return {
    username: '',
    firstName: '',
    lastName: '',
    gender: '',
    birth: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: ''
  }
}

export default function profileEditReducer (
  state: Profile = getDefaultState(),
  action: Action
): Profile {
  switch (action.type) {
    case 'profile-load-success':
      return {
        ...action.profile
      }

    case 'profile-update-success':
      return {
        ...action.profile
      }

    default:
      return state
  }
}