/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAAFPMainSetup = /* GraphQL */ `
  mutation CreateAAFPMainSetup(
    $input: CreateAAFPMainSetupInput!
    $condition: ModelAAFPMainSetupConditionInput
  ) {
    createAAFPMainSetup(input: $input, condition: $condition) {
      dialed_number
      group_full_name
      group_name
      main_greeting
      after_hr_msg
      enable_emergency_flg
      no_agents_logged_in_flg
      agents_unstaffed_flg
      enable_callback_flg
      enable_spcl_condtn_flg
      spcl_condtn_msg
      route_call_to_queue
      queue_msg
      extn_num
      play_menu_optns_flg
      menu_optn_msg
      queue_name
      voice_mail_flg
      last_update_by
      last_update_date
      createdAt
      updatedAt
    }
  }
`;
export const updateAAFPMainSetup = /* GraphQL */ `
  mutation UpdateAAFPMainSetup(
    $input: UpdateAAFPMainSetupInput!
    $condition: ModelAAFPMainSetupConditionInput
  ) {
    updateAAFPMainSetup(input: $input, condition: $condition) {
      dialed_number
      group_full_name
      group_name
      main_greeting
      after_hr_msg
      enable_emergency_flg
      no_agents_logged_in_flg
      agents_unstaffed_flg
      enable_callback_flg
      enable_spcl_condtn_flg
      spcl_condtn_msg
      route_call_to_queue
      queue_msg
      extn_num
      play_menu_optns_flg
      menu_optn_msg
      queue_name
      voice_mail_flg
      last_update_by
      last_update_date
      createdAt
      updatedAt
    }
  }
`;
export const deleteAAFPMainSetup = /* GraphQL */ `
  mutation DeleteAAFPMainSetup(
    $input: DeleteAAFPMainSetupInput!
    $condition: ModelAAFPMainSetupConditionInput
  ) {
    deleteAAFPMainSetup(input: $input, condition: $condition) {
      dialed_number
      group_full_name
      group_name
      main_greeting
      after_hr_msg
      enable_emergency_flg
      no_agents_logged_in_flg
      agents_unstaffed_flg
      enable_callback_flg
      enable_spcl_condtn_flg
      spcl_condtn_msg
      route_call_to_queue
      queue_msg
      extn_num
      play_menu_optns_flg
      menu_optn_msg
      queue_name
      voice_mail_flg
      last_update_by
      last_update_date
      createdAt
      updatedAt
    }
  }
`;
export const createAAFPEmergencyMsgSetup = /* GraphQL */ `
  mutation CreateAAFPEmergencyMsgSetup(
    $input: CreateAAFPEmergencyMsgSetupInput!
    $condition: ModelAAFPEmergencyMsgSetupConditionInput
  ) {
    createAAFPEmergencyMsgSetup(input: $input, condition: $condition) {
      id
      group_name
      emergency_msg
      active_flg
      last_update_by
      last_update_date
      createdAt
      updatedAt
    }
  }
`;
export const updateAAFPEmergencyMsgSetup = /* GraphQL */ `
  mutation UpdateAAFPEmergencyMsgSetup(
    $input: UpdateAAFPEmergencyMsgSetupInput!
    $condition: ModelAAFPEmergencyMsgSetupConditionInput
  ) {
    updateAAFPEmergencyMsgSetup(input: $input, condition: $condition) {
      id
      group_name
      emergency_msg
      active_flg
      last_update_by
      last_update_date
      createdAt
      updatedAt
    }
  }
`;
export const deleteAAFPEmergencyMsgSetup = /* GraphQL */ `
  mutation DeleteAAFPEmergencyMsgSetup(
    $input: DeleteAAFPEmergencyMsgSetupInput!
    $condition: ModelAAFPEmergencyMsgSetupConditionInput
  ) {
    deleteAAFPEmergencyMsgSetup(input: $input, condition: $condition) {
      id
      group_name
      emergency_msg
      active_flg
      last_update_by
      last_update_date
      createdAt
      updatedAt
    }
  }
`;
export const createAAFPHolidayMsgSetup = /* GraphQL */ `
  mutation CreateAAFPHolidayMsgSetup(
    $input: CreateAAFPHolidayMsgSetupInput!
    $condition: ModelAAFPHolidayMsgSetupConditionInput
  ) {
    createAAFPHolidayMsgSetup(input: $input, condition: $condition) {
      id
      holiday_start_dt
      holiday_end_dt
      holiday_type
      group_name
      holiday_msg
      active_flg
      last_update_by
      last_update_date
      createdAt
      updatedAt
    }
  }
`;
export const updateAAFPHolidayMsgSetup = /* GraphQL */ `
  mutation UpdateAAFPHolidayMsgSetup(
    $input: UpdateAAFPHolidayMsgSetupInput!
    $condition: ModelAAFPHolidayMsgSetupConditionInput
  ) {
    updateAAFPHolidayMsgSetup(input: $input, condition: $condition) {
      id
      holiday_start_dt
      holiday_end_dt
      holiday_type
      group_name
      holiday_msg
      active_flg
      last_update_by
      last_update_date
      createdAt
      updatedAt
    }
  }
`;
export const deleteAAFPHolidayMsgSetup = /* GraphQL */ `
  mutation DeleteAAFPHolidayMsgSetup(
    $input: DeleteAAFPHolidayMsgSetupInput!
    $condition: ModelAAFPHolidayMsgSetupConditionInput
  ) {
    deleteAAFPHolidayMsgSetup(input: $input, condition: $condition) {
      id
      holiday_start_dt
      holiday_end_dt
      holiday_type
      group_name
      holiday_msg
      active_flg
      last_update_by
      last_update_date
      createdAt
      updatedAt
    }
  }
`;